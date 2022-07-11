import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import React, { FC, useContext, useEffect, useState } from 'react'
import { LanguageContext, LanguageContextType } from '../../context/LanguageContext'
import { BlogProps, MainProps } from '../../pages/blog/[lang]'
import { PrismicDocument } from '../../types/prismic/types'
import { BlogCard } from './BlogCard'
import { FiLoader } from 'react-icons/fi'

interface BlogIndexProps {
    data: PrismicDocument<MainProps>[]
    posts: PrismicDocument<BlogProps>[]
}

export const BlogIndex: FC<BlogIndexProps> = ({ data, posts }) => {
    const [lang] = useContext(LanguageContext) as LanguageContextType
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!data?.[0]?.data?.title || !data?.[0]?.data?.subtitle) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [data])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {loading ? (
                    <div className="h-[calc(100vh-200px)] w-full flex items-center justify-center">
                        <FiLoader size={40} className="animate-spin" />
                    </div>
                ) : (
                    <>
                        <h1 className="text-7xl mb-5">
                            <RichText render={data?.[0]?.data?.title} />
                        </h1>
                        <p className="py-5">
                            <RichText render={data?.[0]?.data?.subtitle} />
                        </p>
                        <div className="flex flex-wrap -m-4">
                            {posts?.map((post, i) => (
                                <BlogCard
                                    button={{ href: `/blog/${lang}/${post.uid}`, label: 'See more' }}
                                    category="Category 1"
                                    title={<RichText render={post.data.title} />}
                                    summary={<RichText render={post.data.subtitle} />}
                                    image={`${post.data.main_image.url}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
