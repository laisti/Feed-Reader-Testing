/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This is the second test - it loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		it('feeds URL defined', function() {
			for (var i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}
		});

		/* This is the third test - it loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		it('feeds name defined', function() {
			for (var i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}
		});
	});


	/* This is the second test suite "The menu" - a test suite contains
	 * a related set of tests. This suite is all about the visibility of body by default and on 'click' event.
	 */
	describe('The menu', function() {
		/* This is the first test in this suite - it ensures the menu element is
		 * hidden by default.
		 */
		it('menu is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		 /* This is the second test in this suite - it ensures the menu changes
		  * visibility when the menu icon is clicked.
		  */
		it('the menu changes visibility when the menu icon is clicked', function(){
			$('a.menu-icon-link').trigger('click');
			// the menu displays when clicked
			expect($('body').hasClass('menu-hidden')).toBe(false);

			$('a.menu-icon-link').trigger('click');
			// the menu hides when clicked again
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});

	/* This is the third test suite "Initial Entries".
	 * This suite is about the view of nonempty feed.
	 */
	describe('Initial Entries', function() {
		/* This test ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */

		// Call 'beforeEach' takes an optional single argument that should be called when the async work is complete.
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		// This spec will not start until the done function is called in the call to beforeEach above. And this spec will not complete until its done is called.
		it('after completion of loadFeed, there is at least a single .entry element within the .feed container', function(done) {
			expect($('.entry').length).toBeGreaterThan(0);
			done();
		});
	});

	/* This is the forth test suite "New Feed Selection".
	 * This suite is about the changing the feeds content when they are chosen.
	 */
	describe('New Feed Selection', function() {
		/* This test ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 */

		var previousContent;

		// for the first time the first feed is chosen, and its content is saved to the variable 'previousContent'
		beforeEach(function(done) {
			loadFeed(0, function() {
				previousContent = $('.feed').html();
				done();
			});
		});

		// for the second time the second feed is chosen, and its content will not to be the same as the first feed
		it('content is changed when a new feed is loaded', function(done) {
			loadFeed(1, function() {
				expect($('.feed').html() !== previousContent).toBe(true);
				done();
			});
		});
	});
}());
