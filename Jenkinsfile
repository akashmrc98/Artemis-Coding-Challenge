pipeline 
{
  agent
  {
    docker { image 'node:latest' }
  }
  stages 
  {
    stage('Install')
    {
      steps { sh 'npm install' }
    }
    stage('Test') 
    {
      steps { sh 'npm run test' }
    }
  }
}
