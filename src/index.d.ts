//todo: add document

interface IPrefs {
  floatWindow: boolean;
  customCSS: string;
  FW_position: number;
  FW_offset: [number, number];
  FW_RAS: boolean;
  pauseA: boolean;
  Pbutton: [number, number, number];
  mouseA: boolean;
  Atimeout: number;
  stop_ipage: boolean;

  Aplus: true;
  sepP: boolean;
  sepT: boolean;
  s_method: number;
  s_ease: number;
  s_FPS: number;
  s_duration: number;
  DisableI: boolean;
  arrowKeyPage: boolean;
  sepStartN: number;

  forceTargetWindow: boolean;
  debug: boolean;
  enableHistory: boolean;
  autoGetPreLink: boolean;
  excludes: string;
  custom_siteinfo: string;
  lazyImgSrc: string;
  ChineseUI: boolean;
  dblclick_pause: boolean;
  factoryCheck: boolean;
  disappearDelay: number;
  numOfRule: number;
  disableBuiltinRules: boolean;
  disableBuiltinSubscriptionRules: boolean;
}

interface ISITEINFO_D {
  enable: boolean;
  useiframe: boolean;
  viewcontent: boolean;
  autopager: IAutoPagerSettings;
}

interface IAutoPagerSettings {
  enable: boolean;
  force_enable: boolean;
  manualA: boolean;
  useiframe: boolean;
  iloaded: boolean;
  itimeout: number;
  newIframe: boolean;
  remain: number;
  maxpage: number;
  ipages: [boolean, number];
  separator: boolean;
  separatorReal: boolean;
  reload: boolean;
  sandbox: boolean;
  relatedObj: boolean;
}

interface IAutoMatchSettings {
  keyMatch: boolean;
  cases: boolean;
  digitalCheck: boolean;
  pfwordl: any;
  sfwordl: any;
  useiframe: boolean;
  viewcontent: boolean;
  FA: {
    enable: boolean;
    manualA: boolean;
    useiframe: boolean;
    iloaded: boolean;
    itimeout: number;
    remain: number;
    maxpage: number;
    ipages: [boolean, number];
    separator: boolean;
  };
}

interface ISettings {
  prefs: IPrefs;
  SITEINFO_D: ISITEINFO_D;
  autoMatch: IAutoMatchSettings;
  version: string;
}

interface IHrefIncObject {
  min?: number;
  max?: number;
  mFails?: string | (string | RegExp)[];
  startAfter?: string | RegExp;
  inc: number;
  isLast?: Function;
}
/** 'css;<css selector>' | '<xpath>' | a function that select elements. */

type ISelectorFunction = string | ((doc: Document, win?: Window, cplink?: string) => Array<HTMLElement>);

interface IRule {
  name: string;
  url: string | RegExp;
  enable?: boolean;
  useiframe?: boolean;
  exampleUrl?: string;
  nextLink?: string | Function | IHrefIncObject | Array<string | Function | IHrefIncObject>;
  preLink?: IRule['nextLink'];
  pageElement?: ISelectorFunction;
  documentFilter?: (doc: Document, nextLink?: string) => void; //todo
  viewcontent?: boolean;
  separatorReal?: boolean;
  insertBefore?: string; //todo
  filter?: (pageElements: HTMLElement[]) => void;
  stylish?: string;
  autopager?: {
    enable?: boolean;
    useiframe?: boolean;
    iloaded?: boolean;
    itimeout?: number;
    newIframe?: boolean;
    reload?: boolean;
    force_enable?: boolean;
    headers?: {[key: string]: string};
    remain?: number;
    maxpage?: number;
    ipages?: [boolean, number];
    separator?: boolean;
    sepdivDom?: (doc: Document, sep: HTMLElement) => HTMLElement;
    startFilter?: (doc: Document, win?: Window) => void;
    documentFilter?: ((doc: Document, nextLink?: string) => void) | 'startFilter';
    scriptFilter?: string;
    filter?: (pageElements: HTMLElement[]) => void;
    stylish?: string;
    replaceE?: ISelectorFunction;
    pageElement?: ISelectorFunction;
    relatedObj?: any; //todo
    separatorReal?: boolean; //todo
    manualA?: boolean; //todo
    lazyImgSrc?: string; //todo
    HT_insert?: [string, number]; //todo
    excludeElement?: any; //todo
    preLink?: IRule['preLink']; //todo
    mutationObserver?: any; //todo
    sandbox?: boolean;
  };
}

interface IRuntimeRule {
  Rurl?: string;
  nextLink?: IRule['nextLink'];
  viewcontent?: boolean;
  enable?: boolean;
  useiframe?: boolean;
  a_pageElement?: ISelectorFunction;
  a_manualA?: boolean;
  a_enable?: boolean;
  a_useiframe?: boolean;
  a_mutationObserver?: any;
  a_newIframe?: boolean;
  a_iloaded?: boolean;
  a_itimeout?: number;
  a_remain?: number;
  a_maxpage?: number;
  a_separator?: boolean;
  a_sepdivDom?: (doc: Document, sep: HTMLElement) => HTMLElement;
  a_separatorReal?: boolean;
  a_replaceE?: ISelectorFunction;
  a_HT_insert?: [string, number];
  a_relatedObj?: any;
  a_ipages?: [boolean, number];
  filter?: (pageElements: HTMLElement[]) => void;
  a_documentFilter?: (doc: Document, nextLink?: string) => void;
  a_scriptFilter?: string;
  a_stylish?: string;
  lazyImgSrc?: string;
  a_headers?: {[key: string]: string};
  a_reload?: boolean;
  a_sandbox?: boolean;
  a_excludeElement?: any;
  hasRule?: boolean;
  a_force?: boolean;
}
