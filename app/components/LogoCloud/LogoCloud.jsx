import Image from "next/image"
import logo1 from "../../assets/logo1.webp"
import logo2 from "../../assets/logo2.webp"
import logo3 from "../../assets/logo3.webp"
import logo4 from "../../assets/logo4.webp"
import logo5 from "../../assets/logo5.webp"
import logo6 from "../../assets/logo6.webp"
import logo7 from "../../assets/logo7.webp"
import logo8 from "../../assets/logo8.webp"
const LogoItem = ({ logo, name }) => {
return (
    <div className="p-4 sm:p-5 rounded-lg border border-gray-100 dark:border-gray-900 group">
        <Image src={logo} width={100} height={60} alt={name} className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" />
    </div>
)
}
const logos = [
{
    id: 1,
    logo:logo1,
    name:"Spotify"
},
{
    id: 2,
    logo:logo2,
    name:"Paypal Logo"
},
{
    id: 3,
    logo:logo3,
    name:"Spotify"
},
{
    id: 4,
    logo:logo4,
    name:"Spotify"
},
{
    id: 5,
    logo:logo5,
    name:"Spotify"
},
{
    id: 6,
    logo:logo6,
    name:"Spotify"
},
{
    id: 7,
    logo:logo7,
    name:"Spotify"
},
{
    id: 8,
    logo:logo8,
    name:"Spotify"
},
]
const LogoCloudSection = () => {
return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Referanslarımız</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {
                    logos.map(
                        logo=>(
                            <LogoItem key={logo.id} {...logo}/>
                        )
                    )
                }
            </div>
        </div>
    </section>
)
}
export default LogoCloudSection