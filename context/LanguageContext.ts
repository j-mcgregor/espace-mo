import { createContext, Dispatch, SetStateAction } from 'react'
import { Lang } from '../constants'

// @ts-ignore
export const LanguageContext = createContext()

export type LanguageContextType = [Lang, Dispatch<SetStateAction<Lang>>]
