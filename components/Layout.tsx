import React from 'react'
import { Navbar } from './shared/Navbar'
import { Footer } from './shared/Footer'

export const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
