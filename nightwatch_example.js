module.exports = {
  'Testing Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'otaviormachado github')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .assert.containsText('#main', 'https://github.com/OtavioRMachado')
      .end();
  }
};
