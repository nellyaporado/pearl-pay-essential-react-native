pipeline {
  agent any
  stages {
    stage('setup') {
      steps {
        echo 'setup'
        // sh 'npm install'
        // sh 'yarn add danger --dev'
      }
    }
    stage('test') {
      steps {
        echo 'test'
          // sh 'yarn danger ci'
      }
    }
    stage('build and deploy') {
      steps {
        echo 'Build and deploy'
      }
    }
  }
}