import configurator from "@kyleratti/configurator";

type AppConfig = {
  tuckbot: {
    /**
     * tuckbot-api configuration
     */
    api: {
      /**
       * The full URL to the root of the API server with no trailing '/'
       * @example https://api.tuckbot.tv
       */
      url: string;
    };

    /**
     * tuckbot-frontend configuration
     */
    frontend: {
      /**
       * The Google Analytics tracking ID
       * If not set, Google Analytics will not be included on the page build
       */
      googleAnalyticsId: string;
    };
  };
};

export const config = configurator<AppConfig>({
  tuckbot: {
    api: {
      url: {
        env: "TUCKBOT_API_URL",
        required: true,
      },
    },
    frontend: {
      googleAnalyticsId: {
        env: "TUCKBOT_GOOGLE_ANALYTICS_ID",
      },
    },
  },
});
