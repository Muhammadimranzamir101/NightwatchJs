module.exports = {
    "Interacting With Elements Demo" : (browser) => {
        browser
        .url('https://ultimateqa.com/filling-out-forms')
        .waitForElementVisible('#et_pb_contact_name_0')
        .waitForElementVisible('button[name ="et_builder_submit_button"]:nth-child(1)')
        .moveToElement('button[name ="et_builder_submit_button"]:nth-child(1)',10,10)
        .click('button[name="et_builder_submit_button"]:nth-child(1)')
        .pause('2000')
        .setValue('#et_pb_contact_name_0','My name is imran')
        .pause('2000')
        .clearValue('#et_pb_contact_name_0')
        .submitForm('#et_pb_contact_form_0  div.et_pb_contact > form')
        .pause(3000)
        // .execute("document.querySelector('#et_pb_contact_form_0  div.et_pb_contact > form.submit()"); //Not Wroking
        
    }
}