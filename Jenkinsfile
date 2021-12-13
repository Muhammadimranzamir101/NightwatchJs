node {
    stage "Build"
    checkout scm
    sh 'npm install' // <1>
    stages{
        stage('chrome'){
            steps{
                sh './node_modules/.bin/nightwatch tests' // <4>
            }
        }
        stage('firefox'){
             steps{
                 sh './node_modules/.bin/nightwatch tests -e firefox'
             }
        }
    } 
}
