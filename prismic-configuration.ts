import Prismic from 'prismic-javascript'
import { ApiOptions } from 'prismic-javascript/types/Api'

export const apiEndpoint: string = 'https://espace-mo.cdn.prismic.io/api/v2'
export const accessToken: string =
    'MC5Za2t0LWhjQUFDWUF0Nmt2.ABRy77-9Lu-_vWHvv70ZDEbvv71077-9cu-_ve-_ve-_ve-_ve-_ve-_vT7vv73vv73vv73vv73vv73vv70ffBjvv70'

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(
        apiEndpoint,
        // @ts-ignore
        createClientOptions(req, accessToken) as ApiOptions
    )

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}
