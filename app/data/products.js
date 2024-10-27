import image1 from "../assets/products/kilitparke.jpg"
import image2 from "../assets/products/30x30.jpg"
import image3 from "../assets/products/20x20.jpg"
import image4 from "../assets/products/20x50.jpg"
import image5 from "../assets/products/10x10.jpg"
import image6 from "../assets/products/starparke.jpg"
import image7 from "../assets/products/prizmaparke.jpg"
import image8 from "../assets/products/75bordur.jpg"
import image9 from "../assets/products/20bordur.jpg"
import image10 from "../assets/products/15bordur.jpg"
import image11 from "../assets/products/oluk.jpg"
import image12 from "../assets/products/agrega.jpg"
import image13 from "../assets/products/cement.jpg"
import image14 from "../assets/products/concrete.webp"
import image15 from "../assets/products/rbar.jpg"

export const items = [
    {
        id: 1,
        name: 'Beton Parke Taşı',
        description: 'This is the description for Product 1. It is an amazing product with many features.',
        subitems: [
            {
                id: 11, name: '8 cm Kilit Parke Taşı', description: "Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:", image: image1, features: [
                    { id: 111, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 112, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 113, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 114, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 12, name: '30x30x8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image2, features: [
                    { id: 121, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 122, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 123, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 124, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 13, name: '20x20*8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image3, features: [
                    { id: 131, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 132, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 133, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 134, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 14, name: '20x50x8 Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image4, features: [
                    { id: 141, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 142, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 143, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 144, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 15, name: '10x10x8 Küp Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image5, features: [
                    { id: 151, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 152, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 153, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 154, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 16, name: '10x20x8 Star Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image6, features: [
                    { id: 161, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 162, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 163, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 164, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 17, name: '8 cm Prizma Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image7, features: [
                    { id: 171, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 172, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 173, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 174, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
        ],
    },
    {
        id: 2,
        name: 'Bordür Taşı',
        description: 'This is the description for Product 2. A must-have for anyone looking for quality.',
        subitems: [
            {
                id: 21, name: '75 lik Beton Bordür Taşı', image: image8, features: [
                    { id: 211, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 212, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 213, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 214, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 22, name: '20 lik Beton Bordür Taşı', image: image9, features: [
                    { id: 221, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 222, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 223, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 224, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 23, name: '15 lik Beton Bordür Taşı', image: image10, features: [
                    { id: 231, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 232, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 233, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 234, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
        ],
    },
    {
        id: 3,
        name: 'Yağmur/Su Oluğu',
        description: 'Product 3 is known for its exceptional design and durability.',
        subitems: [
            {
                id: 31, name: 'Yağmur/Su Oluğu Taşı', image: image11, features: [
                    { id: 311, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 312, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 313, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 314, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },

        ],
    },
    {
        id: 4,
        name: 'Agrega',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            {
                id: 41, name: 'Mıcır', image: image12, features: [
                    { id: 411, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 412, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 413, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 414, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 42, name: 'Filler/Toz', image: image12, features: [
                    { id: 421, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 422, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 423, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 424, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 43, name: 'Kum', image: image12, features: [
                    { id: 431, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 432, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 433, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 434, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
        ],
    },
    {
        id: 5,
        name: 'Çimento',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 51, name: 'Torba/Dökme Çimento', description: 'Description of Feature 1 for Product 4.', image: image13, },

        ],
    },
    {
        id: 6,
        name: 'Hazır Beton',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 61, name: 'Hazır Beton', description: 'Description of Feature 1 for Product 4.', image: image14, },
        ],
    },
    {
        id: 7,
        name: 'İnşaat Demiri',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 71, name: 'İnşaat Demiri', description: 'Description of Feature 1 for Product 4.', image: image15, },
        ],
    },
];