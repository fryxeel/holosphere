'use client'
import { Circle, Plane } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Base = ({ textureDuMateriel }) => {
    const spacing = 0.8
    const foamPositions = [
        [spacing, -1.6, spacing],
        [-spacing, -1.6, spacing],
        [spacing, -1.6, -spacing],
        [-spacing, -1.6, -spacing],
    ]

    const textureDefault = useLoader(
        TextureLoader,
        '/textures/Wood003_2K-JPG_Color.jpg'
    )

    const textureMiniScoles = useLoader(
        TextureLoader,
        '/textures/Fabric029_2K-JPG_Color.jpg'
    )

    const textureLogo = useLoader(
        TextureLoader,
        '/images/logos/pictogramme_logo_holosphere_noir.svg'
    )

    return (
        <>
            <group>
                {/* Appliquer la texture dynamique */}
                <mesh position={[0, -1.2, 0]}>
                    <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
                    <meshStandardMaterial
                        map={textureDuMateriel || textureDefault} // Utilise la texture sélectionnée ou une texture par défaut
                        roughness={0.7}
                        metalness={0.3}
                    />
                </mesh>

                {/* Ajouter des petits socles */}
                {foamPositions.map((pos, index) => (
                    <mesh key={index} position={pos}>
                        <cylinderGeometry args={[0.3, 0.3, 0.09, 64]} />
                        <meshStandardMaterial
                            map={textureMiniScoles}
                            roughness={0.7}
                            metalness={0.3}
                        />
                    </mesh>
                ))}
            </group>

            {/* Logo de la base */}
            <group rotation={[0, Math.PI / 9, 0]}>
                <Plane
                    args={[0.5, 0.5]}
                    position={[0, -1.2, 1.75]}
                    rotation={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        map={textureLogo}
                        transparent={true}
                    />
                </Plane>
            </group>
        </>
    )
}

export default Base
