import Link from 'next/link'
import React, { useContext } from 'react'
import { LanguageContext, LanguageContextType } from '../../context/LanguageContext'

interface BlogCardProps {
    category: string
    title: string
    summary: string
    button: {
        label: string
        href: string
    }
    image: string
}

export const BlogCard = ({ category, title, summary, button, image }: BlogCardProps) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={image}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{summary}</p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={button.href}>
                            <a className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                {button.label}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BlogIndex = () => {
    const [lang] = useContext(LanguageContext) as LanguageContextType

    console.log('lang :>> ', lang)
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-7xl mb-5">Blog</h1>
                <p className="py-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptates fugiat cum illum
                    doloribus tenetur adipisci nulla earum amet. Accusamus cum, facilis nam reprehenderit
                    reiciendis tenetur asperiores ex perspiciatis deserunt.
                </p>
                <div className="flex flex-wrap -m-4">
                    <BlogCard
                        button={{ href: '/123', label: 'See more' }}
                        category="Category 1"
                        summary="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                    tousled waistcoat."
                        title="The Catalyzer"
                        image="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    />
                    <BlogCard
                        button={{ href: '/123', label: 'See more' }}
                        category="Category 2"
                        summary="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                    tousled waistcoat."
                        title="The Catalyzer"
                        image="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    />
                    <BlogCard
                        button={{ href: '/123', label: 'See more' }}
                        category="Category 3"
                        summary="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                    tousled waistcoat."
                        title="The Catalyzer"
                        image="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
            </div>
        </section>
    )
}
