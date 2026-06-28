# Online Book Shop

A full-stack book store application featuring a Spring Boot backend and an Angular frontend.

## How To Run

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321/vibe-code-tours-site
npm run build      # static build into dist/
npm run preview    # preview the built dist/ locally
```

### Backend
1. Navigate to the backend directory:
```bash
cd backend
```
2. Run the application:
./mvnw spring-boot:run
```

## Project Structure

```text
online-book-shop/
├── backend/          # Spring Boot Application
│   ├── src/main/java/com/example/bookshop/  # Source code
│   └── src/main/resources/                  # Templates, static assets
└── frontend/         # Angular Application
    └── src/app/      # Components, Services, and Data
