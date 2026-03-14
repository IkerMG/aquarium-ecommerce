# Urban Natura Barcelona - Backend API

Backend Spring Boot 3 para tienda de acuarios.

## Requisitos
- Java 17+ (LTS)

## Ejecutar

### Opción 1: JAR ejecutable (Recomendado para producción)
```bash
java -jar target/urban-natura-backend-1.0.0.jar
```

### Opción 2: Maven (Desarrollo)
```bash
mvn spring-boot:run
```

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/products` | Lista paginada de productos |
| GET | `/api/v1/products/{id}` | Producto por ID |
| GET | `/api/v1/products/categories` | Categorías con subcategorías |

### Parámetros de `/api/v1/products`
- `page` (default: 0) - Número de página
- `size` (default: 12) - Productos por página
- `search` - Buscar en nombre/descripción
- `category` - Filtrar por categoría
- `subcategory` - Filtrar por subcategoría

### Ejemplos
```bash
# Todos los productos (paginado)
curl http://localhost:8080/api/v1/products

# Buscar "coral"
curl "http://localhost:8080/api/v1/products?search=coral"

# Filtrar por categoría
curl "http://localhost:8080/api/v1/products?category=iluminacion"

# Combinado
curl "http://localhost:8080/api/v1/products?category=plantas&subcategory=maceta"

# Producto específico
curl http://localhost:8080/api/v1/products/1

# Categorías
curl http://localhost:8080/api/v1/products/categories
```

## Configuración

| Variable | Valor |
|----------|-------|
| Puerto | 8080 |
| Base de datos | H2 en memoria |
| CORS | http://localhost:5173 |
| H2 Console | http://localhost:8080/h2-console |

## Despliegue en Railway/Render

1. Subir repositorio a GitHub
2. Conectar con Railway/Render
3. Configurar:
   - Build: `mvn clean package -DskipTests`
   - Start: `java -jar target/urban-natura-backend-1.0.0.jar`
   - Puerto: `8080`

## Estructura
```
src/main/java/com/urbanatura/
├── UrbanNaturaApplication.java
├── controller/ProductController.java
├── service/ProductService.java
├── repository/ProductRepository.java
├── model/Product.java
├── dto/
│   ├── ProductDTO.java
│   ├── PagedResponseDTO.java
│   └── CategoryDTO.java
└── config/
    ├── CorsConfig.java
    └── DataSeeder.java
```
