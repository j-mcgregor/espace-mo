import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ArrowRightIcon } from '@heroicons/react/outline'
import { RichText } from 'prismic-reactjs'
import React, { useContext, useEffect, useState } from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { LanguageContext, LanguageContextType } from '../context/LanguageContext'
import { PrismicAboutpageProps, PrismicDocument, PrismicSharedProps } from '../types/prismic/types'
import Image from 'next/image'
import Link from 'next/link'

interface IAbout {
    query: PrismicDocument<PrismicAboutpageProps>[]
    shared: PrismicDocument<PrismicSharedProps>[]
}

export const About: React.FC<IAbout> = ({ query, shared }) => {
    const [lang] = useContext(LanguageContext) as LanguageContextType
    const [data, setData] = useState<PrismicDocument<PrismicAboutpageProps>>()
    const [sharedData, setSharedData] = useState<PrismicDocument<PrismicSharedProps>>()

    useEffect(() => {
        if (query && shared) {
            const about = query.find((d) => d.lang === lang)
            const sharedD = shared.find((d) => d.lang === lang)

            setData(about)
            setSharedData(sharedD)
        }
    }, [query, shared, lang])

    console.log(sharedData)
    return (
        <div className="w-full">
            <div
                className="dark:bg-gray-50 bg-no-repeat bg-cover bg-top w-full"
                // style={{ backgroundImage: 'url(/images/plant-2.svg)' }}
            >
                {sharedData?.data?.background_image?.url && (
                    <div className="w-full absolute top-0 left-0 h-full overflow-hidden">
                        <Image
                            src={sharedData?.data?.background_image?.url || ''}
                            layout="fill"
                            className="h-full w-full opacity-10"
                            objectFit="cover"
                        />
                    </div>
                )}
                <div className="container mx-auto py-9 md:py-12 lg:py-24">
                    <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                        <div className="lg:w-4/12 flex justify-center items-center my-6">
                            <div>
                                <h1 className="dark:text-gray-700 text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">
                                    {RichText.asText(data?.data.title || [])}
                                </h1>
                                <p className="dark:text-gray-600 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600 space-y-3">
                                    <RichText render={data?.data.description} />
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-4/12 mt-6 md:mt-8 lg:mt-0">
                            <div className="relative w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
                                    alt="A lounge sofa"
                                    role="img"
                                    className="w-full sm:h-full h-48 relative hidden lg:block"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
                                    alt="A lounge sofa"
                                    role="img"
                                    className="w-full sm:h-full h-60 lg:hidden object-contain"
                                />
                                <div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                                    <Link href="/book">
                                        <a className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                            {sharedData?.data.book_now}
                                            <ArrowRightIcon width={50} />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 lg:hidden">
                                <Link href="/book">
                                    <a className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                        {sharedData?.data.book_now}
                                        <ArrowRightIcon width={50} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center text-4xl font-alegraya-sans py-4">
                    <RichText render={data?.data.gallery_title} />
                </div>
                <div className="h-[500px] max-w-5xl w-full">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        navigation
                        className="h-full w-full"
                        loop
                    >
                        {data?.data?.gallery?.map((child, i) => (
                            <SwiperSlide key={`swiper-slide-${i}`} className="w-full h-full">
                                <Image src={child?.gallery_image?.url || ''} layout="fill" objectFit="contain" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
