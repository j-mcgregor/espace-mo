import { createContext, Dispatch, SetStateAction } from 'react'
import { SocialLink } from '../types/prismic/types'

// @ts-ignore
export const SocialContext = createContext()

export type SocialContextType = [Array<SocialLink>, Dispatch<SetStateAction<SocialLink>>]
