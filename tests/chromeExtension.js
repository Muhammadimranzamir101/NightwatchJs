module.exports = {
    "Installing Adblock" : (client)=>{
        client
        // .url('https://chrome.google.com/webstore/category/extensions')
        // .windowMaximize()
        // .click('#searchbox-input')
        // .setValue('#searchbox-input','adblock')
        // .keys(client.Keys.ENTER)
        // .click('xpath',"//div[text()='AdBlock — best ad blocker']")
        // .click('css selector','div[aria-label="Add to Chrome"] > div.g-c-Hf')
        // .pause(8000)
        // .getAlertText((results) => {
        //             console.log(results.value)
        //         })
        // .pause(1000)
        // .acceptAlert()
        // // .keys(client.Keys.ARROW_LEFT)
        // // .pause(2000)
        // // .keys(client.Keys.ENTER)
        // // .pause(20000)
        .url("https://the-internet.herokuapp.com/javascript_alerts")
        .click('#content > div > ul > li:nth-child(1) > button')
        .pause(5000)
        .acceptAlert()
        
    }
}