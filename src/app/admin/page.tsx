import Image from "next/image"
const Category = () => {
    return (
        <div className="flex justify-between ">
            <div className="min-w-72 border-t hidden xl:flex flex-col p-6 gap-6">
                <div className="text-xs opacity-50">MAIN MENU</div>

                <div className="flex gap-2 items-center bg-blue-600 text-white px-2 py-3 rounded-lg">
                    <Image className="size-6" src='/home.png' alt="home-icon" width={100} height={100} />
                    Dashboard
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/caricon.png' alt="car-icon" width={100} height={100} />
                    Car Rent
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/insight.png' alt="car-icon" width={100} height={100} />
                    Insight
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/wallet.png' alt="car-icon" width={100} height={100} />
                    Reimburse
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/inbox.png' alt="car-icon" width={100} height={100} />
                    Inbox
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/calender.png' alt="car-icon" width={100} height={100} />
                    Calender
                </div>

                <div className="text-xs opacity-50">PREFERENCES</div>
                <div className="text-xs opacity-50">MAIN MENU</div>

                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/settingicon.png' alt="settings-icon" width={100} height={100} />
                    Settings
                </div>
                <div className="flex gap-2 text-[#90A3BF] text-sm items-center px-2 ">
                    <Image className="size-6" src='/help.png' alt="help-icon" width={100} height={100} />
                    Help & Center
                </div>
                <div className="flex justify-between text-[#90A3BF] text-sm items-center px-2 ">
                    <div className="flex gap-2">
                        <Image className="size-6" src='/inbox.png' alt="car-icon" width={100} height={100} />
                        Dark Mode
                    </div>
                    <Image className="w-14 h-6" src='/darkmod.png' alt="darkmode-icon" width={100} height={100} />
                </div>


                <div className="flex gap-2 text-[#90A3BF] mt-20 text-sm items-center px-2 ">
                    <Image className="size-6" src='/logout.png' alt="logout-icon" width={100} height={100} />
                    Log Out
                </div>
            </div>
            <div className="md:px-16 px-6 py-8 bg-[#f6f7f9] w-full">

                <div className="flex items-start gap-6 flex-col lg:flex-row">
                    <div className="bg-white p-6 rounded-xl h-fit flex flex-col gap-6 w-full lg:w-1/2 lg:min-w-[24rem]">
                        <div className="flex gap-6 flex-col">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="font-bold">Details Rental</div>
                            </div>

                            <div className="">
                                <Image className="object-cover w-full" src={'/map.png'} alt="car-img" width={200} height={200} />
                            </div>

                            <div className="flex gap-4 items-center">
                                <Image className="w-28 h-14 object-cover rounded-lg" src={'/bgwithcar.png'} alt="car-img" width={100} height={100} />
                                <div className="relative flex flex-col gap-2 w-full" >
                                    <div className="text-xl font-bold flex items-center justify-between">
                                        <div>Nissan GT - R</div>
                                        <div className="font-thin text-xs">#9761</div>
                                    </div>
                                    <div className='text-xs opacity-50 flex gap-2'>
                                        Sport Car
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-6">

                            <div className="lg:flex items-center hidden">
                                <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                                    <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                                </span>
                                <h3 className="text-sm">Pick-Up</h3>
                            </div>


                            <div className="lg:grid grid-cols-3 gap-4 hidden">
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


                            <div className="lg:flex items-center hidden">
                                <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                                    <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                                </span>
                                <h3 className="text-sm">Drop-Off</h3>
                            </div>


                            <div className="lg:grid grid-cols-3 gap-4 hidden">
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



                            <div className="bg-white p-6 rounded-xl  flex lg:hidden flex-col gap-6">

                                <div className="flex items-center mb-2">
                                    <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                                        <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                                    </span>
                                    <h3 className="">Pick-Up</h3>
                                </div>
                                <div className="flex gap-6 flex-col lg:flex-row">
                                    <div className="w-full flex flex-col gap-6 ">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="location">Location</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="address">Time</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-6">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="phone">Date</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-1">
                                    <div className="font-bold">Drop-Off</div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                                        <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                                    </span>
                                    <h3 className="">Pick-Up</h3>
                                </div>
                                <div className="flex gap-6 flex-col lg:flex-row">
                                    <div className="w-full flex flex-col gap-6">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="location">Location</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="address">Time</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-6">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label htmlFor="phone">Date</label>
                                            <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                                                <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                                                <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col">
                            <div className="font-bold">Total Rental Price</div>
                            <div className="flex items-end justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">Overall price and includes rental discount</div>
                                <div className="font-bold text-3xl">$80.00</div>
                            </div>
                        </div>
                    </div>


                    {/* Other side */}


                    <div className="rounded-xl size-full flex flex-col gap-6 lg:w-1/2 lg:min-w-[24rem]">
                        <div className="bg-white p-6 rounded-xl flex flex-col gap-6">
                            <div className="flex gap-6 flex-col">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="font-bold">Top 5 Car Rental </div>
                                </div>

                                <div className="">
                                    <Image className="object-cover w-ful" src={'/graphs.png'} alt="car-img" width={500} height={500} />
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-6 flex-col bg-white p-7 rounded-lg">
                            <div className="flex justify-between w-full">
                                <div className="font-bold">Recent Transaction</div>
                                <div className="font-thin text-[9px] text-blue-500">View All</div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Image className="w-28 h-14 object-contain rounded-lg" src={'/nisan.png'} alt="car-img" width={100} height={100} />
                                <div className="relative flex flex-col w-full" >
                                    <div className="text-xl font-bold flex items-center justify-between">
                                        <div>Nissan GT - R</div>
                                        <div>
                                            <div className="font-thin text-xs opacity-50">20 July</div>
                                            <div className="font-bold text-sm">$80.00</div>
                                        </div>
                                    </div>
                                    <div className='text-xs opacity-50 flex'>
                                        Sport Car
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Image className="w-28 h-14 object-contain rounded-lg" src={'/deep.png'} alt="car-img" width={100} height={100} />
                                <div className="relative flex flex-col w-full" >
                                    <div className="text-xl font-bold flex items-center justify-between">
                                        <div>Nissan GT - R</div>
                                        <div>
                                            <div className="font-thin text-xs opacity-50">20 July</div>
                                            <div className="font-bold text-sm">$80.00</div>
                                        </div>
                                    </div>
                                    <div className='text-xs opacity-50 flex'>
                                        Sport Car
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Image className="w-28 h-14 object-contain rounded-lg" src={'/rollsroyce.png'} alt="car-img" width={100} height={100} />
                                <div className="relative flex flex-col w-full" >
                                    <div className="text-xl font-bold flex items-center justify-between">
                                        <div>Nissan GT - R</div>
                                        <div>
                                            <div className="font-thin text-xs opacity-50">20 July</div>
                                            <div className="font-bold text-sm">$80.00</div>
                                        </div>
                                    </div>
                                    <div className='text-xs opacity-50 flex'>
                                        Sport Car
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Image className="w-28 h-14 object-contain rounded-lg" src={'/jeep.png'} alt="car-img" width={100} height={100} />
                                <div className="relative flex flex-col w-full" >
                                    <div className="text-xl font-bold flex items-center justify-between">
                                        <div>Nissan GT - R</div>
                                        <div>
                                            <div className="font-thin text-xs opacity-50">20 July</div>
                                            <div className="font-bold text-sm">$80.00</div>
                                        </div>
                                    </div>
                                    <div className='text-xs opacity-50 flex'>
                                        Sport Car
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category