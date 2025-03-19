'use client'
import * as THREE from 'three'

const SnowGlobeSphere = ({ texture }) => {
    return (
        <mesh position={[0, 0.5, 0]} rotation={[0, 150, 0]}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshPhysicalMaterial
                transparent
                transmission={1}
                ior={1.5}
                roughness={0}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0}
                thickness={0.5}
                color="white"
            />
            {texture && (
                <meshBasicMaterial
                    position={[50, 0, 0]}
                    map={texture}
                    side={THREE.DoubleSide}
                    transparent
                    opacity={1}
                />
            )}
        </mesh>
    )
}

export default SnowGlobeSphere
