import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import React, { useContext } from 'react'
import { BlogShow } from '../../../components/blog/BlogShow'

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

export const BlogShowPage: React.FC<PostPageProps> = (props) => {
    const router = useRouter()
    const lang = useContext(LanguageContext) as LanguageContextType

    const slug = router.query.slug
    return (
        <Layout>
            <Head>
                <title>Espace Mo | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogShow />
        </Layout>
    )
}

export default BlogShowPage

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const data = await PrismicClient.getAllByType('post', {
//         orderings: '[my.blog.date desc]',
//         lang: `${params?.lang ?? ''}`,
//     })

//     const contactQuery = await PrismicClient.getByType('contact')

//     return {
//         props: {},
//     }
// }

// export async function getStaticPaths() {
//     const allPosts = await PrismicClient.getAllByType('post')

//     return {
//         paths: allPosts?.map(({ uid, lang }) => `/blog/${lang}/${uid}`) || [],
//         fallback: true,
//     }
// }
