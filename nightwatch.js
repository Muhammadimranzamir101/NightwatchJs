// const global_module = require('./globals/global_module');

module.exports = {
    src_folders: ["tests"],
    globals_path: "globals/global_module.js",
    skip_testcases_on_fail: false,
    page_objects_path: ["pages"],
    // custom_commands_path: "./commands",

    screenshots: {
        enabled: true,
        path: "./screenshots",
        on_failure: true,
        on_error: true
    },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    // args : ["headless", "no-sandbox", "disable-gpu"],
                    prefs: {
                        download: {
                            default_directory: require('path').resolve(__dirname + '/download')
                        }
                    }
                },
            },
            webdriver: {
                start_process: true,
                port: 9515,
                server_path : "node_modules/chromedriver/bin/chromedriver",
                server_path: require('chromedriver').path,
            }
        },

        test_workers: {
            enabled: true,
            workers: 'auto'
        },

        selenium: {
            selenium: {
                start_process: true,
                server_path: require("selenium-server").path,
                port: 4444,
                cli_args: {
                    "webdriver.gecko.driver": require("geckodriver").path,
                    "webdriver.chrome.driver": require("chromedriver").path,
                },
            },
            webdriver: {
                start_process: false,
            },
        },

        chrome: {
            extends: "selenium",
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: ["--headless", "--no-sandbox", "--disable-gpu"],
                    w3c: false,
                },
            },
        },

        firefox: {
            extends: "selenium",
            desiredCapabilities: {
                browserName: "firefox",
                "moz:firefoxOptions": {
                    args: ["--headless"],
                },
            },
        },
    },
};


