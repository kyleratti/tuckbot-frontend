import { Page, RouteParser, setNewHashLocation } from "./routes";
import { WatchPage } from "./routes/watchpage";

const parser = new RouteParser();
const UNDER_MAINTENANCE = true;

const hideAllPages = () => {
  const pageElements = document.getElementsByClassName("page");
  for (let pageElement of pageElements) {
    if (!pageElement.classList.contains("hidden"))
      pageElement.classList.add("hidden");
  }
};

const run = () => {
  hideAllPages();

  if (UNDER_MAINTENANCE) {
    for (const key of Object.keys(Page)) {
      if (key !== Page.Maintenance)
        parser.onPageLoaded(key as Page, () => {
          setNewHashLocation("maintenance");
        });
    }
  } else {
    parser.onPageLoaded(Page.Watch, WatchPage);
    parser.onPageLoaded(Page.Embed, WatchPage);
  }

  parser.ready();
};

run();
