 module.exports = {
     "Confirming From Page Title" : (client) => { //Name of the test.
        client.url('https://ultimateqa.com/filling-Out-forms') //url of the page
        .waitForElementVisible("body")
        .assert.title('Filling Out Forms - Ultimate QA');
     }
 }