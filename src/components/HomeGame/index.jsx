import React from 'react'
import BoxBlanc from '../BoxBlanc'
import Title from '../Text/Title'
import Body from '../Text/Body'
import CTAButton from '../Buttons/CTAButton'
import ClassicSection from '../ClassicSection'

const HomeGame = () => {
    return (
        <>
            <div className="bg-dark p-10 pb-40 flex justify-center items-center">
                <BoxBlanc className="max-w-360 w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <ClassicSection
                            withMaxWidth={false}
                            cssClass="p-10 py-15"
                        >
                            <img
                                src="/images/CardsHomeGame.webp"
                                alt=""
                                className="lg:w-1/2 w-full h-full max-w-150"
                            />

                            <div className="flex flex-col justify-center max-w-2xl">
                                <div>
                                    <div>
                                        <Title
                                            hierarchy={2}
                                            homePage
                                            cssClass="text-[var(--orange)] text-pretty"
                                        >
                                            Modélisez votre Holosphère <br /> et
                                            entrez dans le jeu !
                                        </Title>
                                    </div>
                                </div>
                                <div className="py-10 ">
                                    <div className="pb-8 c text-pretty w-full">
                                        <Body hierarchy={2}>
                                            <span>
                                                Imaginez, modelez, partagez
                                            </span>{' '}
                                            : utilisez le tag #Holosphere pour
                                            débloquer{' '}
                                            <span>
                                                5% de réduction immédiate
                                            </span>{' '}
                                            et tenter de remporter{' '}
                                            <span>-20% </span>
                                            supplémentaires grâce à notre
                                            concours hebdomadaire !
                                        </Body>
                                    </div>
                                    <div className="md:w-3/4 w-full">
                                        <CTAButton
                                            href="personnalisation"
                                            darkBG
                                            iconName="filled_stars"
                                        >
                                            Devenir sculpteur de souvenir
                                        </CTAButton>
                                    </div>
                                </div>

                                <div className="md:w-2/3 lg:w-full sm:w-full">
                                    <Body hierarchy={3} cssClass="w-full">
                                        Laissez libre cours à votre créativité :
                                        votre design ne vous engage pas à
                                        l’achat, mais vous permet d’explorer
                                        toutes les possibilités avant de vous
                                        décider.
                                    </Body>
                                </div>
                            </div>
                        </ClassicSection>
                    </div>
                </BoxBlanc>
            </div>
        </>
    )
}

export default HomeGame
