'use client'
import { Canvas, useLoader } from '@react-three/fiber'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import SnowGlobeSphere from '../../components/snowglobe/SnowGlobeSphere'
import Base from '../../components/snowglobe/Socle'
import Controls from '../../components/snowglobe/Controls'
import CaptureScene from '../../components/snowglobe/CaptureScene'
import { TextureLoader } from 'three'
import { Environment } from '@react-three/drei'

export default function SnowGlobe() {
    const [imageTexture, setImageTexture] = useState(null) // Texture pour la sphère
    const [materialTexture, setMaterialTexture] = useState(null) // Texture pour la base
    const [selectedTheme, setselectedTheme] = useState([])
    const [themeImages, setImageThemes] = useState([]) // models pour sphere3D
    const [captureFunction, setCaptureFunction] = useState(null) //capture d'écran
    const pathname = usePathname()

    const themes = {
        summer: [
            {
                model: '/models/tree_small_02_4k.gltf',
                position: [1, -1.5, 0],
                scale: 0.4,
                img: 'https://png.pngtree.com/png-vector/20241113/ourlarge/pngtree-3d-tree-model-png-image_14142194.png',
            },
        ],
        winter: [
            { model: '/models/snowman.glb', position: [0, -1, 0] },
            { model: '/models/pine_tree.glb', position: [2, -1, -1] },
        ],
    }

    const handleThemeClick = (theme) => {
        setselectedTheme(themes[theme]) // Charge les objets du thème pour sphere3D
        setImageThemes(
            themes[theme].map((item) => {
                return item
            })
        )
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
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageTexture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const isCapturePage = pathname === '/personnalisation'

    return (
        <div className="flex flex-row w-full min-h-screen">
            <div className="flex justify-center w-full p-10">
                <div className="w-sm rounded-[20px] border-white border-2 p-1">
                    <div className="bg-white rounded-2xl h-full py-4 px-6">
                        <h3 className="font-recoleta text-span2 font-medium">
                            Outils de création
                        </h3>
                        <h4 className="font-regular font-manrope text-[18px]">
                            Aggrandissement
                        </h4>
                        <input type="range" min={0} max={100} />
                        <br />
                        <h4>Vos propres images</h4>
                        <div className="grid grid-cols-3 gap-2"></div>
                        <p>
                            <span>Astuce : </span>Cliquez sur l'image, maintenez
                            et glissez la jusqu'à l'emplacement souhaité dans la
                            boule.
                        </p>
                        <h4>Musique d'ambiance</h4>
                        <div className="grid grid-cols-3 gap-2 ">
                            {[
                                // Choisir la texture pour la base
                                '/textures/Wood003_2K-JPG_Color.jpg',
                                '/textures/Fabric062_2K-JPG_AmbientOcclusion.jpg',
                                '/textures/Asphalt025B_2K-JPG_Color.jpg',
                                '/textures/Ice003_2K-JPG_Color.jpg',
                                '/textures/NightSkyHDRI007_2K-TONEMAPPED.jpg',
                            ].map((materialTexture, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-200 cursor-pointer w-22 h-22 rounded-2xl"
                                    style={{
                                        backgroundImage: `url(${materialTexture})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    onClick={
                                        () =>
                                            handleMaterialClick(materialTexture) // Applique sur la base
                                    }
                                ></div>
                            ))}
                        </div>
                        <p>
                            <span>Échos de Mémoire </span>- Alain S.
                        </p>
                        <label htmlFor="file">Tester avec votre image :</label>
                        <br />
                        <input
                            type="file"
                            onChange={handleImageSelect}
                            // accept="image/*"
                        />
                        <br />
                        <br />
                        <button
                            onClick={() => captureFunction && captureFunction()}
                            className="cta-button"
                        >
                            Télécharger l'image du globe
                        </button>
                        <p>
                            Partagez votre création avec le tag{' '}
                            <span>#holosphere</span> et tentez de remporter des
                            réductions exclusives, jusqu’à 50% !
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center flex-col p-10">
                <div className="w-full h-full">
                    <Canvas camera={{ position: [60, 30, 8], fov: 50 }}>
                        <ambientLight intensity={0.8} />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={0.5}
                        />
                        <pointLight position={[10, 10, 10]} intensity={0.5} />
                        <pointLight
                            position={[-10, -10, -10]}
                            intensity={0.5}
                        />
                        <Controls />
                        <SnowGlobeSphere
                            texture={texture}
                            selectedTheme={selectedTheme}
                        />{' '}
                        {/* Applique la texture à la sphère */}
                        <Base textureDuMateriel={textureMaterial} />{' '}
                        {/* Applique la texture à la base */}
                        {isCapturePage && (
                            <CaptureScene
                                setCaptureFunction={setCaptureFunction}
                            />
                        )}
                        <Environment files="/environnement/brown_photostudio_02_4k.hdr" />
                    </Canvas>
                </div>

                <div className="rounded-[20px] border-white border-2 p-1 w-full">
                    <div className="flex flex-col bg-white rounded-2xl p-[11px] gap-3">
                        <div className="flex justify-between items-center">
                            <div>Thème à appliquer</div>
                            <div className="px-2 bg-gray-200 rounded-[8px]">
                                Par défaut
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {[
                                // Choisir l'image pour la sphère
                                '/images/zerry_pfp.png',
                                '/images/pfp_pogachar_capxelio.png',
                                '/images/pfp_revan.png',
                                '/textures/NightSkyHDRI007_2K-TONEMAPPED.jpg',
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-200 cursor-pointer w-14 h-14 rounded-2xl"
                                    title="coucou"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    onClick={() => handleImageClick(image)} // Applique sur la sphère
                                ></div>
                            ))}
                            <button onClick={() => handleThemeClick('summer')}>
                                🌴 Thème Été
                            </button>
                            <button onClick={() => handleThemeClick('winter')}>
                                ❄️ Thème Hiver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full p-10 font-manrope">
                <div className="w-sm rounded-[20px] border-white border-2 p-1">
                    <div className="bg-white rounded-2xl h-full">
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {themeImages.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.img}
                                    alt="Objet du thème"
                                    className="w-20 h-20 rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
