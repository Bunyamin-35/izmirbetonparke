import image1 from "../assets/products/kilitparke.jpg"
import image2 from "../assets/products/30x30.jpg"
import image3 from "../assets/products/20x20.jpg"
import image4 from "../assets/products/20x50.jpg"
import image5 from "../assets/products/10x10.jpg"
import image6 from "../assets/products/starparke.jpg"
import image7 from "../assets/products/prizmaparke.jpg"

export const items = [
    {
        id: 1,
        name: 'PARKE TAŞI',
        description: 'This is the description for Product 1. It is an amazing product with many features.',
        subitems: [
            { id: 1, name: '8 cm Kilit Parke Taşı',image:image1 , subitem:[
                { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.',},
                { id: 2, name: 'Boyutlar',description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.',},
                { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.',},
                { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.',},
            ]},
            { id: 2, name: '30x30x8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image2 },
            { id: 3, name: '20x20*8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image3 },
            { id: 4, name: '20x50x8 Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image4 },
            { id: 5, name: '10x10x8 Küp Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image5 },
            { id: 6, name: '10x20x8 Star Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image6 },
            { id: 7, name: '8 cm Prizma Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image7 },
        ],
    },
    {
        id: 2,
        name: 'Bordür Taşı',
        description: 'This is the description for Product 2. A must-have for anyone looking for quality.',
        subitems: [
            { id: 1, name: '75 lik (75x30x15) Bordür Taşı', description: 'Description of Feature 1 for Product 2.' },
            { id: 2, name: '20 lik (50x20x15) Bordür Taşı', description: 'Description of Feature 2 for Product 2.' },
            { id: 3, name: '15 lik (50x15x10) Çim Bordürü Taşı', description: 'Description of Feature 2 for Product 2.' },
        ],
    },
    {
        id: 3,
        name: 'Yağmur/Su Oluğu',
        description: 'Product 3 is known for its exceptional design and durability.',
        subitems: [
            { id: 1, name: 'Yağmur/Su Oluğu', description: 'Description of Feature 1 for Product 3.' },

        ],
    },
    {
        id: 4,
        name: 'Agrega',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'Mıcır', description: 'Description of Feature 1 for Product 4.' },
            { id: 2, name: 'Kum', description: 'Description of Feature 2 for Product 4.' },
            { id: 3, name: 'Toz/Filler', description: 'Description of Feature 2 for Product 4.' },
        ],
    },
    {
        id: 5,
        name: 'Çimento',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'Torba Çimento', description: 'Description of Feature 1 for Product 4.' },
            { id: 2, name: 'Dökme Çimento', description: 'Description of Feature 2 for Product 4.' },

        ],
    },
    {
        id: 6,
        name: 'Hazır Beton',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'Hazır Beton', description: 'Description of Feature 1 for Product 4.' },
        ],
    },
    {
        id: 7,
        name: 'İnşaat Demiri',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'İnşaat Demiri', description: 'Description of Feature 1 for Product 4.' },
        ],
    },
];