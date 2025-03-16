'use client'
import { Canvas, useLoader} from '@react-three/fiber'
import { useState } from 'react'
import SnowGlobeSphere from '../../components/snowglobe/SnowGlobeSphere.jsx'
import Base from '../../components/snowglobe/Base'
import Controls from '../../components/snowglobe/Controls'
import CaptureScene from '../../components/snowglobe/CaptureScene'
import { TextureLoader } from 'three'

export default function SnowGlobe() {
    const [imageTexture, setImageTexture] = useState(null)
    const [captureFunction, setCaptureFunction] = useState(null)

    const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null

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

    return (
        <div className="flex flex-row w-full h-screen">
            <div className="flex justify-center w-full p-10 font-manrope">
                <div className="w-sm px-4 py-6 rounded-2xl bg-white">
                    <h3 className="font-recoleta font-bold text-2xl">
                        Outils de création
                    </h3>
                    <h4>Aggrandissement</h4>
                    <input type="range" min={0} max={100} />
                    <br />
                    <h4>Vos propres images</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            '/images/zerry_pfp.png',
                            '/images/pfp_pogachar_capxelio.png',
                            '/images/pfp_revan.png',
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 cursor-pointer w-28 h-28 rounded-2xl"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                        ))}
                    </div>
                    <p>
                        <span>Astuce : </span>Cliquez sur l'image, maintenez et
                        glissez la jusqu'à l'emplacement souhaité dans la boule.
                    </p>
                    <h4>Musique d'ambiance</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            '/images/zerry_pfp.png',
                            '/images/pfp_pogachar_capxelio.png',
                            '/images/pfp_revan.png',
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 cursor-pointer w-22 h-22 rounded-2xl"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
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
                        accept="image/*"
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
            <div className="w-full h-full">
                <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <Controls />
                    <SnowGlobeSphere texture={texture} />
                    <Base />
                    <CaptureScene setCaptureFunction={setCaptureFunction} />
                </Canvas>
            </div>
        </div>
    )
}
