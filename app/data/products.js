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
                id: 1, name: '8 cm Kilit Parke Taşı', description: "Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:", image: image1, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 2, name: '30x30x8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image2, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 3, name: '20x20*8 Karo Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image3, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 4, name: '20x50x8 Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image4, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 5, name: '10x10x8 Küp Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image5, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 6, name: '10x20x8 Star Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image6, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 7, name: '8 cm Prizma Parke Taşı', image: "", description: 'Description of Feature 2 for Product 1.', image: image7, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
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
                id: 1, name: '75 lik Beton Bordür Taşı', image: image8, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 2, name: '20 lik Beton Bordür Taşı', image: image9, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 3, name: '15 lik Beton Bordür Taşı', image: image10, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
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
                id: 1, name: 'Yağmur/Su Oluğu Taşı', image: image11, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
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
                id: 1, name: 'Mıcır', image: image12, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 2, name: 'Filler/Toz', image: image12, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 3, name: 'Kum', image: image12, features: [
                    { id: 1, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 2, name: 'Boyutlar', description: 'Kalınlığı 8 cm olup, genişlik ve uzunluk ölçüleri üreticiye göre değişiklik gösterebilir.', },
                    { id: 3, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 4, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
        ],
    },
    {
        id: 5,
        name: 'Çimento',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'Torba/Dökme Çimento', description: 'Description of Feature 1 for Product 4.', image: image13, },

        ],
    },
    {
        id: 6,
        name: 'Hazır Beton',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'Hazır Beton', description: 'Description of Feature 1 for Product 4.', image: image14, },
        ],
    },
    {
        id: 7,
        name: 'İnşaat Demiri',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            { id: 1, name: 'İnşaat Demiri', description: 'Description of Feature 1 for Product 4.', image: image15, },
        ],
    },
];