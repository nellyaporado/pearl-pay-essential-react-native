pipeline {
  agent any
  stages {
    stage('setup') {
      steps {
        sh 'npm install'
        sh 'yarn add danger --dev'
      }
    }
    stage('tests') {
      steps {
        sh 'npm test'
        sh 'yarn danger ci'
        echo 'Tests here'
      }
    }
    stage('build and deploy') {
      steps {
        echo 'Build and deploy'
      }
    }
  }
}