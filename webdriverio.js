var assert = require('assert');
describe('webdriver.io page', function() {
    it('Simple google search', function () {
        browser.url('https://www.google.com/');
        browser.element('[name="q"]').setValue("otaviormachado github");
        browser.element('[name="btnK"]').click();
        assert.ok(browser.getSource().includes('https://github.com/OtavioRMachado'));
    });
});
