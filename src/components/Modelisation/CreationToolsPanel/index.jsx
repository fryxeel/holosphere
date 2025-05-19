'use client'

import { useRef } from 'react'
import clsx from 'clsx'
import BoxBlanc from '../../BoxBlanc'
import Icon from '../../Icon'
import Body from '../../Text/Body'
import Title from '../../Text/Title'
import MaterialSelector from '../../snowglobe/TextureSocle'
import MusicAmbience from '../../snowglobe/MusicAmbience'

export default function CreationToolsPanel({
    currentTheme,
    imageSphere,
    selectedImageTexture,
    setSelectedImageTexture,
    handleImageClick,
    handleImageSelect,
    setMaterialTexture,
    forSmallerScreens = false,
}) {
    const fileInputRef = useRef(null)

    return (
        <BoxBlanc
            interClassName={clsx(
                'flex flex-col',
                forSmallerScreens
                    ? 'w-[calc(100vw_-_80px)] md:w-80'
                    : 'flex-1 min-h-0'
            )}
            className={clsx(
                'relative ',
                forSmallerScreens ? '' : 'w-sm flex-1 min-h-0'
            )}
        >
            {currentTheme === 'default' && (
                <div className="absolute inset-0 z-15 flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-2 justify-center items-center px-10 py-36 max-w-70">
                        <Icon name={'filled_stars'} color="black" height={32} />
                        <Body hierarchy={4} cssClass="text-dark">
                            Prêt à commencer ?
                        </Body>
                        <Body hierarchy={3} cssClass="text-center text-dark">
                            Sélectionnez un thème avant tout.
                        </Body>
                    </div>
                </div>
            )}
            <Title hierarchy={2} cssClass="text-dark">
                Outils de création
            </Title>

            <article
                className={clsx(
                    'flex-1 min-h-0 overflow-y-auto pl-1 -translate-x-1',
                    currentTheme === 'default' && 'opacity-10 blur-sm'
                )}
            >
                <div className="py-6 flex flex-col gap-2">
                    <Title hierarchy={3} cssClass="text-dark">
                        Vos propres images
                    </Title>
                    <div className="flex items-center gap-2 flex-wrap">
                        {imageSphere.map((image, index) => {
                            const isActive = selectedImageTexture === image.src
                            return (
                                <button
                                    key={index}
                                    className={`relative w-18 h-18 rounded-[10px] p-0.5 border-2 overflow-hidden cursor-pointer ${
                                        isActive
                                            ? 'border-black'
                                            : 'border-transparent'
                                    }`}
                                    onClick={() => {
                                        if (isActive) {
                                            setSelectedImageTexture(null)
                                            handleImageClick(null)
                                        } else {
                                            setSelectedImageTexture(image.src)
                                            handleImageClick(image.src)
                                        }
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full rounded-lg"
                                    />

                                    <div
                                        className="absolute top-0 right-0 z-10"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            if (isActive) {
                                                setSelectedImageTexture(null)
                                                handleImageClick(null)
                                            }
                                        }}
                                    >
                                        {isActive && (
                                            <div className="bg-black rounded-lg border-2 border-white">
                                                <Icon
                                                    name={'minus'}
                                                    height={24}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            )
                        })}

                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            onChange={handleImageSelect}
                            accept="image/*"
                        />

                        <div>
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="cta-button-black w-16 h-16 flex-col gap-1 py-2.5 px-1.5 rounded-2xl"
                            >
                                <Icon name={'dowload-image'} height={18} />
                                Ajouter
                            </button>
                        </div>
                    </div>
                    <Body hierarchy={3} cssClass="text-dark">
                        <span>Astuce : </span>Cliquez sur l'image pour la
                        projeter dans la sphère (une seule à la fois).
                    </Body>
                </div>

                <div className="pb-6 flex flex-col gap-2">
                    <MaterialSelector onSelectMaterial={setMaterialTexture} />
                </div>
                <div className="pb-6 flex flex-col gap-2">
                    <MusicAmbience />
                </div>
            </article>
        </BoxBlanc>
    )
}
