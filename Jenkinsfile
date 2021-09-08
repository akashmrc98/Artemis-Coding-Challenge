pipeline {
    agent {
        docker{
            image: 'node:16'
        }
    }
    stages{
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('unit testing') {
            steps {
                sh 'npm run test'
            }
        }
        stage('build'){
                sh 'npm run build'
        }
    }
}