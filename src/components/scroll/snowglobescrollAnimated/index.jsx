'use client'
import React, { useRef, useEffect, forwardRef } from 'react'
import { Environment } from '@react-three/drei'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
import Base from '@/components/snowglobe/Socle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
//animation du scroll de la boule à neige
// utilisation de la heigth du parent avec forwardRef pour le scrollTrigger
const AnimatedSnowGlobe = forwardRef((_, scrollRef) => {
    const globeRef = useRef()

    useEffect(() => {
        if (!globeRef.current || !scrollRef?.current) return

        const ctx = gsap.context(() => {
            gsap.to(globeRef.current.rotation, {
                z: Math.PI * 2,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollRef.current, //utilisation du parent
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    markers: false,
                },
            })
        })

        return () => ctx.revert()
    }, [scrollRef])

    return (
        <group ref={globeRef} rotation={[0, 1, 0]}>
            <SnowGlobeSphere />
            <Base />
            <Environment
                files="/environnement/poly_haven_studio_1k.hdr"
                intensity={0}
            />
        </group>
    )
})

export default AnimatedSnowGlobe
