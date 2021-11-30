

module.exports = {
    url : 'https://www.google.com/advanced_search',

    elements:{

        mainQueryInput :'#xX4UFf',
        languageDropDown : '#lr_button',
        // languageValueDD : '#lr_menu > li[value="lang_en"]',
        regionDropDown : '#cr_button',
        // regionValue : '#cr_menu > li[value="countryPK"]',
        lastUpdateDropDown : '#as_qdr_button',
        // lastUpdateValue : '#as_qdr_menu > li[value="w"]',
        btnAdvanceSearch : 'input[class="jfk-button jfk-button-action dUBGpe"]',

        //resultPageSearchBarSelector : '#searchform input[name="q"][value=${}]'
        
    },
    commands:[{

        setQuery(value)
        {
            return this
                .setValue('@mainQueryInput',value)
        },

        selectFilter(selector,value)
        {
            return this

                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`)    
        },

        search(){
            return this
            .click('@btnAdvanceSearch')
        }

    }]
}