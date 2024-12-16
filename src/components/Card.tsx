
import { CARCARD } from '@/types/types'
import Image from 'next/image'
import Button from './Button'

const Card = ({ data }: { data: CARCARD }) => {
    return data.cardType === 'mobile' ? (
        <div className="font-bold flex bg-background flex-col h-[388px] w-[304px] gap-3 rounded-lg p-6">
            <div className="relative size-full" >
                <div>{data.name}</div>
                <div className='text-xs opacity-50'>{data.carType}</div>
                <Image className="object-contain" src={data.image} alt="Controller-Image" fill />

                <div className="absolute right-0 flex flex-col gap-2 top-0">
                    <Image className="size-5 rounded-full bg-background" src={data.heart ? '/heart.svg' : '/heartBorder.svg'} alt="heart-icon" width={100} height={100} />
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <Image className="size-14" src={'/gasoline.svg'} alt="gasoline-icon" width={100} height={100} />
                <Image className="size-20" src={'/manual.svg'} alt="engine-icon" width={100} height={100} />
                <Image className="size-20" src={'/people.svg'} alt="people-icon" width={100} height={100} />
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <span className="text-xl">{data.currPrice} <span className='text-sm opacity-50'>day</span></span>
                    <span className="text-xs opacity-50 line-through">{data.oldPrice} <span className='text-sm opacity-50'>day</span></span>
                </div>
                <Button text='Rent Now' classes='bg-blue-600' link='/details' />
            </div>
        </div>
    ) : <div className="font-bold flex bg-background relative flex-col h-[250px] sm:h-[388px] w-full sm:w-[304px] gap-3 rounded-lg p-6">
        <div className="sm:relative size-full" >
            <div>{data.name}</div>
            <div className='text-xs opacity-50'>{data.carType}</div>
            <Image className="object-contain pr-32 sm:p-0 pl-16" src={data.image} alt="Image" fill />

            <div className="absolute right-6 flex flex-col gap-2 top-6 sm:top-0 sm:right-0">
                <Image className="size-5 rounded-full bg-background" src={data.heart ? '/heart.svg' : '/heartBorder.svg'} alt="heart-icon" width={100} height={100} />
            </div>
        </div>

        <div className='flex justify-between items-start gap-2 sm:gap-0 sm:items-center absolute sm:relative right-6 top-16 sm:top-0 sm:right-0 flex-col sm:flex-row'>
            <Image className="w-10 h-fit sm:size-14" src={'/gasoline.svg'} alt="gasoline-icon" width={100} height={100} />
            <Image className="w-14 h-fit sm:size-20" src={'/manual.svg'} alt="engine-icon" width={100} height={100} />
            <Image className="w-14 h-fit sm:size-20" src={'/people.svg'} alt="people-icon" width={100} height={100} />
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <span className="text-xl">{data.currPrice} <span className='text-sm opacity-50'>day</span></span>
                <span className="text-xs opacity-50 line-through">{data.oldPrice} <span className='text-sm opacity-50'>day</span></span>
            </div>
            <Button text='Rent Now' classes='bg-blue-600' link='/details' />
        </div>
    </div>
}

export default Card