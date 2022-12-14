const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {

    // navigate to url with party ID
    await driver.get('https://agar.io/#N2BL2H');

    await driver.wai
    // click the play button
    await driver.findElement(By.id('#play')).click();

    driver.executeScript("document.querySelector('#play').style.border = '5px solid red'");

    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts( { implicit: 10000 } );
  } finally {
    await driver.quit();
  }
})();