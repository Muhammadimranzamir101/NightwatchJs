var count=0;
module.exports = {
    
    "Amazon Search" : async function(client){
        
        await client
        .url("https://www.amazon.com/")
        .windowMaximize()
        .click('#searchDropdownBox')
        .click("option[value='search-alias=stripbooks']")
        .verify.containsText("option[value='search-alias=stripbooks']","Books")
        .setValue('#twotabsearchtextbox','Java')
        .keys(client.Keys.ENTER)
        .verify.containsText("div.sg-col-inner  > .a-spacing-top-small > span[dir='auto']:nth-child(1)",'result')
        .elements('css selector', "div[data-component-type='s-search-result']", function (result) {
        count = result.value.length;  
        console.log("Total Search Results : ",count);
        // printCount(count);
        });

        console.log("Total Search Results : ",count);
    }
}

