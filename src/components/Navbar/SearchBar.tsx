import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="flex items-center w-full gap-4 lg:max-w-lg md:px-5 md:py-3 md:border rounded-lg md:rounded-full bg-white shadow-sm">
            <div className="flex items-center w-full px-5 py-3 md:p-0 border md:border-0 rounded-lg md:rounded-full bg-white shadow-sm">
                <button>
                    <Image src={'/search.png'} alt="logo" width={100} height={100} className="size-6" />
                </button>
                <input
                    type="text"
                    placeholder="Search something here"
                    className="flex-1 px-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
            </div>
            <button className="border md:border-0 p-3 md:p-0 rounded-lg md:rounded-none">
                <Image src={'/filter.png'} alt="logo" width={100} height={100} className="size-6" />
            </button>
        </div>
    );
}
