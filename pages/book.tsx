import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import { Layout } from '../components/Layout'
import { PrismicClient } from '../lib/api'

import type { PrismicDocument, PrismicHomepageProps } from '../types/prismic/types'

interface AboutProps {
    preview: boolean
    aboutpageQuery: Array<PrismicDocument<PrismicHomepageProps>>
}

const Book: NextPage<AboutProps> = ({ aboutpageQuery }) => {
    const data = aboutpageQuery.find((d) => d.lang === 'en-ca')?.data

    const sid = 'gorendezvous-bookingwidget-script'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sEl = document.getElementById(sid)
            const js = document.createElement('script')

            if (sEl?.parentNode) {
                sEl.parentNode.removeChild(sEl)
            }

            js.id = sid
            js.src =
                'https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=' +
                (Math.floor(new Date().getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30)).toString()
            console.log('js.src :>> ', js.src)
            document.body.appendChild(js)
        }
    }, [])

    return (
        <div>
            <Head>
                <title>Espace Mo | Book</title>
            </Head>
            <Layout>
                <h1 className="text-3xl font-bold">Book</h1>
                <div className="container flex items-center justify-center h-full">
                    <div
                        data-professionalpagename="espacemo2"
                        data-bookingwidgeturlparams="companyId=127864"
                        data-language="en"
                        data-label="Book Appointment"
                        data-url="https://www.gorendezvous.com/"
                        className="gorendezvous-button"
                        data-buttoncolor="primary"
                        data-width="280px"
                        data-height="50px"
                    >
                        <a href="https://www.gorendezvous.com/espacemo2?companyId=127864" target="GOrendezvous">
                            Book Appointment
                        </a>
                    </div>
                </div>
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

export default Book
