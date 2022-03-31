const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //maximize the window
  await driver.manage().window().maximize();

  //1. Ava leht, logi lehe tiitel

  await driver.get("https://www.weekendshoes.ee");

  let title = await driver.getTitle();
  console.log("1. Title is:", title);

//2. Mine: https://www.weekendshoes.ee/naistele/saapad.html

  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
  console.log("2. Leheküljel https://www.weekendshoes.ee/naistele/saapad.html");
  await driver.sleep(3000);
  

// 3. Lisa üks vabalt valitud toode soovikorvi
  await driver.get("https://www.weekendshoes.ee/jana-poolsaapad-485872.html");
  await driver.findElement(By.css('#maincontent > div.columns > div > div.product.media > div.product-addto-links > a')).click();
  await driver.sleep(3000);
  console.log("3. Toode lisatud soovikorvi")
  
   
//  4. ava toode soovikorvi kaudu
  await driver.get("https://www.weekendshoes.ee/");
  await driver.sleep(3000);
  await driver.findElement(By.id('wishlist-link')).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath('//*[@id="miniwishlist-content-wrapper"]/div/div/div/button')).click()
  console.log("4. Soovikorvis");
  await driver.sleep(3000);
  await driver.findElement(By.xpath("/html/body/div[2]/main/div[2]/div/form/div[1]/ol/li/div/a")).click();
  console.log("4. Toode avatud soovikorvi kaudu");
  await driver.sleep(3000);
    
 // 5. Lisa toode ostukorvi

  await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
  await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[3]/div[1]')).click();
  await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
  await driver.sleep(6000);
  console.log("5. Toode lisatud ostukorvi");
   
//  6. Liigu ostukorvi
await driver.get("https://www.weekendshoes.ee/checkout/cart/");
  // await driver.findElement(By.className('action viewcart')).click();
  //await driver.findElement(By.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[4]/div/a')).click();
await driver.sleep(3000);
console.log("6. Ostukorvis");


// 7. Suurenda ostukorvis toote kogust 1 võrra
await driver.findElement(By.className('action qty increase-qty increase-item-qty-btn')).click();
await driver.sleep(6000);
console.log("7. Kogus suurendatud");

//8. Eemalda toode ostukorvist

await driver.findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a')).click();
await driver.sleep(3000);
console.log("8. Toode eemaldatud");

// 9.   Kasuta otsingut: "Jope"

  
  await driver.get("https://www.weekendshoes.ee");
  await driver.findElement(By.id("search")).sendKeys('Jope',Key.RETURN);
  await driver.sleep(6000);
  console.log("9. Jope leitud");

// 10. Filtreeri tulemused "Populaarsus" alusel

await driver.findElement(By.id("sorter")).click();
await driver.findElement(By.xpath('//*[@id="sorter"]/option[1]')).click();
console.log("10. Populaarsemad filtreeritud");
}

example();