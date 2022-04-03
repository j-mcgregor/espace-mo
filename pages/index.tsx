import Head from 'next/head'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import { PrismicClient } from '../lib/api'
import type { PrismicDocument, PrismicHomepageProps } from '../types/prismic/types'

import type { GetStaticProps, NextPage } from 'next'

interface HomepageProps {
    preview: boolean
    homepageQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const Home: NextPage<HomepageProps> = ({ homepageQuery }) => {
    const data = homepageQuery.find((d) => d.lang === 'en-ca')?.data
    console.log('data?.logo :>> ', data?.logo)
    return (
        <div>
            <Head>
                <title>Espace Mo | Home</title>
            </Head>
            <h1 className="text-3xl font-bold">
                <RichText render={data?.header} />
                {data && (
                    <Image
                        src={`${data?.logo.url}`}
                        width={data?.logo.dimensions?.width}
                        height={data?.logo.dimensions?.height}
                    />
                )}
            </h1>{' '}
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomepageProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('homepage', {
        lang: '*',
    })
    // @ts-ignore
    const homepageQuery: Array<PrismicDocument<PrismicHomepageProps>> = rawHomeQuery.results
    console.log('homepageQuery :>> ', homepageQuery)

    return {
        props: { preview, homepageQuery },
    }
}

export default Home
