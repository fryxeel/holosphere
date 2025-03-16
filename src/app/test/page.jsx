
'use client'
import { Canvas } from '@react-three/fiber'
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
            <div className="border w-5xl">
                <div className="p-5 bg-white">
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

