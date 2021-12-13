node {
    stage "Build"
    checkout scm

    sh 'npm install' // <1>

    stage "Test Chrome Headless"
            sh './node_modules/.bin/nightwatch tests' // <4>
    
    stage "Test FireFox Headless"
            sh './node_modules/.bin/nightwatch tests -e firefox'
}
