import { RichText } from 'prismic-reactjs'
import React, { FC } from 'react'
import { BlogProps } from '../../pages/blog/[lang]'

export interface BlogShowProps {
    post: BlogProps
}

export const BlogShow: FC<BlogShowProps> = ({ post }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <main className="pt-20">
                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-tr from-transparent to-black"></div>
                    <img
                        src={`${post?.main_image.url}`}
                        alt={`${post?.main_image.alt}`}
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <a
                            href="#"
                            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                        >
                            Nutrition
                        </a>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            <RichText render={post?.title} />
                        </h2>
                        <div className="flex mt-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/97.jpg"
                                className="h-10 w-10 rounded-full mr-2 object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                                <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:px-0 my-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed space-y-3">
                    <RichText render={post?.body} />
                </div>
            </main>
        </div>
    )
}
