pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'changing directory to playwright-cucumber-project...'
                sh 'cd playwright-cucumber-project'
                echo 'change directory done...'
                echo 'installing dependecies...'
                sh 'npm install'
                echo 'Dependencies installed...'
                echo 'Running Playwright install...'
                sh 'npx playwright install --with-deps'
                echo 'Playwright installed...'
            }
        }
        stage('Test') {
            steps {
                echo 'Starting Playwright Testing...'
                echo 'changing directory to playwright-cucumber-project...'
                sh 'cd playwright-cucumber-project'
                echo 'change directory done...'
                echo 'Running Playwright tests...'
                sh 'npm test'
                echo 'Playwright tests are now done...'
            }
        }
    }
}