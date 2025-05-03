pipeline {
    agent any
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