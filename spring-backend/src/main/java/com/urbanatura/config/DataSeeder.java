package com.urbanatura.config;

import com.urbanatura.model.Product;
import com.urbanatura.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements CommandLineRunner {
    
    private final ProductRepository productRepository;
    
    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            log.info("Seeding database with initial products...");
            List<Product> products = createProducts();
            productRepository.saveAll(products);
            log.info("Database seeded with {} products", products.size());
        } else {
            log.info("Database already contains products, skipping seed.");
        }
    }
    
    private List<Product> createProducts() {
        return Arrays.asList(
            createProduct(null, "Urna Crystal Garden 60P", "urna-crystal-garden-60p",
                "Urna de cristal óptico de alta transparencia. 60x30x36cm.",
                new BigDecimal("125.00"), new BigDecimal("145.00"), "acuarios", "nano",
                "https://images.unsplash.com/photo-1517607736340-02e0b5220455?q=80&w=600",
                5, true, "Blau Aquaristic", 4.8, 24),
            
            createProduct(null, "Kit Nano Cube 30L Complete", "kit-nano-cube-30l",
                "Kit completo con filtro, iluminación y sustrato.",
                new BigDecimal("189.90"), null, "acuarios", "kits",
                "https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=600",
                8, false, "Dennerle", 4.5, 12),
            
            createProduct(null, "Oase BioMaster Thermo 250", "oase-biomaster-thermo-250",
                "Filtro externo con calentador integrado y prefiltro de fácil limpieza.",
                new BigDecimal("215.50"), null, "equipamiento", "filtros-externos",
                "https://images.unsplash.com/photo-1621996767850-937f22572533?q=80&w=600",
                7, false, "Oase", 5.0, 45),
            
            createProduct(null, "Twinstar Light 600S III", "twinstar-light-600s-iii",
                "Pantalla LED de alta gama para acuarios plantados de hasta 60cm.",
                new BigDecimal("245.00"), new BigDecimal("260.00"), "iluminacion", "led-plantados",
                "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=600",
                5, false, "Twinstar", 4.9, 33),
            
            createProduct(null, "Crystal Red Shrimp S-Grade", "crystal-red-shrimp-s",
                "Caridina cantonensis grado S. Patrón blanco y rojo muy definido.",
                new BigDecimal("12.00"), null, "animales", "caridinas",
                "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=600",
                20, false, null, 4.7, 58),
            
            createProduct(null, "ADA Aqua Soil Amazonia 9L", "ada-aqua-soil-amazonia",
                "El mejor sustrato nutritivo para plantas de acuario.",
                new BigDecimal("38.00"), null, "plantas", "sustratos",
                "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600",
                15, false, "ADA", 4.9, 120),
            
            createProduct(null, "Chihiros WRGB II 60cm", "chihiros-wrgb2-60",
                "LED RGB completo con control bluetooth para plantados.",
                new BigDecimal("139.00"), null, "iluminacion", "led-plantados",
                "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=600",
                9, false, "Chihiros", 4.6, 87),
            
            createProduct(null, "Euphyllia Torch Coral", "euphyllia-torch-coral",
                "Coral LPS con pólipos en forma de antorcha. Movimiento hipnótico.",
                new BigDecimal("55.00"), null, "animales", "corales-blandos",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600",
                6, true, null, 4.8, 19),
            
            createProduct(null, "JBL ProFlora CO2 Completo", "jbl-proflora-co2",
                "Sistema CO2 completo con botella 500g, regulador y difusor.",
                new BigDecimal("89.95"), new BigDecimal("99.00"), "quimica", "co2",
                "https://images.unsplash.com/photo-1598263884393-e4c161cc6991?q=80&w=600",
                6, false, "JBL", 4.4, 31),
            
            createProduct(null, "Anubias Barteri var. Nana", "anubias-barteri-nana",
                "Planta robusta de bajo mantenimiento para rocas y madera.",
                new BigDecimal("8.90"), null, "plantas", "maceta",
                "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600",
                35, false, null, 4.7, 203),
            
            createProduct(null, "Red Sea Reefer 250 V3", "red-sea-reefer-250",
                "Sistema marino completo con sump integrado. Estándar reef.",
                new BigDecimal("749.00"), null, "acuarios", "reef",
                "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=600",
                2, true, "Red Sea", 4.9, 14),
            
            createProduct(null, "Ocellaris Clownfish (Par)", "ocellaris-clownfish-par",
                "Pareja de pez payaso criado en cautividad. Muy resistente.",
                new BigDecimal("38.00"), null, "animales", "payasos",
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600",
                10, false, null, 4.8, 76),
            
            createProduct(null, "Seachem Flourish Excel 500ml", "seachem-flourish-excel",
                "Fuente de carbono orgánico para plantas. Alternativa al CO2.",
                new BigDecimal("19.90"), null, "quimica", "fertilizantes",
                "https://images.unsplash.com/photo-1621996767850-937f22572533?q=80&w=600",
                25, false, "Seachem", 4.6, 144),
            
            createProduct(null, "Bucephalandra Kedagang Blue", "bucephalandra-kedagang",
                "Planta rara con reflejos azulados. Crecimiento lento y muy llamativa.",
                new BigDecimal("14.90"), null, "plantas", "maceta",
                "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600",
                15, true, null, 4.8, 28),
            
            createProduct(null, "Kessil A360X Wireless", "kessil-a360x",
                "LED de referencia para marinos. Control inalámbrico para corales SPS.",
                new BigDecimal("489.00"), null, "iluminacion", "led-reef",
                "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=600",
                3, false, "Kessil", 5.0, 22),
            
            createProduct(null, "Seiryu Stone Premium (kg)", "seiryu-stone-kg",
                "Roca natural japonesa con vetas grises. Clave en estilo Iwagumi.",
                new BigDecimal("9.90"), null, "plantas", "sustratos",
                "https://images.unsplash.com/photo-1598263884393-e4c161cc6991?q=80&w=600",
                100, false, null, 4.7, 89)
        );
    }
    
    private Product createProduct(Long id, String name, String slug, String description,
                                   BigDecimal price, BigDecimal comparePrice, String category,
                                   String subcategory, String imageUrl, Integer stock,
                                   Boolean isNew, String brand, Double rating, Integer reviews) {
        Product product = new Product();
        product.setId(id);
        product.setName(name);
        product.setSlug(slug);
        product.setDescription(description);
        product.setPrice(price);
        product.setComparePrice(comparePrice);
        product.setCategory(category);
        product.setSubcategory(subcategory);
        product.setImageUrl(imageUrl);
        product.setStock(stock);
        product.setIsNew(isNew);
        product.setBrand(brand);
        product.setRating(rating);
        product.setReviews(reviews);
        return product;
    }
}