# Urban Natura Barcelona - Backend PRD

## Original Problem Statement
Backend Java Spring Boot 3 para tienda de acuarios Urban Natura Barcelona. Solo backend, sin frontend. El frontend React ya existe y consume la API desde http://localhost:8080.

## Architecture
- **Framework**: Spring Boot 3.2.2
- **Java Version**: 17 (LTS)
- **Build Tool**: Maven
- **Database**: H2 in-memory
- **Port**: 8080
- **CORS**: Enabled for http://localhost:5173

## Project Structure
```
/app/spring-backend/
├── pom.xml
├── src/main/java/com/urbanatura/
│   ├── UrbanNaturaApplication.java
│   ├── controller/ProductController.java
│   ├── service/ProductService.java
│   ├── repository/ProductRepository.java
│   ├── model/Product.java
│   ├── dto/
│   │   ├── ProductDTO.java
│   │   ├── PagedResponseDTO.java
│   │   └── CategoryDTO.java
│   └── config/
│       ├── CorsConfig.java
│       └── DataSeeder.java
└── src/main/resources/application.properties
```

## Core Requirements (Static)
### Product Entity Fields
- Long id, String name, String description, BigDecimal price
- String category, String subcategory, String imageUrl
- Integer stock, Boolean isNew, String brand
- BigDecimal comparePrice, Double rating, Integer reviews, String slug

### API Endpoints
- `GET /api/v1/products` - Paginated list with filters (search, category, subcategory)
- `GET /api/v1/products/{id}` - Single product by ID
- `GET /api/v1/products/categories` - Categories with subcategories

## What's Been Implemented (2026-03-14)
- [x] Spring Boot 3.2.2 project setup with Maven
- [x] Product entity with JPA annotations
- [x] ProductRepository with custom JPQL queries for filtering
- [x] ProductService with pagination and filtering logic
- [x] ProductController with all required endpoints
- [x] CORS configuration for http://localhost:5173
- [x] DataSeeder with 16 products (CommandLineRunner)
- [x] H2 console available at /h2-console
- [x] All DTOs (ProductDTO, PagedResponseDTO, CategoryDTO)

## Testing Status
- Backend Tests: 18/18 passed (100%)
- All endpoints verified working
- CORS headers correctly configured
- Database seeding verified

## How to Run
```bash
cd /app/spring-backend
mvn spring-boot:run
```

## Next Action Items
- None - MVP complete

## Future/Backlog
- P2: Add product creation/update/delete endpoints (if needed)
- P2: Add sorting options to product listing
- P2: Add product search by slug endpoint
