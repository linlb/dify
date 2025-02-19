const translation = {
  common: {
    undo: '復原',
    redo: '重做',
    editing: '編輯中',
    autoSaved: '自動保存',
    unpublished: '未發佈',
    published: '已發佈',
    publish: '發佈',
    update: '更新',
    run: '運行',
    running: '運行中',
    inRunMode: '在運行模式中',
    inPreview: '預覽中',
    inPreviewMode: '預覽中',
    preview: '預覽',
    viewRunHistory: '查看運行歷史',
    runHistory: '運行歷史',
    goBackToEdit: '返回編輯模式',
    conversationLog: '對話記錄',
    features: '功能',
    debugAndPreview: '預覽',
    restart: '重新開始',
    currentDraft: '當前草稿',
    currentDraftUnpublished: '當前草稿未發佈',
    latestPublished: '最新發佈',
    publishedAt: '發佈於',
    restore: '恢復',
    runApp: '運行',
    batchRunApp: '批量運行',
    accessAPIReference: '訪問 API',
    embedIntoSite: '嵌入網站',
    addTitle: '添加標題...',
    addDescription: '添加描述...',
    noVar: '沒有變量',
    variableNamePlaceholder: '變量名',
    searchVar: '搜索變量',
    setVarValuePlaceholder: '設置變量值',
    needConnectTip: '此節點尚未連接到其他節點',
    maxTreeDepth: '每個分支最大限制 {{depth}} 個節點',
    needEndNode: '必須添加結束節點',
    needAnswerNode: '必須添加直接回覆節點',
    workflowProcess: '工作流',
    notRunning: '尚未運行',
    previewPlaceholder: '在下面的框中輸入內容開始調試聊天機器人',
    effectVarConfirm: {
      title: '移除變量',
      content: '該變量在其他節點中使用。您是否仍要刪除它？',
    },
    insertVarTip: '按 \'/\' 鍵快速插入',
    processData: '數據處理',
    input: '輸入',
    output: '輸出',
    jinjaEditorPlaceholder: '輸入 “/” 或 “{” 插入變量',
    viewOnly: '只讀',
    showRunHistory: '顯示運行歷史',
    enableJinja: '開啟支持 Jinja 模板',
    learnMore: '了解更多',
    copy: '拷貝',
    duplicate: '複製',
    addBlock: '添加節點',
    pasteHere: '粘貼到這裡',
    pointerMode: '指針模式',
    handMode: '手模式',
    model: '模型',
    workflowAsTool: '發佈為工具',
    configureRequired: '需要進行配置',
    configure: '配置',
    manageInTools: '訪問工具頁',
    workflowAsToolTip: '工作流更新後需要重新配置工具參數',
    viewDetailInTracingPanel: '查看詳細信息',
    importDSL: '導入 DSL',
    backupCurrentDraft: 'Backup Current Draft',
    overwriteAndImport: '覆蓋和導入',
    importSuccess: '導入成功',
    chooseDSL: '選擇 DSL（yml） 檔',
    syncingData: '同步數據，只需幾秒鐘。',
    importDSLTip: '當前草稿將被覆蓋。在導入之前將工作流匯出為備份。',
    importFailure: '匯入失敗',
    parallelTip: {
      click: {
        title: '點擊',
        desc: '添加',
      },
      drag: {
        title: '拖动',
        desc: '連接',
      },
      limit: '並行度僅限於 {{num}} 個分支。',
      depthLimit: '並行嵌套層限制為 {{num}} 個層',
    },
    parallelRun: '並行運行',
    disconnect: '斷開',
    jumpToNode: '跳轉到此節點',
    addParallelNode: '添加並行節點',
    parallel: '並行',
    branch: '分支',
    featuresDocLink: '瞭解更多資訊',
    fileUploadTip: '圖片上傳功能已升級為檔上傳。',
    ImageUploadLegacyTip: '現在，您可以在起始表單中創建檔案類型變數。我們將來不再支持圖片上傳功能。',
    featuresDescription: '增強 Web 應用程式用戶體驗',
    importWarning: '謹慎',
    importWarningDetails: 'DSL 版本差異可能會影響某些功能',
    openInExplore: '在“探索”中打開',
    onFailure: '失敗時',
    addFailureBranch: '添加 Fail Branch',
    loadMore: '載入更多工作流',
    noHistory: '無歷史記錄',
  },
  env: {
    envPanelTitle: '環境變數',
    envDescription: '環境變數可用於存儲私人信息和憑證。它們是唯讀的，並且可以在導出時與DSL文件分開。',
    envPanelButton: '添加變數',
    modal: {
      title: '添加環境變數',
      editTitle: '編輯環境變數',
      type: '類型',
      name: '名稱',
      namePlaceholder: '環境名稱',
      value: '值',
      valuePlaceholder: '環境值',
      secretTip: '用於定義敏感信息或數據，DSL設置配置為防止洩露。',
    },
    export: {
      title: '導出機密環境變數？',
      checkbox: '導出機密值',
      ignore: '導出DSL',
      export: '導出帶有機密值的DSL',
    },
  },
  chatVariable: {
    panelTitle: '對話變數',
    panelDescription: '對話變數用於儲存 LLM 需要記住的互動資訊，包括對話歷史、上傳的檔案、使用者偏好等。這些變數可讀寫。',
    docLink: '查看我們的文件以了解更多。',
    button: '新增變數',
    modal: {
      title: '新增對話變數',
      editTitle: '編輯對話變數',
      name: '名稱',
      namePlaceholder: '變數名稱',
      type: '類型',
      value: '預設值',
      valuePlaceholder: '預設值，留空則不設定',
      description: '描述',
      descriptionPlaceholder: '描述此變數',
      editInJSON: '以 JSON 編輯',
      oneByOne: '逐一新增',
      editInForm: '在表單中編輯',
      arrayValue: '值',
      addArrayValue: '新增值',
      objectKey: '鍵',
      objectType: '類型',
      objectValue: '預設值',
    },
    storedContent: '已儲存內容',
    updatedAt: '更新於 ',
  },
  changeHistory: {
    title: '變更履歷',
    placeholder: '尚未更改任何內容',
    clearHistory: '清除歷史記錄',
    hint: '提示',
    hintText: '您的編輯操作將被跟踪並存儲在您的設備上，直到您離開編輯器。此歷史記錄將在您離開編輯器時被清除。',
    stepBackward_one: '{{count}} 步後退',
    stepBackward_other: '{{count}} 步後退',
    stepForward_one: '{{count}} 步前進',
    stepForward_other: '{{count}} 步前進',
    sessionStart: '會話開始',
    currentState: '當前狀態',
    nodeTitleChange: '區塊標題已更改',
    nodeDescriptionChange: '區塊描述已更改',
    nodeDragStop: '區塊已移動',
    nodeChange: '區塊已更改',
    nodeConnect: '區塊已連接',
    nodePaste: '區塊已粘貼',
    nodeDelete: '區塊已刪除',
    nodeAdd: '區塊已添加',
    nodeResize: '區塊已調整大小',
    noteAdd: '註釋已添加',
    noteChange: '註釋已更改',
    edgeDelete: '區塊已斷開連接',
    noteDelete: '註釋已刪除',
  },
  errorMsg: {
    fieldRequired: '{{field}} 不能為空',
    authRequired: '請先授權',
    invalidJson: '{{field}} 是非法的 JSON',
    fields: {
      variable: '變量名',
      variableValue: '變量值',
      code: '代碼',
      model: '模型',
      rerankModel: 'Rerank 模型',
      visionVariable: 'Vision Variable',
    },
    invalidVariable: '無效的變量',
    rerankModelRequired: '在開啟 Rerank 模型之前，請在設置中確認模型配置成功。',
    toolParameterRequired: '{{field}}： 参數 [{{param}}] 為必填項',
    noValidTool: '{{field}} 未選擇有效工具',
  },
  singleRun: {
    testRun: '測試運行',
    startRun: '開始運行',
    running: '運行中',
    testRunIteration: '測試運行迭代',
    back: '返回',
    iteration: '迭代',
  },
  tabs: {
    'searchBlock': '搜索節點',
    'blocks': '節點',
    'tools': '工具',
    'allTool': '全部',
    'builtInTool': '內置',
    'customTool': '自定義',
    'workflowTool': '工作流',
    'question-understand': '問題理解',
    'logic': '邏輯',
    'transform': '轉換',
    'utilities': '工具',
    'noResult': '未找到匹配項',
    'searchTool': '搜索工具',
    'agent': '代理策略',
    'plugin': '外掛程式',
  },
  blocks: {
    'start': '開始',
    'end': '結束',
    'answer': '直接回覆',
    'llm': 'LLM',
    'knowledge-retrieval': '知識檢索',
    'question-classifier': '問題分類器',
    'if-else': '條件分支',
    'code': '代碼執行',
    'template-transform': '模板轉換',
    'http-request': 'HTTP 請求',
    'variable-assigner': '變量聚合器',
    'variable-aggregator': '變量聚合器',
    'assigner': '變數分配器',
    'iteration-start': '迭代開始',
    'iteration': '迭代',
    'parameter-extractor': '參數提取器',
    'list-operator': '清單運算子',
    'document-extractor': '文件提取器',
    'agent': '代理',
  },
  blocksAbout: {
    'start': '定義一個 workflow 流程啟動的參數',
    'end': '定義一個 workflow 流程的結束和結果類型',
    'answer': '定義一個聊天對話的回覆內容',
    'llm': '調用大語言模型回答問題或者對自然語言進行處理',
    'knowledge-retrieval': '允許你從知識庫中查詢與用戶問題相關的文本內容',
    'question-classifier': '定義用戶問題的分類條件，LLM 能夠根據分類描述定義對話的進展方式',
    'if-else': '允許你根據 if/else 條件將 workflow 拆分成兩個分支',
    'code': '執行一段 Python 或 NodeJS 代碼實現自定義邏輯',
    'template-transform': '使用 Jinja 模板語法將數據轉換為字符串',
    'http-request': '允許通過 HTTP 協議發送服務器請求',
    'variable-assigner': '將多路分支的變量聚合為一個變量，以實現下游節點統一配置。',
    'assigner': '變數分配節點用於為可寫入的變數（如對話變數）分配值。',
    'variable-aggregator': '將多路分支的變量聚合為一個變量，以實現下游節點統一配置。',
    'iteration': '對列表對象執行多次步驟直至輸出所有結果。',
    'parameter-extractor': '利用 LLM 從自然語言內推理提取出結構化參數，用於後置的工具調用或 HTTP 請求。',
    'document-extractor': '用於將上傳的文件解析為 LLM 易於理解的文字內容。',
    'list-operator': '用於篩選或排序陣列內容。',
    'agent': '調用大型語言模型來回答問題或處理自然語言',
  },
  operator: {
    zoomIn: '放大',
    zoomOut: '縮小',
    zoomTo50: '縮放到 50%',
    zoomTo100: '放大到 100%',
    zoomToFit: '自適應視圖',
  },
  panel: {
    userInputField: '用戶輸入字段',
    changeBlock: '更改節點',
    helpLink: '幫助鏈接',
    about: '關於',
    createdBy: '作者',
    nextStep: '下一步',
    addNextStep: '添加此工作流程中的下一個節點',
    selectNextStep: '選擇下一個節點',
    runThisStep: '運行此步驟',
    checklist: '檢查清單',
    checklistTip: '發佈前確保所有問題均已解決',
    checklistResolved: '所有問題均已解決',
    organizeBlocks: '整理節點',
    change: '更改',
    optional: '(選擇性)',
  },
  nodes: {
    common: {
      outputVars: '輸出變量',
      insertVarTip: '插入變量',
      memory: {
        memory: '記憶',
        memoryTip: '聊天記憶設置',
        windowSize: '記憶窗口',
        conversationRoleName: '對話角色名',
        user: '用戶前綴',
        assistant: '助手前綴',
      },
      memories: {
        title: '記憶',
        tip: '聊天記憶',
        builtIn: '內置',
      },
      errorHandle: {
        none: {
          title: '沒有',
          desc: '如果發生異常且未得到處理，節點將停止運行',
        },
        defaultValue: {
          title: '預設值',
          desc: '發生錯誤時，請指定靜態輸出內容。',
          tip: '出錯時，將返回以下值。',
          inLog: 'Node 異常，按照預設值輸出。',
          output: '輸出預設值',
        },
        failBranch: {
          title: '失敗分支',
          desc: '當發生錯誤時，它會執行 exception 分支',
          customize: '轉到畫布以自定義fail分支邏輯。',
          inLog: 'Node 異常，將自動執行fail分支。節點輸出將返回錯誤類型和錯誤消息，並將其傳遞給下游。',
          customizeTip: '啟動fail分支後，節點引發的異常不會終止進程。相反，它將自動執行預定義的fail分支，允許您靈活地提供錯誤消息、報告、修復或跳過操作。',
        },
        partialSucceeded: {
          tip: '進程中有 {{num}} 個節點運行異常，請前往 tracing 查看日誌。',
        },
        title: '錯誤處理',
        tip: '異常處理策略，當節點遇到異常時觸發。',
      },
      retry: {
        retry: '重試',
        retryOnFailure: '失敗時重試',
        maxRetries: '最大重試次數',
        retryInterval: '重試間隔',
        retryTimes: '失敗時重試 {{times}} 次',
        retrying: '重試。。。',
        retrySuccessful: '重試成功',
        retryFailed: '重試失敗',
        retryFailedTimes: '{{times}} 次重試失敗',
        times: '次',
        ms: '毫秒',
        retries: '{{num}}重試',
      },
    },
    start: {
      required: '必填',
      inputField: '輸入字段',
      builtInVar: '內置變量',
      outputVars: {
        query: '用戶輸入',
        memories: {
          des: '會話歷史',
          type: '消息類型',
          content: '消息內容',
        },
        files: '文件列表',
      },
      noVarTip: '設置的輸入可在工作流程中使用',
    },
    end: {
      outputs: '輸出',
      output: {
        type: '輸出類型',
        variable: '輸出變量',
      },
      type: {
        'none': '無',
        'plain-text': '純文本',
        'structured': '結構化',
      },
    },
    answer: {
      answer: '回覆',
      outputVars: '輸出變量',
    },
    llm: {
      model: '模型',
      variables: '變量',
      context: '上下文',
      contextTooltip: '您可以導入知識庫作為上下文',
      notSetContextInPromptTip: '要啟用上下文功能，請在提示中填寫上下文變量。',
      prompt: '提示詞',
      addMessage: '添加消息',
      roleDescription: {
        system: '為對話提供高層指導',
        user: '向模型提供指令、查詢或任何基於文本的輸入',
        assistant: '基於用戶消息的模型回覆',
      },
      vision: '視覺',
      files: '文件',
      resolution: {
        name: '分辨率',
        high: '高',
        low: '低',
      },
      outputVars: {
        output: '生成內容',
        usage: '模型用量信息',
      },
      singleRun: {
        variable: '變量',
      },
      sysQueryInUser: 'user message 中必須包含 sys.query',
    },
    knowledgeRetrieval: {
      queryVariable: '查詢變量',
      knowledge: '知識庫',
      outputVars: {
        output: '召回的分段',
        content: '分段內容',
        title: '分段標題',
        icon: '分段圖標',
        url: '分段鏈接',
        metadata: '其他元數據',
      },
    },
    http: {
      inputVars: '輸入變量',
      api: 'API',
      apiPlaceholder: '輸入 URL，輸入變量時請鍵入‘/’',
      notStartWithHttp: 'API 應該以 http:// 或 https:// 開頭',
      key: '鍵',
      value: '值',
      bulkEdit: '批量編輯',
      keyValueEdit: '鍵值編輯',
      headers: 'Headers',
      params: 'Params',
      body: 'Body',
      outputVars: {
        body: '響應內容',
        statusCode: '響應狀態碼',
        headers: '響應頭列表 JSON',
        files: '文件列表',
      },
      authorization: {
        'authorization': '鑑權',
        'authorizationType': '鑑權類型',
        'no-auth': '無',
        'api-key': 'API-Key',
        'auth-type': 'API 鑑權類型',
        'basic': '基礎',
        'bearer': 'Bearer',
        'custom': '自定義',
        'api-key-title': 'API Key',
        'header': 'Header',
      },
      insertVarPlaceholder: '鍵入 \'/\' 鍵快速插入變量',
      timeout: {
        title: '超時設置',
        connectLabel: '連接超時',
        connectPlaceholder: '輸入連接超時（以秒為單位）',
        readLabel: '讀取超時',
        readPlaceholder: '輸入讀取超時（以秒為單位）',
        writeLabel: '寫入超時',
        writePlaceholder: '輸入寫入超時（以秒為單位）',
      },
      type: '類型',
      binaryFileVariable: '二進位檔變數',
      extractListPlaceholder: '輸入清單項索引，鍵入 『/』 插入變數',
      curl: {
        placeholder: '在此處粘貼 cURL 字串',
        title: '從 cURL 導入',
      },
    },
    code: {
      inputVars: '輸入變量',
      outputVars: '輸出變量',
      advancedDependencies: '高級依賴',
      advancedDependenciesTip: '在這裡添加一些預加載需要消耗較多時間或非默認內置的依賴包',
      searchDependencies: '搜索依賴',
    },
    templateTransform: {
      inputVars: '輸入變量',
      code: '代碼',
      codeSupportTip: '只支持 Jinja2',
      outputVars: {
        output: '轉換後內容',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: '用於定義當 if 條件不滿足時應執行的邏輯。',
      and: 'and',
      or: 'or',
      operator: '操作符',
      notSetVariable: '請先設置變量',
      comparisonOperator: {
        'contains': '包含',
        'not contains': '不包含',
        'start with': '開始是',
        'end with': '結束是',
        'is': '是',
        'is not': '不是',
        'empty': '為空',
        'not empty': '不為空',
        'null': '空',
        'not null': '不為空',
        'regex match': '正則表達式匹配',
        'all of': '全部',
        'exists': '存在',
        'in': '在',
        'not in': '不在',
        'not exists': '不存在',
      },
      enterValue: '輸入值',
      addCondition: '添加條件',
      conditionNotSetup: '條件未設置',
      selectVariable: '選擇變數...',
      optionName: {
        image: '圖像',
        url: '網址',
        doc: '文檔',
        localUpload: '本地上傳',
        video: '視頻',
        audio: '音訊',
      },
      select: '選擇',
      addSubVariable: '子變數',
    },
    variableAssigner: {
      title: '變量賦值',
      outputType: '輸出類型',
      varNotSet: '未設置變量',
      noVarTip: '添加需要賦值的變量',
      type: {
        string: 'String',
        number: 'Number',
        object: 'Object',
        array: 'Array',
      },
      aggregationGroup: '聚合分組',
      aggregationGroupTip: '開啟該功能後，變量聚合器內可以同時聚合多組變量',
      addGroup: '添加分組',
      outputVars: {
        varDescribe: '{{groupName}}的輸出變量',
      },
      setAssignVariable: '設置賦值變量',
    },
    assigner: {
      'assignedVariable': '已分配變數',
      'writeMode': '寫入模式',
      'writeModeTip': '當已分配變數是陣列時，附加模式會新增到末尾。',
      'over-write': '覆寫',
      'append': '附加',
      'plus': '加',
      'clear': '清除',
      'setVariable': '設定變數',
      'variable': '變數',
      'operations': {
        'overwrite': '覆寫',
        '/=': '/=',
        'title': '操作',
        '*=': '*=',
        'extend': '擴展',
        '+=': '+=',
        'set': '設置',
        'over-write': '覆寫',
        '-=': '-=',
        'append': '附加',
        'clear': '清除',
      },
      'noAssignedVars': '沒有可用的已分配變數',
      'variables': '變數',
      'selectAssignedVariable': '選擇配置的變數...',
      'setParameter': '設定參數...',
      'noVarTip': '點擊 「+」 按鈕添加變數',
      'assignedVarsDescription': '分配的變數必須是可寫變數，例如對話變數。',
      'varNotSet': '未設置變數',
    },
    tool: {
      toAuthorize: '授權',
      inputVars: '輸入變量',
      outputVars: {
        text: '工具生成的內容',
        files: {
          title: '工具生成的文件',
          type: '支持類型。現在只支持圖片',
          transfer_method: '傳輸方式。值為 remote_url 或 local_file',
          url: '圖片鏈接',
          upload_file_id: '上傳文件ID',
        },
        json: '工具生成的JSON',
      },
    },
    questionClassifiers: {
      model: '模型',
      inputVars: '輸入變量',
      outputVars: {
        className: '分類名稱',
      },
      class: '分類',
      classNamePlaceholder: '輸入你的分類名稱',
      advancedSetting: '高級設置',
      topicName: '主題內容',
      topicPlaceholder: '在這裡輸入你的主題內容',
      addClass: '添加分類',
      instruction: '指令',
      instructionTip: '你可以輸入額外的附加指令，幫助問題分類器更好的理解如何分類',
      instructionPlaceholder: '在這裡輸入你的指令',
    },
    parameterExtractor: {
      inputVar: '輸入變量',
      extractParameters: '提取參數',
      importFromTool: '從工具導入',
      addExtractParameter: '添加提取參數',
      addExtractParameterContent: {
        name: '名稱',
        namePlaceholder: '提取參數名稱',
        type: '類型',
        typePlaceholder: '提取參數類型',
        description: '描述',
        descriptionPlaceholder: '提取參數描述',
        required: '必填',
        requiredContent: '必填僅作為模型推理的參考，不用於參數輸出的強制驗證。',
      },
      extractParametersNotSet: '提取參數未設置',
      instruction: '指令',
      instructionTip: '你可以輸入額外的附加指令，幫助參數提取器理解如何提取參數',
      advancedSetting: '高級設置',
      reasoningMode: '推理模式',
      reasoningModeTip: '你可以根據模型對於 Function calling 或 Prompt 的指令響應能力選擇合適的推理模式',
      isSuccess: '是否成功。成功時值為 1，失敗時值為 0。',
      errorReason: '錯誤原因',
    },
    iteration: {
      deleteTitle: '刪除迭代節點？',
      deleteDesc: '刪除迭代節點將刪除所有子節點',
      input: '輸入',
      output: '輸出變量',
      iteration_one: '{{count}}個迭代',
      iteration_other: '{{count}}個迭代',
      currentIteration: '當前迭代',
      ErrorMethod: {
        operationTerminated: '終止',
        removeAbnormalOutput: 'remove-abnormal-output',
        continueOnError: '出錯時繼續',
      },
      comma: ',',
      parallelMode: '並行模式',
      parallelModeEnableTitle: 'Parallel Mode 已啟用',
      MaxParallelismTitle: '最大並行度',
      parallelModeUpper: '並行模式',
      parallelPanelDesc: '在並行模式下，反覆運算中的任務支援並行執行。',
      error_one: '{{count}}錯誤',
      errorResponseMethod: '錯誤回應方法',
      parallelModeEnableDesc: '在並行模式下，反覆運算中的任務支援並行執行。您可以在右側的 properties 面板中進行配置。',
      answerNodeWarningDesc: '並行模式警告：反覆運算中的應答節點、對話變數賦值和持久讀/寫操作可能會導致異常。',
      error_other: '{{count}}錯誤',
      MaxParallelismDesc: '最大並行度用於控制在單個反覆運算中同時執行的任務數。',
    },
    note: {
      editor: {
        link: '連結',
        openLink: '打開',
        medium: '中等',
        small: '小',
        invalidUrl: 'URL 無效',
        italic: '斜體的',
        bulletList: '項目符號清單',
        large: '大',
        unlink: '取消連結',
        enterUrl: '輸入網址...',
        bold: '大膽',
        showAuthor: '顯示作者',
        strikethrough: '刪除線',
        placeholder: '寫下您的筆記...',
      },
      addNote: '添加註釋',
    },
    docExtractor: {
      outputVars: {
        text: '提取的文字',
      },
      learnMore: '瞭解更多資訊',
      inputVar: '輸入變數',
      supportFileTypes: '支援文件類型：{{types}}。',
    },
    listFilter: {
      outputVars: {
        last_record: '最後一條記錄',
        first_record: '第一條記錄',
        result: '篩選結果',
      },
      desc: '描述',
      asc: 'ASC的',
      orderBy: '排序依據',
      inputVar: '輸入變數',
      filterConditionComparisonValue: 'Filter Condition 值',
      filterCondition: '篩選條件',
      limit: '前 N 名',
      selectVariableKeyPlaceholder: 'Select sub variable key （選擇子變數鍵）',
      filterConditionComparisonOperator: 'Filter Condition Comparison 運算符',
      filterConditionKey: '篩選條件鍵',
      extractsCondition: '提取第 N 項',
    },
    agent: {
      strategy: {
        label: '代理策略',
        shortLabel: '策略',
        tooltip: '不同的 Agentic 策略決定了系統如何規劃和執行多步驟工具調用',
        configureTip: '請配置 agentic 策略。',
        searchPlaceholder: '搜索代理策略',
        selectTip: '選擇代理策略',
        configureTipDesc: '配置代理策略后，該節點將自動載入剩餘的配置。該策略將影響多步驟工具推理的機制。',
      },
      pluginInstaller: {
        installing: '安裝',
        install: '安裝',
      },
      modelNotInMarketplace: {
        title: '未安裝模型',
        manageInPlugins: '在外掛程式中管理',
        desc: '此模型是從 Local 或 GitHub 儲存庫安裝的。請在安裝後使用。',
      },
      modelNotSupport: {
        title: '不支援的型號',
        desc: '已安裝的外掛程式版本不提供此模型。',
        descForVersionSwitch: '已安裝的外掛程式版本不提供此模型。按兩下以切換版本。',
      },
      modelSelectorTooltips: {
        deprecated: '此模型已棄用',
      },
      outputVars: {
        files: {
          type: '支撐類型。現在僅支援鏡像',
          transfer_method: '轉移方法。值為 remote_url 或 local_file',
          title: '代理生成的檔',
          url: '圖片網址',
          upload_file_id: '上傳檔ID',
        },
        text: '代理生成的內容',
        json: '代理生成的 JSON',
      },
      checkList: {
        strategyNotSelected: '未選擇策略',
      },
      installPlugin: {
        title: '安裝外掛程式',
        changelog: '更新日誌',
        cancel: '取消',
        desc: '即將安裝以下外掛程式',
        install: '安裝',
      },
      pluginNotFoundDesc: '此外掛程式是從 GitHub 安裝的。請前往外掛程式 重新安裝',
      modelNotSelected: '未選擇模型',
      tools: '工具',
      strategyNotFoundDesc: '已安裝的外掛程式版本不提供此策略。',
      pluginNotInstalledDesc: '此外掛程式是從 GitHub 安裝的。請前往外掛程式 重新安裝',
      strategyNotFoundDescAndSwitchVersion: '已安裝的外掛程式版本不提供此策略。按兩下以切換版本。',
      strategyNotInstallTooltip: '{{strategy}} 未安裝',
      toolNotAuthorizedTooltip: '{{工具}}未授權',
      unsupportedStrategy: '不支援的策略',
      model: '型',
      modelNotInstallTooltip: '此模型未安裝',
      strategyNotSet: '代理策略未設置',
      toolNotInstallTooltip: '{{tool}} 未安裝',
      maxIterations: '最大反覆運算次數',
      toolbox: '工具箱',
      configureModel: '配置模型',
      learnMore: '瞭解更多資訊',
      linkToPlugin: '連結到外掛程式',
      pluginNotInstalled: '此外掛程式未安裝',
      notAuthorized: '未授權',
    },
  },
  tracing: {
    stopBy: '由{{user}}終止',
  },
  variableReference: {
    noAvailableVars: '無可用變數',
    noAssignedVars: '沒有可用的已分配變數',
    noVarsForOperation: '所選操作沒有可用於賦值的變數。',
    assignedVarsDescription: '分配的變數必須是可寫變數，例如',
    conversationVars: '對話變數',
  },
}

export default translation
