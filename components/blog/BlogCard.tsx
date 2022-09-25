import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface BlogCardProps {
    category?: string
    title: ReactNode
    summary: ReactNode
    button: {
        label: string
        href: string
    }
    image: string
}

export const BlogCard: FC<BlogCardProps> = ({ category, title, summary, button, image }) => {
    return (
        <div className="p-4 md:w-1/3 w-full sm:w-1/2">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden shadow-md">
                <img
                    className="lg:h-48 md:h-36 h-40 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
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
