import logging
import app
import datetime
import time
import click
from flask import current_app
from werkzeug.exceptions import NotFound
from core.index.index import IndexBuilder
from extensions.ext_database import db
from models.dataset import Dataset, DatasetQuery, Document, DatasetCollectionBinding


@app.celery.task(queue='dataset')
def clean_unused_datasets_task():
    click.echo(click.style('Start clean unused datasets indexes.', fg='green'))
    clean_days = int(current_app.config.get('CLEAN_DAY_SETTING'))
    start_at = time.perf_counter()
    thirty_days_ago = datetime.datetime.now() - datetime.timedelta(days=clean_days)
    page = 1
    while True:
        try:
            datasets = db.session.query(Dataset).filter(Dataset.created_at < thirty_days_ago) \
                .order_by(Dataset.created_at.desc()).paginate(page=page, per_page=50)
        except NotFound:
            break
        page += 1
        for dataset in datasets:
            dataset_query = db.session.query(DatasetQuery).filter(
                DatasetQuery.created_at > thirty_days_ago,
                DatasetQuery.dataset_id == dataset.id
            ).all()
            if not dataset_query or len(dataset_query) == 0:
                documents = db.session.query(Document).filter(
                    Document.dataset_id == dataset.id,
                    Document.indexing_status == 'completed',
                    Document.enabled == True,
                    Document.archived == False,
                    Document.updated_at > thirty_days_ago
                ).all()
                if not documents or len(documents) == 0:
                    try:
                        # remove index
                        vector_index = IndexBuilder.get_index(dataset, 'high_quality')
                        kw_index = IndexBuilder.get_index(dataset, 'economy')
                        # delete from vector index
                        if vector_index:
                            if dataset.collection_binding_id:
                                vector_index.delete_by_group_id(dataset.id)
                            else:
                                if dataset.collection_binding_id:
                                    vector_index.delete_by_group_id(dataset.id)
                                else:
                                    vector_index.delete()
                        kw_index.delete()
                        # update document
                        update_params = {
                            Document.enabled: False
                        }

                        Document.query.filter_by(dataset_id=dataset.id).update(update_params)
                        db.session.commit()
                        click.echo(click.style('Cleaned unused dataset {} from db success!'.format(dataset.id),
                                               fg='green'))
                    except Exception as e:
                        click.echo(
                            click.style('clean dataset index error: {} {}'.format(e.__class__.__name__, str(e)),
                                        fg='red'))
    end_at = time.perf_counter()
    click.echo(click.style('Cleaned unused dataset from db success latency: {}'.format(end_at - start_at), fg='green'))
