node {
    stage "Build"
    checkout scm
    sh 'npm install' // <1>
    stage "Test Chrome Headless"
    steps{
        sh './node_modules/.bin/nightwatch tests' // <4>
    }
    stage "Test FireFox Headless"
    steps{
        sh './node_modules/.bin/nightwatch tests -e firefox'
    }
}
