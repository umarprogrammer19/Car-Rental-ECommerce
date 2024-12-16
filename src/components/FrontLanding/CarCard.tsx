import Image from "next/image";
import Button from "../Button";

const CarCard = ({ className, btnColor, heading, para }: { className?: string; btnColor: string; heading: string; para: string }) => {
    return (
        <div className={`${className} relative w-full lg:w-[640px] sm:h-[360px] h-[300px] ${!className?.includes('hidden') && 'flex'} flex-col md:flex-row justify-between text-white p-6 md:p-8 rounded-lg shadow-lg`}>
            {/* Content Section */}
            <div className="relative z-10 flex flex-col gap-6 md:max-w-lg">
                <h1 className="text-2xl sm:text-4xl leading-tight max-w-sm">
                    {heading}
                </h1>
                <p className="text-sm md:text-base text-blue-100 max-w-sm">
                    {para}
                </p>
                <Button text="Rental Car" classes={btnColor} link="/admin" />
            </div>

            {/* Car Image */}
            <Image
                src="/car.png"
                alt="Car Rental"
                className="object-contain object-left-bottom"
                fill
            />
        </div>
    );
};

export default CarCard;
