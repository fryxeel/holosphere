'use client'

import React from 'react'
import clsx from 'clsx'
import BoxBlanc from '../../BoxBlanc'
import Icon from '../../Icon'
import Title from '../../Text/Title'
import Body from '../../Text/Body'
import GetDiscountByShare from '../GetDiscountByShare'

const ThemeSelectorPanel = ({
    currentTheme,
    selectedTheme,
    themeImages,
    handleToggleThemeObject,
    captureFunction,
    setShowPopupEnd,
    forSmallerScreens = false,
}) => {
    return (
        <div className="flex flex-col gap-8 w-full md:w-2/7 md:max-w-96 justify-end h-full">
            <BoxBlanc
                interClassName={clsx(
                    'flex flex-col ',
                    forSmallerScreens
                        ? 'w-[calc(100vw_-_80px)] md:w-77'
                        : 'flex-1 min-h-0'
                )}
                className={clsx(
                    'relative ',
                    forSmallerScreens
                        ? 'md:w-80 md:h-full'
                        : 'w-sm flex-1 min-h-0'
                )}
            >
                {currentTheme === 'default' && (
                    <div className="absolute inset-0 z-15 flex flex-col justify-center items-center">
                        <div className="flex flex-col gap-2 justify-center items-center px-10 py-36 max-w-70">
                            <Icon
                                name="filled_stars"
                                color="black"
                                height={32}
                            />
                            <Body hierarchy={4} cssClass="text-dark">
                                Prêt à commencer ?
                            </Body>
                            <Body
                                hierarchy={3}
                                cssClass="text-center text-dark"
                            >
                                Sélectionnez un thème avant tout.
                            </Body>
                        </div>
                    </div>
                )}

                <Title hierarchy={2} cssClass="text-dark">
                    Éléments du thème
                </Title>

                <article
                    className={clsx(
                        'flex-1 min-h-0 overflow-y-auto pl-1 -translate-x-1',
                        currentTheme === 'default' && 'opacity-10 blur-sm'
                    )}
                >
                    <Title hierarchy={3} cssClass="text-dark">
                        {currentTheme === 'default' && 'Aucun'}
                        {currentTheme === 'summer' && "Model pour l'été"}
                        {currentTheme === 'winter' && 'Model pour Noël'}
                        {currentTheme === 'spring' && 'Model pour le Printemps'}
                        {currentTheme === 'valentine' &&
                            'Model de Romance'}
                    </Title>

                    <div className="grid grid-cols-3 gap-2 p-1 min-h-[120px]">
                        {themeImages.map((item, index) => {
                            const isActive = selectedTheme.includes(item)

                            return (
                                <div
                                    key={index}
                                    className={`relative w-[88px] h-[88px] p-1 rounded-lg transition-all border-2 cursor-pointer ${
                                        isActive
                                            ? 'border-black'
                                            : 'border-transparent'
                                    }`}
                                    onClick={() =>
                                        handleToggleThemeObject(item)
                                    }
                                >
                                    <img
                                        src={item.img}
                                        alt="Objet du thème"
                                        className="w-19 h-19 rounded-md"
                                    />
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 z-10">
                                            <div className="bg-black rounded-lg border-2 border-white">
                                                <Icon
                                                    color="white"
                                                    name="check"
                                                    height={24}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    <Body hierarchy={3}>
                        <span>Astuce :</span> Sélectionnez ou retirez les
                        éléments à projeter selon le thème choisi.
                    </Body>
                </article>
            </BoxBlanc>

            {!forSmallerScreens && (
                <GetDiscountByShare
                    captureFunction={captureFunction}
                    setShowPopupEnd={setShowPopupEnd}
                />
            )}
        </div>
    )
}

export default ThemeSelectorPanel
