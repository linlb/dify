const translation = {
  createApp: 'ایجاد برنامه',
  types: {
    all: 'همه',
    chatbot: 'چت‌بات',
    agent: 'نماینده',
    workflow: 'گردش کار',
    completion: 'تکمیل',
    basic: 'اساسی',
    advanced: 'چت‌فلو',
  },
  duplicate: 'تکرار',
  duplicateTitle: 'تکرار برنامه',
  export: 'صادر کردن DSL',
  exportFailed: 'صادر کردن DSL ناموفق بود.',
  importDSL: 'وارد کردن فایل DSL',
  createFromConfigFile: 'ایجاد از فایل DSL',
  importFromDSL: 'وارد کردن از DSL',
  importFromDSLFile: 'از فایل DSL',
  importFromDSLUrl: 'از URL',
  importFromDSLUrlPlaceholder: 'لینک DSL را اینجا بچسبانید',
  deleteAppConfirmTitle: 'آیا این برنامه حذف شود؟',
  deleteAppConfirmContent:
    'حذف برنامه غیرقابل برگشت است. کاربران دیگر قادر به دسترسی به برنامه شما نخواهند بود و تمام تنظیمات و گزارشات درخواست‌ها به صورت دائم حذف خواهند شد.',
  appDeleted: 'برنامه حذف شد',
  appDeleteFailed: 'حذف برنامه ناموفق بود',
  join: 'پیوستن به جامعه',
  communityIntro:
    'در کانال‌های مختلف با اعضای تیم، مشارکت‌کنندگان و توسعه‌دهندگان بحث کنید.',
  roadmap: 'نقشه راه ما را ببینید',
  newApp: {
    startFromBlank: 'ایجاد از خالی',
    startFromTemplate: 'ایجاد از قالب',
    captionAppType: 'چه نوع برنامه‌ای می‌خواهید ایجاد کنید؟',
    chatbotDescription: 'ساخت برنامه‌ای مبتنی بر چت. این برنامه از قالب پرسش و پاسخ استفاده می‌کند و امکان چندین دور مکالمه مداوم را فراهم می‌کند.',
    completionDescription: 'ساخت برنامه‌ای که متن با کیفیت بالا بر اساس درخواست‌ها تولید می‌کند، مانند تولید مقالات، خلاصه‌ها، ترجمه‌ها و بیشتر.',
    completionWarning: 'این نوع برنامه دیگر پشتیبانی نمی‌شود.',
    agentDescription: 'ساخت نماینده هوشمند که می‌تواند ابزارها را برای انجام وظایف به طور خودمختار انتخاب کند',
    workflowDescription: 'ساخت برنامه‌ای که متن با کیفیت بالا بر اساس گردش کار با درجه بالای سفارشی‌سازی تولید می‌کند. مناسب برای کاربران با تجربه.',
    workflowWarning: 'در حال حاضر در نسخه بتا',
    chatbotType: 'روش سازماندهی چت‌بات',
    basic: 'اساسی',
    basicTip: 'برای مبتدیان، می‌توان بعداً به Chatflow تغییر داد',
    basicFor: 'برای مبتدیان',
    basicDescription: 'سازماندهی اساسی به شما اجازه می‌دهد تا یک برنامه چت‌بات را با تنظیمات ساده و بدون امکان تغییر درخواست‌های داخلی سازماندهی کنید. مناسب برای مبتدیان است.',
    advanced: 'Chatflow',
    advancedFor: 'برای کاربران پیشرفته',
    advancedDescription: 'سازماندهی گردش کار، چت‌بات‌ها را به صورت گردش کار سازماندهی می‌کند و درجه بالایی از سفارشی‌سازی، از جمله امکان ویرایش درخواست‌های داخلی را فراهم می‌کند. مناسب برای کاربران با تجربه است.',
    captionName: 'آیکون و نام برنامه',
    appNamePlaceholder: 'به برنامه خود یک نام بدهید',
    captionDescription: 'توضیحات',
    appDescriptionPlaceholder: 'توضیحات برنامه را وارد کنید',
    useTemplate: 'استفاده از این قالب',
    previewDemo: 'پیش‌نمایش دمو',
    chatApp: 'دستیار',
    chatAppIntro:
      'می‌خواهم یک برنامه مبتنی بر چت بسازم. این برنامه از قالب پرسش و پاسخ استفاده می‌کند و امکان چندین دور مکالمه مداوم را فراهم می‌کند.',
    agentAssistant: 'دستیار نماینده جدید',
    completeApp: 'تولید کننده متن',
    completeAppIntro:
      'می‌خواهم برنامه‌ای بسازم که متن با کیفیت بالا بر اساس درخواست‌ها تولید کند، مانند تولید مقالات، خلاصه‌ها، ترجمه‌ها و بیشتر.',
    showTemplates: 'می‌خواهم از یک قالب انتخاب کنم',
    hideTemplates: 'بازگشت به انتخاب حالت',
    Create: 'ایجاد',
    Cancel: 'لغو',
    nameNotEmpty: 'نام نمی‌تواند خالی باشد',
    appTemplateNotSelected: 'لطفاً یک قالب انتخاب کنید',
    appTypeRequired: 'لطفاً نوع برنامه را انتخاب کنید',
    appCreated: 'برنامه ایجاد شد',
    appCreateFailed: 'ایجاد برنامه ناموفق بود',
    Confirm: 'تایید',
    appCreateDSLErrorTitle: 'ناسازگاری نسخه',
    caution: 'احتیاط',
    appCreateDSLErrorPart3: 'نسخه DSL برنامه فعلی:',
    appCreateDSLErrorPart2: 'آیا می خواهید ادامه دهید؟',
    appCreateDSLErrorPart4: 'نسخه DSL پشتیبانی شده توسط سیستم:',
    appCreateDSLErrorPart1: 'تفاوت قابل توجهی در نسخه های DSL مشاهده شده است. اجبار به واردات ممکن است باعث اختلال در عملکرد برنامه شود.',
    appCreateDSLWarning: 'احتیاط: تفاوت نسخه DSL ممکن است بر ویژگی های خاصی تأثیر بگذارد',
    completionShortDescription: 'دستیار هوش مصنوعی برای تسک های تولید متن',
    foundResult: '{{تعداد}} نتیجه',
    chatbotUserDescription: 'به سرعت یک چت بات مبتنی بر LLM با پیکربندی ساده بسازید. بعدا می توانید به Chatflow بروید.',
    chooseAppType: 'نوع برنامه را انتخاب کنید',
    foundResults: '{{تعداد}} نتیجه',
    noIdeaTip: 'ایده ای ندارید؟ قالب های ما را بررسی کنید',
    forBeginners: 'برای مبتدیان',
    noAppsFound: 'هیچ برنامه ای یافت نشد',
    chatbotShortDescription: 'چت بات مبتنی بر LLM با راه اندازی ساده',
    optional: 'اختیاری',
    learnMore: 'بیشتر بدانید',
    agentShortDescription: 'عامل هوشمند با استدلال و استفاده از ابزار مستقل',
    noTemplateFoundTip: 'سعی کنید با استفاده از کلمات کلیدی مختلف جستجو کنید.',
    noTemplateFound: 'هیچ الگویی یافت نشد',
    forAdvanced: 'برای کاربران پیشرفته',
    workflowShortDescription: 'ارکستراسیون برای تسک های اتوماسیون تک نوبت',
    workflowUserDescription: 'ارکستراسیون گردش کار برای کارهای تک مرحله ای مانند اتوماسیون و پردازش دسته ای.',
    advancedUserDescription: 'ارکستراسیون گردش کار برای کارهای گفتگوی پیچیده چند مرحله ای با قابلیت های حافظه.',
    completionUserDescription: 'به سرعت یک دستیار هوش مصنوعی برای وظایف تولید متن با پیکربندی ساده بسازید.',
    advancedShortDescription: 'گردش کار برای دیالوگ های پیچیده چند چرخشی با حافظه',
    agentUserDescription: 'یک عامل هوشمند که قادر به استدلال تکراری و استفاده از ابزار مستقل برای دستیابی به اهداف وظیفه است.',
  },
  editApp: 'ویرایش اطلاعات',
  editAppTitle: 'ویرایش اطلاعات برنامه',
  editDone: 'اطلاعات برنامه به‌روزرسانی شد',
  editFailed: 'به‌روزرسانی اطلاعات برنامه ناموفق بود',
  iconPicker: {
    ok: 'باشه',
    cancel: 'لغو',
    emoji: 'ایموجی',
    image: 'تصویر',
  },
  switch: 'تغییر به سازماندهی گردش کار',
  switchTipStart: 'یک نسخه جدید از برنامه برای شما ایجاد خواهد شد و نسخه جدید به سازماندهی گردش کار تغییر خواهد کرد. نسخه جدید ',
  switchTip: 'اجازه نمی‌دهد',
  switchTipEnd: ' تغییر به سازماندهی اساسی بازگردد.',
  switchLabel: 'نسخه برنامه که ایجاد می‌شود',
  removeOriginal: 'حذف برنامه اصلی',
  switchStart: 'شروع تغییر',
  typeSelector: {
    all: 'همه انواع',
    chatbot: 'چت‌بات',
    agent: 'نماینده',
    workflow: 'گردش کار',
    completion: 'تکمیل',
    advanced: 'چت‌فلو',
  },
  tracing: {
    title: 'ردیابی عملکرد برنامه',
    description: 'پیکربندی ارائه‌دهنده شخص ثالث LLMOps و ردیابی عملکرد برنامه.',
    config: 'پیکربندی',
    collapse: 'بستن',
    expand: 'باز کردن',
    tracing: 'ردیابی',
    disabled: 'غیرفعال',
    disabledTip: 'لطفاً ابتدا ارائه‌دهنده را پیکربندی کنید',
    enabled: 'در حال خدمت',
    tracingDescription: 'ثبت کامل متن اجرای برنامه، از جمله تماس‌های LLM، متن، درخواست‌های HTTP و بیشتر، به یک پلتفرم ردیابی شخص ثالث.',
    configProviderTitle: {
      configured: 'پیکربندی شده',
      notConfigured: 'برای فعال‌سازی ردیابی ارائه‌دهنده را پیکربندی کنید',
      moreProvider: 'ارائه‌دهندگان بیشتر',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'یک پلتفرم همه‌کاره برای هر مرحله از چرخه عمر برنامه‌های مبتنی بر LLM.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'ردیابی، ارزیابی، مدیریت درخواست‌ها و معیارها برای رفع اشکال و بهبود برنامه LLM شما.',
    },
    inUse: 'در حال استفاده',
    configProvider: {
      title: 'پیکربندی',
      placeholder: 'کلید {{key}} خود را وارد کنید',
      project: 'پروژه',
      publicKey: 'کلید عمومی',
      secretKey: 'کلید محرمانه',
      viewDocsLink: 'مشاهده مستندات {{key}}',
      removeConfirmTitle: 'حذف پیکربندی {{key}}؟',
      removeConfirmContent: 'پیکربندی فعلی در حال استفاده است، حذف آن ویژگی ردیابی را غیرفعال خواهد کرد.',
    },
    view: 'مشاهده',
    opik: {
      title: 'اوپیک',
      description: 'Opik یک پلت فرم منبع باز برای ارزیابی، آزمایش و نظارت بر برنامه های LLM است.',
    },
  },
  answerIcon: {
    descriptionInExplore: 'آیا از نماد WebApp برای جایگزینی 🤖 در Explore استفاده کنیم یا خیر',
    description: 'آیا از نماد WebApp برای جایگزینی 🤖 در برنامه مشترک استفاده کنیم یا خیر',
    title: 'از نماد WebApp برای جایگزینی 🤖 استفاده کنید',
  },
  mermaid: {
    handDrawn: 'دست کشیده شده',
    classic: 'کلاسیک',
  },
  openInExplore: 'باز کردن در کاوش',
  newAppFromTemplate: {
    sidebar: {
      Agent: 'عامل',
      Programming: 'برنامه نویسی',
      Recommended: 'توصیه',
      Assistant: 'دستیار',
      Workflow: 'گردش',
      HR: 'ساعت',
      Writing: 'نوشتن',
    },
    byCategories: 'بر اساس دسته بندی ها',
    searchAllTemplate: 'همه قالب ها را جستجو کنید...',
  },
  showMyCreatedAppsOnly: 'فقط برنامه‌های ایجاد شده توسط من را نشان بده',
  appSelector: {
    params: 'پارامترهای برنامه',
    noParams: 'بدون پارامتر مورد نیاز است',
    label: 'برنامه',
    placeholder: 'برنامه ای را انتخاب کنید...',
  },
}

export default translation
