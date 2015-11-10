## Feed Reader Testing

My challenge was to write some tests for given application using Jasmine.

### Getting started

Download this repository to your computer and open index.html in any browser.

### What have done

- Had written a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- Had written a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- Had written a new test suite named "The menu".
- Had written a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
- Had written a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- Had written a test suite named "Initial Entries".
- Had written a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- Had written a test suite named "New Feed Selection".
- Had written a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


