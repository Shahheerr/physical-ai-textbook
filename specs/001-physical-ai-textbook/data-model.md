# Data Model: Physical AI & Humanoid Robotics Textbook

## Textbook Module

**Description**: Represents a structured section of the textbook with specific learning objectives and content

**Attributes**:
- id: Unique identifier for the module (e.g., "intro-physical-ai", "module-1-ros2", "module-2-simulation")
- title: Display title of the module (e.g., "Introduction to Physical AI", "ROS 2 Fundamentals")
- weeks: Time period covered by the module (e.g., "Weeks 1-2", "Weeks 3-5", "Weeks 6-7")
- description: Brief overview of the module's content and learning objectives
- content: The actual educational content in Markdown format
- prerequisites: List of required knowledge or modules that should be completed before this module
- learningOutcomes: Specific skills or knowledge students should gain from this module
- resources: Additional materials, links, or references for further learning

**Validation Rules**:
- Title must be non-empty
- Weeks must follow the format "Weeks X-Y" where X and Y are positive integers
- Content must be in valid Markdown format
- Learning outcomes must be specific and measurable

## Navigation Item

**Description**: Represents an entry in the textbook's navigation structure

**Attributes**:
- id: Unique identifier for the navigation item
- label: Display text for the navigation item
- path: URL path to the content
- type: Type of navigation item (e.g., "module", "section", "link", "divider")
- children: Array of child navigation items (for hierarchical structure)
- priority: Ordering priority in the navigation (lower numbers appear first)

**Validation Rules**:
- Label must be non-empty
- Path must be a valid URL path
- Children must be properly structured if present

## Content Page

**Description**: Represents an individual page of content within the textbook

**Attributes**:
- id: Unique identifier for the page
- title: Page title
- module: Reference to the parent module
- content: Markdown content for the page
- metaDescription: SEO meta description
- tags: Array of relevant tags for the page
- authors: Array of content authors
- lastUpdated: Date of last content update
- learningTime: Estimated time to complete the page content

**Validation Rules**:
- Title must be non-empty
- Content must be valid Markdown
- Module reference must point to an existing module
- Learning time must be a positive number

## Learning Resource

**Description**: Represents supplementary materials or resources for the textbook

**Attributes**:
- id: Unique identifier for the resource
- title: Resource title
- type: Type of resource (e.g., "code-example", "diagram", "video", "external-link", "download")
- url: Path or URL to the resource
- description: Brief description of the resource
- relatedModules: List of modules this resource is relevant to
- difficulty: Difficulty level (e.g., "beginner", "intermediate", "advanced")

**Validation Rules**:
- Title must be non-empty
- Type must be one of the defined values
- URL must be valid for the resource type