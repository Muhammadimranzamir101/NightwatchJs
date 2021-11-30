

module.exports = {

    url:  function(){
        return `${this.api.launchUrl}/filling-out-forms/`
    },

    elements :{
        leftFormName : '#et_pb_contact_name_0',
        leftFormMessage : '#et_pb_contact_message_0',
        leftFormSubmitButton : "button[name='et_builder_submit_button']:nth-child(1)",
        form : '#et_pb_contact_form_0 form',
        verificationLabel : '#et_pb_contact_form_0 div:nth-child(1)'
        
    },
    
    commands :[
        {
           
            enterNameAndMessage(name, message){
                return this
                    .setValue('@leftFormName',name)
                    .setValue('@leftFormMessage',message)
            },
            
            submitLeftForm(){
                return this.click('@leftFormSubmitButton')
            }
        }
    ]
}