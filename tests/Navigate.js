module.exports = {
    "Should naviagte by default URL": (client) => {
        client
        // .init() //Not Working
        .url('https://www.ultimateqa.com/filling-out-forms')
        .getTitle( (title) => console.log(title))
        .back()
        .getTitle( (title) => console.log(title))
        .forward()
        .getTitle( (title) => console.log(title))
        // .urlHash('random') //Not working
        // .pause('3000');
    }
}