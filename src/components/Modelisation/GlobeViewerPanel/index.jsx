'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import clsx from 'clsx'

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
    forSmallerScreens = false,
}) => {
    return (
        <div
            className={clsx(
                'relative flex flex-col justify-center h-full',
                forSmallerScreens ? 'gap-4' : 'gap-11 max-w-144 w-1/3 2xl:w-3/7'
            )}
        >
            {/* Globe 3D */}
            <div className="w-full [aspect-ratio:1/1] -translate-y-4">
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
                            {currentTheme === 'winter' && 'Hiver'}
                            {currentTheme === 'spring' && 'Printemps'}
                            {currentTheme === 'valentine' && 'Saint-Valentin'}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleThemeClick('summer')}>
                            Été
                        </button>
                        <button onClick={() => handleThemeClick('winter')}>
                            Hiver
                        </button>
                        <button onClick={() => handleThemeClick('spring')}>
                            Printemps
                        </button>
                        <button
                            onClick={() => handleThemeClick('valentine')}
                            className="text-dark"
                        >
                            Saint-Valentin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobeViewerPanel
