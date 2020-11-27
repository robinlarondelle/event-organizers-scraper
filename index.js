const puppeteer = require('puppeteer');


run = () => {
    launchBrowser()
        .then(browser => {
            return navigateToUrl(browser, "https://tickevents.nl")
                .then(page => {
                    closeBrowser(browser)
                })
        })
}


launchBrowser = () => {
    console.log("Creating headeless browser");
    return new Promise((resolve, reject) => {
        puppeteer.launch()
            .then(page => resolve(page))
            .catch(error => reject(error))
    })
}


navigateToUrl = (browser, url) => {
    console.log("Creating new page with url " + url);
    return new Promise(resolve => {
        browser.newPage()
            .then(page => {
                return page.goto(url)
            })
            .then(page => resolve(page))
            .catch(error => reject(error))
    })
}


closeBrowser = (browser) => {
    console.log("Closing browser");
    return new Promise((resolve, reject) => {
        browser.close()
            .then(resolve())
            .catch(error => reject(error))
        console.log("Browser closed");
    })
}


run()