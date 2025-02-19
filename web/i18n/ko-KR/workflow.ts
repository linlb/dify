const translation = {
  common: {
    undo: '실행 취소',
    redo: '다시 실행',
    editing: '편집 중',
    autoSaved: '자동 저장됨',
    unpublished: '미발행',
    published: '발행됨',
    publish: '발행',
    update: '업데이트',
    run: '실행',
    running: '실행 중',
    inRunMode: '실행 모드',
    inPreview: '미리보기 중',
    inPreviewMode: '미리보기 모드',
    preview: '미리보기',
    viewRunHistory: '실행 기록 보기',
    runHistory: '실행 기록',
    goBackToEdit: '편집기로 돌아가기',
    conversationLog: '대화 로그',
    features: '기능',
    debugAndPreview: '미리보기',
    restart: '재시작',
    currentDraft: '현재 초안',
    currentDraftUnpublished: '현재 초안 미발행',
    latestPublished: '최신 발행본',
    publishedAt: '발행일',
    restore: '복원',
    runApp: '앱 실행',
    batchRunApp: '앱 일괄 실행',
    accessAPIReference: 'API 참조 접근',
    embedIntoSite: '사이트에 삽입',
    addTitle: '제목 추가...',
    addDescription: '설명 추가...',
    noVar: '변수 없음',
    searchVar: '변수 검색',
    variableNamePlaceholder: '변수 이름',
    setVarValuePlaceholder: '변수 값 설정',
    needConnectTip: '이 단계는 아무것도 연결되어 있지 않습니다',
    maxTreeDepth: '분기당 최대 {{depth}} 노드 제한',
    needEndNode: '종료 블록을 추가해야 합니다',
    needAnswerNode: '답변 블록을 추가해야 합니다',
    workflowProcess: '워크플로우 과정',
    notRunning: '아직 실행되지 않음',
    previewPlaceholder: '디버깅을 시작하려면 아래 상자에 내용을 입력하세요',
    effectVarConfirm: {
      title: '변수 제거',
      content: '변수가 다른 노드에서 사용되고 있습니다. 그래도 제거하시겠습니까?',
    },
    insertVarTip: '빠르게 삽입하려면 \'/\' 키를 누르세요',
    processData: '데이터 처리',
    input: '입력',
    output: '출력',
    jinjaEditorPlaceholder: '변수를 삽입하려면 \'/\' 또는 \'{\'를 입력하세요',
    viewOnly: '보기 전용',
    showRunHistory: '실행 기록 보기',
    enableJinja: 'Jinja 템플릿 지원 활성화',
    learnMore: '더 알아보기',
    copy: '복사',
    duplicate: '복제',
    addBlock: '블록 추가',
    pasteHere: '여기에 붙여넣기',
    pointerMode: '포인터 모드',
    handMode: '핸드 모드',
    model: '모델',
    workflowAsTool: '도구로서의 워크플로우',
    configureRequired: '구성 필요',
    configure: '구성',
    manageInTools: '도구에서 관리',
    workflowAsToolTip: '워크플로우 업데이트 후 도구 재구성이 필요합니다.',
    viewDetailInTracingPanel: '세부 정보 보기',
    importDSL: 'DSL 가져오기',
    importFailure: '가져오기 실패',
    chooseDSL: 'DSL(yml) 파일 선택',
    backupCurrentDraft: '현재 초안 백업',
    overwriteAndImport: '덮어쓰기 및 가져오기',
    importSuccess: '가져오기 성공',
    syncingData: '단 몇 초 만에 데이터를 동기화할 수 있습니다.',
    importDSLTip: '현재 초안을 덮어씁니다. 가져오기 전에 워크플로를 백업으로 내보냅니다.',
    parallelTip: {
      click: {
        title: '클릭',
        desc: '추가',
      },
      drag: {
        title: '드래그',
        desc: '연결 방법',
      },
      depthLimit: '평행 중첩 레이어 {{num}}개 레이어의 제한',
      limit: '병렬 처리는 {{num}}개의 분기로 제한됩니다.',
    },
    parallelRun: '병렬 실행',
    disconnect: '분리하다',
    jumpToNode: '이 노드로 이동',
    addParallelNode: '병렬 노드 추가',
    parallel: '병렬',
    branch: '브랜치',
    featuresDocLink: '더 알아보세요',
    fileUploadTip: '이미지 업로드 기능이 파일 업로드로 업그레이드되었습니다.',
    featuresDescription: '웹앱 사용자 경험 향상',
    ImageUploadLegacyTip: '이제 시작 양식에서 파일 형식 변수를 만들 수 있습니다. 앞으로 이미지 업로드 기능은 더 이상 지원되지 않습니다.',
    importWarning: '주의',
    importWarningDetails: 'DSL 버전 차이는 특정 기능에 영향을 미칠 수 있습니다.',
    openInExplore: 'Explore에서 열기',
    onFailure: '실패 시',
    addFailureBranch: '실패 분기 추가',
    noHistory: '이력 없음',
    loadMore: '더 많은 워크플로우 로드',
  },
  env: {
    envPanelTitle: '환경 변수',
    envDescription: '환경 변수는 개인 정보와 자격 증명을 저장하는 데 사용될 수 있습니다. 이들은 읽기 전용이며 내보내기 중에 DSL 파일과 분리할 수 있습니다.',
    envPanelButton: '변수 추가',
    modal: {
      title: '환경 변수 추가',
      editTitle: '환경 변수 편집',
      type: '유형',
      name: '이름',
      namePlaceholder: '환경 이름',
      value: '값',
      valuePlaceholder: '환경 값',
      secretTip: '민감한 정보나 데이터를 정의하는 데 사용되며, DSL 설정은 유출 방지를 위해 구성됩니다.',
    },
    export: {
      title: '비밀 환경 변수를 내보내시겠습니까?',
      checkbox: '비밀 값 내보내기',
      ignore: 'DSL 내보내기',
      export: '비밀 값이 포함된 DSL 내보내기',
    },
  },
  chatVariable: {
    panelTitle: '대화 변수',
    panelDescription: '대화 변수는 LLM이 기억해야 할 대화 기록, 업로드된 파일, 사용자 선호도 등의 상호작용 정보를 저장하는 데 사용됩니다. 이들은 읽기 및 쓰기가 가능합니다.',
    docLink: '자세한 내용은 문서를 참조하세요.',
    button: '변수 추가',
    modal: {
      title: '대화 변수 추가',
      editTitle: '대화 변수 편집',
      name: '이름',
      namePlaceholder: '변수 이름',
      type: '유형',
      value: '기본값',
      valuePlaceholder: '기본값, 설정하지 않으려면 비워두세요',
      description: '설명',
      descriptionPlaceholder: '변수에 대해 설명하세요',
      editInJSON: 'JSON으로 편집',
      oneByOne: '하나씩 추가',
      editInForm: '양식에서 편집',
      arrayValue: '값',
      addArrayValue: '값 추가',
      objectKey: '키',
      objectType: '유형',
      objectValue: '기본값',
    },
    storedContent: '저장된 내용',
    updatedAt: '업데이트 시간: ',
  },
  changeHistory: {
    title: '변경 기록',
    placeholder: '아직 아무 것도 변경하지 않았습니다',
    clearHistory: '기록 지우기',
    hint: '힌트',
    hintText: '편집 작업이 변경 기록에 추적되며, 이 세션 동안 기기에 저장됩니다. 편집기를 떠나면 이 기록이 지워집니다.',
    stepBackward_one: '{{count}} 단계 뒤로',
    stepBackward_other: '{{count}} 단계 뒤로',
    stepForward_one: '{{count}} 단계 앞으로',
    stepForward_other: '{{count}} 단계 앞으로',
    sessionStart: '세션 시작',
    currentState: '현재 상태',
    nodeTitleChange: '블록 제목 변경됨',
    nodeDescriptionChange: '블록 설명 변경됨',
    nodeDragStop: '블록 이동됨',
    nodeChange: '블록 변경됨',
    nodeConnect: '블록 연결됨',
    nodePaste: '블록 붙여넣기됨',
    nodeDelete: '블록 삭제됨',
    nodeAdd: '블록 추가됨',
    nodeResize: '블록 크기 조정됨',
    noteAdd: '노트 추가됨',
    noteChange: '노트 변경됨',
    noteDelete: '노트 삭제됨',
    edgeDelete: '블록 연결 해제됨',
  },
  errorMsg: {
    fieldRequired: '{{field}}가 필요합니다',
    authRequired: '인증이 필요합니다',
    invalidJson: '{{field}}는 잘못된 JSON입니다',
    fields: {
      variable: '변수 이름',
      variableValue: '변수 값',
      code: '코드',
      model: '모델',
      rerankModel: '재정렬 모델',
      visionVariable: '시력 변수',
    },
    invalidVariable: '잘못된 변수',
    rerankModelRequired: 'Rerank Model을 켜기 전에 설정에서 모델이 성공적으로 구성되었는지 확인하십시오.',
    noValidTool: '{{field}} 유효한 도구가 선택되지 않았습니다.',
    toolParameterRequired: '{{field}}: 매개변수 [{{param}}]이 필요합니다.',
  },
  singleRun: {
    testRun: '테스트 실행',
    startRun: '실행 시작',
    running: '실행 중',
    testRunIteration: '테스트 실행 반복',
    back: '뒤로',
    iteration: '반복',
  },
  tabs: {
    'searchBlock': '블록 검색',
    'blocks': '블록',
    'tools': '도구',
    'allTool': '전체',
    'builtInTool': '내장',
    'customTool': '사용자 정의',
    'workflowTool': '워크플로우',
    'question-understand': '질문 이해',
    'logic': '논리',
    'transform': '변환',
    'utilities': '유틸리티',
    'noResult': '일치하는 결과 없음',
    'searchTool': '검색 도구',
    'plugin': '플러그인',
    'agent': '에이전트 전략',
  },
  blocks: {
    'start': '시작',
    'end': '끝',
    'answer': '답변',
    'llm': 'LLM',
    'knowledge-retrieval': '지식 검색',
    'question-classifier': '질문 분류기',
    'if-else': 'IF/ELSE',
    'code': '코드',
    'template-transform': '템플릿',
    'http-request': 'HTTP 요청',
    'variable-assigner': '변수 할당자',
    'variable-aggregator': '변수 집계자',
    'assigner': '변수 할당자',
    'iteration-start': '반복 시작',
    'iteration': '반복',
    'parameter-extractor': '매개변수 추출기',
    'document-extractor': 'Doc 추출기',
    'list-operator': 'List 연산자',
    'agent': '대리인',
  },
  blocksAbout: {
    'start': '워크플로우를 시작하기 위한 초기 매개변수를 정의합니다',
    'end': '워크플로우의 종료 및 결과 유형을 정의합니다',
    'answer': '대화의 답변 내용을 정의합니다',
    'llm': '질문에 답하거나 자연어를 처리하기 위해 대형 언어 모델을 호출합니다',
    'knowledge-retrieval': '사용자 질문과 관련된 텍스트 콘텐츠를 지식 베이스에서 쿼리할 수 있습니다',
    'question-classifier': '사용자 질문의 분류 조건을 정의합니다. LLM은 분류 설명을 기반으로 대화의 진행 방식을 정의할 수 있습니다',
    'if-else': 'if/else 조건을 기반으로 워크플로우를 두 가지 분기로 나눌 수 있습니다',
    'code': '사용자 정의 논리를 구현하기 위해 Python 또는 NodeJS 코드를 실행합니다',
    'template-transform': 'Jinja 템플릿 구문을 사용하여 데이터를 문자열로 변환합니다',
    'http-request': 'HTTP 프로토콜을 통해 서버 요청을 보낼 수 있습니다',
    'variable-assigner': '다중 분기 변수들을 하나의 변수로 집계하여 다운스트림 노드의 통합 구성을 가능하게 합니다.',
    'assigner': '변수 할당 노드는 쓰기 가능한 변수(대화 변수 등)에 값을 할당하는 데 사용됩니다.',
    'variable-aggregator': '다중 분기 변수들을 하나의 변수로 집계하여 다운스트림 노드의 통합 구성을 가능하게 합니다.',
    'iteration': '목록 객체에서 여러 단계를 수행하여 모든 결과가 출력될 때까지 반복합니다.',
    'parameter-extractor': '도구 호출 또는 HTTP 요청을 위해 자연어에서 구조화된 매개변수를 추출하기 위해 LLM을 사용합니다.',
    'document-extractor': '업로드된 문서를 LLM에서 쉽게 이해할 수 있는 텍스트 콘텐츠로 구문 분석하는 데 사용됩니다.',
    'list-operator': '배열 내용을 필터링하거나 정렬하는 데 사용됩니다.',
    'agent': '질문에 답하거나 자연어를 처리하기 위해 대규모 언어 모델을 호출하는 경우',
  },
  operator: {
    zoomIn: '확대',
    zoomOut: '축소',
    zoomTo50: '50%로 확대',
    zoomTo100: '100%로 확대',
    zoomToFit: '화면에 맞게 확대',
  },
  panel: {
    userInputField: '사용자 입력 필드',
    changeBlock: '블록 변경',
    helpLink: '도움말 링크',
    about: '정보',
    createdBy: '작성자 ',
    nextStep: '다음 단계',
    addNextStep: '이 워크플로우의 다음 블록 추가',
    selectNextStep: '다음 블록 선택',
    runThisStep: '이 단계 실행',
    checklist: '체크리스트',
    checklistTip: '게시하기 전에 모든 문제가 해결되었는지 확인하세요',
    checklistResolved: '모든 문제가 해결되었습니다',
    organizeBlocks: '블록 정리',
    change: '변경',
    optional: '(선택사항)',
  },
  nodes: {
    common: {
      outputVars: '출력 변수',
      insertVarTip: '변수 삽입',
      memory: {
        memory: '메모리',
        memoryTip: '대화 메모리 설정',
        windowSize: '창 크기',
        conversationRoleName: '대화 역할 이름',
        user: '사용자 접두사',
        assistant: '어시스턴트 접두사',
      },
      memories: {
        title: '메모리',
        tip: '대화 메모리',
        builtIn: '내장',
      },
      errorHandle: {
        none: {
          title: '없음',
          desc: '예외가 발생하고 처리되지 않으면 노드 실행이 중지됩니다',
        },
        defaultValue: {
          title: '기본값',
          desc: '오류가 발생하면 정적 출력 콘텐츠를 지정합니다.',
          tip: '오류가 발생하면 아래 값을 반환합니다.',
          inLog: '노드 예외, 기본값에 따라 출력합니다.',
          output: '출력 기본값',
        },
        failBranch: {
          title: '실패 분기',
          desc: '오류가 발생하면 예외 분기를 실행합니다',
          customize: '캔버스로 이동하여 fail branch logic를 사용자 지정합니다.',
          inLog: '노드 예외는 실패 분기를 자동으로 실행합니다. 노드 출력은 오류 유형 및 오류 메시지를 반환하고 다운스트림으로 전달합니다.',
          customizeTip: 'fail 분기가 활성화되면 노드에서 throw된 예외가 프로세스를 종료하지 않습니다. 대신 미리 정의된 실패 분기를 자동으로 실행하여 오류 메시지, 보고서, 수정 사항을 유연하게 제공하거나 작업을 건너뛸 수 있습니다.',
        },
        partialSucceeded: {
          tip: '프로세스에 {{num}} 노드가 비정상적으로 실행 중입니다. 추적으로 이동하여 로그를 확인하십시오.',
        },
        title: '오류 처리',
        tip: '노드에 예외가 발생할 때 트리거되는 예외 처리 전략입니다.',
      },
      retry: {
        retry: '재시도',
        retryOnFailure: '실패 시 재시도',
        maxRetries: '최대 재시도 횟수',
        retryInterval: '재시도 간격',
        retryTimes: '실패 시 {{times}}번 재시도',
        retrying: '재시도...',
        retrySuccessful: '재시도 성공',
        retryFailed: '재시도 실패',
        retryFailedTimes: '{{times}} 재시도 실패',
        times: '배',
        ms: '미에스',
        retries: '{{숫자}} 재시도',
      },
    },
    start: {
      required: '필수',
      inputField: '입력 필드',
      builtInVar: '내장 변수',
      outputVars: {
        query: '사용자 입력',
        memories: {
          des: '대화 기록',
          type: '메시지 유형',
          content: '메시지 내용',
        },
        files: '파일 목록',
      },
      noVarTip: '워크플로우에서 사용할 입력을 설정하세요',
    },
    end: {
      outputs: '출력',
      output: {
        type: '출력 유형',
        variable: '출력 변수',
      },
      type: {
        'none': '없음',
        'plain-text': '일반 텍스트',
        'structured': '구조화된',
      },
    },
    answer: {
      answer: '답변',
      outputVars: '출력 변수',
    },
    llm: {
      model: '모델',
      variables: '변수',
      context: '컨텍스트',
      contextTooltip: '컨텍스트로 지식을 가져올 수 있습니다',
      notSetContextInPromptTip: '컨텍스트 기능을 활성화하려면 PROMPT에 컨텍스트 변수를 입력하세요.',
      prompt: '프롬프트',
      roleDescription: {
        system: '대화를 위한 고급 지침 제공',
        user: '모델에 지침, 질문 또는 텍스트 기반 입력 제공',
        assistant: '사용자 메시지에 기반한 모델의 응답',
      },
      addMessage: '메시지 추가',
      vision: '비전',
      files: '파일',
      resolution: {
        name: '해상도',
        high: '높음',
        low: '낮음',
      },
      outputVars: {
        output: '생성된 내용',
        usage: '모델 사용 정보',
      },
      singleRun: {
        variable: '변수',
      },
      sysQueryInUser: '사용자 메시지에 sys.query가 필요합니다',
    },
    knowledgeRetrieval: {
      queryVariable: '쿼리 변수',
      knowledge: '지식',
      outputVars: {
        output: '복구된 세그먼트 데이터',
        content: '세그먼트 내용',
        title: '세그먼트 제목',
        icon: '세그먼트 아이콘',
        url: '세그먼트 URL',
        metadata: '기타 메타데이터',
      },
    },
    http: {
      inputVars: '입력 변수',
      api: 'API',
      apiPlaceholder: 'URL을 입력하세요, 변수를 삽입하려면 ‘/’를 입력하세요',
      notStartWithHttp: 'API는 http:// 또는 https://로 시작해야 합니다',
      key: '키',
      value: '값',
      bulkEdit: '일괄 편집',
      keyValueEdit: '키-값 편집',
      headers: '헤더',
      params: '매개변수',
      body: '본문',
      outputVars: {
        body: '응답 내용',
        statusCode: '응답 상태 코드',
        headers: '응답 헤더 목록 JSON',
        files: '파일 목록',
      },
      authorization: {
        'authorization': '권한 부여',
        'authorizationType': '권한 부여 유형',
        'no-auth': '없음',
        'api-key': 'API 키',
        'auth-type': '인증 유형',
        'basic': '기본',
        'bearer': 'Bearer',
        'custom': '사용자 정의',
        'api-key-title': 'API 키',
        'header': '헤더',
      },
      insertVarPlaceholder: '변수를 삽입하려면 \'/\'를 입력하세요',
      timeout: {
        title: '시간 초과',
        connectLabel: '연결 시간 초과',
        connectPlaceholder: '초 단위로 연결 시간 초과 입력',
        readLabel: '읽기 시간 초과',
        readPlaceholder: '초 단위로 읽기 시간 초과 입력',
        writeLabel: '쓰기 시간 초과',
        writePlaceholder: '초 단위로 쓰기 시간 초과 입력',
      },
      type: '형',
      binaryFileVariable: '바이너리 파일 변수',
      extractListPlaceholder: '목록 항목 인덱스 입력, \'/\' 변수 삽입',
      curl: {
        title: 'cURL에서 가져오기',
        placeholder: '여기에 cURL 문자열 붙여 넣기',
      },
    },
    code: {
      inputVars: '입력 변수',
      outputVars: '출력 변수',
      advancedDependencies: '고급 종속성',
      advancedDependenciesTip: '더 많은 시간이 소요되거나 기본으로 내장되지 않은 일부 미리 로드된 종속성을 여기에 추가하세요',
      searchDependencies: '종속성 검색',
    },
    templateTransform: {
      inputVars: '입력 변수',
      code: '코드',
      codeSupportTip: 'Jinja2만 지원합니다',
      outputVars: {
        output: '변환된 내용',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: 'If 조건이 충족되지 않을 때 실행할 논리를 정의하는 데 사용됩니다.',
      and: '그리고',
      or: '또는',
      operator: '연산자',
      notSetVariable: '먼저 변수를 설정하세요',
      comparisonOperator: {
        'contains': '포함',
        'not contains': '포함하지 않음',
        'start with': '시작',
        'end with': '끝',
        'is': '이다',
        'is not': '아니다',
        'empty': '비어 있음',
        'not empty': '비어 있지 않음',
        'null': 'null임',
        'not null': 'null이 아님',
        'regex match': '정규식 일치',
        'in': '안으로',
        'exists': '존재',
        'all of': '모두의',
        'not in': '에 없음',
        'not exists': '존재하지 않음',
      },
      enterValue: '값 입력',
      addCondition: '조건 추가',
      conditionNotSetup: '조건이 설정되지 않음',
      selectVariable: '변수 선택...',
      optionName: {
        localUpload: '로컬 업로드',
        video: '비디오',
        image: '이미지',
        audio: '오디오',
        url: 'URL (영문)',
        doc: '문서',
      },
      select: '고르다',
      addSubVariable: '하위 변수',
    },
    variableAssigner: {
      title: '변수 할당',
      outputType: '출력 유형',
      varNotSet: '변수가 설정되지 않음',
      noVarTip: '할당할 변수를 추가하세요',
      type: {
        string: '문자열',
        number: '숫자',
        object: '객체',
        array: '배열',
      },
      aggregationGroup: '집계 그룹',
      aggregationGroupTip: '이 기능을 활성화하면 변수 집계자가 여러 변수 집합을 집계할 수 있습니다.',
      addGroup: '그룹 추가',
      outputVars: {
        varDescribe: '{{groupName}} 출력',
      },
      setAssignVariable: '할당 변수 설정',
    },
    assigner: {
      'assignedVariable': '할당된 변수',
      'writeMode': '쓰기 모드',
      'writeModeTip': '할당된 변수가 배열일 때, 추가 모드는 끝에 추가합니다.',
      'over-write': '덮어쓰기',
      'append': '추가',
      'plus': '더하기',
      'clear': '지우기',
      'setVariable': '변수 설정',
      'variable': '변수',
      'operations': {
        '*=': '*=',
        'overwrite': '덮어쓸',
        '-=': '-=',
        'append': '덧붙이다',
        'over-write': '덮어쓸',
        '+=': '+=',
        'title': '수술',
        'extend': '뻗치다',
        'clear': '맑다',
        '/=': '/=',
        'set': '집합',
      },
      'variables': '변수',
      'noAssignedVars': '사용 가능한 할당된 변수가 없습니다.',
      'noVarTip': '"+" 버튼을 클릭하여 변수를 추가합니다.',
      'setParameter': '매개 변수 설정...',
      'assignedVarsDescription': '할당된 변수는 대화 변수와 같은 쓰기 가능한 변수여야 합니다.',
      'selectAssignedVariable': '할당된 변수 선택...',
      'varNotSet': '변수가 설정되지 않음',
    },
    tool: {
      toAuthorize: '승인하기',
      inputVars: '입력 변수',
      outputVars: {
        text: '도구가 생성한 내용',
        files: {
          title: '도구가 생성한 파일',
          type: '지원 유형. 현재는 이미지만 지원합니다',
          transfer_method: '전송 방법. 값은 remote_url 또는 local_file',
          url: '이미지 URL',
          upload_file_id: '업로드된 파일 ID',
        },
        json: '도구로 생성된 JSON',
      },
    },
    questionClassifiers: {
      model: '모델',
      inputVars: '입력 변수',
      outputVars: {
        className: '클래스 이름',
      },
      class: '클래스',
      classNamePlaceholder: '클래스 이름을 작성하세요',
      advancedSetting: '고급 설정',
      topicName: '주제 이름',
      topicPlaceholder: '주제 이름을 작성하세요',
      addClass: '클래스 추가',
      instruction: '지시',
      instructionTip: '질문 분류기가 질문을 더 잘 분류할 수 있도록 추가 지시를 입력하세요.',
      instructionPlaceholder: '지시를 작성하세요',
    },
    parameterExtractor: {
      inputVar: '입력 변수',
      extractParameters: '매개변수 추출',
      importFromTool: '도구에서 가져오기',
      addExtractParameter: '추출 매개변수 추가',
      addExtractParameterContent: {
        name: '이름',
        namePlaceholder: '추출 매개변수 이름',
        type: '유형',
        typePlaceholder: '추출 매개변수 유형',
        description: '설명',
        descriptionPlaceholder: '추출 매개변수 설명',
        required: '필수',
        requiredContent: '필수는 모델 추론을 위한 참고 용도로만 사용되며, 매개변수 출력의 필수 유효성 검사는 아닙니다.',
      },
      extractParametersNotSet: '추출 매개변수가 설정되지 않음',
      instruction: '지시',
      instructionTip: '매개변수 추출기가 매개변수를 추출하는 방법을 이해하는 데 도움이 되는 추가 지시를 입력하세요.',
      advancedSetting: '고급 설정',
      reasoningMode: '추론 모드',
      reasoningModeTip: '모델의 함수 호출 또는 프롬프트에 대한 지시 응답 능력을 기반으로 적절한 추론 모드를 선택할 수 있습니다.',
      isSuccess: '성공 여부. 성공 시 값은 1이고, 실패 시 값은 0입니다.',
      errorReason: '오류 원인',
    },
    iteration: {
      deleteTitle: '반복 노드를 삭제하시겠습니까?',
      deleteDesc: '반복 노드를 삭제하면 모든 하위 노드가 삭제됩니다',
      input: '입력',
      output: '출력 변수',
      iteration_one: '{{count}} 반복',
      iteration_other: '{{count}} 반복',
      currentIteration: '현재 반복',
      ErrorMethod: {
        operationTerminated: '종료',
        continueOnError: '오류 발생 시 계속',
        removeAbnormalOutput: '비정상 출력 제거',
      },
      comma: ',',
      error_one: '{{개수}} 오류',
      parallelMode: '병렬 모드',
      errorResponseMethod: '오류 응답 방법',
      parallelModeUpper: '병렬 모드',
      MaxParallelismTitle: '최대 병렬 처리',
      error_other: '{{개수}} 오류',
      parallelModeEnableTitle: 'Parallel Mode Enabled(병렬 모드 사용)',
      parallelPanelDesc: '병렬 모드에서 반복의 작업은 병렬 실행을 지원합니다.',
      parallelModeEnableDesc: '병렬 모드에서는 반복 내의 작업이 병렬 실행을 지원합니다. 오른쪽의 속성 패널에서 이를 구성할 수 있습니다.',
      MaxParallelismDesc: '최대 병렬 처리는 단일 반복에서 동시에 실행되는 작업 수를 제어하는 데 사용됩니다.',
      answerNodeWarningDesc: '병렬 모드 경고: 응답 노드, 대화 변수 할당 및 반복 내의 지속적인 읽기/쓰기 작업으로 인해 예외가 발생할 수 있습니다.',
    },
    note: {
      editor: {
        medium: '보통',
        showAuthor: '작성자 표시',
        link: '링크',
        unlink: '해제',
        small: '작다',
        large: '큰',
        placeholder: '메모 쓰기...',
        bold: '대담한',
        enterUrl: 'URL 입력...',
        openLink: '열다',
        italic: '이탤릭체',
        invalidUrl: '잘못된 URL',
        strikethrough: '취소선',
        bulletList: '글머리 기호 목록',
      },
      addNote: '메모 추가',
    },
    docExtractor: {
      outputVars: {
        text: '추출된 텍스트',
      },
      learnMore: '더 알아보세요',
      inputVar: '입력 변수',
      supportFileTypes: '지원 파일 형식: {{types}}.',
    },
    listFilter: {
      outputVars: {
        result: '필터 결과',
        last_record: '마지막 레코드',
        first_record: '첫 번째 레코드',
      },
      asc: '증권 시세 표시기',
      filterConditionKey: '필터 조건 키',
      limit: '톱 N',
      filterConditionComparisonValue: '필터 조건 값',
      filterCondition: '필터 조건',
      inputVar: '입력 변수',
      desc: '설명',
      orderBy: '정렬 기준',
      selectVariableKeyPlaceholder: '하위 변수 키 선택',
      filterConditionComparisonOperator: '필터 조건 비교 연산자',
      extractsCondition: 'N 항목을 추출합니다.',
    },
    agent: {
      strategy: {
        label: '에이전트 전략',
        tooltip: '다양한 에이전트 전략은 시스템이 다단계 도구 호출을 계획하고 실행하는 방법을 결정합니다',
        configureTip: '에이전트 전략을 구성하세요.',
        searchPlaceholder: '검색 에이전트 전략',
        shortLabel: '전략',
        selectTip: '에이전트 전략 선택',
        configureTipDesc: '에이전트 전략을 구성한 후 이 노드는 나머지 구성을 자동으로 로드합니다. 이 전략은 다단계 도구 추론의 메커니즘에 영향을 미칩니다.',
      },
      pluginInstaller: {
        install: '설치하다',
        installing: '설치',
      },
      modelNotInMarketplace: {
        desc: '이 모델은 로컬 또는 GitHub 리포지토리에서 설치됩니다. 설치 후 사용하십시오.',
        title: '모델이 설치되지 않음',
        manageInPlugins: '플러그인에서 관리',
      },
      modelNotSupport: {
        title: '지원되지 않는 모델',
        descForVersionSwitch: '설치된 플러그인 버전은 이 모델을 제공하지 않습니다. 버전을 전환하려면 클릭합니다.',
        desc: '설치된 플러그인 버전은 이 모델을 제공하지 않습니다.',
      },
      modelSelectorTooltips: {
        deprecated: '이 모델은 더 이상 사용되지 않습니다.',
      },
      outputVars: {
        files: {
          url: '이미지 URL',
          upload_file_id: '파일 ID 업로드',
          transfer_method: '전송 방법. 값이 remote_url 또는 local_file입니다.',
          type: '지원 유형. 이제 이미지만 지원합니다.',
          title: '에이전트 생성 파일',
        },
        json: '에이전트 생성 JSON',
        text: '상담원이 생성한 콘텐츠',
      },
      checkList: {
        strategyNotSelected: '전략이 선택되지 않음',
      },
      installPlugin: {
        changelog: '변경 로그',
        install: '설치하다',
        desc: '다음 플러그인을 설치하려고 합니다.',
        cancel: '취소',
        title: '플러그인 설치',
      },
      strategyNotFoundDescAndSwitchVersion: '설치된 플러그인 버전은 이 전략을 제공하지 않습니다. 버전을 전환하려면 클릭합니다.',
      learnMore: '더 알아보세요',
      toolNotAuthorizedTooltip: '{{도구}} 권한이 부여되지 않음',
      strategyNotFoundDesc: '설치된 플러그인 버전은 이 전략을 제공하지 않습니다.',
      maxIterations: '최대 반복 횟수',
      pluginNotFoundDesc: '이 플러그인은 GitHub에서 설치됩니다. 플러그인으로 이동하여 다시 설치하십시오.',
      pluginNotInstalledDesc: '이 플러그인은 GitHub에서 설치됩니다. 플러그인으로 이동하여 다시 설치하십시오.',
      strategyNotInstallTooltip: '{{strategy}}가 설치되지 않았습니다.',
      tools: '도구',
      unsupportedStrategy: '지원되지 않는 전략',
      pluginNotInstalled: '이 플러그인은 설치되어 있지 않습니다.',
      toolNotInstallTooltip: '{{tool}}이 설치되지 않았습니다.',
      configureModel: '모델 구성',
      strategyNotSet: '에이전트 전략이 설정되지 않음',
      modelNotInstallTooltip: '이 모델은 설치되지 않았습니다.',
      model: '모델',
      notAuthorized: '권한이 부여되지 않음',
      modelNotSelected: '모델이 선택되지 않음',
      toolbox: '도구',
      linkToPlugin: '플러그인에 대한 링크',
    },
  },
  tracing: {
    stopBy: '{{user}}에 의해 중지됨',
  },
  variableReference: {
    noAvailableVars: '사용 가능한 변수 없음',
    conversationVars: '대화 변수',
    noVarsForOperation: '선택한 작업에 할당할 수 있는 변수가 없습니다.',
    noAssignedVars: '사용 가능한 할당된 변수가 없습니다.',
    assignedVarsDescription: '할당된 변수는 다음과 같이 쓰기 가능한 변수여야 합니다.',
  },
}

export default translation
