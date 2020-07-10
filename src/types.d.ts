declare const API_SERVER_ROOT: string;
declare const GOOGLE_ANALYTICS_TRACKING_ID: string;

declare module "*.png" {
  const content: string;
  export default content;
}
