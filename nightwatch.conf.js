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
            desiredCapabilities: {
                browserName: "MicrosoftEdge",
                acceptSslCerts: true,
                // cli_args: {
                //     webdriver.edge.driver: "bin/MicrosoftWebDriver.exe"

                // }
            },
            webdriver: {
                start_process: true,
                port: 9515,
                server_path: "node_modules\\selenium\\bin\\selenium",
                // server_path: "bin/selenium-server-standalone-3.{VERSION}.jar",
            }
        },

        // firefox: {
        //     desiredCapabilities : {
        //         browserName : "firefox",
        //         alwaysMatch: {
        //           firefoxOptions: {
        //               args: [ "-headless" ]
        //           }
        //       }
        //    },
        //
        //     webdriver: {
        //         start_process: true,
        //         port: 4446,
        //         server_path: require('geckodriver').path
        //     }
        // }
    }
}
