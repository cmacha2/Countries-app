const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    slowMo: 10,
    headless: false,
    defaultViewport: { width: 1366, height: 768 },
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });

  const page = await browser.newPage();

  try {
    await page.goto("http://localhost:3000/home", { waitUntil: "networkidle2" });

    console.log('entrando')
    await page.waitForTimeout(6000);
    const welcomeButton = await page.waitForSelector(
      "#welcomeButton"
    );
    await welcomeButton.click();

    await page.waitForTimeout(6000);
    const changeMode = await page.waitForSelector(
      "#changeMode"
    );
    await changeMode.click();

    const filterContienents = await page.waitForSelector("#Continents");
    await filterContienents.click();

    const NorthAmerica = await page.waitForSelector(
      "#Continents > option:nth-child(3)"
    );
    await NorthAmerica.click();

    await page.waitForTimeout(2000);
    const searchBox = await page.waitForSelector("#searchBox");
    await searchBox.click();

    const searchInput = await page.waitForSelector("#searchInput");
    await searchInput.click();
    await page.keyboard.type("Cuba");

    await page.waitForTimeout(2000);
    const buttonReadMore = await page.waitForSelector("#readMore");
    await buttonReadMore.click();

    const buttonBack = await page.waitForSelector("#buttonBack");
    await buttonBack.click();

    await page.waitForTimeout(2000);
    const ButtoncreateActivity = await page.waitForSelector(
      "#buttonCreateActivity"
    );
    await ButtoncreateActivity.click();

    await page.waitForTimeout(500);
    const inputName = await page.waitForSelector("#name");
    await inputName.click();
    await page.keyboard.type("Swimming");

    await page.waitForTimeout(500);
    const inputDuration = await page.waitForSelector("#duration");
    await inputDuration.click();
    await page.keyboard.type("2 horas");

    await page.waitForTimeout(500);
    const RadioDifficulty = await page.waitForSelector("#difficulty3 > span");
    await RadioDifficulty.click();

    await page.waitForTimeout(500);
    const RadioSeason = await page.waitForSelector("#summer > span");
    await RadioSeason.click();

    await page.waitForTimeout(500);
    const SelectCountries = await page.waitForSelector("#selectCountries");
    await SelectCountries.click();
    const SelectCuba = await page.waitForSelector(
      "#selectCountries > option:nth-child(117)"
    );
    await SelectCuba.click();

    const ButtonCreate = await page.waitForSelector("#buttonCreate");
    await ButtonCreate.click();

    await page.waitForTimeout(500);
    const ButtonClose = await page.waitForSelector("#buttonClose");
    await ButtonClose.click();

    await page.waitForTimeout(500);
    const ButtonBackActivity = await page.waitForSelector(
      "#backButtonActivity"
    );
    await ButtonBackActivity.click();

    await page.waitForTimeout(500);
    const chatBotBtn = await page.waitForSelector("#chatbotMainButton");
    await chatBotBtn.click();

    await page.waitForTimeout(500);
    const InputChatBot = await page.waitForSelector("#chatbotMainButton");
    await InputChatBot.click();
    await page.keyboard.type("more information");
    await page.keyboard.press("Enter");

    await page.keyboard.type("Search Cuba");
    await page.keyboard.press("Enter");

    await page.keyboard.type(
      "In this way my automated test with puppeteer ends, I hope there was your"
    );
    await page.keyboard.press("Enter");
  } catch (error) {
    console.log(error);
  }

  await browser.close();
})();
