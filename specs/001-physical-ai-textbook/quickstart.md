# Quickstart: Physical AI & Humanoid Robotics Textbook

## Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- Git (for version control)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   This will start the Docusaurus development server at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Project Structure

```
.
├── docs/                   # Documentation content
│   ├── intro.md           # Introduction to Physical AI
│   ├── module-1/          # ROS 2 Fundamentals
│   │   ├── index.md
│   │   └── ros2-fundamentals.md
│   ├── module-2/          # Robot Simulation
│   │   ├── index.md
│   │   └── robot-simulation.md
│   ├── module-3/          # Placeholder modules
│   ├── module-4/
│   └── capstone-project/
├── src/                   # Custom React components
│   ├── components/
│   ├── pages/
│   └── css/
├── static/                # Static assets
├── docusaurus.config.js   # Docusaurus configuration
├── sidebars.js           # Navigation configuration
└── package.json          # Project dependencies and scripts
```

## Adding New Content

1. **Create a new Markdown file** in the appropriate module directory under `docs/`
2. **Add the new page to the sidebar** in `sidebars.js`
3. **Use Docusaurus Markdown features** like:
   - Code blocks with syntax highlighting
   - JSX components within Markdown
   - Frontmatter for page metadata

## Configuration

The site configuration is in `docusaurus.config.js`:
- Site title and description
- Theme customization
- Plugin configuration
- Deployment settings for GitHub Pages

## Deployment

The site is configured for GitHub Pages deployment:
1. The `build` script generates static files
2. GitHub Actions automatically deploys to GitHub Pages on pushes to main branch
3. The site will be available at `https://<username>.github.io/<repository>`

## Development Tips

- Use `npm run start` for development with hot reloading
- Add new content in the `docs/` directory following the module structure
- Customize the theme by modifying CSS in `src/css/`
- Add custom components in `src/components/`
- Test the production build with `npm run serve` after building