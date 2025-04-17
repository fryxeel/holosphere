'use client'
import React, { useRef, useEffect, forwardRef, useState } from 'react'
import { Environment } from '@react-three/drei'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
import Base from '@/components/snowglobe/Socle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedSnowGlobe = forwardRef((_, scrollRef) => {
    const globeRef = useRef()
    const materialsRef = useRef([])
    const animationRef = useRef(null)

    // 👇 State pour détecter si on est en mobile
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const resetMaterials = () => {
        if (!globeRef.current) return

        materialsRef.current = []
        globeRef.current.traverse((child) => {
            if (child.isMesh && child.material) {
                if (child.material.map) child.material.map.needsUpdate = true
                child.material.transparent = true
                child.material.opacity = 0
                child.material.needsUpdate = true
                materialsRef.current.push(child.material)

                if (Array.isArray(child.material)) {
                    child.material.forEach((mat) => {
                        if (mat.map) mat.map.needsUpdate = true
                        mat.transparent = true
                        mat.opacity = 0
                        mat.needsUpdate = true
                        materialsRef.current.push(mat)
                    })
                }
            }
        })
    }

    useEffect(() => {
        resetMaterials()
        return () => {
            if (animationRef.current) animationRef.current.revert()
            resetMaterials()
        }
    }, [])

    useEffect(() => {
        if (
            !globeRef.current ||
            !scrollRef?.current ||
            materialsRef.current.length === 0
        )
            return

        globeRef.current.position.y = 3

        animationRef.current = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
            })

            if (isMobile) {
                tl.to(globeRef.current.position, {
                    y: 0,
                    ease: 'sine.inOut',
                    duration: 0.5,
                })
                // ✅ Version mobile : juste une rotation
                tl.to(globeRef.current.rotation, {
                    y: Math.PI * 2 + 1,
                    x: Math.PI * 2,
                    ease: 'sine.inOut',
                    duration: 2,
                })
            } else {
                // ✅ Version desktop : animations complètes
                tl.to(globeRef.current.position, {
                    y: 0,
                    ease: 'sine.inOut',
                    duration: 0.5,
                })
                tl.to(globeRef.current.position, {
                    z: 6,
                    ease: 'sine.inOut',
                    duration: 0.5,
                })
                tl.to(globeRef.current.position, {
                    z: 6,
                    ease: 'sine.inOut',
                    duration: 1.5,
                })
                tl.to(globeRef.current.position, {
                    z: -6,
                    ease: 'sine.inOut',
                    duration: 0.5,
                })
                tl.to(globeRef.current.position, {
                    z: -6,
                    ease: 'sine.inOut',
                    duration: 1,
                })
                tl.to(globeRef.current.position, {
                    z: 0,
                    ease: 'sine.inOut',
                    duration: 0.5,
                })

                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * 2 + 1,
                        ease: 'sine.inOut',
                        duration: 1,
                    },
                    0
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        z: Math.PI / 4,
                        x: Math.PI / 2,
                        ease: 'sine.inOut',
                        duration: 1,
                    },
                    1
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        z: Math.PI * 2,
                        x: 0,
                        ease: 'sine.inOut',
                        duration: 3,
                    },
                    1
                )
            }

            // ✅ Fondu (même pour mobile)
            gsap.to(materialsRef.current, {
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top top',
                    end: 'center center',
                    scrub: true,
                },
                onStart: () => {
                    materialsRef.current.forEach((mat) => {
                        mat.needsUpdate = true
                        if (mat.map) mat.map.needsUpdate = true
                    })
                },
            })
        })

        return () => {
            if (animationRef.current) {
                animationRef.current.revert()
            }
        }
    }, [scrollRef, isMobile]) // Important : on réagit aux changements de taille aussi

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
