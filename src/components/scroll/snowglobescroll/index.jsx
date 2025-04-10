'use client'
import { Canvas } from '@react-three/fiber'
import AnimatedSnowGlobe from '../snowglobescrollAnimated'
import { forwardRef } from 'react'
const SnowGlobeScroll = ({ scrollContainerRef }) => {
    return (
        <Canvas camera={{ position: [60, 30, 8], fov: 10 }}>
            <ambientLight />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <AnimatedSnowGlobe ref={scrollContainerRef} />
        </Canvas>
    )
}

export default SnowGlobeScroll
