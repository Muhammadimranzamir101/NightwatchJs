module.exports =    {
    'demo Test' : function(browser) {
        browser
        .url('https://ultimateqa.com/filling-Out-forms')
        .waitForElementVisible('button[name="et_builder_submit_button"]','Submit button is visible')
        // .waitForElementNotVisible('button[name="et_builder_submit_button"]','Submit button is not visible') //Working
        .waitForElementPresent('button[name="et_builder_submit_button"]','Submit button is Present')
        // .waitForElementNotPresent('button[name="et_builder_submit_button"]','Submit button is Not Present') //Working
        .waitForElementPresent('#et_pb_contact_message_0',2000)
        .waitForElementPresent('textarea[name="et_pb_contact_message_0"]',2000)
        .element('css selector','input[type="text"]',function (result) {
            console.log(result.value);
        });
    }
}