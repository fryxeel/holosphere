import React from 'react'
import './styles.css'

const FondBlanc = ({ children, className }) => {
    return (
        <section className="containerFB">
            <div className="fondBlancWrapper">
                <div className={'fondBlanc ' + className}>{children}</div>
            </div>
        </section>
    )
}

export default FondBlanc
