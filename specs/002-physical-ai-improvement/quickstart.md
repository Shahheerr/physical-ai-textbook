# Quickstart: Physical AI & Humanoid Robotics Textbook - Quality Assurance and Improvements

## Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- Git (for version control)
- A browser for testing the site
- Text editor for content modifications

## Setup Instructions

1. **Navigate to the project directory**
   ```bash
   cd D:\web development\first-hackathon\frontend
   ```

2. **Install dependencies (if not already installed)**
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

4. **Build for production (to test build process)**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Quality Assurance Process

1. **Testing the site**: Navigate through all pages and verify functionality
2. **Content review**: Read through modules for accuracy and clarity
3. **Visual inspection**: Check for proper styling and layout
4. **Link validation**: Ensure all internal links work correctly

## Content Enhancement Process

1. **Identify improvement opportunities** in existing content
2. **Add diagrams and visual aids** where helpful
3. **Include analogies and examples** to clarify complex concepts
4. **Add key takeaways and self-assessment questions**

## Visual Fix Process

1. **Locate the CSS file** that controls the styling (typically `src/css/custom.css`)
2. **Identify the element** that needs styling changes
3. **Apply the necessary CSS rules** to fix the visual issue
4. **Test the changes** in the development server

## Project Structure

```
.
├── docs/                   # Documentation content with enhanced educational value
│   ├── intro.md           # Introduction to Physical AI with diagrams and self-assessment
│   ├── module-1/          # ROS 2 Fundamentals with architecture diagrams and analogies
│   │   ├── index.md       # Module 1 overview with key takeaways and self-assessment
│   │   └── ros2-fundamentals.md  # Core ROS 2 concepts with communication model diagram
│   ├── module-2/          # Robot Simulation with environment visualization
│   │   ├── index.md       # Module 2 overview with key takeaways and self-assessment
│   │   └── robot-simulation.md  # Simulation concepts with Gazebo/Unity environment diagram
│   ├── module-3/          # Placeholder modules
│   ├── module-4/
│   └── capstone-project/
├── src/                   # Custom React components and CSS
│   ├── components/
│   ├── pages/
│   └── css/               # Custom styling including homepage title color fix
├── static/                # Static assets including new images and diagrams
│   └── img/               # Physical AI, ROS 2, and Simulation concept diagrams
├── docusaurus.config.js   # Docusaurus configuration
├── sidebars.js           # Navigation configuration
└── package.json          # Project dependencies and scripts
```

## Enhanced Content Structure

The project now includes:
- **Visual aids**: Diagrams for ROS 2 architecture and simulation environments
- **Educational enhancements**: Analogies, key takeaways, and self-assessment questions
- **Accessibility improvements**: Proper contrast with white title text on homepage
- **Cross-references**: Links between related topics across modules

## Development Tips

- Use `npm run start` for development with hot reloading to see changes immediately
- Add new content in the `docs/` directory following the module structure
- Modify CSS in `src/css/` for visual fixes
- Add new images to `static/img/` for content enhancements
- Test the production build with `npm run serve` after building to ensure everything works in production mode