import React from 'react'

import { Navbar } from './shared/Navbar'

export const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
