import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Booking } from '../components/Booking'
import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicBookingpageProps, PrismicDocument, SharedProps } from '../types/prismic/types'

interface AboutProps extends SharedProps {
    bookingQuery: Array<PrismicDocument<PrismicBookingpageProps>>
}

const Book: NextPage<AboutProps> = ({ bookingQuery, sharedQuery }) => {
    const [isSSR, setIsSSR] = useState(true)
    const sid = 'gorendezvous-bookingwidget-script'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsSSR(false)
            const sEl = document.getElementById(sid)
            const script = document.createElement('script')

            if (sEl?.parentNode) {
                sEl.parentNode.removeChild(sEl)
            }

            script.id = sid
            script.src =
                'https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=' +
                (Math.floor(new Date().getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30)).toString()

            script.async = true
            document.body.appendChild(script)
        }
    }, [])

    return (
        <div className="">
            <Head>
                <title>Espace Mo | Book</title>
            </Head>
            <Layout>{!isSSR && <Booking query={bookingQuery} shared={sharedQuery} />}</Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ preview = false }) => {
    const rawHomeQuery = await PrismicClient.getByType('booking', {
        lang: '*',
    })
    const rawSharedQuery = await PrismicClient.getByType('shared', {
        lang: '*',
    })

    // @ts-ignore
    const bookingQuery: Array<PrismicDocument<PrismicBookingpageProps>> = rawHomeQuery.results
    // @ts-ignore
    const sharedQuery: Array<PrismicDocument<PrismicSharedProps>> = rawSharedQuery.results

    return {
        props: { preview, bookingQuery, sharedQuery },
    }
}

export default Book
