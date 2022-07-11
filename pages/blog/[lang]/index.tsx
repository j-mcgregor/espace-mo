import { GetStaticProps } from 'next'
import Head from 'next/head'
import { RichTextBlock } from 'prismic-reactjs'
import React, { useContext } from 'react'

import { BlogIndex } from '../../../components/blog'
import { Layout } from '../../../components/Layout'
import { LanguageContext, LanguageContextType } from '../../../context/LanguageContext'
import { PrismicClient } from '../../../lib/api'
import { ContactProps, PrismicDocument } from '../../../types/prismic/types'

export interface BlogProps {
    title: RichTextBlock[]
    subtitle: RichTextBlock[]
    body: RichTextBlock[]
    main_image: RichTextBlock
}

export interface MainProps {
    title: RichTextBlock[]
    subtitle: RichTextBlock[]
    main_image: RichTextBlock
}

export interface BlogPageProps {
    contact: PrismicDocument<ContactProps>[]
    main: PrismicDocument<MainProps>[]
    posts: PrismicDocument<BlogProps>[]
    preview: any
}

export const BlogPage: React.FC<BlogPageProps> = ({ contact, main, posts }) => {
    const lang = useContext(LanguageContext) as LanguageContextType

    return (
        <Layout>
            <Head>
                <title>Espace Mo | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogIndex data={main} posts={posts} />
        </Layout>
    )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const main = await PrismicClient.getByType('blog_main', {
        lang: `${params?.lang}` ?? '*',
    })

    const posts = await PrismicClient.getByType('blog', {
        lang: `${params?.lang}` ?? '*',
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
    })

    const contact = await PrismicClient.getByType('contact')

    // @ts-ignore
    const mainQuery: Array<PrismicDocument<MainProps>> = main.results
    // @ts-ignore
    const postsQuery: Array<PrismicDocument<BlogProps>> = posts.results
    // @ts-ignore
    const contactQuery: Array<PrismicDocument<ContactProps>> = contact.results

    return {
        props: {
            main: mainQuery,
            posts: postsQuery,
            contact: contactQuery,
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
