'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import clsx from 'clsx'
import Icon from '../../Icon'

const GlobeViewerPanel = ({
    texture,
    materialTexture,
    selectedTheme,
    currentTheme,
    isCapturePage,
    setCaptureFunction,
    handleThemeClick,
    SnowGlobeSphere,
    SnowGlobetest,
    Controls,
    CaptureScene,
    imgTheme = [],
    forSmallerScreens = false,
    isTablet = false,
}) => {
    return (
        <div
            className={clsx(
                'flex justify-center h-full',
                forSmallerScreens
                    ? 'gap-8 flex-col-reverse'
                    : isTablet
                    ? 'flex-col gap-11 items-center'
                    : 'relative flex-col gap-11 max-w-144 w-1/3 2xl:w-3/7'
            )}
        >
            {/* Globe 3D */}
            <div
                className={clsx(
                    '[aspect-ratio:1/1] -translate-y-4',
                    isTablet ? 'w-full lg:w-2/3' : 'w-full'
                )}
            >
                <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
                    <Controls />
                    <SnowGlobeSphere
                        texture={texture}
                        selectedTheme={selectedTheme}
                        position={[0, 3, 0]}
                    />
                    <SnowGlobetest
                        rotation={[0, Math.PI / 2, 0]}
                        scale={0.7}
                        materialTexturePath={materialTexture}
                        scaleSphere={1.2}
                    />
                    {isCapturePage && (
                        <CaptureScene setCaptureFunction={setCaptureFunction} />
                    )}
                    <Environment
                        files="/environnement/poly_haven_studio_1k.hdr"
                        intensity={0}
                    />
                </Canvas>
            </div>

            {/* Panneau de sélection de thème */}
            <div
                className={clsx(
                    'bottom-0 rounded-[20px] border-white border-2 p-1 w-full',
                    forSmallerScreens ? '' : 'absolute'
                )}
            >
                <div className="flex flex-col bg-white rounded-2xl p-[11px] gap-3">
                    <div className="flex justify-between items-center">
                        <div>Thème à appliquer</div>
                        <div className="px-2 bg-gray-200 rounded-[8px]">
                            {currentTheme === 'default' && 'Aucun'}
                            {currentTheme === 'summer' && 'Été'}
                            {currentTheme === 'autumn' && 'Automne'}
                            {currentTheme === 'winter' && 'Hiver'}
                            {currentTheme === 'spring' && 'Printemps'}
                            {currentTheme === 'valentine' && 'Romance'}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {imgTheme.map((imgOfThisTheme) => (
                            <button
                                key={imgOfThisTheme.id}
                                className={`relative w-16 h-16 rounded-[10px] p-0.5 border-2 overflow-hidden cursor-pointer ${
                                    currentTheme === imgOfThisTheme.id
                                        ? 'border-dark'
                                        : 'border-transparent'
                                }`}
                                onClick={() =>
                                    handleThemeClick(imgOfThisTheme.id)
                                }
                            >
                                <img
                                    src={imgOfThisTheme.src}
                                    alt={imgOfThisTheme.id}
                                    className="w-full h-full rounded-lg"
                                />
                                {currentTheme === imgOfThisTheme.id && (
                                    <div className="absolute bottom-0 left-0 z-10">
                                        <div className="bg-dark p-[2px] rounded-lg border-2 border-white">
                                            <Icon
                                                color={'white'}
                                                name={'check'}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobeViewerPanel
