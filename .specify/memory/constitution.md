<!--
Sync Impact Report:
Version change: N/A -> 1.0.0
Added sections: All principles specific to Physical AI & Humanoid Robotics textbook
Modified principles: N/A (new constitution)
Templates requiring updates: N/A
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics: Embodied Intelligence Constitution

## Core Principles

### I. Docusaurus-First Documentation
Every module of the Physical AI & Humanoid Robotics textbook starts as structured Docusaurus documentation; Documentation must be self-contained, well-organized, and follow the defined navigation structure; Clear module progression required - each module builds upon previous knowledge with defined learning outcomes.

### II. Modular Learning Architecture
Each textbook module (Introduction to Physical AI, ROS 2 Fundamentals, Robot Simulation, etc.) must be independently accessible while maintaining coherent progression; Content follows the defined week-based structure (Weeks 1-2, 3-5, 6-7) with clear learning objectives; Each module contains focused content, key topics, and practical applications relevant to Physical AI and Humanoid Robotics.

### III. Content-First Development (NON-NEGOTIABLE)
Content creation precedes any advanced styling or functionality; All content written in Markdown format following Docusaurus standards; Modules must contain comprehensive coverage of specified topics before additional features are implemented; Each page must have clear learning objectives and key takeaways.

### IV. Simulation-Integrated Learning
All theoretical concepts must connect to practical simulation examples; ROS 2 fundamentals include hands-on examples with rclpy and Gazebo/Unity simulation; Content emphasizes the relationship between theoretical Physical AI concepts and practical implementation through simulation environments.

### V. Physical AI Foundation Focus
Content must emphasize the transition from Digital AI to robots that understand physical laws; Humanoid Robotics Landscape and essential Sensor Systems (LIDAR, cameras, IMUs, force/torque sensors) are foundational elements; All modules reinforce the core concept of embodied intelligence throughout the curriculum.

### VI. GitHub Pages Deployment Standard
All documentation must be optimized for GitHub Pages deployment; Content structure follows Docusaurus best practices for static site generation; Navigation and search functionality must work seamlessly in the deployed environment.

## Additional Constraints

Technology Stack: Docusaurus v3+, React, Node.js, GitHub Pages
Content Format: Markdown with Docusaurus-specific extensions
Deployment: Automated via GitHub Actions to GitHub Pages
Branding: Book title "Physical AI & Humanoid Robotics: Embodied Intelligence" must be consistently displayed

## Development Workflow

Content Creation: Write comprehensive module content following the specified structure
Review Process: Verify technical accuracy of ROS 2, Gazebo, and Unity content
Quality Gates: All modules must include examples of the key concepts in practice
Module Structure: Introduction → Key Topics → Practical Applications → Summary

## Governance

This constitution governs all development decisions for the Physical AI & Humanoid Robotics textbook project; All content must align with the defined module structure and learning objectives; Changes to core module topics require explicit approval; All PRs must verify compliance with Docusaurus standards and module progression requirements.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
aap