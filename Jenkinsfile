pipeline {
  agent any

  triggers {
    // Poll the SCM for changes as a fallback (hashed every 2 minutes)
    // For immediate builds, also configure a webhook in your Git host to notify Jenkins.
    pollSCM('H/2 * * * *')
  }

  tools {
    // Configure this under Manage Jenkins -> Tools -> NodeJS installations
    nodejs 'Node20'
  }

  environment {
    NODE_VERSION = '20'
    ARTIFACT_NAME = 'react-dist.zip'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    // Node and npm will be on PATH via the NodeJS tool above; no sudo/apt required

    stage('Install') {
      steps {
        sh 'npm ci || npm i'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive') {
      steps {
        // Archive built files directly; avoids needing system 'zip'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Deploy to S3') {
      when { expression { return fileExists('dist') } }
      steps {
        withCredentials([
          string(credentialsId: 'aws-access-key-id', variable: 'AWS_ACCESS_KEY_ID'),
          string(credentialsId: 'aws-secret-access-key', variable: 'AWS_SECRET_ACCESS_KEY')
        ]) {
          withEnv([
            'AWS_REGION=eu-north-1',
            'BUCKET_NAME=jenkins-with-react-shakuisitive'
          ]) {
            sh 'npm run deploy:s3'
          }
        }
      }
    }

    stage('Publish build metadata') {
      when { expression { return fileExists('dist') } }
      steps {
        script {
          def gitCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
          writeFile file: 'dist/jenkins-build.json', text: groovy.json.JsonOutput.toJson([
            jobName: env.JOB_NAME,
            buildNumber: env.BUILD_NUMBER,
            result: currentBuild.currentResult,
            gitCommit: gitCommit,
            builtAt: new Date().format("yyyy-MM-dd'T'HH:mm:ssXXX", TimeZone.getTimeZone('UTC')),
          ])
        }
      }
    }
  }

  post {
    success {
      echo 'Build succeeded.'
    }
    failure {
      echo 'Build failed.'
    }
  }
}