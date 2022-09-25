import { Date, RichTextBlock } from 'prismic-reactjs'

export interface PostProps {
    title: RichTextBlock[]
    content: RichTextBlock[]
    excerpt: string
    coverimage: RichTextBlock
    date: Date
    author: RichTextBlock
    uid: RichTextBlock
    slugs: string[]
    tags: string[]
    link_type: 'Web' | 'Document' | 'Media' | 'Any'
}
export interface SocialLink {
    name: 'Facebook' | 'Instagram' | 'Etsy' | 'Mail'
    url: LinkType
    text: string
}

export interface ContactProps {
    title: RichTextBlock[]
    subtitle: RichTextBlock[]
    background_image: RichTextBlock
    social_links: SocialLink[]
}

export interface PrismicHomepageProps {
    header: RichTextBlock[]
    subtitle: RichTextBlock[]
    description: RichTextBlock[]
    logo: RichTextBlock
    'background-image': RichTextBlock
    intro_title: RichTextBlock[]
    intro_description: RichTextBlock[]
    intro_image: RichTextBlock
    grain: RichTextBlock
    book_now: string
}

export interface PrismicBookingpageProps {
    title: RichTextBlock[]
    description: RichTextBlock[]
    main_image: RichTextBlock
}

export interface PrismicContactProps {
    title: RichTextBlock[]
    description: RichTextBlock[]
    contact_info: {
        method_name: string,
        method_value: string
    }[]
    contact_image: RichTextBlock
    background_image: RichTextBlock
  }

export interface PrismicSharedProps {
    book_now: string
    home_nav: string
    about_nav: string
    blog_nav: string
    contact_nav: string
    book_nav: string
    "form-email": string
    "form-firstname": string
    "form-lastname": string
    "form-message": string
    background_image: RichTextBlock
}

export interface PrismicAboutpageProps {
    title: RichTextBlock[]
    description: RichTextBlock[]
    main_image: RichTextBlock
    gallery_title: RichTextBlock[]
    gallery: {
        gallery_image: RichTextBlock
    }[]
}

export interface SharedProps {
    preview: boolean
    sharedQuery: Array<PrismicDocument<PrismicSharedProps>>
}

/**
 * From Document from prismic-javascript
 */
export interface PrismicDocument<T> {
    id: string
    uid?: string
    url?: string
    type: string
    href: string
    tags: string[]
    slugs: string[]
    lang?: string
    alternate_languages: AlternateLanguage[]
    first_publication_date: string | null
    last_publication_date: string | null
    data: T
}

export type SliceTypeName =
    | 'banner_section'
    | 'call_to_action'
    | 'mobile_carousel'
    | 'hero_carousel'
    | 'hero_section'
    | 'image_gallery'
    | 'image'
    | 'key_points'
    | 'products'
    | 'quote'
    | 'text'

export enum SliceTypeEnum {
    banner_section = 'banner_section',
    call_to_action = 'call_to_action',
    hero_carousel = 'hero_carousel',
    hero_section = 'hero_section',
    image = 'image',
    image_gallery = 'image_gallery',
    key_points = 'key_points',
    products = 'products',
    quote = 'quote',
    text = 'text',
}

export interface LinkType {
    link_type: string
    name: string
    kind: string
    url: string
    size: string
    height: string
    width: string
}

export interface ItemType {
    background: RichTextBlock
    banner_label: string
    banner_link: string
    banner_title: RichTextBlock[]
    call_to_action: PrismicDocument
    gallery_image: RichTextBlock
    icon: RichTextBlock
    image_captions: string[]
    label: string
    link: LinkType
    page: string
    product_image: RichTextBlock
    product_link: LinkType
    subtitle1: RichTextBlock[]
    title1: RichTextBlock[]
}

export interface SliceType {
    slice_type: SliceTypeName
    slice_label: string
    variation: string
    version: string
    items: ItemType[]
    primary: {
        title: RichTextBlock[]
        description: RichTextBlock[]
    }
}
