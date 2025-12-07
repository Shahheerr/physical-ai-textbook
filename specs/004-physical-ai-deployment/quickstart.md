# Quickstart Guide: GitHub Pages Deployment

## Prerequisites

1. A GitHub account
2. Repository created for the textbook project
3. Local development environment with Node.js and npm
4. Git configured and repository cloned locally

## Configuration Steps

1. **Update docusaurus.config.ts** with your GitHub details:
   ```javascript
   url: 'https://[your-username].github.io',
   baseUrl: '/[your-repo-name]/',
   organizationName: '[your-username]', // Your GitHub username
   projectName: '[your-repo-name]', // Your repository name
   ```

2. **Validate local build**:
   ```bash
   npm run build
   ```

3. **Create GitHub Actions workflow** at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]

   jobs:
     deploy:
       name: Deploy to GitHub Pages
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: npm

         - name: Install dependencies
           run: npm ci

         - name: Build website
           run: npm run build

         # Popular action to deploy to GitHub Pages:
         # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v4
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
             publish_branch: gh-pages
   ```

4. **Commit and push** the changes:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

5. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" and "/ (root)" folder

## Verification

1. Check the Actions tab in your GitHub repository to see the deployment workflow running
2. Visit your deployed site at: https://[your-username].github.io/[your-repo-name]/