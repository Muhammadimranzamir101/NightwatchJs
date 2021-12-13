node {
    stage "Build"
    checkout scm

    sh 'npm install' // <1>

    stage "Test Chrome Headed"
            sh './node_modules/.bin/nightwatch tests || true' // <4>
    
    stage "Test Chrome Headless"
            sh './node_modules/.bin/nightwatch tests -e firefox'
}
