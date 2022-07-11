import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import React, { useContext } from 'react'
import { BlogProps } from '.'
import { BlogShow } from '../../../components/blog/BlogShow'

import { Layout } from '../../../components/Layout'
import { LanguageContext, LanguageContextType } from '../../../context/LanguageContext'
import { PrismicClient } from '../../../lib/api'

interface PostPageProps {
    post: BlogProps
}

const BlogShowPage: React.FC<PostPageProps> = ({ post }) => {
    // console.log('post :>> ', post)
    const router = useRouter()
    const lang = useContext(LanguageContext) as LanguageContextType

    const slug = router.query.slug
    return (
        <Layout>
            <Head>
                <title>Espace Mo | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogShow post={post} />
        </Layout>
    )
}

export default BlogShowPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log('params', params)
    const data = await PrismicClient.getByUID('blog', `${params?.slug}`, {
        lang: `${params?.lang}`,
    })

    return {
        props: {
            post: data.data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const posts = await PrismicClient.getAllByType('blog')
    // console.log({ posts, locales })

    return {
        paths: posts?.map(({ uid, lang }) => `/blog/${lang}/${uid}`) || [],
        fallback: true,
    }
}
