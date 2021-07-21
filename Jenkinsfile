pipeline {

  

  /*

  environment {

    registry = "karsharm12/react-jenkins-docker"

    registryCredential = 'dockerhub'

    dockerImage = ''

  }

  */

    environment {

        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')

        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')

    }    



  agent any



  tools{

    nodejs "node"

  }



  stages {

    stage('Cloning Git') {

      steps {

        git 'https://github.com/Harashit7/React-App.git'

      }

    }



   stage('install') {

            steps {

                sh 'npm install'

            }

    }



    stage('build') {

            steps {

                sh 'npm run build'

            }

    }



    /*

    stage('Building image') {

      steps{

        script {

          dockerImage = docker.build registry + ":$BUILD_NUMBER"

        }

      }

    }

    stage('Deploy Image') {

      steps{

        script {

          docker.withRegistry( '', registryCredential ) {

            dockerImage.push()

          }

        }

      }

    }

    stage('Remove Unused docker image') {

      steps{

        sh "docker rmi $registry:$BUILD_NUMBER"

      }

    }

    */





  }

}






//  stage('Cloning Git') {
//       steps {
//         git 'https://github.com/Harashit7/React-App.git'
//       }
//     }