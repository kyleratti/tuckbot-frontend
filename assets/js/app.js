(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showElements = exports.hideElements = exports.setElementVisibility = exports.setAttributes = void 0;
function isDefaultAttributeValue(obj) {
    return typeof obj !== "string";
}
function isStringArray(obj) {
    if (obj instanceof Array) {
        obj.forEach(function (item) {
            if (typeof item !== "string")
                return false;
        });
        return true;
    }
    return false;
}
function setAttributes(id, values) {
    const element = document.getElementById(id);
    if (!element)
        return;
    for (const key in values) {
        let newValue = values[key];
        if (newValue === undefined || isDefaultAttributeValue(newValue)) {
            newValue = element.dataset[key] || "";
        }
        if (key === "content")
            element.textContent = "" + newValue;
        else
            element.setAttribute(key, "" + newValue);
    }
    return element;
}
exports.setAttributes = setAttributes;
const setElementVisibility = (obj, visible) => obj.classList.toggle("hidden", !visible);
exports.setElementVisibility = setElementVisibility;
const consolidateElements = (objs) => {
    const targets = [];
    if (isStringArray(objs))
        objs.map((id) => {
            const obj = document.getElementById(id);
            if (obj)
                targets.push(obj);
        });
    return targets;
};
const hideElements = (objs) => {
    consolidateElements(objs).map((obj) => exports.setElementVisibility(obj, false));
};
exports.hideElements = hideElements;
const showElements = (objs) => consolidateElements(objs).map((obj) => exports.setElementVisibility(obj, true));
exports.showElements = showElements;

},{}],2:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./helpers"), exports);

},{"./helpers":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const watchpage_1 = require("./routes/watchpage");
const parser = new routes_1.RouteParser();
const hideAllPages = () => {
    const pageElements = document.getElementsByClassName("page");
    for (let pageElement of pageElements) {
        if (!pageElement.classList.contains("hidden"))
            pageElement.classList.add("hidden");
    }
};
const run = () => {
    hideAllPages();
    parser.onPageLoaded(routes_1.Page.Watch, watchpage_1.WatchPage);
    parser.onPageLoaded(routes_1.Page.Embed, watchpage_1.WatchPage);
    parser.ready();
};
run();

},{"./routes":5,"./routes/watchpage":7}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNewHashLocation = void 0;
const setNewHashLocation = (str) => (location.hash = `#/${str}`);
exports.setNewHashLocation = setNewHashLocation;

},{}],5:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./helpers"), exports);
__exportStar(require("./routeparser"), exports);

},{"./helpers":4,"./routeparser":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteParser = exports.PageEvent = exports.Page = void 0;
var Page;
(function (Page) {
    Page["Index"] = "";
    Page["Watch"] = "watch";
    Page["Embed"] = "embed";
})(Page = exports.Page || (exports.Page = {}));
var PageEvent;
(function (PageEvent) {
    PageEvent["PageLoaded"] = "pageLoaded";
    PageEvent["PageUnloaded"] = "pageUnloaded";
})(PageEvent = exports.PageEvent || (exports.PageEvent = {}));
class RouteParser {
    constructor() {
        this.m_eventHandler = {};
        this.parseHashLocation = () => {
            const url = location.hash.substring(2);
            const splitUrl = url.split("/");
            const page = splitUrl[0].toLowerCase();
            const queryString = splitUrl.slice(1);
            return {
                page,
                queryString: queryString.join("/"),
            };
        };
        this.dispatchEvents = (pageEvent, page) => {
            var _a;
            if (!this.m_eventHandler[pageEvent] ||
                !this.m_eventHandler[pageEvent][page]) {
                console.warn(`no events to dispatch for ${pageEvent}:${page}`);
                return;
            }
            (_a = this.m_eventHandler[pageEvent][page]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(page, this.parseHashLocation().queryString));
        };
        this.handleRouteEvents = () => {
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
        this.on = (pageEvent, page, callback) => {
            var _a, _b;
            var _c, _d;
            (_a = (_c = this.m_eventHandler)[pageEvent]) !== null && _a !== void 0 ? _a : (_c[pageEvent] = {});
            (_b = (_d = this.m_eventHandler[pageEvent])[page]) !== null && _b !== void 0 ? _b : (_d[page] = []);
            this.m_eventHandler[pageEvent][page].push(callback);
        };
        this.resetPageVisibility = (page) => {
            const pageElements = document.getElementsByClassName("page");
            for (let pageElement of pageElements) {
                if (pageElement.id.toLowerCase() === page)
                    pageElement.classList.remove("hidden");
                else
                    pageElement.classList.add("hidden");
            }
        };
        this.onPageLoaded = (page, callback) => {
            this.on(PageEvent.PageLoaded, page, () => {
                this.resetPageVisibility(page);
                callback(page, this.parseHashLocation().queryString);
            });
        };
        this.ready = () => {
            this.handleRouteEvents();
            this.dispatchEvents(PageEvent.PageLoaded, this.parseHashLocation().page);
        };
        this.m_currentPage = this.parseHashLocation().page;
    }
    get currentPage() {
        return this.m_currentPage;
    }
}
exports.RouteParser = RouteParser;

},{}],7:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchPage = void 0;
const dom_1 = require("../dom");
const services_1 = require("../services");
const helpers_1 = require("./helpers");
const routeparser_1 = require("./routeparser");
const WatchPage = (pageName, queryString) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("page loaded", pageName, queryString);
    console.log(`pageName: ${pageName}`);
    if (pageName === routeparser_1.Page.Embed) {
        helpers_1.setNewHashLocation(`${routeparser_1.Page.Watch}/${queryString}`);
        return;
    }
    const queryRedditPostId = queryString.split("/")[0];
    services_1.getVideo(queryRedditPostId)
        .then((result) => {
        dom_1.hideElements(["watch-error"]);
        dom_1.showElements(["watch-videoArea"]);
        const { redditPostId, redditPostTitle, mirrorUrl } = result.data;
        if (queryString === "random") {
            helpers_1.setNewHashLocation(`${pageName}/${redditPostId}`);
            return;
        }
        dom_1.setAttributes("watch-videoTitle", {
            content: redditPostTitle,
        });
        document.title = redditPostTitle;
        const videoPlayer = dom_1.setAttributes("watch-videoPlayer", {
            src: mirrorUrl,
        });
        const videoArea = document.getElementById("watch-videoArea");
        if (videoPlayer && videoArea) {
            dom_1.hideElements([videoArea]);
            videoPlayer.addEventListener("loadedmetadata", (_evnt) => {
                videoPlayer.width = videoPlayer.videoWidth;
                videoPlayer.height = videoPlayer.videoHeight;
                videoArea.style.width = `${videoPlayer.videoWidth}px`;
                videoArea.style.height = `${videoPlayer.videoHeight}px`;
                dom_1.showElements([videoArea]);
            }, false);
        }
        dom_1.setAttributes("watch-videoDownloadLink", {
            href: `${mirrorUrl}?dl=1`,
        });
        dom_1.setAttributes("watch-openRedditThread", {
            href: `https://reddit.com/${queryRedditPostId}`,
        });
        window.onorientationchange = (_evnt) => {
            const videoPlayer = document.getElementById("watch-videoPlayer");
            if (!videoPlayer === null)
                return;
            if (window.orientation === 0) {
                document.exitFullscreen();
            }
            else if (window.orientation === 90) {
                videoPlayer.requestFullscreen();
                videoPlayer.play();
            }
            console.log(window.orientation);
        };
    })
        .catch((err) => {
        dom_1.hideElements(["watch-videoArea"]);
        dom_1.showElements(["watch-error"]);
        console.error(err);
        const watchError = document.getElementById("watch-error");
        if (!watchError)
            return;
        watchError.textContent = err;
    });
});
exports.WatchPage = WatchPage;

},{"../dom":2,"../services":8,"./helpers":4,"./routeparser":6}],8:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./tuckbot"), exports);

},{"./tuckbot":9}],9:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideo = void 0;
const API_URL = `https://api.tuckbot.tv`;
const buildUrl = (str) => `${API_URL}/${str}`;
const getVideo = (redditPostId) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield fetch(buildUrl(`public/video/${redditPostId}`), {
        method: "GET",
    });
    if (!resp.ok) {
        console.error(resp.status);
        throw resp.statusText;
    }
    return resp.json();
});
exports.getVideo = getVideo;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZG9tL2hlbHBlcnMudHMiLCJzcmMvZG9tL2luZGV4LnRzIiwic3JjL2luZGV4LnRzIiwic3JjL3JvdXRlcy9oZWxwZXJzLnRzIiwic3JjL3JvdXRlcy9pbmRleC50cyIsInNyYy9yb3V0ZXMvcm91dGVwYXJzZXIudHMiLCJzcmMvcm91dGVzL3dhdGNocGFnZS50cyIsInNyYy9zZXJ2aWNlcy9pbmRleC50cyIsInNyYy9zZXJ2aWNlcy90dWNrYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDRUEsU0FBUyx1QkFBdUIsQ0FDOUIsR0FBbUM7SUFFbkMsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVE7SUFDN0IsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO1FBQ3hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBRXhCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFBRSxPQUFPLEtBQUssQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFPRCxTQUFnQixhQUFhLENBQzNCLEVBQVUsRUFDVixNQUFvQjtJQUVwQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN4QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9ELFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdB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LENBQUMsVUFBVSxDQUFDO0tBQ3ZCO0lBRUQsT0FBUSxJQUFJLENBQUMsSUFBSSxFQUFrQyxDQUFDO0FBQ3RELENBQUMsQ0FBQSxDQUFDO0FBWFcsUUFBQSxRQUFRLFlBV25CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IHR5cGUgRGVmYXVsdEF0dHJpYnV0ZVZhbHVlID0ge307XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdEF0dHJpYnV0ZVZhbHVlKFxuICBvYmo6IHN0cmluZyB8IERlZmF1bHRBdHRyaWJ1dGVWYWx1ZVxuKTogb2JqIGlzIERlZmF1bHRBdHRyaWJ1dGVWYWx1ZSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqICE9PSBcInN0cmluZ1wiO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZ0FycmF5KG9iajogYW55KTogb2JqIGlzIHN0cmluZ1tdIHtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIC8vIG1heWJlIG9ubHkgY2hlY2sgZmlyc3Qgb2JqP1xuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudHlwZSBBdHRyaWJ1dGVTZXQgPSB7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IERlZmF1bHRBdHRyaWJ1dGVWYWx1ZSB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzPFQgPSBIVE1MRWxlbWVudD4oXG4gIGlkOiBzdHJpbmcsXG4gIHZhbHVlczogQXR0cmlidXRlU2V0XG4pIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgbGV0IG5ld1ZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQgfHwgaXNEZWZhdWx0QXR0cmlidXRlVmFsdWUobmV3VmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IGVsZW1lbnQuZGF0YXNldFtrZXldIHx8IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gXCJjb250ZW50XCIpIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiICsgbmV3VmFsdWU7XG4gICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIFwiXCIgKyBuZXdWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKGVsZW1lbnQgYXMgdW5rbm93bikgYXMgVDtcbn1cblxuZXhwb3J0IGNvbnN0IHNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKG9iajogSFRNTEVsZW1lbnQsIHZpc2libGU/OiBib29sZWFuKSA9PlxuICBvYmouY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCAhdmlzaWJsZSk7XG5cbmNvbnN0IGNvbnNvbGlkYXRlRWxlbWVudHMgPSAob2JqczogSFRNTEVsZW1lbnRbXSB8IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHRhcmdldHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBpZiAoaXNTdHJpbmdBcnJheShvYmpzKSlcbiAgICBvYmpzLm1hcCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgaWYgKG9iaikgdGFyZ2V0cy5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldHM7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZUVsZW1lbnRzID0gKG9ianM6IEhUTUxFbGVtZW50W10gfCBzdHJpbmdbXSkgPT4ge1xuICBjb25zb2xpZGF0ZUVsZW1lbnRzKG9ianMpLm1hcCgob2JqKSA9PiBzZXRFbGVtZW50VmlzaWJpbGl0eShvYmosIGZhbHNlKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0VsZW1lbnRzID0gKG9ianM6IEhUTUxFbGVtZW50W10gfCBzdHJpbmdbXSkgPT5cbiAgY29uc29saWRhdGVFbGVtZW50cyhvYmpzKS5tYXAoKG9iaikgPT4gc2V0RWxlbWVudFZpc2liaWxpdHkob2JqLCB0cnVlKSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzXCI7XG4iLCJpbXBvcnQgeyBQYWdlLCBSb3V0ZVBhcnNlciB9IGZyb20gXCIuL3JvdXRlc1wiO1xuaW1wb3J0IHsgV2F0Y2hQYWdlIH0gZnJvbSBcIi4vcm91dGVzL3dhdGNocGFnZVwiO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUm91dGVQYXJzZXIoKTtcblxuY29uc3QgaGlkZUFsbFBhZ2VzID0gKCkgPT4ge1xuICBjb25zdCBwYWdlRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnZVwiKTtcbiAgZm9yIChsZXQgcGFnZUVsZW1lbnQgb2YgcGFnZUVsZW1lbnRzKSB7XG4gICAgaWYgKCFwYWdlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG4gICAgICBwYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59O1xuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gIGhpZGVBbGxQYWdlcygpO1xuXG4gIHBhcnNlci5vblBhZ2VMb2FkZWQoUGFnZS5XYXRjaCwgV2F0Y2hQYWdlKTtcbiAgcGFyc2VyLm9uUGFnZUxvYWRlZChQYWdlLkVtYmVkLCBXYXRjaFBhZ2UpO1xuXG4gIHBhcnNlci5yZWFkeSgpO1xufTtcblxucnVuKCk7XG4iLCJleHBvcnQgY29uc3Qgc2V0TmV3SGFzaExvY2F0aW9uID0gKHN0cjogc3RyaW5nKSA9PiAobG9jYXRpb24uaGFzaCA9IGAjLyR7c3RyfWApO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vaGVscGVyc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVwYXJzZXJcIjtcbiIsImV4cG9ydCBlbnVtIFBhZ2Uge1xuICBJbmRleCA9IFwiXCIsXG4gIFdhdGNoID0gXCJ3YXRjaFwiLFxuICBFbWJlZCA9IFwiZW1iZWRcIixcbn1cblxuZXhwb3J0IGVudW0gUGFnZUV2ZW50IHtcbiAgUGFnZUxvYWRlZCA9IFwicGFnZUxvYWRlZFwiLFxuICBQYWdlVW5sb2FkZWQgPSBcInBhZ2VVbmxvYWRlZFwiLFxufVxuXG50eXBlIFBhZ2VFdmVudE1hbmFnZXIgPSB7XG4gIFtldmVudE5hbWUgaW4gUGFnZUV2ZW50XT86IFBhZ2VFdmVudENhbGxiYWNrTWFuYWdlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhZ2VFdmVudENhbGxiYWNrID0gKFxuICBwYWdlTmFtZTogUGFnZSxcbiAgcXVlcnlTdHJpbmc6IHN0cmluZ1xuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZCB8IFByb21pc2U8dW5kZWZpbmVkPjtcbnR5cGUgUGFnZUxvYWRlZENhbGxiYWNrID0gUGFnZUV2ZW50Q2FsbGJhY2s7XG5cbnR5cGUgUGFnZUV2ZW50Q2FsbGJhY2tNYW5hZ2VyID0ge1xuICBbcGFnZU5hbWUgaW4gUGFnZV0/OiBQYWdlRXZlbnRDYWxsYmFja1tdO1xufTtcblxudHlwZSBIYXNoTG9jYXRpb24gPSB7XG4gIHBhZ2U6IFBhZ2U7XG4gIHF1ZXJ5U3RyaW5nOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgUm91dGVQYXJzZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IG1fZXZlbnRIYW5kbGVyOiBQYWdlRXZlbnRNYW5hZ2VyID0ge307XG4gIHByaXZhdGUgbV9jdXJyZW50UGFnZTogUGFnZTtcblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRQYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1fY3VycmVudFBhZ2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1fY3VycmVudFBhZ2UgPSB0aGlzLnBhcnNlSGFzaExvY2F0aW9uKCkucGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VIYXNoTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMik7IC8vIGxvY2F0aW9uLmhhc2ggYWx3YXlzIHN0YXJ0cyB3aXRoIFwiIy9cIiwgc28gd2Ugc3RhcnQgYXQgaW5kZXggMVxuICAgIGNvbnN0IHNwbGl0VXJsID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgICBjb25zdCBwYWdlID0gc3BsaXRVcmxbMF0udG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHNwbGl0VXJsLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2UsXG4gICAgICBxdWVyeVN0cmluZzogcXVlcnlTdHJpbmcuam9pbihcIi9cIiksXG4gICAgfSBhcyBIYXNoTG9jYXRpb247XG4gIH07XG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEV2ZW50cyA9IChwYWdlRXZlbnQ6IFBhZ2VFdmVudCwgcGFnZTogUGFnZSkgPT4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLm1fZXZlbnRIYW5kbGVyW3BhZ2VFdmVudF0gfHxcbiAgICAgICF0aGlzLm1fZXZlbnRIYW5kbGVyW3BhZ2VFdmVudF0hW3BhZ2VdXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oYG5vIGV2ZW50cyB0byBkaXNwYXRjaCBmb3IgJHtwYWdlRXZlbnR9OiR7cGFnZX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1fZXZlbnRIYW5kbGVyW3BhZ2VFdmVudF0hW3BhZ2VdPy5mb3JFYWNoKChjYWxsYmFjaykgPT5cbiAgICAgIGNhbGxiYWNrKHBhZ2UsIHRoaXMucGFyc2VIYXNoTG9jYXRpb24oKS5xdWVyeVN0cmluZylcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlUm91dGVFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzaExvY2F0aW9uID0gdGhpcy5wYXJzZUhhc2hMb2NhdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRzKFBhZ2VFdmVudC5QYWdlVW5sb2FkZWQsIHRoaXMuY3VycmVudFBhZ2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1fY3VycmVudFBhZ2UgPSBoYXNoTG9jYXRpb24ucGFnZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudHMoUGFnZUV2ZW50LlBhZ2VMb2FkZWQsIHRoaXMuY3VycmVudFBhZ2UpO1xuICAgIH07XG5cbiAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gaGFuZGxlQ2hhbmdlO1xuICB9O1xuXG4gIHByaXZhdGUgb24gPSAoXG4gICAgcGFnZUV2ZW50OiBQYWdlRXZlbnQsXG4gICAgcGFnZTogUGFnZSxcbiAgICBjYWxsYmFjazogUGFnZUV2ZW50Q2FsbGJhY2tcbiAgKSA9PiB7XG4gICAgdGhpcy5tX2V2ZW50SGFuZGxlcltwYWdlRXZlbnRdID8/PSB7fTtcbiAgICB0aGlzLm1fZXZlbnRIYW5kbGVyW3BhZ2VFdmVudF0hW3BhZ2VdID8/PSBbXTtcblxuICAgIHRoaXMubV9ldmVudEhhbmRsZXJbcGFnZUV2ZW50XSFbcGFnZV0hLnB1c2goY2FsbGJhY2spO1xuICB9O1xuXG4gIHByaXZhdGUgcmVzZXRQYWdlVmlzaWJpbGl0eSA9IChwYWdlOiBQYWdlKSA9PiB7XG4gICAgY29uc3QgcGFnZUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhZ2VcIik7XG4gICAgZm9yIChsZXQgcGFnZUVsZW1lbnQgb2YgcGFnZUVsZW1lbnRzKSB7XG4gICAgICBpZiAocGFnZUVsZW1lbnQuaWQudG9Mb3dlckNhc2UoKSA9PT0gcGFnZSlcbiAgICAgICAgcGFnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGVsc2UgcGFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH07XG5cbiAgb25QYWdlTG9hZGVkID0gKHBhZ2U6IFBhZ2UsIGNhbGxiYWNrOiBQYWdlTG9hZGVkQ2FsbGJhY2spID0+IHtcbiAgICB0aGlzLm9uKFBhZ2VFdmVudC5QYWdlTG9hZGVkLCBwYWdlLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0UGFnZVZpc2liaWxpdHkocGFnZSk7XG4gICAgICBjYWxsYmFjayhwYWdlLCB0aGlzLnBhcnNlSGFzaExvY2F0aW9uKCkucXVlcnlTdHJpbmcpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUm91dGVFdmVudHMoKTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudHMoUGFnZUV2ZW50LlBhZ2VMb2FkZWQsIHRoaXMucGFyc2VIYXNoTG9jYXRpb24oKS5wYWdlKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGhpZGVFbGVtZW50cywgc2V0QXR0cmlidXRlcywgc2hvd0VsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgZ2V0VmlkZW8gfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCB7IHNldE5ld0hhc2hMb2NhdGlvbiB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IFBhZ2UsIFBhZ2VFdmVudENhbGxiYWNrIH0gZnJvbSBcIi4vcm91dGVwYXJzZXJcIjtcblxuZXhwb3J0IGNvbnN0IFdhdGNoUGFnZTogUGFnZUV2ZW50Q2FsbGJhY2sgPSBhc3luYyAocGFnZU5hbWUsIHF1ZXJ5U3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicGFnZSBsb2FkZWRcIiwgcGFnZU5hbWUsIHF1ZXJ5U3RyaW5nKTtcblxuICAvLyBUaGlzIGlzIGEgYml0IG9mIGEgZGlydHkgaGFjayB0byBzdXBwb3J0IHRoZSBSRVMgcHJldmlldyBVUkwsXG4gIC8vIHdoaWNoIGNvbWVzIGluIGFzIC8jL2VtYmVkLzpyZWRkaXRQb3N0SWQuIEluc3RlYWQgb2YgbW9kaWZ5aW5nXG4gIC8vIGEgYnVuY2ggb2YgcGFnZSBzaG93L2hpZGUgbG9naWMgaW4gcm91dGVwYXJzZXIudHMsIHdlJ2xsIGNoZWF0XG4gIC8vIGFuZCByZWRpcmVjdCB5b3UgdG8gdGhlIHdhdGNoIHBhZ2VcbiAgY29uc29sZS5sb2coYHBhZ2VOYW1lOiAke3BhZ2VOYW1lfWApO1xuICBpZiAocGFnZU5hbWUgPT09IFBhZ2UuRW1iZWQpIHtcbiAgICBzZXROZXdIYXNoTG9jYXRpb24oYCR7UGFnZS5XYXRjaH0vJHtxdWVyeVN0cmluZ31gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBxdWVyeVJlZGRpdFBvc3RJZCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiL1wiKVswXTtcbiAgZ2V0VmlkZW8ocXVlcnlSZWRkaXRQb3N0SWQpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaGlkZUVsZW1lbnRzKFtcIndhdGNoLWVycm9yXCJdKTtcbiAgICAgIHNob3dFbGVtZW50cyhbXCJ3YXRjaC12aWRlb0FyZWFcIl0pO1xuXG4gICAgICBjb25zdCB7IHJlZGRpdFBvc3RJZCwgcmVkZGl0UG9zdFRpdGxlLCBtaXJyb3JVcmwgfSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgICBpZiAocXVlcnlTdHJpbmcgPT09IFwicmFuZG9tXCIpIHtcbiAgICAgICAgc2V0TmV3SGFzaExvY2F0aW9uKGAke3BhZ2VOYW1lfS8ke3JlZGRpdFBvc3RJZH1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRyaWJ1dGVzKFwid2F0Y2gtdmlkZW9UaXRsZVwiLCB7XG4gICAgICAgIGNvbnRlbnQ6IHJlZGRpdFBvc3RUaXRsZSxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHJlZGRpdFBvc3RUaXRsZTtcblxuICAgICAgY29uc3QgdmlkZW9QbGF5ZXIgPSBzZXRBdHRyaWJ1dGVzPEhUTUxWaWRlb0VsZW1lbnQ+KFwid2F0Y2gtdmlkZW9QbGF5ZXJcIiwge1xuICAgICAgICBzcmM6IG1pcnJvclVybCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB2aWRlb0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdGNoLXZpZGVvQXJlYVwiKTtcblxuICAgICAgaWYgKHZpZGVvUGxheWVyICYmIHZpZGVvQXJlYSkge1xuICAgICAgICBoaWRlRWxlbWVudHMoW3ZpZGVvQXJlYV0pO1xuXG4gICAgICAgIHZpZGVvUGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJsb2FkZWRtZXRhZGF0YVwiLFxuICAgICAgICAgIChfZXZudCkgPT4ge1xuICAgICAgICAgICAgdmlkZW9QbGF5ZXIud2lkdGggPSB2aWRlb1BsYXllci52aWRlb1dpZHRoO1xuICAgICAgICAgICAgdmlkZW9QbGF5ZXIuaGVpZ2h0ID0gdmlkZW9QbGF5ZXIudmlkZW9IZWlnaHQ7XG4gICAgICAgICAgICB2aWRlb0FyZWEuc3R5bGUud2lkdGggPSBgJHt2aWRlb1BsYXllci52aWRlb1dpZHRofXB4YDtcbiAgICAgICAgICAgIHZpZGVvQXJlYS5zdHlsZS5oZWlnaHQgPSBgJHt2aWRlb1BsYXllci52aWRlb0hlaWdodH1weGA7XG5cbiAgICAgICAgICAgIHNob3dFbGVtZW50cyhbdmlkZW9BcmVhXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRyaWJ1dGVzKFwid2F0Y2gtdmlkZW9Eb3dubG9hZExpbmtcIiwge1xuICAgICAgICBocmVmOiBgJHttaXJyb3JVcmx9P2RsPTFgLFxuICAgICAgfSk7XG5cbiAgICAgIHNldEF0dHJpYnV0ZXMoXCJ3YXRjaC1vcGVuUmVkZGl0VGhyZWFkXCIsIHtcbiAgICAgICAgaHJlZjogYGh0dHBzOi8vcmVkZGl0LmNvbS8ke3F1ZXJ5UmVkZGl0UG9zdElkfWAsXG4gICAgICB9KTtcblxuICAgICAgd2luZG93Lm9ub3JpZW50YXRpb25jaGFuZ2UgPSAoX2V2bnQpID0+IHtcbiAgICAgICAgY29uc3QgdmlkZW9QbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICBcIndhdGNoLXZpZGVvUGxheWVyXCJcbiAgICAgICAgKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuICAgICAgICAvLyBvZmZzZXRQYXJlbnQgd2lsbCBiZSBudWxsIGlmIHRoaXMgZWxlbWVudCdzIHBhcmVudCBpcyBoaWRkZW5cbiAgICAgICAgaWYgKCF2aWRlb1BsYXllciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gOTApIHtcbiAgICAgICAgICB2aWRlb1BsYXllci5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICAgIHZpZGVvUGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cub3JpZW50YXRpb24pO1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBoaWRlRWxlbWVudHMoW1wid2F0Y2gtdmlkZW9BcmVhXCJdKTtcbiAgICAgIHNob3dFbGVtZW50cyhbXCJ3YXRjaC1lcnJvclwiXSk7XG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgY29uc3Qgd2F0Y2hFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0Y2gtZXJyb3JcIik7XG4gICAgICBpZiAoIXdhdGNoRXJyb3IpIHJldHVybjtcblxuICAgICAgd2F0Y2hFcnJvci50ZXh0Q29udGVudCA9IGVycjtcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi90dWNrYm90XCI7XG4iLCJpbXBvcnQgeyBHZXRWaWRlb1Jlc3BvbnNlIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvdHVja2JvdFwiO1xuXG5jb25zdCBBUElfVVJMID0gYGh0dHBzOi8vYXBpLnR1Y2tib3QudHZgO1xuXG5jb25zdCBidWlsZFVybCA9IChzdHI6IHN0cmluZykgPT4gYCR7QVBJX1VSTH0vJHtzdHJ9YDtcblxuZXhwb3J0IGNvbnN0IGdldFZpZGVvID0gYXN5bmMgKHJlZGRpdFBvc3RJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChidWlsZFVybChgcHVibGljL3ZpZGVvLyR7cmVkZGl0UG9zdElkfWApLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcblxuICBpZiAoIXJlc3Aub2spIHtcbiAgICBjb25zb2xlLmVycm9yKHJlc3Auc3RhdHVzKTtcbiAgICB0aHJvdyByZXNwLnN0YXR1c1RleHQ7XG4gIH1cblxuICByZXR1cm4gKHJlc3AuanNvbigpIGFzIHVua25vd24pIGFzIEdldFZpZGVvUmVzcG9uc2U7XG59O1xuIl19
