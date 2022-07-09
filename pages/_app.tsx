import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { LanguageContext } from '../context/LanguageContext'
import { useEffect, useState } from 'react'
import { Lang } from '../constants'
import { useRouter } from 'next/router'
import useLocalStorage from '../hooks/useLocalStorage'

function MyApp({ Component, pageProps }: AppProps) {
    const { query, replace, asPath, locale, push, pathname } = useRouter()
    const [localStorage, setLocalStorage] = useLocalStorage('language', Lang.FR)

    const [lang, setLang] = useState(localStorage || Lang.FR)
    console.log({ localStorage })

    useEffect(() => {
        console.log({ locale, pathname })
        if (locale && locale !== lang) {
            console.log('asPath', asPath)
            // replace(asPath.replace(locale, lang))
        }
    }, [])

    const handleSetLang = (newLanguage: Lang) => {
        setLang(newLanguage)
        setLocalStorage(newLanguage)

        console.log('query.lang :>> ', query.lang)
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
