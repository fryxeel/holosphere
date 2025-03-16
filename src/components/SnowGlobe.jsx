'use client'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Environment } from "@react-three/drei";
// import React, { useRef, useState } from 'react'
// import { useControls } from 'leva'
// const Cube = ({ position, side, color }) => {
//     const ref = useRef()
//     useFrame((state, delta) => {
//         {
//             /* delta c'est la différence de temps entre la première frame et la dernière frame */
//         }
//         // ref.current.rotation.x += delta
//         ref.current.rotation.y += delta
//         // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2 /*effet boomrang*/
//     })

//     return (
//         <mesh position={position} ref={ref}>
//             {/*mesh sert à render  quelque chose*/}
//             <boxGeometry args={side} />
//             {/*axe x, axe y, axe z : si on ne met pas d'args de base on est à 1, 1, 1*/}
//             <meshStandardMaterial color={color} />
//         </mesh>
//     )
// }

// const Sphere = ({ position, side, color }) => {
//     const ref = useRef()
//     const [isHovered, setIsHovered] = useState(false)
//     useFrame((state, delta) => {
//         ref.current.rotation.y += delta * 1
//     })

//     return (
//         <mesh
//             position={position}
//             ref={ref}
//             onPointerEnter={(event) => {
//                 event.stopPropagation(), setIsHovered(true)
//             }}
//             onPointerLeave={() => {
//                 setIsHovered(false)
//             }}
//         >
//             {/*mesh sert à render  quelque chose*/}
//             <sphereGeometry args={side} />
//             {/*axe x, axe y, axe z : si on ne met pas d'args de base on est à 1, 1, 1*/}
//             <meshStandardMaterial
//                 color={isHovered ? 'blue' : 'white'}
//                 wireframe
//             />
//         </mesh>
//     )
// }

// const SnowGlobe = () => {

//         // const gui = useControls({
//         //   sphereSize: { value: 1, min: 0, max: 5 }
//         // })
//     return (
//         <Canvas camera={{ position: [0, 0, 5] }}>
//         {/* Lumière */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={2} />

//         {/* Sphère en verre */}
//         <mesh>
//           <sphereGeometry args={[1, 64, 64]} />
//           <meshPhysicalMaterial
//             transparent
//             transmission={1} // Rend la sphère transparente
//             ior={1.5} // Indice de réfraction (verre)
//             roughness={0} // Surface lisse
//             metalness={0.1} // Légèrement métallique
//             clearcoat={1} // Brillance
//             clearcoatRoughness={0} // Pas de rugosité sur le clearcoat
//             thickness={0.5} // Épaisseur du verre
//           />
//         </mesh>

//         {/* Ajout d'un environnement pour de beaux reflets */}
//         <Environment preset="city" />
//       </Canvas>
//     )
// }

// export default SnowGlobe

// import { Canvas } from '@react-three/fiber'
// import { CameraControls, Environment } from '@react-three/drei'

// export default function SnowGlobe() {
//     return (
//         <Canvas camera={{ position: [0, 2, 6] }}>
//             {/* Lumières */}
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[5, 5, 5]} intensity={2} />
//             <CameraControls
//                 makeDefault
//                 minDistance={5} //  zoomer
//                 maxDistance={8} // dézoomer
//                 enableZoom={true} // Activer le zoom avec la molette
//             />
//             {/* Boule en verre */}
//             <mesh position={[0, 1, 0]}>
//                 <sphereGeometry args={[2, 64, 64]} />
//                 <meshPhysicalMaterial
//                     transparent
//                     transmission={1}
//                     ior={1.5}
//                     roughness={0}
//                     metalness={0.1}
//                     clearcoat={1}
//                     clearcoatRoughness={0}
//                     thickness={0.5}
//                     color="white"
//                 />
//             </mesh>
//             {/* Socle */}
//             <mesh position={[0, -1, 0]}>
//                 <cylinderGeometry args={[1.75, 1.75, 0.3, 64]} />{' '}
//                 {/* longueur, longueur, hauteur, jsp*/}
//                 <meshStandardMaterial
//                     color="#6b4f4f"
//                     roughness={0.7}
//                     metalness={0.3}
//                 />
//             </mesh>
//             {/* Environnement pour les reflets */}
//             <Environment preset="city" />
//         </Canvas>
//     )
// }

import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'

export default function SnowGlobe() {
    const [imageTexture, setImageTexture] = useState(null)
    const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null

    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                console.log('Image chargée :', reader.result) // Vérifiez dans la console
                setImageTexture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const cameraControlsRef = useRef()

    return (
        <div className="flex flex-col w-full h-full">
            {/* Input pour sélectionner une image */}
            <input type="file" onChange={handleImageSelect} accept="image/*" />

            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
                {/* Lumières */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />

                {/* Contrôles de la caméra */}
                <CameraControls
                    ref={cameraControlsRef}
                    minDistance={3}
                    maxDistance={10}
                    enableZoom={true}
                    enableRotate={false}
                    enablePan={false}
                />

                {/* Boule en verre */}
                <mesh position={[0, 1, 0]}>
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
                </mesh>

                {/* Socle */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[1.75, 1.75, 0.3, 64]} />
                    <meshStandardMaterial
                        color="#6b4f4f"
                        roughness={0.7}
                        metalness={0.3}
                    />
                </mesh>

                {/* Image à l'intérieur de la boule */}
                {texture && (
                    <mesh position={[0, 1, -2]}>
                        {' '}
                        {/* Ajustez la position pour centrer l'image */}
                        <planeGeometry args={[3, 3]} />{' '}
                        {/* Ajustez la taille */}
                        <meshBasicMaterial map={texture} opacity={1} />
                    </mesh>
                )}

                {/* Environnement pour les reflets
                <Environment preset="city" /> */}
            </Canvas>
        </div>
    )
}
