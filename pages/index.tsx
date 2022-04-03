import Head from 'next/head'

import { PrismicClient } from '../lib/api'

import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Espace Mo | Home</title>
            </Head>
            <h1>Hello</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const homeQuery = await PrismicClient.getByType('home', {
        lang: '*',
    })

    return {
        props: { preview, homeQuery },
    }
}

export default Home
