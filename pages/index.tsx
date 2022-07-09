import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'
import Homepage from '../components/Homepage'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type {
    PrismicDocument,
    PrismicHomepageProps,
    PrismicSharedProps,
    SharedProps,
} from '../types/prismic/types'

interface HomepageProps extends SharedProps {
    homepageQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const Home: NextPage<HomepageProps> = ({ homepageQuery, sharedQuery }) => {
    return (
        <ErrorBoundary>
            <Head>
                <title>Espace Mo | Home</title>
            </Head>
            <Layout>
                <Homepage query={homepageQuery} shared={sharedQuery} />
            </Layout>
        </ErrorBoundary>
    )
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('homepage', {
        lang: '*',
    })
    const rawSharedQuery = await PrismicClient.getByType('shared', {
        lang: '*',
    })

    // @ts-ignore
    const homepageQuery: Array<PrismicDocument<PrismicHomepageProps>> = rawHomeQuery.results
    // @ts-ignore
    const sharedQuery: Array<PrismicDocument<PrismicSharedProps>> = rawSharedQuery.results

    return {
        props: { preview, homepageQuery, sharedQuery },
    }
}

export default Home
