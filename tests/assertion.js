module.exports = {
    // "Expect Library" : (client) =>{
    //     client
    //     .url('https://ultimateqa.com/filling-out-forms/')
    //     // .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit')
    //     .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.to.equal('Submit') //works one at a time
    //     // .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.to.contain('Submit')
    // },

    "Assert Library" : (client) =>{
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        // .assert.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        // .verify.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        // .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)', (result)=>{
        //     console.log(result);
        // })
        .setValue('#et_pb_contact_name_0','Imran Zamir')
        .assert.valueContains('#et_pb_contact_name_0','Zamir')
        .verify.valueContains('#et_pb_contact_name_0','Zamir')
        .verify.urlEquals('https://ultimateqa.com/filling-out-forms/')
        .expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')
       // .verify.title('Filling Out Forms - Ultimate QA')
       // .verify.attributeContains('#et_pb_contact_name_0','placeholder',"Name")
       // .verify.attributeContains('button[name="et_builder_submit_button"]:nth-child(1)','name','et_builder_submit_button')
       // .verify.containsText('button[name="et_builder_submit_button"]:nth-child(1)','Submit')
        // .expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')

        client
        .verify.title('Filling Out Forms - Ultimate QA')
        .verify.attributeContains('#et_pb_contact_name_0','placeholder',"Name")
        .verify.attributeContains('button[name="et_builder_submit_button"]:nth-child(1)','name','et_builder_submit_button')
        .verify.containsText('button[name="et_builder_submit_button"]:nth-child(1)','Submit')
         .expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name')


    } 
}