import React from 'react'
import Body from '../Text/Body'
import CTAButton from '../Buttons/CTAButton'
import Icon from '../Icon'

const Footer = () => {
    return (
        <footer className="relative h-[700px] bg-[var(--violetfooter)] w-full">
            <div className="flex pt-45 justify-center w-full h-full gap-60">
                <div className="flex flex-col gap-7">
                    <img
                        className="w-[79px] h-[96px]"
                        src="/images/logos/pictogramme_logo_holosphere_rose.svg"
                        alt=""
                    />
                    <div>
                        <Body cssClass="text-white" hierarchy={4}>
                            © 2025 Holosphere Studio France
                        </Body>
                        <Body cssClass="text-white" hierarchy={3}>
                            Fabriqué à Annecy avec ❤️
                        </Body>
                    </div>
                    <div className="flex gap-3">
                        <CTAButton variant={'primary'} onlyIcon>
                            <Icon name={'instagram'} />
                        </CTAButton>
                        <CTAButton variant={'primary'} onlyIcon>
                            <Icon name={'tiktok'} />
                        </CTAButton>
                        <CTAButton variant={'primary'} onlyIcon>
                            <Icon name="twitter" />
                        </CTAButton>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    {' '}
                    <Body cssClass="text-white" hierarchy={4}>
                        DÉCOUVRIR
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Accueil
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Modéliser
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Notre Histoire
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Obtenir mon Holosphere
                    </Body>
                </div>
                <div className="flex flex-col gap-7">
                    {' '}
                    <Body cssClass="text-white" hierarchy={4}>
                        SERVICES
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Panier d’achat
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Mes commandes
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Mentions légales
                    </Body>
                    <Body cssClass="text-white" hierarchy={3}>
                        Conditions générales de vente
                    </Body>
                </div>
            </div>
            <img
                className="w-full absolute bottom-0"
                src="/images/logos/HoloBigLogo.svg"
                alt=""
            />
        </footer>
    )
}

export default Footer
