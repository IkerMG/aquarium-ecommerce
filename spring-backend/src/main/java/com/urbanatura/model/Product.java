package com.urbanatura.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(nullable = false)
    private String category;
    
    private String subcategory;
    
    private String imageUrl;
    
    @Column(nullable = false)
    private Integer stock;
    
    @Column(name = "is_new")
    private Boolean isNew;
    
    private String brand;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal comparePrice;
    
    private Double rating;
    
    private Integer reviews;
    
    @Column(unique = true)
    private String slug;
}