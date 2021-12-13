node {
    stage "Build"
    checkout scm

    sh 'npm install' // <1>

 
    
    stage "Test FireFox Headless"
            sh './node_modules/.bin/nightwatch tests -e firefox'
}
