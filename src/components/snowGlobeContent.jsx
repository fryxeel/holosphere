import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshPhysicalMaterial, TextureLoader } from 'three'
import { Environment } from '@react-three/drei'

export function SnowGlobeContent({ materialTexturePath, ...props }) {
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

    const [socleTexture, setSocleTexture] = useState(null)

    // 🧠 refs pour ne créer qu'une seule fois les matériaux
    const glassMaterialRef = useRef()
    const mousseMaterialRef = useRef()
    const leatherMaterialRef = useRef()
    const tissuBlackMaterialRef = useRef()

    // Création des matériaux une seule fois au montage
    useEffect(() => {
        glassMaterialRef.current = new MeshPhysicalMaterial({
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

        mousseMaterialRef.current = new MeshPhysicalMaterial({ map: mousse })
        leatherMaterialRef.current = new MeshPhysicalMaterial({ map: leather })
        tissuBlackMaterialRef.current = new MeshPhysicalMaterial({
            map: tissuBlack,
        })
    }, [mousse, leather, tissuBlack])

    // Chargement dynamique de la texture du socle
    useEffect(() => {
        if (materialTexturePath) {
            const loader = new TextureLoader()
            loader.load(materialTexturePath, (texture) => {
                setSocleTexture(texture)
            })
        }
    }, [materialTexturePath])

    useEffect(() => {
        if (model && model.scene && glassMaterialRef.current) {
            const socleMaterial = new MeshPhysicalMaterial({
                map: socleTexture || woodTexture,
            })

            model.scene.traverse((child) => {
                if (child.isMesh) {
                    const name = child.name.toLowerCase()
                    if (
                        name.includes('sphere') ||
                        name.includes('boule') ||
                        name.includes('glass')
                    ) {
                        child.material = glassMaterialRef.current
                    } else if (
                        name.includes('socle') ||
                        name.includes('base')
                    ) {
                        child.material = socleMaterial
                    } else if (name.includes('patin')) {
                        child.material = mousseMaterialRef.current
                    } else if (name.includes('basses')) {
                        child.material = leatherMaterialRef.current
                    } else if (name.includes('interieur_enceinte')) {
                        child.material = tissuBlackMaterialRef.current
                    }
                }
            })
        }
    }, [model, socleTexture])

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
