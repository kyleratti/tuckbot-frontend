export enum Page {
  Index = "",
  Watch = "watch",
  Embed = "embed",
}

export enum PageEvent {
  PageLoaded = "pageLoaded",
  PageUnloaded = "pageUnloaded",
}

type PageEventManager = {
  [eventName in PageEvent]?: PageEventCallbackManager;
};

export type PageEventCallback = (
  pageName: Page,
  queryString: string
) => void | Promise<void> | undefined | Promise<undefined>;
type PageLoadedCallback = PageEventCallback;

type PageEventCallbackManager = {
  [pageName in Page]?: PageEventCallback[];
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
  }

  private parseHashLocation = () => {
    const url = location.hash.substring(2); // location.hash always starts with "#/", so we start at index 1
    const splitUrl = url.split("/");
    const page = splitUrl[0].toLowerCase();
    const queryString = splitUrl.slice(1);

    return {
      page,
      queryString: queryString.join("/"),
    } as HashLocation;
  };

  private dispatchEvents = (pageEvent: PageEvent, page: Page) => {
    if (
      !this.m_eventHandler[pageEvent] ||
      !this.m_eventHandler[pageEvent]![page]
    ) {
      console.warn(`no events to dispatch for ${pageEvent}:${page}`);
      return;
    }

    this.m_eventHandler[pageEvent]![page]?.forEach((callback) =>
      callback(page, this.parseHashLocation().queryString)
    );
  };

  private handleRouteEvents = () => {
    const handleChange = () => {
      const hashLocation = this.parseHashLocation();

      if (this.currentPage) {
        this.dispatchEvents(PageEvent.PageUnloaded, this.currentPage);
      }

      this.m_currentPage = hashLocation.page;
      this.dispatchEvents(PageEvent.PageLoaded, this.currentPage);
    };

    window.onhashchange = handleChange;
  };

  private on = (
    pageEvent: PageEvent,
    page: Page,
    callback: PageEventCallback
  ) => {
    this.m_eventHandler[pageEvent] ??= {};
    this.m_eventHandler[pageEvent]![page] ??= [];

    this.m_eventHandler[pageEvent]![page]!.push(callback);
  };

  private resetPageVisibility = (page: Page) => {
    const pageElements = document.getElementsByClassName("page");
    for (let pageElement of pageElements) {
      if (pageElement.id.toLowerCase() === page)
        pageElement.classList.remove("hidden");
      else pageElement.classList.add("hidden");
    }
  };

  onPageLoaded = (page: Page, callback: PageLoadedCallback) => {
    this.on(PageEvent.PageLoaded, page, () => {
      this.resetPageVisibility(page);
      callback(page, this.parseHashLocation().queryString);
    });
  };

  ready = () => {
    this.handleRouteEvents();

    this.dispatchEvents(PageEvent.PageLoaded, this.parseHashLocation().page);
  };
}
