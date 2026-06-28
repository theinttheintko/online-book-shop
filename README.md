# Online Book Shop

A full-stack book store application featuring a Spring Boot backend and an Angular frontend.

## How To Run

### Backend
1. Navigate to the backend directory:
```bash
cd backend
```
2. Run the application:
```bash
./mvnw spring-boot:run
```
### Frontend
1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies
```bash
npm install        # install dependencies
```
3. Start the development server:
```bash
npm start
```
## Project Structure

```text
online-book-shop/
├── backend/          # Spring Boot Application
│   ├── src/main/java/com/example/bookshop/  # Source code
│   └── src/main/resources/                  # Templates, static assets
└── frontend/         # Angular Application
    └── src/app/      # Components, Services, and Data
```
## Key Features
- Book Catalog: Browse through an organized collection of books with detailed information.
- Shopping Cart: Add your favorite books to the cart and review them anytime.
- Price Calculation: Automatically calculates the total price of items in your cart for a quick checkout.
- Smart Filtering: Quickly find the books you need using our integrated search system.
- Responsive Design: Fully optimized interface that works smoothly on mobile, tablet, and desktop devices.
- Secure Backend: Powered by Spring Boot to ensure reliable and fast data processing.

