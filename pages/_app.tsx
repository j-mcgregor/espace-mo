import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { LanguageContext } from '../context/LanguageContext'
import { useState } from 'react'
import { Lang } from '../constants'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
    const { query, replace, asPath } = useRouter()

    const [lang, setLang] = useState(Lang.FR)
    const handleSetLang = (newLanguage: Lang) => {
        setLang(newLanguage)

        if (query.lang) {
            replace(asPath.replace(query.lang.toString(), newLanguage))
        }
    }
    return (
        <ParallaxProvider>
            <LanguageContext.Provider value={[lang, handleSetLang]}>
                <Component {...pageProps} />
            </LanguageContext.Provider>
        </ParallaxProvider>
    )
}

export default MyApp
