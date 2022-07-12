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
    const data = await PrismicClient.getByUID('blog', `${params?.slug}`, {
        lang: `${params?.lang}`,
    })

    return {
        props: {
            post: data.data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await PrismicClient.getAllByType('blog', { lang: '*' })
    return {
        paths:
            posts?.map(({ uid, lang }) => {
                console.log(`/blog/${lang}/${uid}`)
                return `/blog/${lang}/${uid}`
            }) || [],
        fallback: true,
    }
}
