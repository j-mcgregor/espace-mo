import { RichText } from 'prismic-reactjs'
import React, { useContext, useEffect, useState } from 'react'

import { LanguageContext, LanguageContextType } from '../context/LanguageContext'
import { PrismicBookingpageProps, PrismicDocument, PrismicSharedProps } from '../types/prismic/types'

interface IBooking {
    query: PrismicDocument<PrismicBookingpageProps>[]
    shared: PrismicDocument<PrismicSharedProps>[]
}

export const Booking: React.FC<IBooking> = ({ query }) => {
    const [lang] = useContext(LanguageContext) as LanguageContextType
    const [data, setData] = useState<PrismicDocument<PrismicBookingpageProps>>()

    useEffect(() => {
        if (query) {
            const about = query.find((d) => d.lang === lang)

            setData(about)
        }
    }, [query, lang])

    return (
        <body className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto">
                <div className="flex  justify-center px-6">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex sm:flex-row flex-col-reverse shadow-lg">
                        <div
                            className="w-full h-64 sm:h-auto bg-gray-400 lg:w-1/2 bg-cover bg-center rounded-l-lg"
                            style={{ backgroundImage: `url('${data?.data.main_image.url}')` }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-gray-900 p-5 rounded-lg lg:rounded-l-none text-white">
                            <div className="px-8 mb-4 text-center sm:py-32 py-16 rounded space-y-7">
                                <h3 className="pt-4 mb-2 text-2xl">{RichText.asText(data?.data.title || [])}</h3>
                                <p className="mb-4 text-base text-gray-50">
                                    {RichText.asText(data?.data.description || [])}
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
