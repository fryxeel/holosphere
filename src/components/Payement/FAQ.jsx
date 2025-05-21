import { useState } from 'react'
import Accordion from './Accordion'
import InputText from '../Inputs/InputText'

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null)

    const handleToggle = (key) => {
        setActiveAccordion((prev) => (prev === key ? null : key))
    }

    const cbIcons = [
        { src: '/images/logos/mastercard.svg', alt: 'Mastercard' },
        { src: '/images/logos/visa.svg', alt: 'Visa' },
        { src: '/images/logos/american_express.svg', alt: 'American Express' },
    ]

    const paypalIcons = [
        { src: '/images/logos/logos_paypal.svg', alt: 'PayPal' },
    ]

    return (
        <div className="border-gray-200 border-2 rounded-lg">
            <Accordion
                title="Carte bancaire"
                isOpen={activeAccordion === 'cb'}
                onToggle={() => handleToggle('cb')}
                icons={cbIcons}
            >
                <InputText placeholder="Numéro de carte" />
                <div className="flex flex-wrap md:flex-nowrap items-center w-full gap-3">
                    <InputText
                        placeholder="Date d'expiration"
                        className="w-full"
                    />
                    <InputText placeholder="CVC" className="w-full" />
                </div>
                <InputText placeholder="Nom du titulaire" />
            </Accordion>

            <Accordion
                title="PayPal"
                isOpen={activeAccordion === 'paypal'}
                onToggle={() => handleToggle('paypal')}
                icons={paypalIcons}
            >
                <InputText placeholder="Adresse email PayPal" />
            </Accordion>
        </div>
    )
}

export default FAQ
