pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                dir('playwright-cucumber-project') {
                    bat 'echo "Installing dependencies..."'
                    bat 'npm install'
                    echo 'Installing Playwright dependencies...'
                    bat 'npx playwright install --with-deps'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Starting Playwright Testing...'
                dir('playwright-cucumber-project') {
                    bat 'npm test'
                }
            }
        }
    }
}