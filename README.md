# tuckbot-frontend

https://tuckbot.tv/

The web-based frontend for Tuckbot that serves video content to visitors. It is built in React and deployed to GitHub Pages.

When loading a video, the application will make an API call to [tuckbot-api](https://github.com/kyleratti/tuckbot-api) in order to retrieve the title and URL of the video you're attempting to watch.

## Installation

This project is set up to accomodate local development and intends to be built and deployed to a web server for production. It was designed for deployment to GitHub Pages, so while a web server is built in, it's only for development purposes and not suitable for production use.

### Prerequisites

- Node `v12` or newer

### Setting Up

1. Clone the repository
2. Run `npm i` to install dependencies
3. Configure your `.env` variables (`.env.example` is included)
4. Build with `npm run build`
5. Start `webpack-dev-server` with `npm run dev`
6. Open http://127.0.0.1:8080/ in your browser

Note that the application won't do much unless [tuckbot-api](https://github.com/kyleratti/tuckbot-api) is up and running.

By the way, if you click the dog logo four times, you get to see the dog that this is named after :).
