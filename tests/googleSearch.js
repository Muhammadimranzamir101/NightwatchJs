


module.exports = {

    "Google Advance Search": (client) => {

        const mainQuery = 'Google pixel 6';
        const page = client.page.googleAdvanceSearch();

        const resultPageSearchBarSelector = 'div>input[name="q"]';
        const resultPageLanguageSelector = ".Yg3U7e .KTBKoe";
        const resultPageLastupdateSelector = "#hdtbMenus > span:nth-child(3)";

        page
            .navigate()
            .setValue('@mainQueryInput', mainQuery)
            .selectFilter('@languageDropDown', 'lang_en')
            .selectFilter('@regionDropDown', 'countryPK')
            .selectFilter('@lastUpdateDropDown', 'w')
            .search()

        client
            .assert.value(resultPageSearchBarSelector, mainQuery)
            .assert.containsText(resultPageLanguageSelector, 'English')
            .assert.containsText(resultPageLastupdateSelector, 'Past')

        // const mainQuery = 'Google pixel 6'
        // const mainQueryInputSelector ='#xX4UFf';
        // const languageDDOpenerSelector = '#lr_button';
        // const languageValueDDSelector = '#lr_menu > li[value="lang_en"]'
        // const regionDDOpenerSelector = '#cr_button'
        // const regionValueSelector = '#cr_menu > li[value="countryPK"]'
        // const lastUpdateDDOpenerSelector = '#as_qdr_button'
        // const lastUpdateValueSelector = '#as_qdr_menu > li[value="w"]'
        // const btnAdvanceSearch = 'input[class="jfk-button jfk-button-action dUBGpe"]'

        // // const resultPageSearchBarSelector = '#searchform input[name="q"][value=${}]'
        // const resultPageSearchBarSelector = 'div>input[name="q"]'
        // const resultPageLanguageSelector = ".Yg3U7e .KTBKoe"
        // const resultPageLastupdateSelector = "#ow66 div[class='KTBKoe']"


        // client
        // .url('https://www.google.com/advanced_search')
        // .setValue(mainQueryInputSelector,mainQuery)
        // // .verify.containsText(mainQueryInputSelector,mainQuery)
        // .click(languageDDOpenerSelector)
        // .click(languageValueDDSelector)
        // .click(regionDDOpenerSelector)
        // .click(regionValueSelector)
        // .click(lastUpdateDDOpenerSelector)
        // .click(lastUpdateValueSelector)
        // .click(btnAdvanceSearch)
        // .verify.visible('#searchform input[name="q"]','Visible')


        // .verify.value(resultPageSearchBarSelector,mainQuery)
        // .verify.containsText(resultPageLanguageSelector,'English')
        // // .verify.containsText(resultPageLastupdateSelector,'Past')
        // .saveScreenshot('screenshots/googleSearch.png')
    }
}