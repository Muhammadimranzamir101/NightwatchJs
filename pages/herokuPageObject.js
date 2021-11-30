const dragnDrop = require('html-dnd').codeForSelectors

module.exports = {

    url:'https://the-internet.herokuapp.com/',

    elements:{

        //Login
        LoginBtnSelector : 'a[href="/login"]',
        userNameSelector : '#username',
        passwordSelector : '#password',
        btnLoginSelector : '.fa-sign-in',
        loginLabelSelector : '#flash',
        btnLogOutSelector : 'a[href="/logout"',
        logoutLabelSelector : '#flash',

        //DropDown
        dropDownBtnSelector : 'a[href="/dropdown"]',
        dropDownListSelector : '#dropdown',
        
        //HoverOption
        hoverBtnSelector : 'a[href="/hovers"]',

        //Drag and Drop
        DragnDropBtnSelector : "a[href='/drag_and_drop']",
        boxASelector : "#column-a",
        boxBSelector : "#column-b"
    },
    commands:[{

        //Login
        clickBtn(selector){
            return this
                .click(selector);
        },
        setFields(selector,value){
            return this
                .setValue(selector,value)
        },

        //DropDown
        ddOptionSelector(selector,value){
            return this
                .click(selector)
                .click(`option[value="${value}"]`)        
        },

        // ddAssertOption(value)
        // {
        //    return this
        //    .verify.containsText(`option[value="${value}"]`,`Option "${value}"`)
        // },

        //Hover
        moveToPicture(option)
        {
            return this
                .moveToElement(`.figure:nth-of-type(${option})`,10,10)
        },

        //Drag and Drop
        // dragandDrop(dragabble, dropabble){
        //     return this
        //     .api.execute(dragnDrop,[dragabble,dropabble])        
        // }

    }]
}