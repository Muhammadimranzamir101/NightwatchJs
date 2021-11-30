module.exports = {
    "Should fill form using page object" : (client)=>{
        const FormPage =client.page.FormPage();

        FormPage
            .navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage("Muhammad Imran","I am here")
            .submitLeftForm()
            .verify.containsText('#et_pb_contact_form_0 div:nth-child(1)','try again')
            .pause(3000)
    }
}