Task: The previous deployment resulted in a 404 error. Use the GitHub MCP to diagnose the failure and perform a successful force-deployment of the Docusaurus textbook.

1. Analyze Failure (Diagnostics)
Check Action Logs: Use GitHub MCP to fetch and analyze the logs of the latest failed workflow in the "Actions" tab. Identify the exact step where it failed (e.g., Build error, Permission error, or Deploy error).

Verify Repository Settings: Check the repository metadata to ensure GitHub Pages is enabled and set to deploy via GitHub Actions.

2. Fix Configuration (docusaurus.config.js)
Re-verify and correct the following fields:

url: Must be https://[Your-Username].github.io

baseUrl: If the repo is not [username].github.io, this MUST be /[repo-name]/. (Example: if repo is robotics-book, baseUrl is /robotics-book/). This is the most common cause of 404.

trailingSlash: Set to false.

3. Overhaul Workflow File
Re-write or fix .github/workflows/deploy.yml. Ensure it has proper permissions:

YAML

permissions:
  contents: write
  pages: write
  id-token: write
Use a reliable deployment action like peaceiris/actions-gh-pages@v4.

4. Local Build & Push
Execute a local build check (npm run build) via terminal to ensure the output build/ folder is correctly generated without errors.

Commit the configuration fixes and the new workflow file, then push to the main branch.

5. Live Monitoring
Monitor the GitHub Action execution through the MCP.

Once successful, provide me with the Final Live URL and confirm that the site is no longer returning a 404 error.