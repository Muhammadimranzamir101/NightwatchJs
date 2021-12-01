node {
    stage "Build"
    checkout scm
 
    sh 'npm install' // <1>
 
    stage "Test"
            sh './node_modules/.bin/nightwatch tests || true' // <4>
            junit 'reports/**' // <5>
}
