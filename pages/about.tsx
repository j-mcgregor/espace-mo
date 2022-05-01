import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicDocument, PrismicHomepageProps } from '../types/prismic/types'

interface AboutProps {
    preview: boolean
    aboutpageQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const About: NextPage<AboutProps> = ({ aboutpageQuery }) => {
    const data = aboutpageQuery.find((d) => d.lang === 'en-ca')?.data

    return (
        <div>
            <Head>
                <title>Espace Mo | About</title>
            </Head>
            <Layout>
                <h1 className="text-3xl font-bold">About</h1>
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('about', {
        lang: '*',
    })

    // @ts-ignore
    const aboutpageQuery: Array<PrismicDocument<PrismicAboutProps>> = rawHomeQuery.results

    return {
        props: { preview, aboutpageQuery },
    }
}

export default About
