import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicDocument, PrismicHomepageProps } from '../types/prismic/types'

interface HomepageProps {
    preview: boolean
    homepageQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const Home: NextPage<HomepageProps> = ({ homepageQuery }) => {
    const data = homepageQuery.find((d) => d.lang === 'en-ca')?.data

    return (
        <div>
            <Head>
                <title>Espace Mo | Home</title>
            </Head>
            <Layout>
                <h1 className="text-3xl font-bold">Home</h1>
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('homepage', {
        lang: '*',
    })

    // @ts-ignore
    const homepageQuery: Array<PrismicDocument<PrismicHomepageProps>> = rawHomeQuery.results

    return {
        props: { preview, homepageQuery },
    }
}

export default Home
