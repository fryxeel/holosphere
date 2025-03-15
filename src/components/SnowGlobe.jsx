'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import {
    AmbientLight,
    DirectionalLight,
    MeshStandardMaterial,
    SphereGeometry,
} from 'three'

const Cube = ({ position, side, color }) => {
    const ref = useRef()
    useFrame((state, delta) => {
        {
            /* delta c'est la différence de temps entre la première frame et la dernière frame */
        }
        // ref.current.rotation.x += delta
        ref.current.rotation.y += delta
        // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2 /*effet boomrang*/
    })

    return (
        <mesh position={position} ref={ref}>
            {/*mesh sert à render  quelque chose*/}
            <boxGeometry args={side} />
            {/*axe x, axe y, axe z : si on ne met pas d'args de base on est à 1, 1, 1*/}
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

const Sphere = ({ position, side, color }) => {
    const ref = useRef()
    const [isHovered, setIsHovered] = useState(false)
    useFrame((state, delta) => {
        

        ref.current.rotation.y += delta * 1
    })

    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(event) => {
                event.stopPropagation(), setIsHovered(true)
            }}
            onPointerLeave={() => {
                setIsHovered(false)
            }}
        >
            {/*mesh sert à render  quelque chose*/}
            <sphereGeometry args={side} />
            {/*axe x, axe y, axe z : si on ne met pas d'args de base on est à 1, 1, 1*/}
            <meshStandardMaterial
                color={isHovered ? 'blue' : 'white'}
                wireframe
            />
        </mesh>
    )
}

const SnowGlobe = () => {
    return (
        <Canvas>
            <directionalLight position={[0, 0, 2]} />
            {/* <ambientLight /> intensity={0.8} */}
            {/* <group position={[0, -1, 0]}>
                <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={'green'} />
                <Cube
                    position={[-1, 0, 0]}
                    size={[1, 1, 1]}
                    color={'hotpink'}
                />
                <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={'blue'} />
                <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={'yellow'} />
            </group> */}
            <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color={'orange'} />
        </Canvas>
    )
}

export default SnowGlobe
