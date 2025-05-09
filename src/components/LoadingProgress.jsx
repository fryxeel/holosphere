import React, { useEffect, useState } from 'react'
import { useProgress, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function LoadingProgress() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [rotation, setRotation] = useState(0)

    // Animation de rotation pendant le chargement
    useFrame(() => {
        setRotation((rotation) => rotation + 0.02)
    })

    return (
        <group>
            {/* Sphère rotative */}
            <mesh rotation={[0, rotation, 0]}>
                <torusGeometry args={[1, 0.3, 16, 32]} />
                <meshStandardMaterial
                    color="white"
                    wireframe={true}
                    opacity={0.8}
                    transparent={true}
                />
            </mesh>

            {/* Texte de progression */}
            <Text
                position={[0, -1.5, 0]}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                {`${Math.floor(progress)}%`}
            </Text>

            {/* Texte d'information */}
            <Text
                position={[0, -2.2, 0]}
                fontSize={0.2}
                color="gray"
                anchorX="center"
                anchorY="middle"
            >
                {active ? `Chargement: ${item}` : 'Chargement terminé'}
            </Text>
        </group>
    )
}
