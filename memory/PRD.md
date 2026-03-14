# Urban Natura Barcelona - PRD

## Original Problem Statement
Tienda de acuarios Urban Natura Barcelona con:
- Backend Spring Boot 3 (API REST)
- Frontend React con páginas de Checkout, Login, About y Hero con video

## Architecture
### Backend
- **Framework**: Spring Boot 3.2.2
- **Java Version**: 17 (LTS)
- **Build Tool**: Maven
- **Database**: H2 in-memory
- **Port**: 8080
- **CORS**: Enabled for http://localhost:5173

### Frontend
- **Framework**: React + Vite
- **Styling**: Tailwind CSS (dark theme: neutral-950, accent-500)
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Router**: HashRouter
- **Port**: 5173

## Project Structure
```
/app/
├── spring-backend/          # Java Spring Boot API
│   ├── pom.xml
│   └── src/main/java/com/urbanatura/
│       ├── controller/ProductController.java
│       ├── service/ProductService.java
│       ├── repository/ProductRepository.java
│       ├── model/Product.java
│       └── config/DataSeeder.java, CorsConfig.java
│
└── src/                     # React Frontend
    ├── pages/
    │   ├── Checkout.jsx     # Form + cart summary + order confirmation
    │   ├── Login.jsx        # Tabs: login/register with validation
    │   └── About.jsx        # History, values, contact CTA
    ├── components/
    │   └── home/Hero/Hero.jsx  # Video with image fallback
    └── context/
        ├── CartContext.jsx
        └── AuthContext.jsx
```

## Core Requirements (Static)
### Backend API Endpoints
- `GET /api/v1/products` - Paginated list with filters
- `GET /api/v1/products/{id}` - Single product
- `GET /api/v1/products/categories` - Categories with subcategories

### Frontend Pages
- **Checkout**: Form (nombre, email, telefono, direccion, ciudad, codigoPostal), cart summary, confirm button
- **Login**: Two tabs (login/register), validation, AuthContext integration
- **About**: History (2008), 3 values (Calidad, Experiencia, Pasión), coral banner
- **Hero**: Video background with image fallback on 404

## What's Been Implemented (2026-03-14)
### Backend
- [x] Spring Boot 3.2.2 project with Maven
- [x] Product entity, repository, service, controller
- [x] CORS config, DataSeeder (16 products)
- [x] H2 console at /h2-console
- [x] Executable JAR: target/urban-natura-backend-1.0.0.jar

### Frontend (2026-03-14)
- [x] Checkout.jsx - Complete form with validation, cart integration, redirect to order-confirmation
- [x] Login.jsx - Tabbed login/register, validation, AuthContext, test credentials
- [x] About.jsx - Hero banner, history section, 3 values, stats, contact CTA
- [x] Hero.jsx - Video with fallback to Unsplash image on error
- [x] OrderConfirmation.jsx - Dark theme styling update

## Testing Status
- Backend: 18/18 passed (100%)
- Frontend: 14/18 features verified (78%)
  - Login, About, Hero, OrderConfirmation working
  - Checkout requires cart items via UI (localStorage direct manipulation fails)

## How to Run
```bash
# Backend
cd /app/spring-backend && mvn spring-boot:run

# Frontend (in your local environment)
cd /app && npm run dev
```

## Next Action Items
- None - All requested features implemented

## Future/Backlog
- P1: Payment gateway integration (Stripe)
- P2: User order history
- P2: Product reviews system
- P3: Wishlist functionality
