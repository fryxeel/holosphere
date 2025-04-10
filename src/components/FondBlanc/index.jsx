import React from 'react'
import './styles.css'

const FondBlanc = ({ children, cssClass }) => {
    return (
        <section className="containerFB">
            <div className="fondBlancWrapper">
                <div className={'fondBlanc ' + cssClass}>{children}</div>
            </div>
        </section>
    )
}

export default FondBlanc
