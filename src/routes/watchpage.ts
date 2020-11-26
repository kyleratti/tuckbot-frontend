import { hideElements, setAttributes, showElements } from "../dom";
import { getVideo } from "../services";
import { setNewHashLocation } from "./helpers";
import { Page, PageEventCallback } from "./routeparser";

export const WatchPage: PageEventCallback = async (pageName, queryString) => {
  console.log("page loaded", pageName, queryString);

  // This is a bit of a dirty hack to support the RES preview URL,
  // which comes in as /#/embed/:redditPostId. Instead of modifying
  // a bunch of page show/hide logic in routeparser.ts, we'll cheat
  // and redirect you to the watch page
  console.log(`pageName: ${pageName}`);
  if (pageName === Page.Embed) {
    setNewHashLocation(`${Page.Watch}/${queryString}`);
    return;
  }

  const queryRedditPostId = queryString.split("/")[0];
  getVideo(queryRedditPostId)
    .then((result) => {
      hideElements(["watch-error"]);
      showElements(["watch-videoArea"]);

      const { redditPostId, redditPostTitle, mirrorUrl } = result.data;

      if (queryString === "random") {
        setNewHashLocation(`${pageName}/${redditPostId}`);
        return;
      }

      setAttributes("watch-videoTitle", {
        content: redditPostTitle,
      });

      document.title = redditPostTitle;

      const videoPlayer = setAttributes<HTMLVideoElement>("watch-videoPlayer", {
        src: mirrorUrl,
      });

      const videoArea = document.getElementById("watch-videoArea");

      if (videoPlayer && videoArea) {
        hideElements([videoArea]);

        videoPlayer.addEventListener(
          "loadedmetadata",
          (_evnt) => {
            videoPlayer.width = videoPlayer.videoWidth;
            videoPlayer.height = videoPlayer.videoHeight;
            videoArea.style.width = `${videoPlayer.videoWidth}px`;
            videoArea.style.height = `${videoPlayer.videoHeight}px`;

            showElements([videoArea]);
          },
          false
        );
      }

      setAttributes("watch-videoDownloadLink", {
        href: `${mirrorUrl}?dl=1`,
      });

      setAttributes("watch-openRedditThread", {
        href: `https://reddit.com/${queryRedditPostId}`,
      });

      window.onorientationchange = (_evnt) => {
        const videoPlayer = document.getElementById(
          "watch-videoPlayer"
        ) as HTMLVideoElement;
        // offsetParent will be null if this element's parent is hidden
        if (!videoPlayer === null) return;

        if (window.orientation === 0) {
          document.exitFullscreen();
        } else if (window.orientation === 90) {
          videoPlayer.requestFullscreen();
          videoPlayer.play();
        }
        console.log(window.orientation);
      };
    })
    .catch((err) => {
      hideElements(["watch-videoArea"]);
      showElements(["watch-error"]);

      console.error(err);

      const watchError = document.getElementById("watch-error");
      if (!watchError) return;

      watchError.textContent = err;
    });
};
