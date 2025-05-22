'use client'
import React, { useRef, useEffect, forwardRef, useState } from 'react'
import { Environment } from '@react-three/drei'
import SnowGlobetest from '@/components/snowglobetest'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedSnowGlobe = forwardRef((props, scrollRef) => {
    const globeRef = useRef()
    const snowGlobeRef = useRef()
    const materialsRef = useRef([])
    const animationRef = useRef(null)

    const [deviceType, setDeviceType] = useState('desktop')
    const [ready, setReady] = useState(false)

    const ANIMATION_SETTINGS = {
        desktop: { rotationMultiplier: 2, animationDuration: 4, zoomFactor: 6 },
        tablet: {
            rotationMultiplier: 1.5,
            animationDuration: 2,
        },
        mobile: { rotationMultiplier: 3, animationDuration: 2 },
    }

    useEffect(() => {
        const checkDeviceType = () => {
            const width = window.innerWidth
            if (width <= 768) setDeviceType('mobile')
            else if (width <= 1024) setDeviceType('tablet')
            else setDeviceType('desktop')
        }

        checkDeviceType()
        window.addEventListener('resize', checkDeviceType)
        return () => window.removeEventListener('resize', checkDeviceType)
    }, [])

    const setupMaterials = () => {
        if (!globeRef.current) return

        materialsRef.current = []

        globeRef.current.traverse((child) => {
            if (child.isMesh && child.material) {
                const mats = Array.isArray(child.material)
                    ? child.material
                    : [child.material]
                mats.forEach((mat) => {
                    if (mat.map) mat.map.needsUpdate = true
                    mat.transparent = true
                    mat.opacity = 0
                    mat.needsUpdate = true
                    materialsRef.current.push(mat)
                })
            }
        })

        // Si au moins un matériau a été trouvé, le modèle est prêt
        if (materialsRef.current.length > 0) {
            setReady(true)
        }
    }

    useEffect(() => {
        setupMaterials()
        return () => {
            if (animationRef.current) animationRef.current.revert()
        }
    }, [])

    useEffect(() => {
        if (ready) {
            ScrollTrigger.refresh()
        }
    }, [ready])

    useEffect(() => {
        if (
            !ready ||
            !globeRef.current ||
            !scrollRef?.current ||
            materialsRef.current.length === 0
        )
            return

        const settings = ANIMATION_SETTINGS[deviceType]

        if (animationRef.current) {
            animationRef.current.revert()
        }

        animationRef.current = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    markers: false,
                },
            })

            tl.fromTo(
                globeRef.current.position,
                { y: -3 },
                { y: 0, ease: 'power2.out', duration: 0.5 },
                0
            )
            {
                /*MOBILE*/
            }
            if (deviceType === 'mobile') {
                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * settings.rotationMultiplier,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration,
                    },
                    0.3
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        x: Math.PI * 0.05,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    0.3
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        x: 0,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    settings.animationDuration / 2
                )
                {
                    /*TABLET*/
                }
            } else if (deviceType === 'tablet') {
                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * settings.rotationMultiplier,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration,
                    },
                    0.3
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        x: Math.PI * 0.05,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    0.3
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        x: 0,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    settings.animationDuration / 2
                )
            } else {
                tl.to(
                    globeRef.current.position,
                    {
                        z: settings.zoomFactor,
                        ease: 'power2.inOut',
                        duration: 0.7,
                    },
                    0.3
                )

                tl.to(globeRef.current.position, {
                    z: settings.zoomFactor,
                    ease: 'none',
                    duration: settings.animationDuration / 3,
                })

                tl.to(globeRef.current.position, {
                    z: -settings.zoomFactor,
                    ease: 'power2.inOut',
                    duration: 1,
                })

                tl.to(globeRef.current.position, {
                    z: -settings.zoomFactor,
                    ease: 'none',
                    duration: settings.animationDuration / 3,
                })

                tl.to(globeRef.current.position, {
                    z: 0,
                    ease: 'power3.inOut',
                    duration: 0.8,
                })

                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * settings.rotationMultiplier,
                        ease: 'sine.inOut',
                        duration: 2,
                    },
                    0
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        z: Math.PI / 3,
                        x: Math.PI / 2.5,
                        ease: 'power2.inOut',
                        duration: 1,
                    },
                    1
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        z: Math.PI * 2,
                        x: 0,
                        y: Math.PI,
                        ease: 'power3.inOut',
                        duration: settings.animationDuration / 1.5,
                    },
                    settings.animationDuration / 2
                )
            }

            // Fade in des matériaux
            gsap.fromTo(
                materialsRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    stagger: 0.02,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'top 30%',
                        end: '25% center',
                        scrub: true,
                    },
                    onStart: () => {
                        materialsRef.current.forEach((mat) => {
                            mat.needsUpdate = true
                            if (mat.map) {
                                mat.map.needsUpdate = true
                                mat.map.anisotropy = 16
                            }
                        })
                    },
                }
            )

            // Fade out des matériaux
            gsap.fromTo(
                materialsRef.current,
                { opacity: 1 },
                {
                    opacity: 0.2,
                    ease: 'power1.in',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: '85% bottom',
                        end: 'bottom bottom',
                        scrub: true,
                    },
                }
            )
        })

        return () => {
            if (animationRef.current) {
                animationRef.current.revert()
            }
        }
    }, [scrollRef, deviceType, ready])

    return (
        <group
            ref={globeRef}
            rotation={[0, Math.PI, 0]}
            scale={0.7}
            position={[0, -3, 0]}
        >
            <SnowGlobetest home />
            <Environment
                files="/environnement/poly_haven_studio_1k.hdr"
                intensity={0.3}
            />
        </group>
    )
})

AnimatedSnowGlobe.displayName = 'AnimatedSnowGlobe'

export default AnimatedSnowGlobe
