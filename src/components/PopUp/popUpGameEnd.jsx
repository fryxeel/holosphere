import React, { useState, useEffect, useRef } from 'react'
import BoxBlanc from '../BoxBlanc'
import ClassicSection from '../ClassicSection'
import Title from '../Text/Title'
import Body from '../Text/Body'
import Icon from '../Icon'
import CardsGameHome from '../Cards/CardsGameHome'
import domtoimage from 'dom-to-image'

const PopUpGameEnd = ({ setShowPopupEnd }) => {
    const [savedImageLocalStorage, setSavedImageLocalStorage] = useState(null)
    const cardRef = useRef(null)

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

    const handleDownloadCard = () => {
        if (!cardRef.current) return

        // Ajouter une classe temporaire pour désactiver les styles parasites
        cardRef.current.classList.add('no-outline')

        domtoimage
            .toPng(cardRef.current)
            .then((dataUrl) => {
                // Nettoyer la class après capture
                cardRef.current.classList.remove('no-outline')

                const link = document.createElement('a')
                link.download = 'holosphere_card.png'
                link.href = dataUrl
                link.click()
            })
            .catch((error) => {
                console.error('Erreur lors de la capture de la carte :', error)
                cardRef.current.classList.remove('no-outline')
            })
    }

    const handleDownloadImageOnly = () => {
        if (!savedImageLocalStorage) return

        const link = document.createElement('a')
        link.href = savedImageLocalStorage
        link.download = 'holosphere_image.png'
        link.click()
    }

    return (
        <div
            onClick={() => setShowPopupEnd(false)}
            className="absolute w-full h-full backdrop-blur-sm top-0 bg-white/20 z-20 flex items-center justify-center cursor-pointer"
        >
            <div onClick={(e) => e.stopPropagation()} className="cursor-auto">
                <BoxBlanc>
                    <ClassicSection cssClass="p-20">
                        <div className="flex flex-col gap-10">
                            <button
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => setShowPopupEnd(false)}
                            >
                                <Icon name={'arrowLeft'} color="#5F6368" />
                                <Body hierarchy={3} cssClass="text-[#5F6368]">
                                    Continuer la modélisation
                                </Body>
                            </button>
                            <div ref={cardRef} className="relative">
                                <CardsGameHome img={savedImageLocalStorage} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Title hierarchy={2} cssClass="text-dark">
                                Votre Holosphère est prête !
                            </Title>
                            <Body hierarchy={3} cssClass="text-dark">
                                Elle n’attend plus qu’à être partagée ✨
                            </Body>
                            <Body hierarchy={4}>
                                Téléchargez votre création et publiez-la avec le
                                tag #Holosphere :
                            </Body>

                            <Body hierarchy={3} cssClass="text-dark">
                                ✅ -5% immédiat <br />
                                🎁 Jusqu’à -20% avec notre concours hebdo !
                            </Body>

                            {/* 🔽 Le bouton pour capturer la carte */}
                            <button
                                className="cta-button-black-popUp flex gap-2.5"
                                onClick={handleDownloadCard}
                            >
                                télécharger le visuel <Icon name="download" />
                            </button>

                            {/* 🔽 Le bouton pour télécharger l’image brute */}
                            <button onClick={handleDownloadImageOnly}>
                                <Body
                                    hierarchy={3}
                                    cssClass="underline text-[#5F6368]"
                                >
                                    télécharger avec un fond transparent
                                </Body>
                            </button>
                        </div>
                    </ClassicSection>
                </BoxBlanc>
            </div>
        </div>
    )
}
export default PopUpGameEnd
