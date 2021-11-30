const dragAndDrop = require('html-dnd').codeForSelectors

//Page Object
module.exports = {

    '@tags' : ['Login'],
    "Herokuapp Login" : (client)=>{

        const page = client.page.herokuPageObject();

        page
            .navigate()
            .clickBtn('@LoginBtnSelector')
            .setFields('@userNameSelector','tomsmith')
            .setFields('@passwordSelector','SuperSecretPassword!')
            .clickBtn('@btnLoginSelector')
            .verify.containsText('@loginLabelSelector','You logged into a secure area!')
            .clickBtn('@btnLogOutSelector')
            .verify.containsText('@logoutLabelSelector','You logged out of the secure area!')
            .pause(1000)
    },

//     '@tags' : ['DropDown'],
//     "DropDown Menu" : (client)=>{

//         const page = client.page.herokuPageObject();
//         const option =2;

//         page
//             .navigate()
//             .clickBtn('@dropDownBtnSelector')
//             .ddOptionSelector('@dropDownListSelector',option)
//             .verify.containsText(`option[value="${option}"]`,option)
//             // .ddAssertOption(option)
//             .pause(1000)

//     },

//     '@tags' : ['Hover'],
//     "Hover Option" : (client)=>{
        
//         const page = client.page.herokuPageObject();
//         const option =3;

//         page
//             .navigate()
//             .clickBtn('@hoverBtnSelector')
//             .moveToPicture(option)
//             .verify.containsText(`.figure:nth-of-type(${option}) .figcaption>h5`,`user${option}`)
//             .pause(1000)
//     },

//     '@tags' : ['DnD'],
//     "Drag and Drop" : (client)=>{
//         const page = client.page.herokuPageObject();

//         page
//             .navigate()
//             .clickBtn('@DragnDropBtnSelector')
//             client
//             .execute(dragAndDrop,['#column-a','#column-b'])
//             // .dragandDrop('@boxASelector','@boxBSelector')
//             .pause(10000)
//     }
}

// module.exports = {
//     // "Herokuapp Login": (client) => {
//     //     client
//     //         .url('https://the-internet.herokuapp.com/')
//     //         .pause(2000)
//     //         .click("a[href='/login']")
//     //         .pause(2000)
//     //         .verify.containsText('div[class="example"] > h2', "Login Page")
//     //         .setValue('#username', 'tomsmith')
//     //         .setValue('#password', 'SuperSecretPassword!')
//     //         .click('.fa-sign-in')
//     //         .verify.containsText('#flash', 'logged into')
//     //         .pause(1000)
//     //         .click("a[href='/logout']")
//     //         .verify.containsText('#flash', 'logged out')
//     //         .pause(1000)
//     // },

//     // "DropDown menu": (client) => {
//     //     client
//     //         .url('https://the-internet.herokuapp.com/')
//     //         .click("a[href='/dropdown']")
//     //         .verify.containsText('div[class="example"]>h3', 'Dropdown')
//     //         .click('#dropdown')
//     //         .click("option[value='1']")
//     //         .pause(3000)
//     //         .verify.containsText("option[value='1']","Option 1")
//     //         .pause(2000)
//     // },

//     // "HoverOption" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click("a[href='/hovers']")
//     //     .verify.containsText('div[class="example"]>h3','Hovers')
//     //     .moveToElement('.figure:nth-of-type(1)',10,10)
//     //     .verify.containsText(".figure:nth-of-type(1) .figcaption>h5","user1")
//     //     .pause(2000)
//     //     .moveToElement('.figure:nth-of-type(2)',10,10)
//     //     .verify.containsText(".figure:nth-of-type(2) .figcaption>h5","user2")
//     //     .pause(2000)
//     //     .moveToElement('.figure:nth-of-type(3)',10,10)
//     //     .verify.containsText(".figure:nth-of-type(3) .figcaption>h5","user3")
//     //     .pause(2000)

//     // },

    
//     // "Drag and Drop" : function(client){
//     //    client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click("a[href='/drag_and_drop']")
//     //     .pause(1000)
//     //     .verify.containsText("div[class='example']>h3",'Drag and Drop')
//     //     .execute(dragAndDrop,['#column-a','#column-b'])
//     //     .pause(2000)
//     //     // .moveToElement('#column-a',0,0)
//     //     // .mouseButtonDown(0)
//     //     // .pause(2000)
//     //     // .moveToElement('#column-b',10,10)
//     //     // .mouseButtonUp(0)
//     //     // .pause(2000)
//     // },

//     // "Key Presses" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click("a[href='/key_presses']")
//     //     .pause(1000)
//     //     .verify.containsText("div[class='example']>h3",'Key Presses')
//     //     .setValue('#target','A')   
//     //     // .keys(client.Keys.B)
//     //     .pause(2000)
//     //     .verify.containsText('#result',"You entered: A")
//     //     .pause(2000)
//     //     .keys(client.Keys.BACK_SPACE)
//     //     .pause(1000)
//     //     .verify.containsText('#result',"You entered: BACK_SPACE")
//     //     .pause(2000)
//     // },

//     // "Horizontal Slider" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/horizontal_slider"]')
//     //     .verify.containsText('div[class="example"]>h3','Horizontal Slider')
//     //     .moveToElement('div.sliderContainer>input',0,0)
//     //     .mouseButtonClick(0);
//     //     for(i=0; i<8; i++)
//     //     {
//     //         client.keys(client.Keys.ARROW_RIGHT)
//     //     }
        
//     //     client.verify.containsText('div>#range','4')
//     //     // .keys(client.Keys.ARROW_LEFT)
//     //     // .verify.containsText('div>#range','0.5')
//     //     .pause(1000)
//     // },

//     // "WYSIWYG Editor" : async (client)=>{
//     //     await client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/tinymce"]')
//     //     .verify.containsText('div[class="example"]>h3','WYSIWYG Editor')
//     //     .waitForElementVisible('body')
//     //     .frame(0)
//     //         .clearValue('#tinymce')
//     //     .frame(null)
//     //     .click('button[aria-label="Bold"]')
//     //     .keys('MY NMAE IS IMRAN')
//     //     .pause(2000)

//     //     // .frame(0) //Switch to Frame 0
//     //     //     .click('#tinymce')
//     //     //     .clearValue('#tinymce')
//     //     //     .keys('MY NMAE IS IMRAN')
//     //     //     // .setValue('#tinymce','My name is imran')
//     //     //     .verify.containsText('#tinymce', 'My name is imran')
//     //     // .frame(null) //Goes back to default frame
//     //     // client

//     //     // .pause(5000)

//     // },

//     // "IFrames" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/frames"]')
//     //     .verify.containsText('div[class="example"]>h3','Frames')
//     //     .click('a[href="/nested_frames"]')
//     //     .frame(0)
//     //     .frame(0)
//     //         .verify.containsText('body','LEFT')
//     //     .frame(null)

//     //     .frame(0)
//     //     .frame(1)
//     //         .verify.containsText('body','MIDDLE')
//     //     .frame(null)

//     //     .frame(0)
//     //     .frame(2)
//     //         .verify.containsText('body','RIGHT')
//     //     .frame(null)

//     //     .frame(1)
//     //         .verify.containsText('body','BOTTOM')
//     //     .frame(null)
      
//     // }

//     // "JS Alerts" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/javascript_alerts"]')
//     //     .verify.containsText('div[class="example"]>h3','JavaScript Alerts')
//     //     .click('button[onclick="jsAlert()"]')
//     //     .pause(1000)
//     //     .acceptAlert()
//     //     .pause(1000)
//     //     .verify.containsText('#result','You successfully clicked an alert')
//     //     .click('button[onclick="jsConfirm()"]')
//     //     .pause(1000)
//     //     .acceptAlert()
//     //     .pause(1000)
//     //     .verify.containsText('#result','You clicked: Ok')
//     //     .click('button[onclick="jsConfirm()"]')
//     //     .pause(1000)
//     //     .dismissAlert()
//     //     .pause(1000)
//     //     .verify.containsText('#result','You clicked: Cancel')
//     //     .click('button[onclick="jsPrompt()"]')
//     //     .pause(1000)
//     //     .setAlertText("OK")
//     //     .pause(1000)
//     //     .acceptAlert()
//     //     .pause(1000)
//     //     .verify.containsText('#result','You entered: OK')
//     //     .pause(1000)
//     // },

//     // "File Upload" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/upload"]')
//     //     .waitForElementVisible('body', 1000)
//     //     .waitForElementVisible('input#file-upload', 1000)
//     //     .verify.containsText('div[class="example"]>h3','File Uploader')
//     //     .setValue('input#file-upload',require('path').resolve('C:\\Users\\mimran\\Desktop\\1.png'))
//     //     .click('#file-submit')
//     //     .pause(2000)
//     //     .verify.containsText('div[class="example"]>h3','File Uploaded!')
//     // },
    
//     // "Opening a New Window" : (client)=>{

//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click("a[href='/windows'")
//     //     .verify.containsText('div[class="example"]>h3','Opening a new window')
//     //     .pause(1000)
//     //     .click('a[href="/windows/new"]')
//     //     .pause(1000)
//     //     .windowHandles(function(result){
//     //         var handle =result.value[1];
//     //         client.switchWindow(handle);
//     //     })
//     //     .verify.urlContains('/windows/new')
//     //     .verify.containsText('div[class="example"]>h3','New Window')
//     //     .pause(1000)
//     // },

//     // "Notification Message" : (client)=>{
//     //     client
//     //     .url('https://the-internet.herokuapp.com/')
//     //     .click('a[href="/floating_menu"]')
//     //     .pause(1000)
//     //     .verify.containsText('div[class="example"]>h3','Floating Menu')
//     //     .pause(1000)
//     //     .execute('window.scrollTo(0,document.body.scrollHeight);')
//     //     .pause(1000)
//     //     .waitForElementVisible('a[href="#home"]',(result)=>{
//     //         console.log(result.value)
//     //     })
//     //     .pause(2000)
//     // }
// }