# Research: Physical AI & Humanoid Robotics Textbook

## Docusaurus Setup and Configuration

**Decision**: Use Docusaurus v3+ with TypeScript support for the Physical AI textbook

**Rationale**: Docusaurus is specifically designed for documentation sites and provides:
- Built-in sidebar navigation system
- Markdown support with React components
- GitHub Pages deployment integration
- Versioning capabilities
- Search functionality
- Responsive design
- Accessibility features

**Alternatives considered**:
- GitBook: Less flexible, requires paid hosting for custom domains
- Hugo: More complex setup, requires learning Go templating
- VuePress: Good alternative but smaller community than Docusaurus
- Custom React app: More complex, would need to implement documentation features from scratch

## GitHub Pages Deployment Configuration

**Decision**: Use GitHub Actions for automated deployment to GitHub Pages

**Rationale**:
- GitHub Pages provides free hosting for documentation sites
- GitHub Actions enables automated deployment on each commit to main branch
- No need for additional CI/CD services
- Integrates well with Docusaurus build process

**Implementation approach**:
- Create a GitHub Actions workflow file (.github/workflows/deploy.yml)
- Use `peaceiris/actions-gh-pages` or similar action
- Build Docusaurus site and deploy to GitHub Pages

## Module Structure and Navigation

**Decision**: Organize content in a hierarchical structure following the specified modules

**Rationale**:
- Matches the educational progression from basic to advanced concepts
- Supports the week-based learning schedule (Weeks 1-2, 3-5, 6-7)
- Enables clear navigation and learning paths
- Follows the Physical AI Constitution's Modular Learning Architecture principle

**Navigation structure**:
- Introduction to Physical AI (Weeks 1-2)
- Module 1: ROS 2 Fundamentals (Weeks 3-5)
- Module 2: Robot Simulation (Weeks 6-7)
- Module 3: The AI-Robot Brain (Placeholder)
- Module 4: Vision-Language-Action (Placeholder)
- Capstone Project (Placeholder)

## Content Format and Technical Accuracy

**Decision**: Use Markdown with Docusaurus-specific extensions for content creation

**Rationale**:
- Markdown is readable and easy to write
- Docusaurus supports enhanced Markdown with JSX components
- Enables technical diagrams and code examples
- Maintains compatibility with version control
- Supports the Content-First Development principle from the Constitution

**Technical accuracy approach**:
- Research official ROS 2 documentation for rclpy examples
- Reference Gazebo and Unity documentation for simulation content
- Include practical code examples and use cases
- Ensure all content connects theory to practical implementation

## Testing Strategy

**Decision**: Implement Jest for unit testing and minimal end-to-end testing

**Rationale**:
- Docusaurus sites are primarily static content, so extensive testing may not be necessary
- Unit tests for custom React components
- Basic smoke tests to verify site builds and deploys correctly
- Focus on content accuracy rather than functionality testing

**Alternatives considered**:
- Cypress for comprehensive UI testing: May be overkill for documentation site
- No testing: Would not verify site functionality
- Only build tests: Would not verify content rendering