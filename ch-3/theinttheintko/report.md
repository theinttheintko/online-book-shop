# Chapter 3: Personal Project — Report

* **github_username:** theinttheintko
* **personal_repo_url:** https://github.com/theinttheintko/online-book-shop
* **project_summary:** A full-stack bookstore application with a Spring Boot backend and an Angular reactive frontend, featuring real-time search and a clean, minimalist, light-themed UI.
* **slides_url:** slides/pechakucha-6x20.md

### Methodology
I developed this project using an iterative, component-based methodology. 
1. **Scaffolding:** Used Angular CLI for the frontend and Spring Boot for robust backend API services.
2. **AI-Assisted Development:** Employed Claude Code for scaffolding components, managing project documentation, and debugging complex async service calls. Claude Code assisted in generating boilerplate code, while I focused on refining business logic, styling, and architectural decisions.
3. **Git Workflow:** Followed a strict "commit-per-feature" strategy, ensuring every functional increment was tracked via Git checkpoints to narrate the development journey.
4. **Tooling Integration:** Integrated MCP for seamless filesystem access and utilized structured AI agents to maintain design consistency.

### Evidence — Claude Code usage

#### MCP
* **path:** .mcp.json
* **what:** Configured the filesystem MCP server to allow the AI agent to traverse the project structure, enabling efficient reading and refactoring of backend/frontend code.

#### Skill
* **path:** .claude/skills/book-ui/SKILL.md
* **what:** Defined a reusable pattern for UI standards. The AI agent uses this skill to ensure consistency in spacing, colors, and layout across all book listing components.

#### Agent
* **path:** .claude/agents/ui-architect.md
* **what:** Created an automated UI architect agent that monitors CSS and HTML structures to maintain a clean, minimalist, and light-themed aesthetic throughout the application.

### Next Steps
1. Implementing User Authentication for personalized book recommendations.
2. Adding advanced shopping cart persistence using browser local storage.
