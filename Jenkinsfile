pipeline {
    agent any
    stages{
        stage ('build'){
            steps{
                checkout scm
                sh 'npm install' // <1>
            }   
        }
        stage('chrome'){
            steps{
                sh './node_modules/.bin/nightwatch tests/amazon.item.count.js' // <4>
            }
        }
        stage('firefox'){
             steps{
                 sh './node_modules/.bin/nightwatch tests/amazon.item.count.js -e firefox'
             }
        }
    } 
}
