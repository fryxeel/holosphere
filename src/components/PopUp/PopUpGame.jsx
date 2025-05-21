// components/PopUp/PopUpGame.jsx
import React from 'react'
import BoxBlanc from '../BoxBlanc/index'
import ClassicSection from '../ClassicSection/index'
import Title from '../Text/Title/index'
import Body from '../Text/Body/index'
import Icon from '../Icon/index'

const PopUpGame = ({ onClose }) => {
    return (
        <div className="absolute p-10  w-full h-full backdrop-blur-sm top-0 bg-white/20 z-20 flex md:items-center pt-30 items-start justify-center">
            <div className="max-w-260">
                <BoxBlanc>
                    <ClassicSection cssClass="sm:p-20 p-5 py-10 sm:max-h-[70vh] max-h-[75vh] overflow-y-auto">
                        <div className="flex flex-col gap-10">
                            <img src="/images/popUpGame.svg" alt="Pop-up jeu" />
                            <Body hierarchy={3} cssClass="gray">
                                Aucune obligation d’achat — explorez librement,
                                laissez parler votre créativité.
                            </Body>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Title hierarchy={2} cssClass="text-dark">
                                Bienvenue dans l’atelier Holosphère !
                            </Title>
                            <Body hierarchy={3} cssClass="text-dark">
                                Prêt·e à créer la vôtre ? Voici les étapes :
                            </Body>
                            <ol className="list-decimal marker:text-orange pl-6 space-y-4">
                                <li>
                                    <Body hierarchy={3} cssClass="text-dark">
                                        Choisissez un <span>thème</span> : Noël,
                                        anniversaire, été… selon vos envies du
                                        moment.
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3} cssClass="text-dark">
                                        <span>
                                            Personnalisez votre Holosphère
                                        </span>{' '}
                                        : ajoutez vos images, musiques et
                                        customisez le socle.
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3} cssClass="text-dark">
                                        Partagez avec le tag{' '}
                                        <span>#Holosphere</span> pour :
                                        <br />
                                        ✅ -5% immédiat <br />
                                        🎁 Jusqu’à -20% avec notre concours
                                        hebdo !
                                    </Body>
                                </li>
                            </ol>
                            <button
                                className="cta-button-black-popUp flex gap-2.5"
                                onClick={onClose}
                            >
                                C'est parti <Icon name="arrowRight" />
                            </button>
                        </div>
                    </ClassicSection>
                </BoxBlanc>
            </div>
        </div>
    )
}

export default PopUpGame
