import { CARCARD } from "@/types/types"
import Card from "../Card"
import CarCard from "./CarCard"
import LocationSelector from "./LocationSelector"
import Header from "../Header"
import Button from "../Button"


const carDetails: CARCARD[] = [
    {
        name: 'Nissan',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/nisan.png',
        heart: true,
        carType: 'Sport',
        icons: true,
    },
    {
        name: 'Sportage',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/jeep.png',
        heart: false,
        carType: 'Hatchback',
        icons: true,
    },
    {
        name: 'Rolls- Royce',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/rollsroyce.png',
        heart: true,
        carType: 'Sedan',
        icons: true,
    },
    {
        name: 'Koenigsegg',
        currPrice: '$99.00/',
        image: '/car2.svg',
        carType: 'Manual',
        heart: false,
        icons: true,
        oldPrice: '$200.00/',
        cardType: 'mobile',
    }
]
const FrontLanding = () => {
    return (
        <div className="md:px-16 px-6 py-8 bg-[#f6f7f9]">
            <div className="flex gap-6 justify-center">
                <CarCard
                    para="Ease of doing a car rental safely and reliably. Of course at a low price."
                    heading='The Best Platform for Car Rental'
                    btnColor="bg-[#3563e9]"
                    className="bg-blue-400" />

                <CarCard
                    para="Providing cheap car rental services and safe and comfortable facilities."
                    heading='Easy way to rent a car at a low price'
                    btnColor="bg-[#54a6ff]"
                    className="hidden lg:flex bg-blue-500" />
            </div>

            <LocationSelector currentPage="home"/>
            <Header showViewAll text="Popular Car" />


            <div className="flex justify-start 2xl:justify-center mt-12 overflow-hidden">
                <div className="flex gap-8 py-6 2xl:justify-between xl:w-[82rem]">
                    {carDetails.map((obj, key) => (
                        <Card key={key} data={{
                            cardType: 'mobile',
                            name: obj.name,
                            currPrice: obj.currPrice,
                            image: obj.image,
                            carType: obj.carType,
                            heart: obj.heart,
                            icons: obj.icons,
                            oldPrice: obj.oldPrice,
                        }} />
                    ))}
                </div>
            </div>
            <Header showViewAll={false} text="Recommendation Car" />

            <div className="flex justify-start 2xl:justify-center mt-12 overflow-hidden">
                <div className="flex gap-8 py-6 2xl:justify-between xl:w-[82rem] flex-wrap">
                    {carDetails.map((obj, key) => (
                        <Card key={key} data={{
                            cardType: '',
                            name: obj.name,
                            currPrice: obj.currPrice,
                            image: obj.image,
                            carType: obj.carType,
                            heart: obj.heart,
                            icons: obj.icons,
                            oldPrice: obj.oldPrice,
                        }} />
                    ))}
                    {carDetails.map((obj, key) => (
                        <Card key={key} data={{
                            cardType: '',
                            name: obj.name,
                            currPrice: obj.currPrice,
                            image: obj.image,
                            carType: obj.carType,
                            heart: obj.heart,
                            icons: obj.icons,
                            oldPrice: obj.oldPrice,
                        }} />
                    ))}
                </div>
            </div>


            <div className="flex justify-center mt-12">
                <div className="flex w-full justify-center relative xl:w-[82rem]">
                    <Button text='Show more car' classes='bg-blue-600' link="/category" />
                    <div className="text-sm opacity-50 absolute right-0">120 cars</div>
                </div>
            </div>
        </div>
    )
}

export default FrontLanding