import { GetStaticProps } from 'next'
import Head from 'next/head'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import React, { useContext } from 'react'
import { BlogIndex } from '../../../components/blog'

import { Layout } from '../../../components/Layout'
import { LanguageContext, LanguageContextType } from '../../../context/LanguageContext'
import { PrismicClient } from '../../../lib/api'
import { PostProps, PrismicDocument } from '../../../types/prismic/types'

interface PostPageProps {
    data: ApiSearchResponse
    contactQuery: ApiSearchResponse
    morePosts: PrismicDocument<PostProps>[]
    preview: any
}

export const BlogPage: React.FC<PostPageProps> = (props) => {
    const lang = useContext(LanguageContext) as LanguageContextType

    return (
        <Layout>
            <Head>
                <title>Espace Mo | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogIndex />
        </Layout>
    )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // const data = await PrismicClient.getAllByType('post', {
    //     orderings: '[my.blog.date desc]',
    //     lang: `${params?.lang ?? ''}`,
    // })

    const contactQuery = await PrismicClient.getByType('contact')

    return {
        props: {
            // data,
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
