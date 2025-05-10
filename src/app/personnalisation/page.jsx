'use client'
import { Canvas, useLoader } from '@react-three/fiber'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Controls from '../../components/snowglobe/Controls'
import CaptureScene from '../../components/snowglobe/CaptureScene'
import { TextureLoader } from 'three'
import { Environment } from '@react-three/drei'
import BoxBlanc from '../../components/BoxBlanc/index.jsx'
import MaterialSelector from '@/components/snowglobe/TextureSocle'
import MusicAmbience from '@/components/snowglobe/MusicAmbience'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import Icon from '@/components/Icon'
import SnowGlobetest from '@/components/snowglobetest'
import PopUpGame from '@/components/PopUp/PopUpGame'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
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
                model: '/models/summer/tree/tree_small_02_1k.gltf',
                position: [1, -1.5, 0],
                scale: 0.4,
                rotation: [0, 0, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        winter: [
            {
                model: '/models/winter/shrub-sorrel/shrub_sorrel_01_1k.gltf',
                position: [0.5, -1.4, 0],
                scale: 8,
                rotation: [0, Math.PI / 3, 0],

                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        spring: [
            {
                model: '/models/winter/shrub-sorrel/shrub_sorrel_01_1k.gltf',
                position: [0.5, -1.4, 0],
                scale: 8,
                rotation: [0, Math.PI / 3, 0],
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        valentine: [
            {
                model: '/models/winter/shrub-sorrel/shrub_sorrel_01_1k.gltf',
                position: [0.5, -1.4, 0],
                scale: 8,
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

    return (
        <>
            {showPopup && <PopUpGame onClose={() => setShowPopup(false)} />}
            <div className="pt-[23px] pb-[75px] pl-[40px] pr-[40px] relative">
                <h3 className="text-span3 text-center font-manrope text-white">
                    Mon atelier création
                </h3>
                <h1 className="font-recoleta text-span1 text-center font-medium text-white">
                    Sculptez votre souvenir
                </h1>
            </div>
            <div className="flex flex-row w-full min-h-screen">
                <div className="flex flex-col items-center w-full pt-10">
                    <BoxBlanc className="relative w-sm h-max-[40vh]">
                        {currentTheme === 'default' && (
                            <div className="absolute inset-0 z-15 bg-white/70 backdrop-blur-sm flex flex-col py-4 px-6 rounded-xl">
                                <Title hierarchy={2} cssClass="text-dark">
                                    Outils de création
                                </Title>
                                <div className="flex flex-col gap-2 justify-center items-center px-10 py-36">
                                    <Icon
                                        name={'filled_stars'}
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
                                        Sélectionnez un thème juste en dessous.
                                    </Body>
                                </div>
                            </div>
                        )}
                        <Title hierarchy={2} cssClass="text-dark">
                            Outils de création
                        </Title>

                        <div className="py-6 flex flex-col gap-2">
                            <Title hierarchy={3} cssClass="text-dark">
                                Vos propres images
                            </Title>
                            <div className="flex items-center gap-2 flex-wrap">
                                {/* Affiche d'abord les images existantes */}
                                {imageSphere.map((image, index) => {
                                    const isActive =
                                        selectedImageTexture === image.src
                                    return (
                                        <button
                                            key={index}
                                            className={`relative w-18 h-18 rounded-[10px] p-0.5 border-2 overflow-hidden 
                                                                    ${
                                                                        isActive
                                                                            ? 'border-black'
                                                                            : 'border-transparent'
                                                                    }
                                                                    `}
                                            onClick={() => {
                                                if (isActive) {
                                                    // Désélectionne l'image (enlève bordure et texture sphère)
                                                    setSelectedImageTexture(
                                                        null
                                                    )
                                                    handleImageClick(null)
                                                } else {
                                                    // Sélectionne l'image (ajoute bordure et texture sphère)
                                                    setSelectedImageTexture(
                                                        image.src
                                                    )
                                                    handleImageClick(image.src)
                                                }
                                            }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className={`w-full h-full rounded-lg `}
                                            />

                                            <div
                                                className="absolute top-0 right-0 z-10"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    // Si c'était l'image sélectionnée, on la désélectionne aussi
                                                    if (isActive) {
                                                        setSelectedImageTexture(
                                                            null
                                                        )
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
                                        onClick={() =>
                                            fileInputRef.current.click()
                                        }
                                        className="cta-button-black w-16 h-16 flex-col gap-1 py-2.5 px-1.5 rounded-2xl"
                                    >
                                        <Icon
                                            name={'dowload-image'}
                                            height={18}
                                        ></Icon>
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                            <Body hierarchy={3} cssClass="text-dark">
                                <span>Astuce : </span>Cliquez sur l'image pour
                                la projeter dans la sphère (une seule à la
                                fois).
                            </Body>
                        </div>

                        <div className="pb-6 flex flex-col gap-2">
                            <MaterialSelector
                                onSelectMaterial={setMaterialTexture}
                            />
                        </div>
                        <div className="pb-6 flex flex-col gap-2">
                            <MusicAmbience />
                        </div>
                    </BoxBlanc>
                </div>
                <div className="w-full h-screen pt-10 flex items-center flex-col">
                    <div className="w-full h-full">
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
                                <CaptureScene
                                    setCaptureFunction={setCaptureFunction}
                                />
                            )}
                            <Environment
                                files="/environnement/poly_haven_studio_1k.hdr"
                                intensity={0}
                            />
                        </Canvas>
                    </div>

                    <div className="rounded-[20px] border-white border-2 p-1 w-full">
                        <div className="flex flex-col bg-white rounded-2xl p-[11px] gap-3">
                            <div className="flex justify-between items-center">
                                <div>Thème à appliquer</div>
                                <div className="px-2 bg-gray-200 rounded-[8px] ">
                                    {currentTheme === 'default' && 'Par défaut'}
                                    {currentTheme === 'summer' && 'Eté'}
                                    {currentTheme === 'winter' && 'Hiver'}
                                    {currentTheme === 'spring' && 'Printemps'}
                                    {currentTheme === 'Valentine' &&
                                        'Saint-Valentin'}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="w-14 h-14 flex items-center justify-center"
                                    onClick={() => handleThemeClick('default')}
                                >
                                    <Icon
                                        name={'circle-dashed'}
                                        color={'black'}
                                        height={24}
                                    ></Icon>
                                </button>
                                <button
                                    onClick={() => handleThemeClick('summer')}
                                >
                                    Eté
                                </button>
                                <button
                                    onClick={() => handleThemeClick('winter')}
                                >
                                    Hiver
                                </button>
                                <button
                                    onClick={() => handleThemeClick('spring')}
                                >
                                    Printemps
                                </button>
                                <button
                                    onClick={() =>
                                        handleThemeClick('valentine')
                                    }
                                    className="text-dark"
                                >
                                    Saint-Valentin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full pt-10 pb-10">
                    <div className="flex justify-center w-full flex-grow">
                        <BoxBlanc className="w-sm min-h-full flex flex-col relative">
                            {currentTheme === 'default' && (
                                <div className="absolute inset-0 z-15 bg-white/70 backdrop-blur-sm flex flex-col py-4 px-6 rounded-xl">
                                    <Title hierarchy={2} cssClass="text-dark">
                                        Éléments du thème
                                    </Title>
                                    <div className="flex flex-col gap-2 justify-center items-center p-10">
                                        <Icon
                                            name={'filled_stars'}
                                            color="black"
                                            height={32}
                                        />
                                        <Body
                                            hierarchy={4}
                                            cssClass="text-dark"
                                        >
                                            Prêt à commencer ?
                                        </Body>
                                        <Body
                                            hierarchy={3}
                                            cssClass="text-center text-dark"
                                        >
                                            Sélectionnez un thème juste en
                                            dessous.
                                        </Body>
                                    </div>
                                </div>
                            )}
                            <Title hierarchy={2} cssClass="text-dark">
                                Éléments du thème
                            </Title>
                            <Title hierarchy={3} cssClass="text-dark">
                                {currentTheme === 'default' && 'Par défaut'}
                                {currentTheme === 'summer' &&
                                    'Pièces pour le theme été'}
                                {currentTheme === 'winter' &&
                                    'Pièces pour le theme de Noël'}
                                {currentTheme === 'spring' &&
                                    'Pièces pour le theme printemps'}
                                {currentTheme === 'valentine' &&
                                    'Pièces pour le theme de la Saint-Valentin'}
                            </Title>
                            <div className="grid grid-cols-3 gap-2 p-1 min-h-[120px]">
                                {themeImages.map((item, index) => {
                                    const isActive =
                                        selectedTheme.includes(item)

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
                                                className="w-20 h-20 rounded-lg"
                                            />

                                            {isActive && (
                                                <div className="absolute bottom-0 left-0 z-10">
                                                    <div className="bg-black rounded-lg border-2 border-white">
                                                        <Icon
                                                            color={'white'}
                                                            name={'check'}
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
                                <span>Astuce :</span> Sélectionnez ou retirez
                                les éléments à projeter selon le thème choisi.
                            </Body>
                        </BoxBlanc>
                    </div>
                    <div className="flex justify-center w-full pt-10 pb-10">
                        <BoxBlanc className="w-sm flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                <Title hierarchy={3} cssClass="text-dark">
                                    Imaginez, modelez, partagez !
                                </Title>
                                <Body hierarchy={3} cssClass="text-dark">
                                    Partagez votre création avec le tag{' '}
                                    <span>#holosphere</span> et tentez de
                                    remporter des réductions exclusives, jusqu’à
                                    50% !
                                </Body>
                                {/* onClick={() =>
                                        captureFunction && captureFunction()
                                    } */}
                                <button className="cta-button-orange">
                                    <Body hierarchy={3} cssClass="text-dark">
                                        Débloquer mes réductions
                                    </Body>

                                    <Icon
                                        name={'arrowRight'}
                                        color={'black'}
                                    ></Icon>
                                </button>
                            </div>
                        </BoxBlanc>
                    </div>
                </div>
            </div>
        </>
    )
}
