# Chapter 3: Personal Project — Report

* **github_username:** theinttheintko
* **personal_repo_url:** https://github.com/theinttheintko/online-book-shop
* **project_summary:** A full-stack bookstore application with a Spring Boot backend and an Angular reactive frontend, featuring real-time search and a clean, minimalist, light-themed UI.
* **slides_url:** slides/pechakucha-6x20.md

### Methodology
I developed this project using an iterative, component-based methodology. 
1. **Scaffolding:** Used Angular CLI for the frontend and Spring Boot for robust backend API services.
2. **AI-Assisted Development:** Employed Claude Code for scaffolding components, managing project documentation, and debugging complex async service calls.
3. **Git Workflow:** Followed a strict "commit-per-feature" strategy, ensuring every functional increment was tracked via Git checkpoints.
4. **Tooling Integration:** Integrated MCP for seamless filesystem access and structured AI agents to ensure design and code consistency.

### Evidence — Claude Code usage

#### MCP
* **path:** .mcp.json
* **what:** Configured the filesystem MCP server to allow the AI agent to traverse the project structure, enabling efficient reading and refactoring of backend/frontend code.

#### Skill
* **path:** .claude/skills/book-manager/SKILL.md
* **what:** Defined a reusable pattern for searching and filtering books. The AI agent uses this skill to ensure consistency in data handling across listing components.

#### Agent
* **path:** .claude/agents/ui-architect.md
* **what:** Created an automated UI architect agent that monitors CSS and HTML structures to maintain a clean, minimalist, and light-themed aesthetic, ensuring high readability and consistent design across all bookstore pages.
