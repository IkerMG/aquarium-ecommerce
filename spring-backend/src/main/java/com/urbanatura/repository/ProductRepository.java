package com.urbanatura.repository;

import com.urbanatura.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    @Query("SELECT p FROM Product p WHERE " +
           "(:search IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%'))) AND " +
           "(:category IS NULL OR p.category = :category) AND " +
           "(:subcategory IS NULL OR p.subcategory = :subcategory)")
    Page<Product> findByFilters(
            @Param("search") String search,
            @Param("category") String category,
            @Param("subcategory") String subcategory,
            Pageable pageable);
    
    @Query("SELECT DISTINCT p.category FROM Product p")
    List<String> findDistinctCategories();
    
    @Query("SELECT DISTINCT p.subcategory FROM Product p WHERE p.category = :category AND p.subcategory IS NOT NULL")
    List<String> findSubcategoriesByCategory(@Param("category") String category);
}