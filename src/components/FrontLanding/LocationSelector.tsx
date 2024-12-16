import Image from "next/image";

const LocationSelector = ({ currentPage }: { currentPage: string }) => {

    return (
        <div className="flex justify-center items-center mt-6">
            <div className={`flex ${currentPage === 'home' && 'lg:gap-14'} ${currentPage != 'category' && 'gap-6'} ${currentPage != 'category' ? 'flex-col lg:flex-row' : 'flex-col xl:flex-row gap-6 lg:gap-0'} w-full justify-center items-center relative`}>
                <div className={`bg-white md:px-12 p-6 md:py-6 rounded-lg w-full ${currentPage != 'category' && 'lg:max-w-[565px]'}`}>
                    <div className="flex items-center mb-2">
                        <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                            <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                        </span>
                        <h3 className="">Pick-Up</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="pickUpLocation" className="block text-sm font-bold text-gray-700">
                                Locations
                            </label>
                            <select
                                id="pickUpLocation"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your city</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pickUpDate" className="block text-sm font-bold text-gray-700">
                                Date
                            </label>
                            <select
                                id="pickUpDate"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your date</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pickUpTime" className="block text-sm font-bold text-gray-700">
                                Time
                            </label>
                            <select
                                id="pickUpTime"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your time</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Swap button */}
                <div className="w-fit absolute lg:relative top-[107px] lg:top-0">
                    <div className="flex items-center shadow-[0_0_13px_0px_#0000ff8a] justify-center bg-[#3563e9] text-white rounded-md h-12 w-16 self-center p-3 relative">
                        <Image
                            src={'swap.svg'}
                            alt="swap-icon"
                            fill
                            className="py-3 "
                        />
                    </div>
                </div>

                <div className={`bg-white md:px-12 p-6 md:py-6 rounded-lg w-full ${currentPage != 'category' && 'lg:max-w-[565px]'}`}>
                    <div className="flex items-center mb-2">
                        <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                            <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                        </span>
                        <h3 className="">Drop-Off</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="dropOffLocation" className="block text-sm font-bold text-gray-700">
                                Locations
                            </label>
                            <select
                                id="dropOffLocation"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your city</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dropOffDate" className="block text-sm font-bold text-gray-700">
                                Date
                            </label>
                            <select
                                id="dropOffDate"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your date</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dropOffTime" className="block text-sm font-bold text-gray-700">
                                Time
                            </label>
                            <select
                                id="dropOffTime"
                                className="mt-1 block w-full text-xs rounded-md border-gray-300 focus:border-indigo-500 text-gray-400 focus:ring-indigo-500"
                            >
                                <option value="">Select your time</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationSelector;