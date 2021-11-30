module.exports ={
    'demo Test' : function (browser){
        browser
        .url("https://www.ultimateqa.com/filling-out-forms")
        .getText('button[name ="et_builder_submit_button"]', (resultText)=>{
            console.log(resultText);
            // console.log(resultText.value); //.value not working
        })
        .setValue('#et_pb_contact_message_0','this')
        .getValue('#et_pb_contact_message_0',(resultValue)=>{
            console.log(resultValue);
        })
        .isVisible('#et_pb_contact_message_0',(result)=>{
             console.log(result);
        })

    }
}