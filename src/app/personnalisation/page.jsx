'use client'
import { useLoader } from '@react-three/fiber'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Controls from '../../components/snowglobe/Controls'
import CaptureScene from '../../components/snowglobe/CaptureScene'
import { TextureLoader } from 'three'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import SnowGlobetest from '@/components/snowglobetest'
import PopUpGame from '@/components/PopUp/PopUpGame'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
import clsx from 'clsx'
import ThemeSelectorPanel from '@/components/Modelisation/ThemeSelectorPanel/index.jsx'
import GlobeViewerPanel from '@/components/Modelisation/GlobeViewerPanel/index.jsx'
import GetDiscountByShare from '@/components/Modelisation/GetDiscountByShare/index.jsx'

import CreationToolsPanel from '@/components/Modelisation/CreationToolsPanel/index.jsx'
import { useMediaQuery } from 'react-responsive'
import SwitchToolsElement from '@/components/Modelisation/SwitchToolsElement'

export default function SnowGlobe() {
    const [imageTexture, setImageTexture] = useState(null) // Texture pour la sphère
    const [imageSphere, setImageSphere] = useState([]) //stockage des images mis par l'utilisateur
    const [selectedImageTexture, setSelectedImageTexture] = useState(null) // Stockage local de l'image sélectionnée
    const fileInputRef = useRef(null)

    const [materialTexture, setMaterialTexture] = useState(null)
    // Texture pour la base
    const [selectedTheme, setselectedTheme] = useState([])

    const [themeImages, setImageThemes] = useState([]) // models pour sphere3D
    const [captureFunction, setCaptureFunction] = useState(null) //capture d'écran
    const pathname = usePathname()

    const [currentTheme, setCurrentTheme] = useState('default') // État pour le thème actif

    const [showPopup, setShowPopup] = useState(true)

    const imgTheme = [
        { id: 'summer', src: '/images/modelisationPicto/summer.jpg' },
        { id: 'winter', src: '/images/modelisationPicto/winter.jpg' },
        { id: 'autumn', src: '/images/modelisationPicto/autumn.jpg' },
        { id: 'valentine', src: '/images/modelisationPicto/valentine.jpg' },
        { id: 'spring', src: '/images/modelisationPicto/spring.jpg' },
    ]

    const themes = {
        default: [],
        summer: [
            {
                model: '/models/summer/quiver/quiver_tree_02_1k.gltf',
                position: [0, -1.5, 1],
                scale: 1,
                rotation: [0, 0, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
            {
                model: '/models/summer/beach_ball/scene.gltf',
                position: [1, -1.3, 0],
                scale: 0.2,
                rotation: [0, 0, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        winter: [
            {
                model: '/models/winter/blue_pine_under_snow/scene.gltf',
                position: [-0.2, -1.5, 1],
                scale: 0.004,
                rotation: [0, 0, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
            {
                model: '/models/winter/snow_man/scene.gltf',
                position: [1, -1.22, 0],
                scale: 0.2,
                rotation: [0, Math.PI * 1.6, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        spring: [
            {
                model: '/models/spring/sakura__cherry_blossom/scene.gltf',
                position: [0.6, -1.45, 0.5],
                scale: 0.3,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        autumn: [
            {
                model: '/models/automn/stylized_autumn_tree/scene.gltf',
                position: [0.8, -1.4, 0],
                scale: 0.2,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
            {
                model: '/models/automn/pumpkins_model/scene.gltf',
                position: [0.2, -1.4, 0.6],
                scale: 0.1,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        valentine: [
            {
                model: '/models/valentine/valentines_heart_balloons/scene.gltf',
                position: [-0.2, -1.4, 1],
                scale: 0.2,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
            {
                model: '/models/valentine/heart_air_balloon/scene.gltf',
                position: [1, -1, 0],
                scale: 0.1,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
    }

    const handleThemeClick = (theme) => {
        setCurrentTheme(theme) // Met à jour le thème actif
        setselectedTheme(themes[theme]) // Charge les objets du thème pour la sphère 3D
        setImageThemes(themes[theme]) // Met à jour la liste des images affichées
    }

    const handleToggleThemeObject = (item) => {
        const isAlreadySelected = selectedTheme.includes(item)

        if (isAlreadySelected) {
            // Enlève l’objet de la scène
            setselectedTheme((prev) => prev.filter((i) => i !== item))
            // ici tu peux aussi enlever l'objet du monde 3D (si tu as une méthode pour ça)
        } else {
            // Ajoute l’objet à la scène
            setselectedTheme((prev) => [...prev, item])

            // ici tu peux aussi rajouter l'objet dans le monde 3D
        }
    }

    // Modifiez handleToggleimageTexture
    const handleToggleimageTexture = (imageSrc) => {
        setSelectedImageTexture((prev) => {
            if (prev.includes(imageSrc)) {
                // Désélection
                handleImageClick(null) // Pour enlever la texture 3D
                return prev.filter((src) => src !== imageSrc)
            } else {
                // Sélection
                handleImageClick(imageSrc) // Pour appliquer la texture 3D
                return [...prev, imageSrc]
            }
        })
    }

    // Charger les textures
    const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null
    const textureMaterial = materialTexture
        ? useLoader(TextureLoader, materialTexture)
        : null

    const handleImageClick = (imageSrc) => {
        setImageTexture(imageSrc) // Applique la texture à la sphère
    }

    const handleMaterialClick = (materialSrc) => {
        setMaterialTexture(materialSrc) // Applique la texture à la base
    }

    // Transformation de l'image en base64 pour l'afficher en texture
    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const reader = new FileReader()

        reader.onload = (event) => {
            const base64 = event.target.result

            const newImage = {
                src: base64,
                alt: file.name,
            }

            setImageSphere((prev) => [...prev, newImage])
            setImageTexture(base64)
            // <=== c'est ça que tu vas passer au composant 3D
            setSelectedImageTexture(base64)
        }

        reader.readAsDataURL(file)
        e.target.value = null
    }

    const isCapturePage = pathname === '/personnalisation'

    // Gérer le responsive avec react-responsive
    const actualIsMobile = useMediaQuery({ maxWidth: 767 })
    const actualIsTablet = useMediaQuery({ maxWidth: 1329 })
    const [isMobile, setIsMobile] = useState(false) // valeur par défaut
    const [isTablet, setIsTablet] = useState(false) // valeur par défaut

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true) // Ne passe à true qu’après le premier rendu côté client
    }, [])

    useEffect(() => {
        if (isClient) {
            setIsMobile(actualIsMobile)
            setIsTablet(actualIsTablet)
        }
    }, [isClient, actualIsMobile, actualIsTablet])

    return isMobile ? (
        <>
            {showPopup && <PopUpGame onClose={() => setShowPopup(false)} />}
            <main
                className={clsx(
                    'w-full flex justify-center items-center',
                    showPopup ? 'opacity-50' : ''
                )}
            >
                <section className="flex flex-col gap-12 max-w-400 w-full justify-between p-4 pt-8 2xl:p-8">
                    <div className="flex flex-col gap-4 w-full">
                        <Title hierarchy={1} cssClass="text-light">
                            Sculptez votre souvenir
                        </Title>
                        <Body cssClass="text-light">
                            Laissez parler votre intuition : une belle idée peut
                            faire naître une Holosphère unique… et peut-être
                            vous faire gagner.
                        </Body>
                    </div>

                    <GlobeViewerPanel
                        texture={texture}
                        materialTexture={materialTexture}
                        selectedTheme={selectedTheme}
                        currentTheme={currentTheme}
                        isCapturePage={isCapturePage}
                        setCaptureFunction={setCaptureFunction}
                        handleThemeClick={handleThemeClick}
                        SnowGlobeSphere={SnowGlobeSphere}
                        SnowGlobetest={SnowGlobetest}
                        Controls={Controls}
                        CaptureScene={CaptureScene}
                        imgTheme={imgTheme}
                        forSmallerScreens
                        key="globeMobile"
                    />

                    <SwitchToolsElement
                        currentTheme={currentTheme}
                        imageSphere={imageSphere}
                        selectedImageTexture={selectedImageTexture}
                        setSelectedImageTexture={setSelectedImageTexture}
                        handleImageClick={handleImageClick}
                        handleImageSelect={handleImageSelect}
                        fileInputRef={fileInputRef}
                        setMaterialTexture={setMaterialTexture}
                        selectedTheme={selectedTheme}
                        themeImages={themeImages}
                        handleToggleThemeObject={handleToggleThemeObject}
                        captureFunction={captureFunction}
                    />

                    <GetDiscountByShare
                        captureFunction={captureFunction}
                        forSmallerScreens
                    />
                </section>
            </main>
        </>
    ) : isTablet ? (
        <>
            {showPopup && <PopUpGame onClose={() => setShowPopup(false)} />}
            <main
                className={clsx(
                    'w-full flex justify-center items-center',
                    showPopup ? 'opacity-50' : ''
                )}
            >
                <section className="h-[calc(100vh_-_100px)] max-h-250 flex flex-row max-w-400 w-full min-h-0 justify-between gap-8 p-4 pt-8 2xl:p-8">
                    <div className="relative flex flex-col gap-11 w-full justify-between h-full max-h-full overflow-hidden">
                        <div className="flex flex-col max-w-135 gap-4 w-full">
                            <Title hierarchy={1} cssClass="text-light">
                                Sculptez votre souvenir
                            </Title>
                            <Body cssClass="text-light">
                                Laissez parler votre intuition : une belle idée
                                peut faire naître une Holosphère unique… et
                                peut-être vous faire gagner.
                            </Body>
                        </div>

                        <GlobeViewerPanel
                            texture={texture}
                            materialTexture={materialTexture}
                            selectedTheme={selectedTheme}
                            currentTheme={currentTheme}
                            isCapturePage={isCapturePage}
                            setCaptureFunction={setCaptureFunction}
                            handleThemeClick={handleThemeClick}
                            SnowGlobeSphere={SnowGlobeSphere}
                            SnowGlobetest={SnowGlobetest}
                            Controls={Controls}
                            CaptureScene={CaptureScene}
                            imgTheme={imgTheme}
                            isTablet
                            key="globeTablet"
                        />
                    </div>
                    <div className="flex flex-col gap-11 min-w-94 w-94 justify-between h-full overflow-y-auto overflow-x-hidden pr-3 rounded-2xl">
                        <SwitchToolsElement
                            currentTheme={currentTheme}
                            imageSphere={imageSphere}
                            selectedImageTexture={selectedImageTexture}
                            setSelectedImageTexture={setSelectedImageTexture}
                            handleImageClick={handleImageClick}
                            handleImageSelect={handleImageSelect}
                            fileInputRef={fileInputRef}
                            setMaterialTexture={setMaterialTexture}
                            selectedTheme={selectedTheme}
                            themeImages={themeImages}
                            handleToggleThemeObject={handleToggleThemeObject}
                            captureFunction={captureFunction}
                        />

                        <GetDiscountByShare
                            captureFunction={captureFunction}
                            forSmallerScreens
                        />
                    </div>
                </section>
            </main>
        </>
    ) : (
        <>
            {showPopup && <PopUpGame onClose={() => setShowPopup(false)} />}
            <main
                className={clsx(
                    'h-[calc(100vh_-_100px)] w-full flex justify-center items-center',
                    showPopup ? 'opacity-50' : ''
                )}
            >
                <section className="h-[calc(100vh_-_100px)] max-h-250 flex flex-row max-w-400 w-full min-h-0 justify-between p-4 pt-8 2xl:p-8">
                    <div className="flex flex-col gap-11 max-w-96 w-2/7 justify-between h-full">
                        <div className="flex flex-col gap-2 w-full translate-x-4">
                            <Title
                                hierarchy={1}
                                cssClass="text-light whitespace-nowrap"
                            >
                                Sculptez votre souvenir
                            </Title>
                            <Body cssClass="text-light">
                                Laissez parler votre intuition : une belle idée
                                peut faire naître une Holosphère unique… et
                                peut-être vous faire gagner.
                            </Body>
                        </div>

                        <CreationToolsPanel
                            currentTheme={currentTheme}
                            imageSphere={imageSphere}
                            selectedImageTexture={selectedImageTexture}
                            setSelectedImageTexture={setSelectedImageTexture}
                            handleImageClick={handleImageClick}
                            handleImageSelect={handleImageSelect}
                            fileInputRef={fileInputRef}
                            setMaterialTexture={setMaterialTexture}
                            key="toolsDesktop"
                        />
                    </div>

                    <GlobeViewerPanel
                        texture={texture}
                        materialTexture={materialTexture}
                        selectedTheme={selectedTheme}
                        currentTheme={currentTheme}
                        isCapturePage={isCapturePage}
                        setCaptureFunction={setCaptureFunction}
                        handleThemeClick={handleThemeClick}
                        SnowGlobeSphere={SnowGlobeSphere}
                        SnowGlobetest={SnowGlobetest}
                        Controls={Controls}
                        CaptureScene={CaptureScene}
                        imgTheme={imgTheme}
                        key="globeDesktop"
                    />

                    <ThemeSelectorPanel
                        currentTheme={currentTheme}
                        selectedTheme={selectedTheme}
                        themeImages={themeImages}
                        handleToggleThemeObject={handleToggleThemeObject}
                        captureFunction={captureFunction}
                        key="themeDesktop"
                    />
                </section>
            </main>
        </>
    )
}
