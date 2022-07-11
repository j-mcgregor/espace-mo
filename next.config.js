/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.prismic.io'],
    },
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-ca', 'fr-ca'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'fr-ca',
        localeDetection: false,
    },
}

module.exports = nextConfig
