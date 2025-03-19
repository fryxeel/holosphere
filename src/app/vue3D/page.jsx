'use client'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
import Base from '@/components/snowglobe/Socle'
import { Canvas } from '@react-three/fiber'


export default function Vue3D() {
    return (
        <div className="w-full h-screen">
            <Canvas camera={{ position: [60, 30, 8], fov: 50 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <SnowGlobeSphere />
                <Base />
            </Canvas>
        </div>
    )
}
