import React from 'react'
import BoxBlanc from '../BoxBlanc'
import Title from '../Text/Title'
import Body from '../Text/Body'
import CTAButton from '../Buttons/CTAButton'
import ClassicSection from '../ClassicSection'

const HomeGame = () => {
    return (
        <div className="bg-[#8C64C5] p-10">
            <BoxBlanc className={'w-full h-full'}>
                <div className="w-full h-full flex justify-center items-center">
                    <ClassicSection withMaxWidth={false} cssClass="p-9">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full w-full 2xl:w-[50%]">
                            <img
                                className="rounded-[40px]"
                                src="/images/teamEliott.jpg"
                                alt=""
                            />
                            <img
                                className="rounded-[40px]"
                                src="/images/teamEliott.jpg"
                                alt=""
                            />
                            <img
                                className="rounded-[40px]"
                                src="/images/teamEliott.jpg"
                                alt=""
                            />
                            <img
                                className="rounded-[40px]"
                                src="/images/teamEliott.jpg"
                                alt=""
                            />
                        </div>

                        <div className="flex flex-col justify-center max-w-2xl">
                            <div>
                                <div>
                                    <Title
                                        hierarchy={2}
                                        homePage
                                        cssClass="text-[var(--orange)]"
                                    >
                                        Personnalisez la magie. <br /> Faites
                                        vibrer votre monde
                                    </Title>
                                </div>
                            </div>
                            <div className="py-10  ">
                                <div className="pb-8 w-3/4 text-pretty">
                                    <Body hierarchy={2}>
                                        Devenez{' '}
                                        <span>sculpteur de souvenir</span>{' '}
                                        l’espace d’un instant et{' '}
                                        <span>
                                            explorez toutes les possibilités
                                        </span>{' '}
                                        depuis votre imagination.
                                    </Body>
                                </div>
                                <div className="w-1/2">
                                    <CTAButton
                                        href="personnalisation"
                                        darkBG
                                        iconName="filled_stars"
                                    >
                                        Je personnalise mon Holosphere
                                    </CTAButton>
                                </div>
                            </div>

                            <div className="w-2/3">
                                <Body hierarchy={3}>
                                    Imaginez et personnalisez sans contrainte.
                                    Une fois votre Holosphère entre vos mains,
                                    vous pourrez toujours ajuster et enrichir
                                    son contenu au gré de vos envies.
                                </Body>
                            </div>
                        </div>
                    </ClassicSection>
                </div>
            </BoxBlanc>
        </div>
    )
}

export default HomeGame
