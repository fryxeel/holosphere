'use client'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Loader, Center } from '@react-three/drei'
import SnowGlobetest from '../../components/snowglobetest'
import Controls from '../../components/snowglobe/Controls.jsx'

export default function App({}) {
    return (
        <>
            <div style={{ width: '100%', height: '100vh' }}>
                <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Controls />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={0} />
                        <pointLight position={[10, 10, 10]} intensity={0} />
                        <pointLight
                            position={[-10, -10, -10]}
                            intensity={0.5}
                        />
                        <Center>
                            <SnowGlobetest
                                rotation={[0, Math.PI / 2, 0]}
                                scale={0.7}
                            />
                        </Center>
                    </Suspense>
                </Canvas>
            </div>

            {/* Ce loader est automatiquement connecté à useProgress */}
            <Loader />
        </>
    )
}
