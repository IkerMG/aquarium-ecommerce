export const navigationData = [
    {
        id: 'acuarios',
        name: 'Acuarios',
        slug: '/categoria/acuarios',
        heroImage: '/assets/images/heroes/acuarios-hero.jpg',
        subcategories: [
            {
                title: 'Agua Dulce',
                links: [
                    { name: 'Nano Acuarios (< 40L)', slug: '/categoria/acuarios/nano' },
                    { name: 'Acuarios Medianos (40-200L)', slug: '/categoria/acuarios/medianos' },
                    { name: 'Acuarios Grandes (> 200L)', slug: '/categoria/acuarios/grandes' },
                    { name: 'Kits Completos', slug: '/categoria/acuarios/kits' },
                    { name: 'Acuarios Plantados', slug: '/categoria/acuarios/plantados' }
                ]
            },
            {
                title: 'Agua Marina',
                links: [
                    { name: 'Acuarios Reef', slug: '/categoria/acuarios/reef' },
                    { name: 'Acuarios FOWLR', slug: '/categoria/acuarios/fowlr' },
                    { name: 'Nano Reef (< 100L)', slug: '/categoria/acuarios/nano-reef' },
                    { name: 'Sistemas Completos', slug: '/categoria/acuarios/marinos-completos' }
                ]
            },
            {
                title: 'Componentes',
                links: [
                    { name: 'Mesas y Muebles', slug: '/categoria/acuarios/mesas' },
                    { name: 'Tapas y Cubiertas', slug: '/categoria/acuarios/tapas' },
                    { name: 'Rebosaderos', slug: '/categoria/acuarios/rebosaderos' },
                    { name: 'Sumps', slug: '/categoria/acuarios/sumps' },
                    { name: 'Acuarios a Medida', slug: '/categoria/acuarios/custom' }
                ]
            }
        ],
        featured: [
            { name: 'Waterbox Marine X 90.3', image: 'https://via.placeholder.com/150', slug: '/producto/waterbox-marine-x' },
            { name: 'ADA Cube Garden 60-P', image: 'https://via.placeholder.com/150', slug: '/producto/ada-cube-60p' },
            { name: 'Red Sea Reefer 250', image: 'https://via.placeholder.com/150', slug: '/producto/red-sea-reefer-250' }
        ]
    },
    {
        id: 'plantas',
        name: 'Plantas',
        slug: '/categoria/plantas',
        heroImage: '/assets/images/heroes/plantas-hero.jpg',
        subcategories: [
            {
                title: 'Categorías',
                links: [
                    { name: 'Musgos', slug: '/categoria/plantas/musgos' },
                    { name: 'Plantas de estanque', slug: '/categoria/plantas/estanque' },
                    { name: 'Plantas en maceta', slug: '/categoria/plantas/maceta' },
                    { name: 'Plantas flotantes', slug: '/categoria/plantas/flotantes' },
                    { name: 'Plantas in vitro', slug: '/categoria/plantas/in-vitro' }
                ]
            }
        ],
        featured: [
            { name: 'Anubias Barteri', image: 'https://via.placeholder.com/150', slug: '/producto/anubias-barteri' },
            { name: 'Cryptocoryne Wendtii', image: 'https://via.placeholder.com/150', slug: '/producto/cryptocoryne' },
            { name: 'Rotala Rotundifolia', image: 'https://via.placeholder.com/150', slug: '/producto/rotala' }
        ]
    },
    {
        id: 'animales',
        name: 'Animales',
        slug: '/categoria/animales',
        heroImage: '/assets/images/heroes/animales-hero.jpg',
        subcategories: [
            {
                title: 'Agua Dulce',
                links: [
                    { name: 'Peces Tropicales', slug: '/categoria/animales/tropicales' },
                    { name: 'Peces de Agua Fría', slug: '/categoria/animales/agua-fria' },
                    { name: 'Gambas (Caridinas)', slug: '/categoria/animales/caridinas' },
                    { name: 'Gambas (Neocaridinas)', slug: '/categoria/animales/neocaridinas' },
                    { name: 'Caracoles', slug: '/categoria/animales/caracoles-dulce' },
                    { name: 'Anfibios', slug: '/categoria/animales/anfibios' }
                ]
            },
            {
                title: 'Agua Marina',
                links: [
                    { name: 'Payasos (Clownfish)', slug: '/categoria/animales/payasos' },
                    { name: 'Cirujanos (Tangs)', slug: '/categoria/animales/cirujanos' },
                    { name: 'Corales Blandos', slug: '/categoria/animales/corales-blandos' },
                    { name: 'Corales Duros (SPS/LPS)', slug: '/categoria/animales/corales-duros' },
                    { name: 'Invertebrados', slug: '/categoria/animales/invertebrados' },
                    { name: 'Anémonas', slug: '/categoria/animales/anemonas' }
                ]
            },
            {
                title: 'Reptiles',
                links: [
                    { name: 'Tortugas Acuáticas', slug: '/categoria/animales/tortugas' }
                ]
            }
        ],
        featured: [
            { name: 'Crystal Red Shrimp', image: 'https://via.placeholder.com/150', slug: '/producto/crystal-red' },
            { name: 'Ocellaris Clownfish', image: 'https://via.placeholder.com/150', slug: '/producto/ocellaris' },
            { name: 'Euphyllia (Torch)', image: 'https://via.placeholder.com/150', slug: '/producto/euphyllia' }
        ]
    },
    {
        id: 'equipamiento',
        name: 'Equipamiento',
        slug: '/categoria/equipamiento',
        heroImage: '/assets/images/heroes/equipamiento-hero.jpg',
        subcategories: [
            {
                title: 'Filtración',
                links: [
                    { name: 'Filtros Externos', slug: '/categoria/equipamiento/filtros-externos' },
                    { name: 'Filtros Internos', slug: '/categoria/equipamiento/filtros-internos' },
                    { name: 'Skimmers', slug: '/categoria/equipamiento/skimmers' },
                    { name: 'Material Filtrante', slug: '/categoria/equipamiento/material-filtrante' }
                ]
            },
            {
                title: 'Tecnología',
                links: [
                    { name: 'Bombas de Subida', slug: '/categoria/equipamiento/bombas-subida' },
                    { name: 'Wavemakers', slug: '/categoria/equipamiento/wavemakers' },
                    { name: 'Calentadores', slug: '/categoria/equipamiento/calentadores' },
                    { name: 'Enfriadores', slug: '/categoria/equipamiento/enfriadores' }
                ]
            },
            {
                title: 'Mantenimiento',
                links: [
                    { name: 'Ósmosis Inversa', slug: '/categoria/equipamiento/osmosis' },
                    { name: 'Esterilizadores UV', slug: '/categoria/equipamiento/uv' },
                    { name: 'Controladores', slug: '/categoria/equipamiento/controladores' },
                    { name: 'Alimentadores', slug: '/categoria/equipamiento/alimentadores' }
                ]
            }
        ],
        featured: [] // Puedes añadir marcas aquí si lo deseas
    },
    {
        id: 'iluminacion',
        name: 'Iluminación',
        slug: '/categoria/iluminacion',
        heroImage: '/assets/images/heroes/iluminacion-hero.jpg',
        subcategories: [
            {
                title: 'Agua Dulce',
                links: [
                    { name: 'LED Plantados', slug: '/categoria/iluminacion/led-plantados' },
                    { name: 'LED Tropicales', slug: '/categoria/iluminacion/led-tropicales' },
                    { name: 'Tubos Fluorescentes', slug: '/categoria/iluminacion/tubos' }
                ]
            },
            {
                title: 'Agua Marina',
                links: [
                    { name: 'LED Reef', slug: '/categoria/iluminacion/led-reef' },
                    { name: 'Pantallas T5', slug: '/categoria/iluminacion/t5-reef' },
                    { name: 'Híbridos', slug: '/categoria/iluminacion/hibridos' }
                ]
            },
            {
                title: 'Accesorios',
                links: [
                    { name: 'Controladores', slug: '/categoria/iluminacion/controladores' },
                    { name: 'Soportes y Brazos', slug: '/categoria/iluminacion/soportes' }
                ]
            }
        ],
        featured: [
            { name: 'Kessil A360X', image: 'https://via.placeholder.com/150', slug: '/producto/kessil-a360x' },
            { name: 'AI Hydra 64 HD', image: 'https://via.placeholder.com/150', slug: '/producto/ai-hydra-64' },
            { name: 'Chihiros WRGB II', image: 'https://via.placeholder.com/150', slug: '/producto/chihiros-wrgb2' }
        ]
    },
    {
        id: 'quimica',
        name: 'Química',
        slug: '/categoria/quimica',
        heroImage: '/assets/images/heroes/quimica-hero.jpg',
        subcategories: [
            {
                title: 'Agua Dulce',
                links: [
                    { name: 'Acondicionadores', slug: '/categoria/quimica/acondicionadores' },
                    { name: 'Fertilizantes', slug: '/categoria/quimica/fertilizantes' },
                    { name: 'Sistemas CO2', slug: '/categoria/quimica/co2' },
                    { name: 'Bacterias', slug: '/categoria/quimica/bacterias' }
                ]
            },
            {
                title: 'Agua Marina',
                links: [
                    { name: 'Sales Marinas', slug: '/categoria/quimica/sales' },
                    { name: 'Suplementos Coral', slug: '/categoria/quimica/suplementos' },
                    { name: 'Control Nutrientes', slug: '/categoria/quimica/nutrientes' }
                ]
            },
            {
                title: 'Alimentación',
                links: [
                    { name: 'Comida Seca', slug: '/categoria/alimentacion/seca' },
                    { name: 'Comida Congelada', slug: '/categoria/alimentacion/congelada' },
                    { name: 'Especializada', slug: '/categoria/alimentacion/especializada' }
                ]
            }
        ],
        featured: []
    },
    {
        id: 'ofertas',
        name: 'Ofertas',
        slug: '/categoria/ofertas',
        heroImage: '/assets/images/heroes/ofertas-hero.jpg',
        isSpecial: true, // Para darle estilo diferente
        subcategories: [
            {
                title: 'Promociones',
                links: [
                    { name: 'Ofertas Flash', slug: '/ofertas/flash' },
                    { name: 'Outlet', slug: '/ofertas/outlet' },
                    { name: 'Novedades', slug: '/ofertas/novedades' },
                    { name: 'Kits y Bundles', slug: '/ofertas/bundles' }
                ]
            }
        ],
        featured: []
    }
];