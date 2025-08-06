#!/bin/bash

# AWS Quick Start Deployment Script for African Tech Startup Website
# This script automates the initial AWS setup and deployment

set -e

echo "🚀 Starting AWS deployment for African Tech Startup Website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if AWS CLI is installed
check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        echo "Visit: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
        exit 1
    fi
    print_success "AWS CLI is installed"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install it first."
        echo "Visit: https://docs.docker.com/get-docker/"
        exit 1
    fi
    print_success "Docker is installed"
}

# Get AWS account ID
get_aws_account_id() {
    print_status "Getting AWS account ID..."
    ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    if [ -z "$ACCOUNT_ID" ]; then
        print_error "Failed to get AWS account ID. Please check your AWS credentials."
        exit 1
    fi
    print_success "AWS Account ID: $ACCOUNT_ID"
}

# Get AWS region
get_aws_region() {
    print_status "Getting AWS region..."
    REGION=$(aws configure get region)
    if [ -z "$REGION" ]; then
        print_warning "No AWS region configured. Using us-east-1 as default."
        REGION="us-east-1"
    fi
    print_success "AWS Region: $REGION"
}

# Create ECR repository
create_ecr_repository() {
    print_status "Creating ECR repository..."
    if aws ecr describe-repositories --repository-names african-startup-website --region $REGION 2>/dev/null; then
        print_warning "ECR repository 'african-startup-website' already exists"
    else
        aws ecr create-repository --repository-name african-startup-website --region $REGION
        print_success "ECR repository created"
    fi
}

# Build and push Docker image
build_and_push_image() {
    print_status "Building Docker image..."
    docker build -t african-startup-website .
    print_success "Docker image built successfully"
    
    print_status "Tagging Docker image..."
    docker tag african-startup-website:latest $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/african-startup-website:latest
    print_success "Docker image tagged"
    
    print_status "Logging into ECR..."
    aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
    print_success "Logged into ECR"
    
    print_status "Pushing Docker image to ECR..."
    docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/african-startup-website:latest
    print_success "Docker image pushed to ECR"
}

# Create ECS cluster
create_ecs_cluster() {
    print_status "Creating ECS cluster..."
    if aws ecs describe-clusters --clusters african-startup-cluster --region $REGION 2>/dev/null | grep -q "african-startup-cluster"; then
        print_warning "ECS cluster 'african-startup-cluster' already exists"
    else
        aws ecs create-cluster --cluster-name african-startup-cluster --region $REGION
        print_success "ECS cluster created"
    fi
}

# Create task definition
create_task_definition() {
    print_status "Creating task definition..."
    
    # Create task definition JSON
    cat > task-definition.json << EOF
{
  "family": "african-startup-website",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::$ACCOUNT_ID:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "african-startup-website",
      "image": "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/african-startup-website:latest",
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
          "awslogs-region": "$REGION",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
EOF
    
    aws ecs register-task-definition --cli-input-json file://task-definition.json --region $REGION
    print_success "Task definition created"
}

# Create log group
create_log_group() {
    print_status "Creating CloudWatch log group..."
    if aws logs describe-log-groups --log-group-name-prefix "/ecs/african-startup-website" --region $REGION 2>/dev/null | grep -q "/ecs/african-startup-website"; then
        print_warning "Log group '/ecs/african-startup-website' already exists"
    else
        aws logs create-log-group --log-group-name "/ecs/african-startup-website" --region $REGION
        aws logs put-retention-policy --log-group-name "/ecs/african-startup-website" --retention-in-days 30 --region $REGION
        print_success "Log group created"
    fi
}

# Main execution
main() {
    echo "=========================================="
    echo "  AWS Deployment for African Tech Startup"
    echo "=========================================="
    echo ""
    
    # Check prerequisites
    check_aws_cli
    check_docker
    
    # Get AWS information
    get_aws_account_id
    get_aws_region
    
    # Create AWS resources
    create_ecr_repository
    build_and_push_image
    create_ecs_cluster
    create_log_group
    create_task_definition
    
    echo ""
    echo "=========================================="
    print_success "Initial AWS setup completed!"
    echo "=========================================="
    echo ""
    echo "Next steps:"
    echo "1. Create a VPC with public subnets"
    echo "2. Create a security group for the ECS service"
    echo "3. Create an Application Load Balancer (optional)"
    echo "4. Create the ECS service with the task definition"
    echo ""
    echo "You can find detailed instructions in aws-deployment-guide.md"
    echo ""
    print_warning "Note: You'll need to manually create the ECS service through the AWS console or CLI"
    print_warning "This script only sets up the prerequisites"
}

# Run main function
main "$@" 