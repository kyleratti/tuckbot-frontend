export enum Page {
  Index = "index",
  Watch = "watch",
  Embed = "embed",
  Maintenance = "maintenance",
}

export enum PageEvent {
  PageLoaded = "pageLoaded",
  PageUnloaded = "pageUnloaded",
}

type PageEventManager = {
  [key: string]: PageEventCallbackManager;
};

export type PageEventCallback = (
  pageName: Page,
  queryString: string
) => void | Promise<void> | undefined | Promise<undefined>;
type PageLoadedCallback = PageEventCallback;
type PageUnloadedCallback = PageEventCallback;

type PageEventCallbackManager = {
  [eventName in PageEvent]?: PageEventCallback[];
};

type HashLocation = {
  page: Page;
  queryString: string;
};

export class RouteParser {
  private readonly m_eventHandler: PageEventManager = {};
  private m_currentPage: Page;

  public get currentPage() {
    return this.m_currentPage;
  }

  constructor() {
    this.m_currentPage = this.parseHashLocation().page;

    this.addPageLoadVisiblityRules();
    this.bootstrapRouteChange();
  }

  private parseHashLocation = () => {
    const url = location.hash.substring(2); // location.hash always starts with "#/", so we start at index 1
    const splitUrl = url.split("/");
    const page = splitUrl[0].toLowerCase() || Page.Index;
    const queryString = splitUrl.slice(1);

    return {
      page,
      queryString: queryString.join("/"),
    } as HashLocation;
  };

  private togglePageVisibility = (page: Page, visible?: boolean) => {
    console.log(
      `toggling visiblity for ${page.toLowerCase()} visible: ${visible}`
    );
    const pageElements = document.querySelectorAll(
      `[data-page='${page.toLowerCase()}']`
    );

    pageElements.forEach((element) =>
      element.classList.toggle("hidden", !visible)
    );
  };

  private dispatchEvents = (pageEvent: PageEvent, page: Page) => {
    if (!this.m_eventHandler[page] || !this.m_eventHandler[page]![pageEvent]) {
      console.warn(`no events to dispatch for ${pageEvent}:${page}`);
      return;
    }

    this.m_eventHandler[page]![pageEvent]?.forEach((callback) =>
      callback(page, this.parseHashLocation().queryString)
    );
  };

  private onUrlChange = (firstRun?: boolean) => {
    const hashLocation = this.parseHashLocation();

    console.log(`dispatching events for ${hashLocation.page}`);

    if (!firstRun && this.currentPage) {
      this.dispatchEvents(PageEvent.PageUnloaded, this.currentPage);
    }

    this.m_currentPage = hashLocation.page;
    this.dispatchEvents(PageEvent.PageLoaded, this.currentPage);
  };

  private bootstrapRouteChange = () => {
    window.onhashchange = () => this.onUrlChange();
  };

  private on = (
    pageEvent: PageEvent,
    page: Page,
    callback: PageEventCallback
  ) => {
    const pageName = page.toLowerCase();
    this.m_eventHandler[pageName] ??= {};
    this.m_eventHandler[pageName]![pageEvent] ??= [];

    this.m_eventHandler[pageName]![pageEvent]!.push(callback);
  };

  onPageLoaded = (page: Page, callback: PageLoadedCallback) => {
    this.on(PageEvent.PageLoaded, page, () =>
      callback(page, this.parseHashLocation().queryString)
    );
  };

  onPageUnloaded = (page: Page, callback: PageUnloadedCallback) => {
    this.on(PageEvent.PageUnloaded, page, () =>
      callback(page, this.parseHashLocation().queryString)
    );
  };

  private addPageLoadVisiblityRules = () => {
    for (let pageName in Page) {
      let page = pageName as Page;
      console.log(`adding pageLoadVisibilityRules for ${page}`);

      this.onPageLoaded(page, () => {
        console.log(`OnLoad[PageVisibility] ${page}`);
        this.togglePageVisibility(page, true);
      });

      this.onPageUnloaded(page, () => {
        console.log(`OnUnload[PageVisibility] ${page}`);
        this.togglePageVisibility(page, false);
      });

      console.log(this.m_eventHandler);
    }
  };

  ready = () => {
    console.log("done bootstrapping");

    this.onUrlChange(true);
  };
}
