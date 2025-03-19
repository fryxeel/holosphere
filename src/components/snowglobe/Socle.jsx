'use client'
import { Circle, Plane } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Base = () => {
    const spacing = 0.8
    const foamPositions = [
        [spacing, -1.6, spacing],
        [-spacing, -1.6, spacing],
        [spacing, -1.6, -spacing],
        [-spacing, -1.6, -spacing],
    ]

    // // Charger les textures
    // const texture = useLoader(
    //     TextureLoader,
    //     '/images/Fabric035_2K-JPG_Color.jpg'
    // )
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
            {/* // rotation={[0, Math.PI / 2.2, 0]} */}
            <group>
                {/* Appliquer la texture au cylindre principal */}
                <mesh position={[0, -1.2, 0]}>
                    <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
                    <meshStandardMaterial
                        // map={texture} // Appliquer la texture principale ici
                        roughness={0.7}
                        metalness={0.3}
                    />
                </mesh>

                {/* Ajouter des mousses avec la texture différente */}
                {foamPositions.map((pos, index) => (
                    <mesh key={index} position={pos}>
                        <cylinderGeometry args={[0.3, 0.3, 0.09, 64]} />
                        <meshStandardMaterial
                            map={textureMiniScoles} // Appliquer la texture mini socles ici
                            roughness={0.7}
                            metalness={0.3}
                        />
                    </mesh>
                ))}
            </group>
            <group rotation={[0, Math.PI / 9, 0]}>
                <Plane
                    args={[0.5, 0.5]}
                    position={[0, -1.2, 1.75]}
                    rotation={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        map={textureLogo}
                        color="white"
                        transparent="true"
                    />
                </Plane>
            </group>
        </>
    )
}

export default Base
