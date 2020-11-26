import { Page, RouteParser } from "./routes";
import { WatchPage } from "./routes/watchpage";

const parser = new RouteParser();

const hideAllPages = () => {
  const pageElements = document.getElementsByClassName("page");
  for (let pageElement of pageElements) {
    if (!pageElement.classList.contains("hidden"))
      pageElement.classList.add("hidden");
  }
};

const run = () => {
  hideAllPages();

  parser.onPageLoaded(Page.Watch, WatchPage);
  parser.onPageLoaded(Page.Embed, WatchPage);

  parser.ready();
};

run();
