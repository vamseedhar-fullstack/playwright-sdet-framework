pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'   // Make sure Node 18 is installed & configured in Jenkins Global Tools
    }

    stages {
        stage('📥 Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vamseedhar-fullstack/playwright-sdet-framework.git'
            }
        }

        stage('📦 Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('🧰 Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('🧪 Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('📊 Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean -o allure-report'
            }
        }

        stage('📢 Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/html-report/**', fingerprint: true
            junit '**/test-results.xml'
        }
    }
}