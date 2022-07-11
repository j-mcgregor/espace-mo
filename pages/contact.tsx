import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../components/Contact'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicDocument, PrismicContactProps, SharedProps } from '../types/prismic/types'

interface ContactpageProps extends SharedProps {
    contactQuery: Array<PrismicDocument<PrismicContactProps>>
}

const ContactPage: NextPage<ContactpageProps> = ({ contactQuery, sharedQuery }) => {
    return (
        <div>
            <Head>
                <title>Espace Mo | Contact</title>
            </Head>
            <Layout>
                <Contact query={contactQuery} shared={sharedQuery} />
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ContactpageProps> = async ({ preview = false }) => {
    const rawContactQuery = await PrismicClient.getByType('contact', {
        lang: '*',
    })
    const rawSharedQuery = await PrismicClient.getByType('shared', {
        lang: '*',
    })

    // @ts-ignore
    const contactQuery: Array<PrismicDocument<PrismicContactProps>> = rawContactQuery.results
    // @ts-ignore
    const sharedQuery: Array<PrismicDocument<PrismicSharedProps>> = rawSharedQuery.results

    return {
        props: { preview, contactQuery, sharedQuery },
    }
}

export default ContactPage
