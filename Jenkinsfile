pipeline {
  agent any
  stages {
    stage('setup') {
      steps {
        sh 'npm install'
        sh 'yarn add danger --dev'
      }
    }
    stage('test') {
      steps {
          sh 'yarn danger ci'
          sh 'npm test'
      }
    }
    stage('build and deploy') {
      steps {
        echo 'Build and deploy'
      }
    }
  }
}