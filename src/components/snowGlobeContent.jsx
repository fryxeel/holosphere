import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshPhysicalMaterial, TextureLoader } from 'three'
import { Environment } from '@react-three/drei'

export function SnowGlobeContent(props) {
    const model = useLoader(
        GLTFLoader,
        '/models/snowglobeFinal/bouleHolosphere.glb'
    )

    const woodTexture = useLoader(
        TextureLoader,
        '/textures/Wood003_2K-JPG_Color.jpg'
    )
    const mousse = useLoader(
        TextureLoader,
        '/textures/Fabric029_2K-JPG_Color.jpg'
    )
    const leather = useLoader(
        TextureLoader,
        '/textures/Leather031_1K-PNG_Color.png'
    )
    const tissuBlack = useLoader(
        TextureLoader,
        '/textures/Fabric029_1K-PNG_Color.png'
    )

    useEffect(() => {
        if (model && model.scene) {
            const glassMaterial = new MeshPhysicalMaterial({
                transparent: true,
                transmission: 1,
                ior: 1,
                roughness: 0,
                metalness: 0.1,
                clearcoat: 1,
                clearcoatRoughness: 0,
                thickness: 0.5,
                color: 'white',
            })

            const woodMaterial = new MeshPhysicalMaterial({ map: woodTexture })
            const mousseMaterial = new MeshPhysicalMaterial({ map: mousse })
            const leatherMaterial = new MeshPhysicalMaterial({ map: leather })
            const tissuBlackMaterial = new MeshPhysicalMaterial({
                map: tissuBlack,
            })

            model.scene.traverse((child) => {
                if (child.isMesh) {
                    const name = child.name.toLowerCase()
                    if (
                        name.includes('sphere') ||
                        name.includes('boule') ||
                        name.includes('glass')
                    )
                        child.material = glassMaterial
                    else if (name.includes('socle') || name.includes('base'))
                        child.material = woodMaterial
                    else if (name.includes('patin'))
                        child.material = mousseMaterial
                    else if (name.includes('basses'))
                        child.material = leatherMaterial
                    else if (name.includes('interieur_enceinte'))
                        child.material = tissuBlackMaterial
                }
            })
        }
    }, [model])

    return (
        <group {...props}>
            <primitive object={model.scene} />
            <Environment
                files="/environnement/poly_haven_studio_1k.hdr"
                intensity={1}
            />
        </group>
    )
}
