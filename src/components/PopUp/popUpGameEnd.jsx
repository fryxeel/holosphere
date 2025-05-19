import React, { useState, useEffect } from 'react'
import BoxBlanc from '../BoxBlanc'
import ClassicSection from '../ClassicSection'
import Title from '../Text/Title'
import Body from '../Text/Body'
import Icon from '../Icon'

const PopUpGameEnd = ({ setShowPopupEnd }) => {
    const [savedImageLocalStorage, setSavedImageLocalStorage] = useState(null)

    useEffect(() => {
        try {
            const storedImage = localStorage.getItem('image')
            if (storedImage) {
                setSavedImageLocalStorage(storedImage)
                console.log('Image récupérée du localStorage avec succès')
            } else {
                console.log('Aucune image trouvée dans le localStorage')
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'image:", error)
        }
    }, [])

    return (
        <div onClick={() => setShowPopupEnd(false)} className="absolute w-full h-full backdrop-blur-sm top-0 bg-white/20 z-20 flex items-center justify-center cursor-pointer">
            <div onClick={(e) => e.stopPropagation()} className="cursor-auto">
            <BoxBlanc>
                <ClassicSection cssClass="p-20">
                    <div className="flex flex-col gap-10">
                        {savedImageLocalStorage && (
                            <img
                                src={savedImageLocalStorage}
                                alt="Votre création Holosphère"
                                className="max-w-full h-auto rounded-lg"
                            />
                        )}

                        {/* <img src="/images/popUpGame.svg" alt="Pop-up jeu" /> */}
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
                                    <span>Personnalisez votre Holosphère</span>{' '}
                                    : ajoutez vos images, musiques et customisez
                                    le socle.
                                </Body>
                            </li>
                            <li>
                                <Body hierarchy={3} cssClass="text-dark">
                                    Partagez avec le tag{' '}
                                    <span>#Holosphere</span> pour :
                                    <br />
                                    ✅ -5% immédiat <br />
                                    🎁 Jusqu’à -20% avec notre concours hebdo !
                                </Body>
                            </li>
                        </ol>
                        <button className="cta-button-black-popUp flex gap-2.5">
                            C'est parti <Icon name="arrowRight" />
                        </button>
                    </div>
                </ClassicSection>
            </BoxBlanc>
            </div>
        </div>
    )
}

export default PopUpGameEnd
