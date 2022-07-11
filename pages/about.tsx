import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type {
    PrismicDocument,
    PrismicAboutpageProps,
    PrismicSharedProps,
    SharedProps,
} from '../types/prismic/types'

interface AboutProps extends SharedProps {
    aboutpageQuery: Array<PrismicDocument<PrismicAboutpageProps>>
}

const AboutPage: NextPage<AboutProps> = ({ aboutpageQuery, sharedQuery }) => {
    return (
        <div>
            <Head>
                <title>Espace Mo | AboutPage</title>
            </Head>
            <Layout>
                <About query={aboutpageQuery} shared={sharedQuery} />
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('about', {
        lang: '*',
    })

    const rawSharedQuery = await PrismicClient.getByType('shared', {
        lang: '*',
    })
    // @ts-ignore
    const aboutpageQuery: Array<PrismicDocument<PrismicAboutProps>> = rawHomeQuery.results
    // @ts-ignore
    const sharedQuery: Array<PrismicDocument<PrismicSharedProps>> = rawSharedQuery.results

    return {
        props: { preview, aboutpageQuery, sharedQuery },
    }
}

export default AboutPage
