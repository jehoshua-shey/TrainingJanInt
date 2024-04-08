import Header from '@/components/Admin/Header'
import React from 'react'

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}

export default layout