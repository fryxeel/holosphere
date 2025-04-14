import React from 'react'
import './styles.css'

const FondBlanc = ({ children, cssClass, smaller = false }) => {
    return (
        <section className="containerFB">
            <div className={'fondBlancWrapper ' + (smaller && 'smaller')}>
                <div className={'fondBlanc ' + cssClass}>{children}</div>
            </div>
        </section>
    )
}

export default FondBlanc
