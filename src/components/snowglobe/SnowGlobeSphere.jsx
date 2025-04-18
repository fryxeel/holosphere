'use client'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useMemo } from 'react'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

const SnowGlobeSphere = ({ texture, selectedTheme }) => {
    // Charger tous les modèles en une seule fois avec useMemo
    const models = useMemo(() => {
        if (
            !selectedTheme ||
            selectedTheme.some((item) => item.model === null)
        ) {
            return [] // Retourne un tableau vide pour le thème "default"
        }
        return (
            selectedTheme?.map((item) => {
                const originalModel = useLoader(GLTFLoader, item.model)
                return {
                    model: clone(originalModel.scene),
                    position: item.position,
                    scale: item.scale,
                    rotation: item.rotation,
                }
            }) || []
        )
    }, [selectedTheme])

    return (
        <mesh position={[0, 0.5, 0]} rotation={[0, 150, 0]}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshPhysicalMaterial
                transparent
                transmission={1}
                ior={1}
                roughness={0}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0}
                thickness={0.5}
                color="white"
            />
            {texture && (
                <group position={[0, 0, 2]}>
                    <mesh
                        position={[0, 0, -2]}
                        rotation={[0, Math.PI / 2.5, 0]}
                    >
                        <planeGeometry args={[2, 2]} />
                        <meshBasicMaterial map={texture} opacity={1} />
                    </mesh>
                </group>
            )}
            {/* Affichage des modèles chargés */}
            {models.map((item, index) => (
                <primitive
                    key={index}
                    object={item.model}
                    position={item.position}
                    scale={item.scale}
                    rotation={item.rotation}
                />
            ))}
        </mesh>
    )
}

export default SnowGlobeSphere
