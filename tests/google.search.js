module.exports = {
    "Google Search" : (client)=>{
        client
        .url('https://www.google.com/')
        .windowMaximize()
        .setValue("input[name='q']",'Gmail')
        .pause(3000)
        .keys(client.Keys.ENTER)
        .pause(5000)
        .verify.containsText("div[id='result-stats']",'result')
        client.elements('css selector', "div[class='g']", function (result) {
            console.log(result.value.length)
        });
        client
        console.log("jjjj")
    }
}