module.exports = {

    url : 'https://youtube.com',

    elements :{
        searchBar : '#search'
    },

    commnads :[{

        clickBtn(selector){
            return this
                .click(selector);
        },

        setFields(selector,value){
            return this
                .setValue(selector,value)
        },

    }]

}