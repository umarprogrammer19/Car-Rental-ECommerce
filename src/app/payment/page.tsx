import Button from "@/components/Button"
import Image from "next/image"

const Payment = () => {
    return (
        <div className="flex justify-center bg-gray-200 py-6">
            <div className="w-[95vw] flex gap-6 flex-col-reverse lg:flex-row">
                <div className="w-full flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl  flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">Billing Info</div>
                            <div className="text-[#596780] text-xs flex justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">Please enter your billing info</div>
                                <div>Step 1 of 4</div>
                            </div>
                        </div>

                        <div className="flex gap-6 flex-col lg:flex-row">
                            <div className="w-full flex flex-col gap-6">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="Your name" className=" bg-[#f6f7f9] text-xs py-4 px-6 rounded-md outline-none" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" placeholder="Address" className=" bg-[#f6f7f9] text-xs py-4 px-6 rounded-md outline-none" />
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-6">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" placeholder="Phone number" className=" bg-[#f6f7f9] text-xs py-4 px-6 rounded-md outline-none" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city">Town/City</label>
                                    <input type="text" placeholder="Town or city" className=" bg-[#f6f7f9] text-xs py-4 px-6 rounded-md outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl  flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">Rental Info</div>
                            <div className="text-[#596780] text-xs flex justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">Please enter your rental data</div>
                                <div>Step 2 of 4</div>
                            </div>
                        </div>
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


                    <div className="bg-white p-6 rounded-xl  flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">Payment Method</div>
                            <div className="text-[#596780] text-xs flex justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">Please enter your payment method</div>
                                <div>Step 3 of 4</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 bg-[#f6f7f9] p-6 rounded-lg">
                            <div className="flex items-center mb-2 justify-between">
                                <div className="flex items-center">
                                    <span className="flex justify-center items-center border border-white size-3 rounded-full bg-blue-500 mr-2">
                                        <span className="size-2 rounded-full bg-blue-500 border border-white"></span>
                                    </span>
                                    <h3 className="">Credit Card</h3>
                                </div>
                                <Image className="h-4 w-16" src={'/visa.png'} alt="visa-icon" width={100} height={100} />

                            </div>
                            <div className="flex gap-6 flex-col lg:flex-row">
                                <div className="w-full flex flex-col gap-6">
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="name">Card Number</label>
                                        <input type="text" placeholder="Card number" className=" text-xs py-4 px-6 rounded-md outline-none" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="address">Card Holder</label>
                                        <input type="text" placeholder="DD / MM / YY" className=" text-xs py-4 px-6 rounded-md outline-none" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-6">
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="phone">Expiation Date</label>
                                        <input type="text" placeholder="Card holder" className=" text-xs py-4 px-6 rounded-md outline-none" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="city">CVC</label>
                                        <input type="text" placeholder="CVC" className=" text-xs py-4 px-6 rounded-md outline-none" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                            <div className="flex gap-4">
                                <Image className="w-4" src={'/emptyball.png'} alt="ball-icon" width={100} height={100} />
                                <div className="font-bold">Paypal</div>
                            </div>
                            <Image className="h-4 w-16" src={'/paypal.png'} alt="paypal-icon" width={100} height={100} />
                        </div>
                        <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                            <div className="flex gap-4">
                                <Image className="w-4" src={'/emptyball.png'} alt="ball-icon" width={100} height={100} />
                                <div className="font-bold">Bitcoin</div>
                            </div>
                            <Image className="h-4 w-16" src={'/bitcoin.png'} alt="bitcoin-icon" width={100} height={100} />
                        </div>

                    </div>



                    <div className="bg-white p-6 rounded-xl  flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">Confirmation</div>
                            <div className="text-[#596780] text-xs flex justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">We are getting to the end. Just few clicks and your rental is ready!</div>
                                <div>Step 4 of 4</div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                            <div className="flex gap-4">
                                <Image className="w-4" src={'/box.png'} alt="box-icon" width={100} height={100} />
                                <div className="font-bold">I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                            <div className="flex gap-4">
                                <Image className="w-4" src={'/box.png'} alt="box-icon" width={100} height={100} />
                                <div className="font-bold">I agree with our terms and conditions and privacy policy.</div>
                            </div>
                        </div>

                        <Button classes="bg-blue-600" text="Rent Now" />


                        <div className="flex flex-col gap-4">
                            <Image className="w-6" src={'/checkshield.png'} alt="checkshield-icon" width={100} height={100} />

                            <div className="">All your data are safe</div>
                            <div className="text-[#596780] text-xs flex justify-between">
                                <div className="text-[#596780] opacity-50 text-xs">We are using the most advanced security to provide you the best experience ever.</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* other side */}
                <div className="bg-white p-6 rounded-xl h-fit flex flex-col gap-6 lg:w-1/2 lg:min-w-[24rem]">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="font-bold">Rental Summary</div>
                        <p className="text-[#596780] text-xs max-w-sm">Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Image className="size-28" src={'/bgwithcar.png'} alt="car-img" width={100} height={100} />
                        <div className="relative flex flex-col gap-2" >
                            <div className="text-2xl font-bold">Nissan GT - R</div>
                            <div className='text-xs opacity-50 flex gap-2'>
                                <Image className="w-20" src={'/stars.png'} alt="stars-icon" width={100} height={100} />
                                440+ Reviewer
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm text-[#596780]">
                        <div className="text-[#596780] opacity-50">Subtotel</div>
                        <div className="font-bold">$80.00</div>
                    </div>
                    <div className="flex justify-between text-sm text-[#596780]">
                        <div className="text-[#596780] opacity-50">Tax</div>
                        <div className="font-bold">$0</div>
                    </div>

                    <div className="flex justify-between gap-2 bg-[#f6f7f9] text-xs py-4 px-6 rounded-md">
                        <input type="text" placeholder="Apply promo code" className="bg-transparent outline-none" />
                        <Image className="w-4" src={'/arrow-down.svg'} alt="arrow-icon" width={100} height={100} />

                    </div>

                    <div className="flex flex-col">
                        <div className="font-bold">Total Rental Price</div>
                        <div className="flex items-end justify-between">
                            <div className="text-[#596780] opacity-50 text-xs">Overall price and includes rental discount</div>
                            <div className="font-bold text-3xl">$80.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment