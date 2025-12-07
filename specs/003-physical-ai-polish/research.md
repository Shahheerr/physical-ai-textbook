# Baseline Documentation: Physical AI & Humanoid Robotics Textbook

Date: 2025-12-07

## Pages Structure

### Root Level
- intro.md - Introduction to Physical AI

### Module 1: ROS 2 Fundamentals
- module-1/index.md - Module 1 Overview
- module-1/ros2-fundamentals.md - ROS 2 Fundamentals

### Module 2: Robot Simulation
- module-2/index.md - Module 2 Overview
- module-2/robot-simulation.md - Robot Simulation

### Placeholder Modules
- module-3/index.md - Placeholder content
- module-4/index.md - Placeholder content
- capstone-project/index.md - Placeholder content

### Tutorial Pages (default Docusaurus content)
- tutorial-basics/create-a-blog-post.md
- tutorial-basics/create-a-document.md
- tutorial-basics/create-a-page.md
- tutorial-basics/deploy-your-site.md
- tutorial-basics/markdown-features.md
- tutorial-extras/manage-docs-versions.md
- tutorial-extras/translate-your-site.md
- tutorial-basics/congratulations.md

## Navigation Structure

### Sidebar Navigation
The sidebar is defined in sidebars.ts and follows this structure:
- Introduction to Physical AI
- Module 1: ROS 2 Fundamentals
  - Module 1 Overview
  - ROS 2 Fundamentals
- Module 2: Robot Simulation
  - Module 2 Overview
  - Robot Simulation
- Module 3 (Placeholder)
- Module 4 (Placeholder)
- Capstone Project (Placeholder)

## Content Overview

### Module 1: ROS 2 Fundamentals
- Covers ROS 2 architecture and core concepts
- Explains Nodes, Topics, Services, and Actions
- Includes rclpy examples for Python integration
- Contains URDF information
- Includes best practices and tutorials

### Module 2: Robot Simulation
- Covers Gazebo simulation environment
- Explains physics simulation concepts
- Details sensor simulation (LiDAR, cameras, IMUs)
- Introduces Unity for high-fidelity rendering
- Includes digital twin concepts

## Known Issues Identified
- Broken link in intro.md: [Physical AI Foundation Focus](../intro) was creating circular reference (fixed)
- Default tutorial files present that may not be relevant to the textbook content

## Technical Stack
- Docusaurus v3+
- React
- Node.js
- GitHub Pages deployment