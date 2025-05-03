pipeline {
    agent {
      docker {
        image 'pull mcr.microsoft.com/playwright:v1.50.0-noble'
        args '-u root:root' // Run as root user to avoid permission issues
      }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('playwright-cucumber-project') {
                    sh 'echo "Installing dependencies..."'
                    sh 'npm install'
                    echo 'Installing Playwright dependencies...'
                    sh 'npx playwright install --with-deps'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Starting Playwright Testing...'
                dir('playwright-cucumber-project') {
                    sh 'npm test'
                }
            }
        }
    }
}