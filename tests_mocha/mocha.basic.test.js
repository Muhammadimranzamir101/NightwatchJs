describe('Filling out Form using Mocha test runner', ()=>{
    it('should be filled out successfully', (client)=>{
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('body',100)
        .assert.title('Filling Out Forms - Ultimate QA');
    });
});