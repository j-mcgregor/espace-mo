import React from 'react'
import classnames from 'classnames'
import { useParallax } from 'react-scroll-parallax'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-[500px] bg-slate-100 ">
            <div
                style={{
                    background:
                        'url(https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80) center center no-repeat',
                }}
                className="bg-cover h-full w-full"
            ></div>
            <div className="container bg-stone-800 text-white absolute top-96 p-8 rounded-xl h-80 shadow-xl text-center flex flex-col items-center justify-center space-y-4">
                <h2 className="text-4xl">lorem</h2>
                <Link href="">
                    <a className="py-3 px-6 bg-green-700 text-white uppercase rounded-md shadow-md">Book now</a>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
            </div>
        </div>
    )
}

export default Hero
