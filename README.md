# nightwatch-analytics
Use nightwatch.js to test analytics requests and data layer integrity.

This is a stock nightwatch install with an extra command and an extra assertion. The command will execute and return the results of `window.performance.getEntries()`.  The assertion calls this command and tests for a beacon string and allows optional matching of querystring parameters.  This effectively allows you to measure analytics requests.  Be sure to take into account wait/load times when using this assertion.

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

## TODO
1. Future iterations will implement a `waitForRequest` variant, which will perform the same comparison, but tied to a timeout to allow for processing.
2. Replace rackspace.com-specific test with a generic test.



