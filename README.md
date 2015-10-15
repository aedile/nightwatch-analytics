# nightwatch-analytics
Use nightwatch.js to test analytics requests and data layer integrity. 

## Setup
1. Clone this repo locally.
2. Run `npm install`.

## Testing
1. When ready to start testing, run `npm test`.
2. If you'd like to only run tests without updating webdriver, run `npm run nightwatch`.
3. Directly reference nightwatch if you'd like to only run specific test suites like so `./node_modules/nightwatch/bin/nightwatch <suite>`.

## Webdriver Update
1. Running `npm test` automatically updates webdrivers for easy sanity.
2. You can run `npm run webdriver-update` to manually update webdrivers.