package com.urbanatura.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private String category;
    private String subcategory;
    private String imageUrl;
    private Integer stock;
    private Boolean isNew;
    private String brand;
    private BigDecimal comparePrice;
    private Double rating;
    private Integer reviews;
    private String slug;
}