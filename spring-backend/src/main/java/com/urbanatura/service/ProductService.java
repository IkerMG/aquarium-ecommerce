package com.urbanatura.service;

import com.urbanatura.dto.CategoryDTO;
import com.urbanatura.dto.PagedResponseDTO;
import com.urbanatura.dto.ProductDTO;
import com.urbanatura.model.Product;
import com.urbanatura.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ProductRepository productRepository;
    
    public PagedResponseDTO<ProductDTO> getProducts(int page, int size, String search, String category, String subcategory) {
        Pageable pageable = PageRequest.of(page, size);
        
        // Treat empty strings as null
        String searchParam = (search != null && !search.trim().isEmpty()) ? search.trim() : null;
        String categoryParam = (category != null && !category.trim().isEmpty()) ? category.trim() : null;
        String subcategoryParam = (subcategory != null && !subcategory.trim().isEmpty()) ? subcategory.trim() : null;
        
        Page<Product> productPage = productRepository.findByFilters(searchParam, categoryParam, subcategoryParam, pageable);
        
        List<ProductDTO> content = productPage.getContent().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        
        return new PagedResponseDTO<>(
                content,
                productPage.getNumber(),
                productPage.getSize(),
                productPage.getTotalElements(),
                productPage.getTotalPages()
        );
    }
    
    public Optional<ProductDTO> getProductById(Long id) {
        return productRepository.findById(id).map(this::convertToDTO);
    }
    
    public List<CategoryDTO> getCategories() {
        List<String> categories = productRepository.findDistinctCategories();
        
        return categories.stream()
                .map(category -> {
                    List<String> subcategories = productRepository.findSubcategoriesByCategory(category);
                    return new CategoryDTO(category, subcategories);
                })
                .collect(Collectors.toList());
    }
    
    private ProductDTO convertToDTO(Product product) {
        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getCategory(),
                product.getSubcategory(),
                product.getImageUrl(),
                product.getStock(),
                product.getIsNew(),
                product.getBrand(),
                product.getComparePrice(),
                product.getRating(),
                product.getReviews(),
                product.getSlug()
        );
    }
}