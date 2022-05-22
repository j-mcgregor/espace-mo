import React from 'react'

export const Contact = () => {
    return (
        <section>
            <div className="bg-gradient-to-br from-slate-100 to-slate-500 text-gray-900 py-10">
                <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24 max-w-5xl">
                    <div className="flex flex-col w-full lg:w-1/3 p-8">
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug text-slate-900">
                            Get in touch
                        </p>
                        <p className="text-sm md:text-base leading-snug text-opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem esse facilis
                            pariatur velit sed hic iusto sint dolorum! Error a quaerat itaque modi dolor odit non
                            vel illum dicta.
                        </p>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/3 justify-center">
                        <div className="container w-full px-4">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-8/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900">
                                        <div className="flex-auto p-5 lg:p-10">
                                            <form id="feedbackForm" action="" method="">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-50 text-xs font-bold mb-2"
                                                        htmlFor="email"
                                                    >
                                                        First name
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
                                                        Last name
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
                                                        Email
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
                                                        Message
                                                    </label>
                                                    <textarea
                                                        name="feedback"
                                                        id="feedback"
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
                                            </form>
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
