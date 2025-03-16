// 'use client'
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

// import { Canvas, useThree, useLoader } from '@react-three/fiber'
// import { OrbitControls, Environment } from '@react-three/drei'
// import { TextureLoader } from 'three'
// import { useRef, useState } from 'react'

// // Composant pour capturer l'image de la scène
// function CaptureScene({ setCaptureFunction }) {
//     const { gl, scene, camera } = useThree()

//     // Fonction pour capturer l'image
//     const captureImage = () => {
//         gl.render(scene, camera) // Force le rendu
//         const canvas = gl.domElement
//         const image = canvas.toDataURL('image/png', 0.8)

//         const link = document.createElement('a')
//         link.href = image
//         link.download = 'snowglobe.png'
//         link.click()
//     }

//     // Enregistre la fonction de capture pour l'utiliser ailleurs
//     setCaptureFunction(() => captureImage)

//     return null // Ce composant ne rend rien visuellement
// }

// export default function SnowGlobe() {
//     const [imageTexture, setImageTexture] = useState(null)
//     const [captureFunction, setCaptureFunction] = useState(null) // Stocke la fonction de capture

//     const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null

//     const handleImageSelect = (e) => {
//         const file = e.target.files[0]
//         if (file) {
//             const reader = new FileReader()
//             reader.onloadend = () => {
//                 setImageTexture(reader.result)
//             }
//             reader.readAsDataURL(file)
//         }
//     }

//     return (
//         <div className="flex flex-row w-full h-full">
//             <div>
//                 <Canvas
//                     camera={{ position: [0, 2, 8], fov: 50 }}
//                     style={{ width: '800px', height: '600px' }}
//                 >
//                     <ambientLight intensity={0.5} />
//                     <directionalLight position={[5, 5, 5]} intensity={2} />
//                     <OrbitControls
//                         minAzimuthAngle={-Math.PI / 4}
//                         maxAzimuthAngle={Math.PI / 4}
//                         minPolarAngle={Math.PI / 6}
//                         maxPolarAngle={Math.PI - Math.PI / 6}
//                         enableDamping={true}
//                         dampingFactor={0.05}
//                         rotateSpeed={0.34}
//                         panSpeed={0.5}
//                         zoomSpeed={0.5}
//                         minDistance={7.3}
//                         maxDistance={10}
//                     />

//                     <mesh position={[0, 1, 0]}>
//                         <sphereGeometry args={[2, 64, 64]} />
//                         <meshPhysicalMaterial
//                             transparent
//                             transmission={1}
//                             ior={1.5}
//                             roughness={0}
//                             metalness={0.1}
//                             clearcoat={1}
//                             clearcoatRoughness={0}
//                             thickness={0.5}
//                             color="white"
//                         />
//                     </mesh>

//                     <mesh position={[0, -1, 0]}>
//                         <cylinderGeometry args={[1.75, 1.75, 0.3, 64]} />
//                         <meshStandardMaterial
//                             color="#6b4f4f"
//                             roughness={0.7}
//                             metalness={0.3}
//                         />
//                     </mesh>

//                     {/* {texture && (
//                         <mesh position={[0, 1, 0]}>
//                             <planeGeometry args={[2, 2]} />
//                             <meshBasicMaterial map={texture} opacity={1} />
//                         </mesh>
//                     )} */}

//                     {/* Image inside the sphere */}
//                 {texture && (
//                     <mesh position={[0, 1, 0]}>
//                         <sphereGeometry args={[2, 64, 64]} />
//                         <meshBasicMaterial map={texture} />
//                     </mesh>
//                 )}

//                     {/* <Environment preset="city" /> */}
//                     <CaptureScene setCaptureFunction={setCaptureFunction} />
//                 </Canvas>
//             </div>

//             <div className="border w-5xl">
//                 <div className="p-5">
//                     <label htmlFor="file">Tester avec votre image :</label>
//                     <br />
//                     <input
//                         type="file"
//                         onChange={handleImageSelect}
//                         accept="image/*"
//                     />
//                     <br />
//                     <br />
//                     <button
//                         onClick={() => captureFunction && captureFunction()}
//                         className="bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                         Télécharger l'image du globe
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// import { Canvas, useThree, useLoader } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { TextureLoader } from 'three'
// import * as THREE from 'three'

// import { useState } from 'react'

// function CaptureScene({ setCaptureFunction }) {
//     const { gl, scene, camera } = useThree()

//     const captureImage = () => {
//         gl.render(scene, camera)
//         const canvas = gl.domElement
//         const image = canvas.toDataURL('image/png', 0.8)

//         const link = document.createElement('a')
//         link.href = image
//         link.download = 'Ma_Holosphere.png'
//         link.click()
//     }

//     setCaptureFunction(() => captureImage)

//     return null
// }

// export default function SnowGlobe() {
//     const [imageTexture, setImageTexture] = useState(null)
//     const [captureFunction, setCaptureFunction] = useState(null)

//     const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null

//     if (texture) {
//         texture.colorSpace = 'srgb'
//         texture.wrapS = texture.wrapT = THREE.RepeatWrapping
//     }

//     const handleImageSelect = (e) => {
//         const file = e.target.files[0]
//         if (file) {
//             const reader = new FileReader()
//             reader.onloadend = () => {
//                 setImageTexture(reader.result)
//             }
//             reader.readAsDataURL(file)
//         }
//     }

//     return (
//         <div className="flex flex-row w-full h-full">
//             <div className="w-full h-full">
//                 <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
//                     <ambientLight intensity={0.5} />
//                     <directionalLight position={[5, 5, 5]} intensity={2} />
//                     <OrbitControls
//                     // minAzimuthAngle={-Math.PI / 4}
//                     // maxAzimuthAngle={Math.PI / 4}
//                     // minPolarAngle={Math.PI / 6}
//                     // maxPolarAngle={Math.PI - Math.PI / 6}
//                     enableDamping={true}
//                     dampingFactor={0.05}
//                     rotateSpeed={0.34}
//                     panSpeed={0.5}
//                     zoomSpeed={0.5}
//                     minDistance={7.3}
//                     maxDistance={10}
//                     />

//                     {/* Ajout de la sphère principale */}
//                     <mesh position={[0, 0.5, 0]}>
//                         <sphereGeometry args={[2, 64, 64]} />
//                         <meshPhysicalMaterial
//                             transparent
//                             transmission={1}
//                             ior={1.5}
//                             roughness={0}
//                             metalness={0.1}
//                             clearcoat={1}
//                             clearcoatRoughness={0}
//                             thickness={0.5}
//                             color="white"
//                         />
//                     </mesh>

//                     {/* Ajout du socle */}
//                     <mesh position={[0, -1.2, 0]}>
//                         <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
//                         <meshStandardMaterial
//                             color="white"
//                             roughness={0.7}
//                             metalness={0.3}
//                         />
//                     </mesh>

//                     {/* Utilisation d'une sphère géométrique et ajout de l'image avec des bords arrondis */}
//                     {texture && (
//                         <mesh position={[0, 0.5, 0]}>
//                             <sphereGeometry args={[2, 64, 64]} />
//                             <meshBasicMaterial
//                                 map={texture}
//                                 side={THREE.DoubleSide}
//                                 transparent
//                                 opacity={1}
//                             />
//                         </mesh>
//                     )}

//                     <CaptureScene setCaptureFunction={setCaptureFunction} />
//                 </Canvas>
//             </div>

//             <div className="border w-5xl">
//                 <div className="p-5">
//                     <label htmlFor="file">Tester avec votre image :</label>
//                     <br />
//                     <input
//                         type="file"
//                         onChange={handleImageSelect}
//                         accept="image/*"
//                     />
//                     <br />
//                     <br />

//                     <button
//                         onClick={() => captureFunction && captureFunction()}
//                         className="cta-button"
//                     >
//                         Télécharger l'image du globe
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Canvas, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'

import { useState } from 'react'

function CaptureScene({ setCaptureFunction }) {
    const { gl, scene, camera } = useThree()

    const captureImage = () => {
        gl.render(scene, camera)
        const canvas = gl.domElement
        const image = canvas.toDataURL('image/png', 0.8)

        const link = document.createElement('a')
        link.href = image
        link.download = 'Ma_Holosphere.png'
        link.click()
    }

    setCaptureFunction(() => captureImage)

    return null
}

export default function SnowGlobe() {
    const [imageTexture, setImageTexture] = useState(null)
    const [captureFunction, setCaptureFunction] = useState(null)

    const texture = imageTexture ? useLoader(TextureLoader, imageTexture) : null

    if (texture) {
        texture.colorSpace = 'srgb'
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    }

    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageTexture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex flex-row w-full h-full">
            <div className="w-full h-full">
                <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <OrbitControls
                    // minAzimuthAngle={-Math.PI / 4}
                    // maxAzimuthAngle={Math.PI / 4}
                    // minPolarAngle={Math.PI / 6}
                    // maxPolarAngle={Math.PI - Math.PI / 6}
                    enableDamping={true}
                    dampingFactor={0.05}
                    rotateSpeed={0.34}
                    panSpeed={0.5}
                    zoomSpeed={0.5}
                    minDistance={7.3}
                    maxDistance={10}
                    />

                    {/* Ajout de la sphère principale */}
                    <mesh position={[0, 0.5, 0]}>
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

                    {/* Ajout du socle */}
                    <mesh position={[0, -1.2, 0]}>
                        <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
                        <meshStandardMaterial
                            color="white"
                            roughness={0.7}
                            metalness={0.3}
                        />
                    </mesh>

                    {/* Utilisation d'une sphère géométrique et ajout de l'image avec des bords arrondis */}
                    {texture && (
                        <mesh position={[0, 0.5, 0]}>
                            <sphereGeometry args={[2, 64, 64]} />
                            <meshBasicMaterial
                                map={texture}
                                side={THREE.DoubleSide}
                                transparent
                                opacity={1}
                            />
                        </mesh>
                    )}

                    <CaptureScene setCaptureFunction={setCaptureFunction} />
                </Canvas>
            </div>

            <div className="border w-5xl">
                <div className="p-5">
                    <label htmlFor="file">Tester avec votre image :</label>
                    <br />
                    <input
                        type="file"
                        onChange={handleImageSelect}
                        accept="image/*"
                    />
                    <br />
                    <br />

                    <button
                        onClick={() => captureFunction && captureFunction()}
                        className="cta-button"
                    >
                        Télécharger l'image du globe
                    </button>
                </div>
            </div>
        </div>
    )
}
