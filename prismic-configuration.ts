import Prismic from 'prismic-javascript'
import { ApiOptions } from 'prismic-javascript/types/Api'

export const apiEndpoint: string = 'https://l-and-m-wedding.cdn.prismic.io/api/v2'
export const accessToken: string =
    'MC5YOWxORnhJQUFDWUE2R2ds.77-977-9TRkuYkHvv73vv73vv70_77-9Te-_ve-_vW7vv70P77-9Sg7vv71Q77-977-977-9d--_ve-_ve-_vXYp'

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
