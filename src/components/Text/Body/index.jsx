import React from 'react'

const Body = ({ children, hierarchy = '3' }) => {
    switch (hierarchy) {
        case '1':
            return <p>1 {children}</p>
        case '2':
            return <p>2 {children}</p>
        case '3':
            return <p>3 {children}</p>
        default:
            return <p>X {children}</p>
    }
}

export default Body
