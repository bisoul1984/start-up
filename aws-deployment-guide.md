# AWS Deployment Guide for African Tech Startup Website

This guide provides multiple options for deploying your Next.js application to AWS.

## Option 1: AWS Elastic Beanstalk (Recommended for Beginners)

### Prerequisites
- AWS Account
- AWS CLI installed and configured
- Docker installed locally

### Steps

1. **Install AWS CLI and EB CLI**
```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Install EB CLI
pip install awsebcli
```

2. **Configure AWS Credentials**
```bash
aws configure
# Enter your AWS Access Key ID, Secret Access Key, Region, and Output format
```

3. **Initialize Elastic Beanstalk Application**
```bash
eb init
# Follow the prompts to create your application
```

4. **Create Environment and Deploy**
```bash
eb create production
eb deploy
```

5. **Open Your Application**
```bash
eb open
```

## Option 2: AWS ECS with Fargate (Recommended for Production)

### Prerequisites
- AWS Account
- AWS CLI installed and configured
- Docker installed locally

### Steps

1. **Create ECR Repository**
```bash
aws ecr create-repository --repository-name african-startup-website
```

2. **Build and Push Docker Image**
```bash
# Get login token
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com

# Build image
docker build -t african-startup-website .

# Tag image
docker tag african-startup-website:latest your-account-id.dkr.ecr.your-region.amazonaws.com/african-startup-website:latest

# Push image
docker push your-account-id.dkr.ecr.your-region.amazonaws.com/african-startup-website:latest
```

3. **Create ECS Cluster and Service**
```bash
# Create cluster
aws ecs create-cluster --cluster-name african-startup-cluster

# Create task definition (save as task-definition.json)
{
  "family": "african-startup-website",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::your-account-id:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "african-startup-website",
      "image": "your-account-id.dkr.ecr.your-region.amazonaws.com/african-startup-website:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/african-startup-website",
          "awslogs-region": "your-region",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}

# Register task definition
aws ecs register-task-definition --cli-input-json file://task-definition.json

# Create service
aws ecs create-service \
  --cluster african-startup-cluster \
  --service-name african-startup-service \
  --task-definition african-startup-website:1 \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-12345,subnet-67890],securityGroups=[sg-12345],assignPublicIp=ENABLED}"
```

## Option 3: AWS App Runner (Simplest Option)

### Prerequisites
- AWS Account
- GitHub repository with your code

### Steps

1. **Push Code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/african-startup-website.git
git push -u origin main
```

2. **Deploy via AWS Console**
- Go to AWS App Runner console
- Click "Create service"
- Choose "Source code repository"
- Connect your GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Start command: `npm start`
- Deploy

## Option 4: AWS Lambda with API Gateway (Serverless)

### Prerequisites
- AWS Account
- AWS CLI installed and configured
- Serverless Framework installed

### Steps

1. **Install Serverless Framework**
```bash
npm install -g serverless
```

2. **Create serverless.yml**
```yaml
service: african-startup-website

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  memorySize: 1024
  timeout: 30

functions:
  app:
    handler: server.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
      - http:
          path: /
          method: ANY

plugins:
  - serverless-nextjs
```

3. **Deploy**
```bash
serverless deploy
```

## Environment Variables

Create a `.env.production` file for production environment variables:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Custom Domain Setup

1. **Register Domain in Route 53** (if not already done)
2. **Create SSL Certificate in ACM**
3. **Configure DNS Records**
4. **Update Application Load Balancer** (if using ALB)

## Monitoring and Logging

### CloudWatch Setup
```bash
# Create log group
aws logs create-log-group --log-group-name /aws/african-startup-website

# Set retention policy
aws logs put-retention-policy --log-group-name /aws/african-startup-website --retention-in-days 30
```

### Health Checks
Configure health check endpoint in your application:

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'healthy', timestamp: new Date().toISOString() })
}
```

## Cost Optimization

1. **Use Spot Instances** for non-critical workloads
2. **Enable Auto Scaling** based on demand
3. **Use CloudFront** for CDN and caching
4. **Monitor costs** with AWS Cost Explorer

## Security Best Practices

1. **Use IAM Roles** instead of access keys
2. **Enable VPC** for network isolation
3. **Use Secrets Manager** for sensitive data
4. **Enable WAF** for web application firewall
5. **Regular security updates**

## Backup and Recovery

1. **Enable automated backups** for databases
2. **Use S3 for static assets**
3. **Implement disaster recovery plan**
4. **Test recovery procedures** regularly

## Performance Optimization

1. **Enable CloudFront CDN**
2. **Use S3 for static assets**
3. **Implement caching strategies**
4. **Optimize images and assets**
5. **Use compression**

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Runtime Errors**
   - Check CloudWatch logs
   - Verify environment variables
   - Check memory and timeout limits

3. **Performance Issues**
   - Monitor CloudWatch metrics
   - Check for memory leaks
   - Optimize bundle size

### Useful Commands

```bash
# Check application logs
aws logs tail /aws/african-startup-website --follow

# Check ECS service status
aws ecs describe-services --cluster african-startup-cluster --services african-startup-service

# Scale service
aws ecs update-service --cluster african-startup-cluster --service african-startup-service --desired-count 3
```

## Next Steps

1. Choose your preferred deployment option
2. Set up monitoring and alerting
3. Configure CI/CD pipeline
4. Set up staging environment
5. Implement backup strategy
6. Plan for scaling

For more detailed instructions on any specific option, refer to the AWS documentation or contact AWS support. 