import React, { useState, useRef } from 'react'
import Body from '../../Text/Body'
import CreationToolsPanel from '../CreationToolsPanel'
import ThemeSelectorPanel from '../ThemeSelectorPanel'
import { fileInputRef } from '../CreationToolsPanel'
import clsx from 'clsx'

const SwitchToolsElement = ({
    currentTheme,
    imageSphere,
    selectedImageTexture,
    setSelectedImageTexture,
    handleImageClick,
    handleImageSelect,
    setMaterialTexture,
    selectedTheme,
    themeImages,
    handleToggleThemeObject,
    captureFunction,
}) => {
    const [activeTab, setActiveTab] = useState('outils')
    const SWIPE_THRESHOLD = 70

    const startX = useRef(null)
    const isTouch = useRef(false)
    const hasMoved = useRef(false)

    const handleStart = (x, touch = false) => {
        startX.current = x
        hasMoved.current = false
        isTouch.current = touch
    }

    const handleMove = (x) => {
        if (startX.current === null) return
        const dx = x - startX.current
        if (Math.abs(dx) > 10) {
            hasMoved.current = true
        }
    }

    const handleEnd = (x) => {
        if (startX.current === null || !hasMoved.current) return
        const dx = x - startX.current

        if (Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx < 0 && activeTab === 'outils') {
                setActiveTab('elements')
            } else if (dx > 0 && activeTab === 'elements') {
                setActiveTab('outils')
            }
        }
        startX.current = null
        hasMoved.current = false
    }

    return (
        <section
            className="flex flex-col gap-4 w-full"
            onTouchStart={(e) => handleStart(e.touches[0].clientX, true)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleStart(e.clientX, false)}
            onMouseMove={(e) => {
                if (e.buttons === 1) handleMove(e.clientX)
            }}
            onMouseUp={(e) => handleEnd(e.clientX)}
        >
            <div className="relative flex rounded-2xl border-2 border-light overflow-hidden w-full h-14 select-none">
                {/* Background slider */}
                <div
                    className={`absolute top-1 left-1 h-[44px] w-[calc(50%_-_4px)] bg-light transition-transform duration-300 rounded-xl z-0 ${
                        activeTab === 'elements'
                            ? 'translate-x-full'
                            : 'translate-x-0'
                    }`}
                ></div>

                {/* Tabs */}
                <button
                    onClick={() => setActiveTab('outils')}
                    className={`z-10 w-1/2 text-center py-2 transition-colors duration-300 cursor-pointer ${
                        activeTab === 'outils' ? 'text-dark' : 'text-light'
                    }`}
                >
                    <Body cssClass="bolder">Outils</Body>
                </button>
                <button
                    onClick={() => setActiveTab('elements')}
                    className={`z-10 w-1/2 text-center py-2 transition-colors duration-300 cursor-pointer ${
                        activeTab === 'elements' ? 'text-dark' : 'text-light'
                    }`}
                >
                    <Body cssClass="bolder">Éléments</Body>
                </button>
            </div>

            <div
                className={clsx(
                    'flex flex-row gap-4 transition-transform duration-300 ease-in-out',
                    activeTab === 'elements'
                        ? 'translate-x-[calc(-100vw_+_72px)] md:-translate-x-80'
                        : '-translate-0'
                )}
            >
                <CreationToolsPanel
                    currentTheme={currentTheme}
                    imageSphere={imageSphere}
                    selectedImageTexture={selectedImageTexture}
                    setSelectedImageTexture={setSelectedImageTexture}
                    handleImageClick={handleImageClick}
                    handleImageSelect={handleImageSelect}
                    fileInputRef={fileInputRef}
                    setMaterialTexture={setMaterialTexture}
                    forSmallerScreens
                    key="toolsMobile"
                />

                <ThemeSelectorPanel
                    currentTheme={currentTheme}
                    selectedTheme={selectedTheme}
                    themeImages={themeImages}
                    handleToggleThemeObject={handleToggleThemeObject}
                    captureFunction={captureFunction}
                    forSmallerScreens
                    key="themeMobile"
                />
            </div>
        </section>
    )
}

export default SwitchToolsElement
