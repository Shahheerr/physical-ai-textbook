# Data Model: GitHub Pages Deployment Configuration

## GitHub Pages Configuration Entity

**Name**: GitHubPagesConfig
**Description**: Configuration parameters required for deploying the Docusaurus site to GitHub Pages

**Fields**:
- url (string): The base URL for the site (e.g., https://username.github.io)
- baseUrl (string): The base path for the site (e.g., /repo-name/)
- organizationName (string): GitHub username or organization name
- projectName (string): GitHub repository name
- deploymentBranch (string): Branch for deployment (typically 'gh-pages')

**Validation Rules**:
- url must be a valid HTTPS URL
- baseUrl must start with '/'
- organizationName must match GitHub username format
- projectName must match GitHub repository name format

## GitHub Actions Workflow Entity

**Name**: GitHubActionsWorkflow
**Description**: Configuration for automated deployment via GitHub Actions

**Fields**:
- name (string): Workflow name (e.g., 'Deploy to GitHub Pages')
- trigger (object): Events that trigger the workflow (e.g., push to main branch)
- jobName (string): Name of the deployment job
- runsOn (string): Runner environment (e.g., 'ubuntu-latest')
- steps (array): List of steps in the workflow

**Validation Rules**:
- Workflow must include Node.js setup
- Workflow must include dependency installation
- Workflow must include build command
- Workflow must include deployment to gh-pages branch

## Deployment Status Entity

**Name**: DeploymentStatus
**Description**: Status information for the deployment process

**Fields**:
- status (string): Current status ('pending', 'success', 'failure')
- lastDeployed (datetime): Timestamp of last deployment
- commitHash (string): Hash of the commit that triggered the last deployment
- deploymentUrl (string): URL of the deployed site

**State Transitions**:
- pending → success (when deployment completes successfully)
- pending → failure (when deployment fails)
- success → pending (when new commit is pushed)
- failure → pending (when new commit is pushed after failure)