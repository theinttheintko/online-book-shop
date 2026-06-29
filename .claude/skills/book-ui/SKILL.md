---
name: bookstore-dev
description: Development workflow and conventions for the Online Book Shop. Covers architecture, API integration, and UI standards.
---

<context>
The Online Book Shop is a full-stack application using Java Spring Boot for the backend and Angular for the frontend. The system focuses on modular component design, robust API communication, and responsive UI.
</context>

<architecture>
## Technical Stack
- **Backend**: Java Spring Boot (RESTful API, JPA/Hibernate, H2/MySQL)
- **Frontend**: Angular (TypeScript, RxJS, Angular Material)
- **Communication**: REST API with JSON data exchange
</architecture>

<commands>
## Development Commands

| Task | Command |
|------|---------|
| Start Backend | `./mvnw spring-boot:run` |
| Start Frontend | `ng serve` |
| Build Frontend | `ng build` |
| Run Tests | `./mvnw test` / `ng test` |
</commands>

<standards>
## UI & Code Standards

- **Components**: Use Angular CLI to generate standalone components.
- **State Management**: Use RxJS Subjects or Signals for data synchronization.
- **API Integration**: All backend calls must go through Angular `HttpClient` services.
- **Design**: Maintain clean spacing (16px), consistent font sizing, and accessible contrast ratios.
- **Error Handling**: Implement global error interceptors for API failures.
</standards>

<gotchas>
## Known Gotchas
- **CORS Issues**: Ensure `WebMvcConfigurer` is configured in Spring Boot to allow requests from the Angular dev server (usually `http://localhost:4200`).
- **Sync**: Always use `async` pipes in templates to avoid memory leaks with observables.
- **Environment**: Backend runs on port 8080 by default; ensure proxy configuration in Angular for seamless local development.
</gotchas>
