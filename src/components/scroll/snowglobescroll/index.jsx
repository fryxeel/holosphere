'use client'
import { Canvas } from '@react-three/fiber'
import AnimatedSnowGlobe from '../snowglobescrollAnimated'
import { Suspense } from 'react'

const SnowGlobeScroll = ({ scrollContainerRef }) => {
    return (
        <Canvas camera={{ position: [60, 30, 8], fov: 8 }}>
            <ambientLight />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={null}>
                <AnimatedSnowGlobe ref={scrollContainerRef} />
            </Suspense>
        </Canvas>
    )
}

export default SnowGlobeScroll
