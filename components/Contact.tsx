import { BadgeCheckIcon, CheckCircleIcon, CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import React, { useContext, useEffect, useState } from 'react'
import { FiCheckCircle, FiUserCheck } from 'react-icons/fi'
import { Lang } from '../constants'
import { LanguageContext, LanguageContextType } from '../context/LanguageContext'
import {
    PrismicBookingpageProps,
    PrismicContactProps,
    PrismicDocument,
    PrismicSharedProps,
} from '../types/prismic/types'

interface IContact {
    query: PrismicDocument<PrismicContactProps>[]
    shared: PrismicDocument<PrismicSharedProps>[]
}

export const Contact: React.FC<IContact> = ({ query, shared }) => {
    const [lang] = useContext(LanguageContext) as LanguageContextType
    const [data, setData] = useState<PrismicDocument<PrismicContactProps>>()
    const [sharedData, setSharedData] = useState<PrismicDocument<PrismicSharedProps>>()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if (query) {
            const contact = query.find((d) => d.lang === lang)
            const sharedD = shared.find((d) => d.lang === lang)

            setData(contact)
            setSharedData(sharedD)
        }
    }, [query, lang])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        // @ts-ignore
        const firstName = e.target.firstName?.value
        // @ts-ignore
        const lastName = e.target.lastName?.value
        // @ts-ignore
        const email = e.target.email?.value
        // @ts-ignore
        const message = e.target.message?.value

        const body = {
            firstName,
            lastName,
            email,
            message,
        }

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const json = await response.json()

            if (json.ok) {
                setSuccess(true)
                setError('')
            } else {
                setError(json.message.toString())
            }
        } catch (error) {}
    }

    return (
        <section>
            <div
                className="bg-gray-50 py-10 bg-no-repeat bg-cover relative h-full w-full"
                // style={{ backgroundImage: 'url(/images/plant-1.svg)' }}
            >
                {data?.data?.background_image?.url && (
                    <div className="w-[80%] absolute mx-auto top-20 left-0 right-0 h-[80%] overflow-hidden">
                        <Image
                            src={data?.data?.background_image?.url || ''}
                            layout="fill"
                            className="opacity-20"
                        />
                    </div>
                )}
                <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24 max-w-5xl z-40">
                    <div className="flex flex-col w-full lg:w-1/3 p-8 space-y-5">
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug text-slate-900 z-20">
                            {RichText.asText(data?.data.title || [])}
                        </p>
                        <div className="text-sm md:text-base leading-snug text-opacity-100">
                            <RichText render={data?.data.description} />
                        </div>
                        <div className="divide-y-2">
                            {data?.data.contact_info.map((method, i) => (
                                <div
                                    key={`${method.method_name}-${method.method_value}`}
                                    className="w-full flex justify-between text-sm py-2"
                                >
                                    <span className="text-stone-400">{method.method_name}</span>
                                    <span>{method.method_value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/3 justify-center">
                        <div className="container w-full px-4">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-8/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900">
                                        <div className="flex-auto p-5 lg:p-10">
                                            {success ? (
                                                <div className="h-[400px] flex flex-col items-center justify-center text-green-500 text-center">
                                                    <div className="w-1/2 flex items-center justify-center flex-col">
                                                        <CheckCircleIcon className="h-32 w-32" />
                                                        <div className="text-3xl">
                                                            {lang === Lang.EN
                                                                ? "We'll be in touch!"
                                                                : 'Nous serons en contact!'}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <form
                                                    id="feedbackForm"
                                                    action=""
                                                    method=""
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-50 text-xs font-bold mb-2"
                                                            htmlFor="email"
                                                        >
                                                            {sharedData?.data['form-firstname']}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-100 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                                            placeholder=" "
                                                            required
                                                        />
                                                    </div>
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-50 text-xs font-bold mb-2"
                                                            htmlFor="email"
                                                        >
                                                            {sharedData?.data['form-lastname']}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-100 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                                            placeholder=" "
                                                            required
                                                        />
                                                    </div>
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-50 text-xs font-bold mb-2"
                                                            htmlFor="email"
                                                        >
                                                            {sharedData?.data['form-email']}
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-100 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                                            placeholder=" "
                                                            required
                                                        />
                                                    </div>
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-gray-50 text-xs font-bold mb-2"
                                                            htmlFor="message"
                                                        >
                                                            {sharedData?.data['form-message']}
                                                        </label>
                                                        <textarea
                                                            name="message"
                                                            id="message"
                                                            cols={80}
                                                            className="border-0 px-3 py-3 bg-gray-100 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                            placeholder=""
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    <div className="text-center mt-6">
                                                        <button
                                                            id="feedbackBtn"
                                                            className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                            type="submit"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                    <div className="text-center mt-6">
                                                        {error && <div className="text-red-400">{error}</div>}
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
