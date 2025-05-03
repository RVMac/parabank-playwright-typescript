pipeline {
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'installing dependecies...'
                sh '''
                    cd playwright-cucumber-project
                    npm install
                '''
                echo 'Dependencies installed.'
                echo 'Running Playwright install...'
                sh '''
                    cd playwright-cucumber-project
                    npx playwright install --with-deps
                '''
                echo 'Playwright installed.'
            }
        }
        stage('Test') {
            steps {
                echo 'Starting Playwright Testing...'
                sh '''
                    cd playwright-cucumber-project
                    npm test
                '''
            }
        }
    }
}