import { GetStaticProps } from 'next'
import Head from 'next/head'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import { RichTextBlock } from 'prismic-reactjs'
import React, { useContext } from 'react'

import { Layout } from '../../../components/Layout'
import { LanguageContext, LanguageContextType } from '../../../context/LanguageContext'
import { PrismicClient } from '../../../lib/api'
import { PrismicDocument, SliceType } from '../../../types/prismic/types'

interface PostProps {
    title: RichTextBlock[]
    excerpt: RichTextBlock[]
    author: {
        id: string
        type: string
        tags: string[]
        slug: string
        lang: string
        link_type: 'Document'
        isBroken: boolean
    }
    main_image: RichTextBlock
    body: SliceType[]
    display_name: string
    meta_title: string
    meta_description: string
}

interface PostPageProps {
    data: ApiSearchResponse
    contactQuery: ApiSearchResponse
    morePosts: PrismicDocument<PostProps>[]
    preview: any
}

export const Blog: React.FC<PostPageProps> = (props) => {
    const lang = useContext(LanguageContext) as LanguageContextType

    return (
        <Layout>
            <Head>
                <title>Espace Mo | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Blog
        </Layout>
    )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = await PrismicClient.getAllByType('post', {
        orderings: '[my.blog.date desc]',
        lang: `${params?.lang ?? ''}`,
    })

    const contactQuery = await PrismicClient.getByType('contact')

    return {
        props: {
            data,
            contactQuery,
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await PrismicClient.getAllByType('post')

    return {
        paths: allPosts.map(({ uid, lang }) => `/blog/${lang}/${uid}`) || [],
        fallback: true,
    }
}
