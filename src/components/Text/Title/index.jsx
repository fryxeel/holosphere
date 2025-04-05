import React from 'react'

const Title = ({ children, hierarchy = '3', homePage = false }) => {
    if (homePage) {
        switch (hierarchy) {
            case '1':
                return (
                    <h1 className="text-span1 font-recoleta">
                        HOME {children}
                    </h1>
                )
            case '2':
                return (
                    <h2 className="text-span2 font-recoleta">
                        HOME {children}
                    </h2>
                )
            case '3':
                return (
                    <h3 className="text-span3 font-recoleta">
                        HOME {children}
                    </h3>
                )
        }
    } else {
        switch (hierarchy) {
            case '1':
                return <h1 className="text-span1 font-recoleta">{children}</h1>
            case '2':
                return <h2 className="text-span2 font-recoleta">{children}</h2>
            case '3':
                return <h3 className="text-span3 font-recoleta">{children}</h3>
        }
    }
}

export default Title
