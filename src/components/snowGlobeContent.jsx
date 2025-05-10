import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    TextureLoader,
    DoubleSide,
} from 'three'
import { Environment } from '@react-three/drei'
import SnowGlobeSphere from './snowglobe/SnowGlobeSphere'

export function SnowGlobeContent({
    materialTexturePath,
    sphereImageTexture,
    scaleSphere,
    home,
    ...props
}) {
    const modelPath = home
        ? '/models/snowglobeFinal/bouleHolosphere1.glb'
        : '/models/snowglobeFinal/bouleHolosphere.glb'

    const model = useLoader(GLTFLoader, modelPath)

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

    const [socleTexture, setSocleTexture] = useState(null) // texture du socle bois etc..
    const [sphereTexture, setSphereTexture] = useState(null) // image mis par l'utilisateur dans l'input file transformer en base 64

    console.log(sphereImageTexture)
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
            thickness: 2,
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

    //changement dynamique de l'image dans l'input file
    useEffect(() => {
        if (sphereImageTexture) {
            const loader = new TextureLoader()
            loader.load(sphereImageTexture, (texture) => {
                //console.log('Texture chargée :', texture)
                setSphereTexture(texture)
            })
        }
    }, [sphereImageTexture])

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
            <primitive object={model.scene} scale={scaleSphere} />

            {sphereTexture && (
                <mesh
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    renderOrder={1}
                >
                    <planeGeometry args={[10, 10]} />
                    <meshBasicMaterial
                        map={sphereTexture}
                        transparent
                        side={DoubleSide}
                        depthWrite={false}
                    />
                </mesh>
            )}

            <Environment
                files="/environnement/poly_haven_studio_1k.hdr"
                intensity={1}
            />
        </group>
    )
}
