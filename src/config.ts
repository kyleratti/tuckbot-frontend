import { configurator } from "@kyleratti/configurator";

type AppConfig = {
  tuckbot: {
    api: {
      url: string;
    };
    frontend: {
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
