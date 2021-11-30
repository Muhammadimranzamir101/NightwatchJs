module.exports = {
    "Should perform key strokes": (client) => {
        client
        .url('[https://ultimateqa.com/filling-out-forms/](https://ultimateqa.com/filling-out-forms/)', () => {
            console.log(JSON.stringify(client.Keys, null, '\t'))
        })
        // .url('https://ultimateqa.com/filling-out-forms/')
        // .setValue('#et_pb_contact_message_0','Testing Purpose')
        // .pause(3000)
        // .keys(client.Keys.BACK_SPACE)
        // .keys(client.Keys.ENTER)
        // .pause(3000)
        // .setValue('#et_pb_contact_message_0','Testing')
        // .pause(3000);
     }

    //  "Should Perform right Click":(client) =>{
    //      client
    //      .url('https://ultimateqa.com/filling-out-forms/')
    //      .moveToElement('button[name ="et_builder_submit_button"]:nth-child(1)',10,10)
    //      .mouseButtonClick('right')
    //      .pause(2000)
    //      .moveToElement("#et_pb_contact_message_0",10,10)
    //      .mouseButtonClick('right') //Not Working Here
    //      .pause(3000);
    //     //  .moveTo("#et_pb_contact_message_0",10,10) //Not Working
    //     //  .mouseButtonClick('right')
    //     //  .mouseButtonClick(2) //working
    //     //  .pause(3000);
    //  },

    // "Should perform windows navigation" : (client)=>{
    //     client
    //     .openNewWindow('window')
    //     .pause(2000)
    //     .openNewWindow('tab')
    //     .pause(2000)
    //     .url('https://ultimateqa.com/filling-out-forms/')
    //     .openNewWindow('tab')
    //     .pause(1000)
    //     .fullscreenWindow()
    //     .pause(1000)
    //     // .windowPosition('current',(result)=>{
    //     //     console.log(result.value);
    //     // })
    //     .windowMaximize()
    //     .pause(1000)
    //     // .windowPosition('current',0,0,(result)=>{
    //     //     console.log(result.value);
    //     // })
    //     .windowHandles((result) =>{
    //         // const newWindow = result.value[1];
    //         // client.switchWindow(newWindow)
    //         console.log(result.value);
    //     })
    //     .pause(2000)
    // },

    // "Should interact with alerts" : (client)=>{
    //     client
    //     .url('http://demo.automationtesting.in/Alerts.html')
    //     .pause(3000)
    //     .click('#OKTab button')
    //     .getAlertText((results) => {
    //         console.log(results.value)
    //     })
    //     .acceptAlert()
    // }
}