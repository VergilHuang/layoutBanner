// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test content message block and form table block are shown.': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.sp-box')
      .assert.containsText('h1', 'Welcome to Blackwell Global')
      .assert.elementPresent('.sp-form')
      .assert.containsText('h2', 'Hire a advisor')
      .end();
  }
};
