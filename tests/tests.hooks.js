module.exports = {
    before : (client)  =>{
        console.log('Starting up')
    },

    beforeEach : (client) =>{
        client.url('https://ultimateqa.com/filling-out-forms')
    },

    afterEach : (client) =>{
        console.log('Test completed')
    },

    after : (client) =>{
        console.log('Closing down')
    },
    
    "Should verify page tile": (client)=> {
        client.verify.title('Filling Out Forms - Ultimate QA')
    },

    "Should verify page url" : (client) => {
        client.verify.urlEquals('https://ultimateqa.com/filling-out-forms')
    }

}