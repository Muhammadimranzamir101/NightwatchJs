module.exports = {

    // "Navigate To Login Page" : (client)=>{
    //         client
    //         .url('https://the-internet.herokuapp.com/')
    //         .click('a[href="/login"]')
    //         .verify.containsText('div[class="example"]>h2','Login Page')
    //         .pause(2000)
    // },

    // "Login in with empty credentials" : (client)=>{
    //     client
    //         .url('https://the-internet.herokuapp.com/')
    //         .click('a[href="/login"]')
    //         .verify.containsText('div[class="example"]>h2','Login Page')
    //         .setValue('#username',"")
    //         .setValue('#password',"")
    //         .pause(1000)
    //         .click('button[class="radius"]')
    //         .pause(1000)
    //         .verify.containsText('#flash','Your username is invalid!')
    //         .pause(1000)
    // },

    // "Login in with valid credentials" : (client)=>{
    //     client
    //         .url('https://the-internet.herokuapp.com/')
    //         .click('a[href="/login"]')
    //         .verify.containsText('div[class="example"]>h2','Login Page')
    //         .setValue('#username',"tomsmith")
    //         .setValue('#password',"SuperSecretPassword!")
    //         .pause(1000)
    //         .click('button[class="radius"]')
    //         .pause(1000)
    //         .verify.containsText('#flash','You logged into a secure area!')
    //         .pause(1000)
    // },

    // "Login in with valid Username and Invalid Password" : (client)=>{
    //     client
    //         .url('https://the-internet.herokuapp.com/')
    //         .click('a[href="/login"]')
    //         .verify.containsText('div[class="example"]>h2','Login Page')
    //         .setValue('#username',"tomsmith")
    //         .setValue('#password',"superSecretPassword!")
    //         .pause(1000)
    //         .click('button[class="radius"]')
    //         .pause(1000)
    //         .verify.containsText('#flash','Your password is invalid!')
    //         .pause(1000)
    // },

    // "Login in with invalid Username and Valid Password" : (client)=>{
    //     client
    //         .url('https://the-internet.herokuapp.com/')
    //         .click('a[href="/login"]')
    //         .verify.containsText('div[class="example"]>h2','Login Page')
    //         .setValue('#username',"Tomsmith")
    //         .setValue('#password',"SuperSecretPassword!")
    //         .pause(1000)
    //         .click('button[class="radius"]')
    //         .pause(1000)
    //         .verify.containsText('#flash','Your username is invalid!')
    //         .pause(1000)
    // },

    tags:['login'],
    "Logout Button is Working" : (client)=>{
        client
            .url('https://the-internet.herokuapp.com/')
            // .click('a[href="/login"]')
            .click('link text','Form Authentication')
            .verify.containsText('div[class="example"]>h2','Login Page')
            .setValue('#username',"tomsmith")
            .setValue('#password',"SuperSecretPassword!")
            .pause(1000)
            .click('button[class="radius"]')
            .pause(1000)
            .verify.containsText('#flash','You logged into a secure area!')
            .pause(1000)
            .click('a[href="/logout"]')
            .verify.containsText('#flash','You logged out of the secure area!')
            .pause(1000)
            .end();
    },

}