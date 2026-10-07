pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/FathimathHiba123/gitac-demo.git
                    ls -l
                '''
             }
          }
         stage('deploy'){
            steps{
                sh '''
                    cp -r gitac-demo/* /var/www/html
                    ls -l /var/www/html
                    '''
            }
         }
     }
}
