module.exports = { 
    // beforeEach:(client)=>{
    //     client.url('https://www.ultimateqa.com/filling-out-forms')
    // },

    'Filling out form': (client) => { 
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .maximizeWindow()
        // .waitForElementVisible('#et_pb_contact_name_0') 
        if(client.isVisible({selector : '#et_pb_contact_name_0', timeout: 1000}))
            
        {
            client.setValue('#et_pb_contact_name_0','Imran')
            client.click('button[name ="et_builder_submit_button"]:nth-child(1)')
        }

        client.pause(3000)
        
        // client.waitForElementVisible('#et_pb_contact_message_0')
        // .setValue('#et_pb_contact_message_0','My name is imran')
        // .click('button[name ="et_builder_submit_button"]:nth-child(1)')
        // .verify.containsText('#et_pb_contact_form_0 div.et-pb-contact-message','Thanks for contacting us')
        // .saveScreenshot('./screenshots/FormError.png')
    },

    // 'Filling Empty Form' : (client)=>{
    //     client
    //     .click('button[name ="et_builder_submit_button"]:nth-child(1)')
    //     .verify.containsText('#et_pb_contact_form_0 div:nth-child(1)','Please, fill in the following fields:\nName\nMessage')
    // },

    // after:(client)=>{
    //     client.end();
    // }
} 