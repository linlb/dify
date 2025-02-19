const translation = {
  title: 'Orodja',
  createCustomTool: 'Ustvari prilagojeno orodje',
  customToolTip: 'Izvedite več o prilagojenih orodjih Dify',
  type: {
    all: 'Vsa',
    builtIn: 'Vgrajena',
    custom: 'Prilagojena',
    workflow: 'Potek dela',
  },
  contribute: {
    line1: 'Zanima me ',
    line2: 'prispevanje orodij k Dify.',
    viewGuide: 'Oglejte si vodič',
  },
  author: 'Avtor',
  auth: {
    unauthorized: 'Za avtorizacijo',
    authorized: 'Avtorizirano',
    setup: 'Nastavite avtorizacijo za uporabo',
    setupModalTitle: 'Nastavi avtorizacijo',
    setupModalTitleDescription: 'Po konfiguraciji poverilnic bodo vsi člani znotraj delovnega prostora lahko uporabljali to orodje pri orkestraciji aplikacij.',
  },
  includeToolNum: 'Vključeno {{num}} orodij',
  addTool: 'Dodaj orodje',
  addToolModal: {
    type: 'tip',
    category: 'kategorija',
    add: 'dodaj',
    added: 'dodano',
    manageInTools: 'Upravljaj v Orodjih',
    emptyTitle: 'Orodje za potek dela ni na voljo',
    emptyTip: 'Pojdite na "Potek dela -> Objavi kot orodje"',
    emptyTipCustom: 'Ustvarjanje orodja po meri',
    emptyTitleCustom: 'Orodje po meri ni na voljo',
  },
  createTool: {
    title: 'Ustvari prilagojeno orodje',
    editAction: 'Konfiguriraj',
    editTitle: 'Uredi prilagojeno orodje',
    name: 'Ime',
    toolNamePlaceHolder: 'Vnesite ime orodja',
    nameForToolCall: 'Ime za klic orodja',
    nameForToolCallPlaceHolder: 'Uporablja se za strojno prepoznavo, na primer getCurrentWeather, list_pets',
    nameForToolCallTip: 'Podprte so samo številke, črke in podčrtaji.',
    description: 'Opis',
    descriptionPlaceholder: 'Kratek opis namena orodja, npr. pridobi temperaturo za določeno lokacijo.',
    schema: 'Shema',
    schemaPlaceHolder: 'Vnesite svojo OpenAPI shemo tukaj',
    viewSchemaSpec: 'Oglejte si OpenAPI-Swagger specifikacijo',
    importFromUrl: 'Uvozi iz URL-ja',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Prosimo, vnesite veljaven URL',
    examples: 'Primeri',
    exampleOptions: {
      json: 'Vreme(JSON)',
      yaml: 'Trgovina za domače ljubljenčke(YAML)',
      blankTemplate: 'Prazna predloga',
    },
    availableTools: {
      title: 'Razpoložljiva orodja',
      name: 'Ime',
      description: 'Opis',
      method: 'Metoda',
      path: 'Pot',
      action: 'Dejanja',
      test: 'Testiraj',
    },
    authMethod: {
      title: 'Metoda avtorizacije',
      type: 'Vrsta avtorizacije',
      keyTooltip: 'Ključ HTTP glave, pustite kot "Authorization", če ne veste, kaj je to, ali pa nastavite na vrednost po meri',
      types: {
        none: 'Brez',
        api_key: 'API ključ',
        apiKeyPlaceholder: 'Ime HTTP glave za API ključ',
        apiValuePlaceholder: 'Vnesite API ključ',
      },
      key: 'Ključ',
      value: 'Vrednost',
    },
    authHeaderPrefix: {
      title: 'Vrsta avtorizacije',
      types: {
        basic: 'Osnovna',
        bearer: 'Imetnik',
        custom: 'Prilagojena',
      },
    },
    privacyPolicy: 'Politika zasebnosti',
    privacyPolicyPlaceholder: 'Prosimo, vnesite politiko zasebnosti',
    toolInput: {
      title: 'Vnos orodja',
      name: 'Ime',
      required: 'Obvezno',
      method: 'Metoda',
      methodSetting: 'Nastavitve',
      methodSettingTip: 'Uporabnik izpolni konfiguracijo orodja',
      methodParameter: 'Parameter',
      methodParameterTip: 'LLM izpolni med sklepanjem',
      label: 'Oznake',
      labelPlaceholder: 'Izberite oznake (neobvezno)',
      description: 'Opis',
      descriptionPlaceholder: 'Opis pomena parametra',
    },
    customDisclaimer: 'Prilagojeno zavrnitev odgovornosti',
    customDisclaimerPlaceholder: 'Prosimo, vnesite prilagojeno zavrnitev odgovornosti',
    confirmTitle: 'Potrditi shranjevanje?',
    confirmTip: 'Aplikacije, ki uporabljajo to orodje, bodo vplivane',
    deleteToolConfirmTitle: 'Izbrisati to orodje?',
    deleteToolConfirmContent: 'Brisanje orodja je nepovratno. Uporabniki ne bodo več imeli dostopa do vašega orodja.',
  },
  test: {
    title: 'Test',
    parametersValue: 'Parametri in vrednosti',
    parameters: 'Parametri',
    value: 'Vrednost',
    testResult: 'Rezultati testa',
    testResultPlaceholder: 'Rezultati testa bodo prikazani tukaj',
  },
  thought: {
    using: 'Uporablja se',
    used: 'Uporabljeno',
    requestTitle: 'Zahteva za',
    responseTitle: 'Odgovor iz',
  },
  setBuiltInTools: {
    info: 'Informacije',
    setting: 'Nastavitve',
    toolDescription: 'Opis orodja',
    parameters: 'parametri',
    string: 'niz',
    number: 'številka',
    required: 'Obvezno',
    infoAndSetting: 'Informacije in nastavitve',
    file: 'datoteka',
  },
  noCustomTool: {
    title: 'Ni prilagojenih orodij!',
    content: 'Tukaj lahko dodate in upravljate svoja prilagojena orodja za gradnjo AI aplikacij.',
    createTool: 'Ustvari orodje',
  },
  noSearchRes: {
    title: 'Oprostite, ni rezultatov!',
    content: 'Nismo našli nobenih orodij, ki ustrezajo vašemu iskanju.',
    reset: 'Ponastavi iskanje',
  },
  builtInPromptTitle: 'Poziv',
  toolRemoved: 'Orodje odstranjeno',
  notAuthorized: 'Orodje ni avtorizirano',
  howToGet: 'Kako pridobiti',
  openInStudio: 'Odpri v Studiju',
  toolNameUsageTip: 'Ime klica orodja za sklepanja in pozivanje agenta',
  copyToolName: 'Kopiraj ime',
  noTools: 'Orodja niso bila najdena',
}

export default translation
