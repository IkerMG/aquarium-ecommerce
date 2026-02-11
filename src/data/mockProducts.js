// src/data/mockProducts.js

export const products = [
    // --- ACUARIOS ---
    {
        id: 'prod_001',
        name: 'Urna Crystal Garden 60P',
        slug: 'urna-crystal-garden-60p',
        category: 'acuarios',
        price: 125.00,
        comparePrice: 145.00, // Precio anterior si hay oferta
        image: 'https://images.unsplash.com/photo-1517607736340-02e0b5220455?q=80&w=600',
        brand: 'Blau Aquaristic',
        rating: 4.8,
        reviews: 24,
        isNew: true,
        stock: true,
        description: 'Urna de cristal óptico de alta transparencia, ideal para aquascaping. Medidas: 60x30x36cm.'
    },
    {
        id: 'prod_002',
        name: 'Kit Nano Cube 30L Complete',
        slug: 'kit-nano-cube-30l',
        category: 'acuarios',
        price: 189.90,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=600',
        brand: 'Dennerle',
        rating: 4.5,
        reviews: 12,
        isNew: false,
        stock: true,
        description: 'Kit completo con filtro, iluminación y sustrato. Perfecto para iniciarse.'
    },

    // --- FILTRACIÓN Y TECNOLOGÍA ---
    {
        id: 'prod_003',
        name: 'Oase BioMaster Thermo 250',
        slug: 'oase-biomaster-thermo-250',
        category: 'quimica-del-acuario', // O categoría técnica
        price: 215.50,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1621996767850-937f22572533?q=80&w=600',
        brand: 'Oase',
        rating: 5.0,
        reviews: 45,
        isNew: false,
        stock: true,
        description: 'Filtro externo con calentador integrado y prefiltro de fácil limpieza.'
    },

    // --- ILUMINACIÓN ---
    {
        id: 'prod_004',
        name: 'Twinstar Light 600S III',
        slug: 'twinstar-light-600s-iii',
        category: 'iluminacion',
        price: 245.00,
        comparePrice: 260.00,
        image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=600',
        brand: 'Twinstar',
        rating: 4.9,
        reviews: 30,
        isNew: true,
        stock: true,
        description: 'Pantalla LED RGB de espectro completo para el máximo crecimiento de plantas.'
    },
    {
        id: 'prod_005',
        name: 'Chihiros WRGB II Slim 60',
        slug: 'chihiros-wrgb-ii-slim-60',
        category: 'iluminacion',
        price: 168.00,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1583321500445-6351d520377f?q=80&w=600',
        brand: 'Chihiros',
        rating: 4.6,
        reviews: 18,
        isNew: false,
        stock: true,
        description: 'Control por Bluetooth mediante App. Diseño delgado y elegante.'
    },

    // --- HARDSCAPE Y PLANTAS ---
    {
        id: 'prod_006',
        name: 'Roca Dragon Stone (Kg)',
        slug: 'roca-dragon-stone',
        category: 'aquascaping',
        price: 4.50,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1598263884393-e4c161cc6991?q=80&w=600',
        brand: 'Natural',
        rating: 4.7,
        reviews: 150,
        isNew: false,
        stock: true,
        description: 'Roca arcillosa con textura agujereada, ideal para paisajes tipo Iwagumi.'
    },
    {
        id: 'prod_007',
        name: 'Raíz Red Moor Wood (M)',
        slug: 'raiz-red-moor-wood-m',
        category: 'aquascaping',
        price: 18.90,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=600',
        brand: 'Natural',
        rating: 4.8,
        reviews: 42,
        isNew: false,
        stock: false, // Fuera de stock ejemplo
        description: 'Raíz ramificada natural. Tamaño mediano (25-35cm).'
    },
    {
        id: 'prod_008',
        name: 'Tropica 1-2-Grow Micranthemum Monte Carlo',
        slug: 'tropica-monte-carlo',
        category: 'plantas',
        price: 7.50,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600',
        brand: 'Tropica',
        rating: 4.9,
        reviews: 89,
        isNew: false,
        stock: true,
        description: 'Planta tapizante in-vitro, libre de caracoles y algas.'
    },
    {
        id: 'prod_009',
        name: 'Anubias Barteri Nana',
        slug: 'anubias-barteri-nana',
        category: 'plantas',
        price: 8.90,
        comparePrice: 10.50,
        image: 'https://images.unsplash.com/photo-1518182170546-0766ce6fec9e?q=80&w=600',
        brand: 'Tropica',
        rating: 4.8,
        reviews: 55,
        isNew: false,
        stock: true,
        description: 'Planta epífita muy resistente, ideal para principiantes.'
    },

    // --- ALIMENTACIÓN ---
    {
        id: 'prod_010',
        name: 'Seachem Prime 250ml',
        slug: 'seachem-prime-250',
        category: 'quimica-del-acuario',
        price: 14.50,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1629898064499-236b567d4982?q=80&w=600',
        brand: 'Seachem',
        rating: 5.0,
        reviews: 200,
        isNew: false,
        stock: true,
        description: 'Acondicionador completo y concentrado para agua dulce y salada.'
    },
    {
        id: 'prod_011',
        name: 'Hikari Algae Wafers 80g',
        slug: 'hikari-algae-wafers',
        category: 'alimentacion-peces-corales',
        price: 9.90,
        comparePrice: null,
        image: 'https://images.unsplash.com/photo-1599423610214-4c28f74220b3?q=80&w=600',
        brand: 'Hikari',
        rating: 4.9,
        reviews: 76,
        isNew: false,
        stock: true,
        description: 'Alimento de fondo vegetal para plecos y ancistrus.'
    }
];