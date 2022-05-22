import React from 'react'

export const Booking = () => {
    return (
        <body className="bg-gray-50 flex items-center justify-center py-40">
            <div className="container mx-auto">
                <div className="flex justify-center px-6">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')" }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-gray-900 p-5 rounded-lg lg:rounded-l-none text-white">
                            <div className="px-8 mb-4 text-center py-32 rounded">
                                <h3 className="pt-4 mb-2 text-2xl">Ready to book?</h3>
                                <p className="mb-4 text-base text-gray-50">
                                    We use GoRendezvous to handle our bookings. Clicking the link below will open a
                                    new window to our page where you can make a booking
                                </p>
                                <a
                                    target="_blank"
                                    href="https://www.gorendezvous.com/espacemo2"
                                    className="bg-green-700 flex items-center justify-center py-4 px-6 rounded-md hover:bg-green-500 duration-100"
                                >
                                    Book with GoRendezvous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
