import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../components/Contact'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicDocument, PrismicHomepageProps } from '../types/prismic/types'

interface ContactpageProps {
    preview: boolean
    contactQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const ContactPage: NextPage<ContactpageProps> = ({ contactQuery }) => {
    const data = contactQuery.find((d) => d.lang === 'en-ca')?.data

    return (
        <div>
            <Head>
                <title>Espace Mo | Contact</title>
            </Head>
            <Layout>
                <Contact />
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ContactpageProps> = async ({ preview = false }) => {
    const rawContactQuery = await PrismicClient.getByType('contact', {
        lang: '*',
    })

    // @ts-ignore
    const contactQuery: Array<PrismicDocument<PrismicContactpageProps>> = rawContactQuery.results

    return {
        props: { preview, contactQuery },
    }
}

export default ContactPage
