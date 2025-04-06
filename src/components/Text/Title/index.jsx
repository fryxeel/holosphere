import React from 'react'
import '../styles.css'

const Title = ({
    children,
    hierarchy = '3',
    homePage = false,
    cssClass = '',
}) => {
    if (homePage) {
        switch (hierarchy) {
            case '1':
                return (
                    <h1 className={'text-h1 font-recoleta ' + cssClass}>
                        HOME {children}
                    </h1>
                )
            case '2':
                return (
                    <h2 className={'text-h2 font-recoleta ' + cssClass}>
                        HOME {children}
                    </h2>
                )
            case '3':
                return (
                    <h3 className={'text-h3 font-recoleta ' + cssClass}>
                        HOME {children}
                    </h3>
                )
        }
    } else {
        switch (hierarchy) {
            case '1':
                return <h1 className={'otherH1 ' + cssClass}>{children}</h1>
            case '2':
                return <h2 className={'otherH2 ' + cssClass}>{children}</h2>
            case '3':
                return (
                    <h3 className={'text-span3 font-recoleta ' + cssClass}>
                        {children}
                    </h3>
                )
        }
    }
}

export default Title
