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
                id: 11, name: 'Kilitli Parke Taşı', description: "Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:", image: image1, features: [
                    { id: 111, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 112, name: 'Boyutlar', description: 'Genişliği 16cm,uzunluğu 20 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.' },
                    { id: 113, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 114, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 12, name: '30x30x8 Karo Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image2, features: [
                    { id: 121, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 122, name: 'Boyutlar', description: 'Genişliği ve uzunluğu 30 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.', },
                    { id: 123, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 124, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 13, name: '20x20*8 Karo Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image3, features: [
                    { id: 131, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 132, name: 'Boyutlar', description: 'Genişliği ve uzunluğu 20 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.', },
                    { id: 133, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 134, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 14, name: '20x50x8 Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image4, features: [
                    { id: 141, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 142, name: 'Boyutlar', description: 'Genişliği 20 cm, uzunluğu 50 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.', },
                    { id: 143, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 144, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 15, name: '10x10x8 Küp Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image5, features: [
                    { id: 151, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 152, name: 'Boyutlar', description: 'Genişliği ve uzunluğu 10 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.', },
                    { id: 153, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 154, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 16, name: '10x20x8 Star Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image6, features: [
                    { id: 161, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 162, name: 'Boyutlar', description: 'Genişliği 10 cm, uzunluğu 20 cm olup kalınlığı 6 cm, 8 cm ve 10 cm olmak üzere farklı ölçülerde üretilebilmektedir.', },
                    { id: 163, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 164, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 17, name: '8 cm Prizma Parke Taşı', description: 'Yüzey kaplama malzemesi olarak kullanılan, press beton birimlere parke taşı denir. Dayanıklılığı, uzun ömürlü yapısı, estetik görünümü ve ekonomik oluşuyla öne çıkan parke taşları, şehir düzenlemeleri, kaldırım yapımları, sanayi ve fabrika yolları gibi alanlarda yaygın bir şekilde tercih edilmektedir. Parke taşları, belirli standartları karşılamalıdır:', image: image7, features: [
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
                id: 21, name: '75 lik Beton Bordür Taşı', description: "Beton press bordür, özellikle yol kenarları, park alanları, peyzaj projeleri ve yaya yolları gibi farklı alanlarda kullanılır. Dayanıklı yapısı sayesinde trafik ayırıcı olarak, yeşil alanlar ile taş döşeme alanlarını ayıran estetik bir sınır olarak işlev görür. Yüksekliği, araçların yol dışına çıkmasını engelleyerek güvenliği artırır, aynı zamanda bahçe peyzajında ve zemin düzenlemelerinde estetik bir görünüm sağlar. Beton malzemesi, dış etkilere karşı dirençli olup uzun ömürlüdür, çevre dostudur ve kolay montaj imkanı sunar. Bu özellikleriyle beton press bordür, sağlam ve düzenli bir alan yaratmaya yardımcı olur.", image: image8, features: [
                    { id: 211, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 212, name: 'Boyutlar', description: 'Yerden yüksekliği 30 cm olup uzunluğu 75 cm dir.', },
                    { id: 213, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 214, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 22, name: '20 lik Beton Bordür Taşı', description: "Beton press bordür, özellikle yol kenarları, park alanları, peyzaj projeleri ve yaya yolları gibi farklı alanlarda kullanılır. Dayanıklı yapısı sayesinde trafik ayırıcı olarak, yeşil alanlar ile taş döşeme alanlarını ayıran estetik bir sınır olarak işlev görür. Yüksekliği, araçların yol dışına çıkmasını engelleyerek güvenliği artırır, aynı zamanda bahçe peyzajında ve zemin düzenlemelerinde estetik bir görünüm sağlar. Beton malzemesi, dış etkilere karşı dirençli olup uzun ömürlüdür, çevre dostudur ve kolay montaj imkanı sunar. Bu özellikleriyle beton press bordür, sağlam ve düzenli bir alan yaratmaya yardımcı olur.", image: image9, features: [
                    { id: 221, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 222, name: 'Boyutlar', description: 'Yerden yüksekliği 20 cm olup uzunluğu 50 cm dir.', },
                    { id: 223, name: 'Renk ve Doku Seçenekleri', description: 'Doğal gri, kırmızı, sarı ve beyaz gibi renklerde ve çeşitli doku seçeneklerinde üretilir.', },
                    { id: 224, name: 'Uygulama Alanı', image: "", description: 'Yüksek trafik alanları, endüstriyel zeminler, araç yolları ve otoparklar.', },
                ]
            },
            {
                id: 23, name: '15 lik (Çim) Beton Bordür Taşı', description: "Beton press bordür, özellikle yol kenarları, park alanları, peyzaj projeleri ve yaya yolları gibi farklı alanlarda kullanılır. Dayanıklı yapısı sayesinde trafik ayırıcı olarak, yeşil alanlar ile taş döşeme alanlarını ayıran estetik bir sınır olarak işlev görür. Yüksekliği, araçların yol dışına çıkmasını engelleyerek güvenliği artırır, aynı zamanda bahçe peyzajında ve zemin düzenlemelerinde estetik bir görünüm sağlar. Beton malzemesi, dış etkilere karşı dirençli olup uzun ömürlüdür, çevre dostudur ve kolay montaj imkanı sunar. Bu özellikleriyle beton press bordür, sağlam ve düzenli bir alan yaratmaya yardımcı olur.", image: image10, features: [
                    { id: 231, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 232, name: 'Boyutlar', description: 'Yerden yüksekliği 15 cm olup uzunluğu 50 cm dir.', },
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
                id: 31, name: 'Yağmur/Su Oluğu Taşı', description: "50 cm uzunluğunda, 30 cm genişliğinde ve 12 cm yüksekliğinde olan yağmur oluğu, suyun etkili bir şekilde yönlendirilmesini sağlayarak zeminlerdeki su birikintilerini önler. Bu yağmur oluğu, özellikle binaların etrafında, yol kenarlarında ve park alanlarında kullanılır, böylece yağış sonrası suyun güvenli bir şekilde uzaklaştırılmasını sağlar. Beton veya benzeri dayanıklı malzemelerden üretilmiş olan bu oluk, dış etkilere karşı dirençli olup uzun ömürlüdür. Boyutları sayesinde geniş alanlarda etkin su tahliyesi yaparak, zeminlerin suyla zarar görmesini engeller ve çevre düzenlemelerine estetik bir katkı sunar.", image: image11, features: [
                    { id: 311, name: 'Malzeme', description: 'Yüksek dayanımlı beton.', },
                    { id: 312, name: 'Boyutlar', description: '50 cm uzunluğunda, 30 cm genişliğinde ve 12 cm kalınlığında olan press beton yağmur oluğunun kanal derinliği 4 cm dir.', },
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
                id: 41, name: 'Mıcır ,Filler ve Kum', image: image12, features: [
                    { id: 411, name: 'Malzeme', description: 'Firmamız, farklı gradasyonlarda mıcır, filler ve kum tedarik edebilme kapasitesi ile sektörde öne çıkan bir üretim tesisidir. Parke taşı üretiminde özellikle 4-12 mm boyutlarındaki mıcır, 0-4 mm boyutlarındaki filler ve 0-2 mm boyutlarındaki kum kullanılmaktadır. Bu malzemeler, parke taşlarının hem dayanıklılığını hem de estetik görünümünü arttırır.İşletmemiz, mıcır, filler ve kum malzemelerinin üretim standartlarına uygun olarak temin edilmesine özen gösterir. Kaliteli malzeme kullanımı, üretimde homojenlik sağlarken, nihai ürünün mukavemet ve yüzey düzgünlüğüne doğrudan katkı sağlar. Bu nedenle, tedarik süreçlerimiz titizlikle yürütülmektedir.Parke taşlarımızda kullandığımız 4-12 mm aralığındaki mıcır, 0-4 mm aralığındaki filler ve 0-2 mm aralığındaki kum, hem mekanik performansı hem de görsel uyumu en üst düzeye çıkartmak amacıyla optimize edilmiştir. Bu malzemeler, üretim sürecinde ideal yoğunluk, dayanım ve yüzey özellikleri sunar.', },
                    { id: 412, name: 'Kullanım Alanları', description: 'Mıcır, filler ve kum, parke taşı üretiminin yanı sıra beton üretimi, asfalt kaplama, peyzaj ve bahçe düzenlemesi, demiryolu balastı, drenaj sistemleri ve dolgu malzemesi gibi pek çok alanda geniş bir kullanım yelpazesine sahiptir.Mıcır, filler ve kum tedariki ile üretim planlaması hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz. İhtiyaçlarınıza uygun malzemeyi temin etmekten mutluluk duyarız.', },
                ]
            },
        ],
    },
    {
        id: 51,
        name: 'Çimento',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            {
                id: 51, name: 'Torba/Dökme Çimento', image: image13, features: [
                    { id: 511, name: 'Malzeme', description: 'Firmamız, yüksek kaliteli dökme çimento tedarikinde sektörde öne çıkan bir işletme olarak faaliyet göstermektedir. İnşaat sektörünün temel ihtiyaçlarından biri olan dökme çimento, beton üretimi, parke taşı imalatı ve çeşitli altyapı projelerinde kritik bir rol oynamaktadır.İşletmemiz, çimento ürünlerinin üretim standartlarına ve kalite kontrol süreçlerine uygun olarak temin edilmesine büyük özen gösterir. Kaliteli çimento kullanımı, üretimde homojenlik sağlarken, nihai ürünün mukavemet ve dayanıklılık özelliklerini artırır. Bu nedenle, tedarik zincirimizde sürdürülebilirlik ve güvenilirlik öncelikli olarak ele alınmaktadır.Parke taşı ve diğer yapı malzemelerinde kullanılan dökme çimento, optimum bağlanma ve dayanım özellikleri sunarak, hem estetik hem de fonksiyonel sonuçlar elde edilmesine olanak tanır. Çimento ürünlerimiz, farklı proje gereksinimlerine uygun olarak çeşitlendirilmiş ve optimize edilmiştir.', },
                    { id: 512, name: 'Kulanım Alanları', description: 'Firmamız, yüksek kaliteli dökme çimento tedarikinde sektörde öne çıkan bir işletme olarak faaliyet göstermektedir. İnşaat sektörünün temel ihtiyaçlarından biri olan dökme çimento, beton üretimi, parke taşı imalatı ve çeşitli altyapı projelerinde kritik bir rol oynamaktadır.İşletmemiz, çimento ürünlerinin üretim standartlarına ve kalite kontrol süreçlerine uygun olarak temin edilmesine büyük özen gösterir. Kaliteli çimento kullanımı, üretimde homojenlik sağlarken, nihai ürünün mukavemet ve dayanıklılık özelliklerini artırır. Bu nedenle, tedarik zincirimizde sürdürülebilirlik ve güvenilirlik öncelikli olarak ele alınmaktadır.Parke taşı ve diğer yapı malzemelerinde kullanılan dökme çimento, optimum bağlanma ve dayanım özellikleri sunarak, hem estetik hem de fonksiyonel sonuçlar elde edilmesine olanak tanır. Çimento ürünlerimiz, farklı proje gereksinimlerine uygun olarak çeşitlendirilmiş ve optimize edilmiştir.' }
                ]
            },
        ],
    },
    {
        id: 6,
        name: 'İnşaat Demiri',
        description: 'Discover the benefits of Product 4 with its unique features and advantages.',
        subitems: [
            {
                id: 61, name: 'İnşaat Demiri', image: image15, features: [
                    { id: 611, name: 'Malzeme', description: 'Firmamız, parke taşı üretimiyle sektörde güçlü bir yer edinmiş olup, bunun yanı sıra bina projeleri ve zemin iyileştirme alanında da profesyonel çözümler sunmaktadır. Projelerimizin temel taşı olan inşaat demiri, hem dayanıklılık hem de güvenilirlik açısından vazgeçilmez bir rol oynamaktadır. Özellikle zemin iyileştirme uygulamalarında fore kazık gibi ileri mühendislik yöntemleriyle kullanılan inşaat demiri, yapıların uzun ömürlü ve güvenli olmasını sağlamaktadır.', },
                    { id: 612, name: 'Kullanım Alanları', description: 'Firmamız, inşaat demirinin güvenilir tedarikçisi olarak, farklı projelere uygun demir çeşitlerini sunmaktadır. İnşaat demiri, zemin iyileştirme, bina güçlendirme, betonarme yapı elemanları, altyapı projeleri ve endüstriyel tesisler gibi geniş bir kullanım alanına sahiptir. Kaliteli inşaat demiri kullanımı, yapıların dayanıklılığını artırırken, proje tasarımlarının gerektirdiği mühendislik standartlarını eksiksiz karşılamaktadır.Tedarik süreçlerimiz, inşaat demirinin uluslararası kalite standartlarına uygun olarak temin edilmesine odaklanır. Her projenin ihtiyaç duyduğu ebat, şekil ve dayanım özelliklerine göre ürün çeşitliliği sunarak müşterilerimizin beklentilerini karşılamaktayız.' }
                ]
            },
        ],
    },
];