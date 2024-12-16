import Image from "next/image"

const IconButton = ({ icon, redDot }: { icon: string; redDot: boolean }) => {
    return <button className="flex relative items-center justify-center size-11 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50">
        <Image
            src={icon}
            alt="like-icon"
            fill
            className="size-11"
        />
        {redDot && (
            <span className="absolute top-0 right-0  size-3 bg-red-500 rounded-full border border-white"></span>
        )}
    </button>
}

export default IconButton