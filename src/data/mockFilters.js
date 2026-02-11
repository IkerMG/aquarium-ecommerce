// src/data/mockFilters.js

export const filterOptions = [
    {
        id: 'brand',
        name: 'Marcas',
        type: 'checkbox', // Tipo de selector en la UI
        options: [
            { label: 'ADA (Aqua Design Amano)', value: 'ada', count: 12 },
            { label: 'Oase Living Water', value: 'oase', count: 24 },
            { label: 'Tropica Aquarium Plants', value: 'tropica', count: 45 },
            { label: 'Twinstar', value: 'twinstar', count: 8 },
            { label: 'Seachem', value: 'seachem', count: 32 },
            { label: 'Blau Aquaristic', value: 'blau', count: 15 },
            { label: 'Chihiros', value: 'chihiros', count: 10 },
            { label: 'Hikari', value: 'hikari', count: 18 }
        ]
    },
    {
        id: 'price',
        name: 'Precio',
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
        options: [
            { label: '0€ - 20€', value: '0-20' },
            { label: '20€ - 50€', value: '20-50' },
            { label: '50€ - 150€', value: '50-150' },
            { label: '+150€', value: '150-max' }
        ]
    },
    {
        id: 'availability',
        name: 'Disponibilidad',
        type: 'checkbox',
        options: [
            { label: 'En Stock', value: 'in_stock', count: 350 },
            { label: 'Novedades', value: 'new_arrival', count: 42 },
            { label: 'Ofertas', value: 'on_sale', count: 15 }
        ]
    },
    {
        id: 'plant_difficulty',
        name: 'Dificultad (Plantas)',
        type: 'checkbox',
        conditionalCategory: 'plantas', // Solo mostrar si estamos en la categoría plantas
        options: [
            { label: 'Fácil (Easy)', value: 'easy', color: '#4ade80' },
            { label: 'Media (Medium)', value: 'medium', color: '#facc15' },
            { label: 'Avanzada (Advanced)', value: 'advanced', color: '#f87171' }
        ]
    }
];

// Opciones de ordenación para el desplegable "Ordenar por"
export const sortOptions = [
    { label: 'Recomendados', value: 'recommended' },
    { label: 'Precio: Menor a Mayor', value: 'price_asc' },
    { label: 'Precio: Mayor a Menor', value: 'price_desc' },
    { label: 'Novedades', value: 'newest' },
    { label: 'Mejor valorados', value: 'rating' }
];