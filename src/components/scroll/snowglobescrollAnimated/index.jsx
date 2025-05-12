'use client'
import React, { useRef, useEffect, forwardRef, useState } from 'react'
import { Environment, useGLTF } from '@react-three/drei'
import SnowGlobeSphere from '@/components/snowglobe/SnowGlobeSphere'
import Base from '@/components/snowglobe/Socle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SnowGlobetest from '@/components/snowglobetest'

gsap.registerPlugin(ScrollTrigger)

const AnimatedSnowGlobe = forwardRef((props, scrollRef) => {
    const globeRef = useRef()
    const snowGlobeRef = useRef() // Référence spécifique pour SnowGlobetest
    const materialsRef = useRef([])
    const animationRef = useRef(null)

    // État pour détecter si on est en mobile avec 3 breakpoints (mobile, tablet, desktop)
    const [deviceType, setDeviceType] = useState('desktop')

    // Constantes pour les animations
    const ANIMATION_SETTINGS = {
        desktop: {
            rotationMultiplier: 2,
            animationDuration: 4,
            zoomFactor: 6,
        },
        tablet: {
            rotationMultiplier: 1.5,
            animationDuration: 3,
            zoomFactor: 4,
        },
        mobile: {
            rotationMultiplier: 1,
            animationDuration: 2,
        },
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

    // Fonction améliorée pour gérer les matériaux et textures
    const setupMaterials = () => {
        if (!globeRef.current) return

        // On vide la référence actuelle
        materialsRef.current = []

        // On trouve le composant SnowGlobetest pour l'accès direct
        globeRef.current.traverse((child) => {
            if (
                child.name === 'SnowGlobetest' ||
                child.type === 'SnowGlobetest'
            ) {
                snowGlobeRef.current = child
            }
        })

        // On parcourt tous les meshes pour configurer les matériaux
        materialsRef.current = []
        globeRef.current.traverse((child) => {
            if (child.isMesh && child.material) {
                // Pour un seul matériau
                if (!Array.isArray(child.material)) {
                    if (child.material.map)
                        child.material.map.needsUpdate = true
                    child.material.transparent = true
                    child.material.opacity = 0
                    child.material.needsUpdate = true
                    materialsRef.current.push(child.material)
                }
                // Pour les matériaux multiples
                else {
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

    // Initialisation au premier render
    useEffect(() => {
        setupMaterials()
        return () => {
            if (animationRef.current) animationRef.current.revert()
        }
    }, [])

    // Animation principale qui réagit aux changements de taille d'écran
    useEffect(() => {
        if (
            !globeRef.current ||
            !scrollRef?.current ||
            materialsRef.current.length === 0
        )
            return

        const settings = ANIMATION_SETTINGS[deviceType]

        // Nettoyage de l'animation précédente si elle existe
        if (animationRef.current) {
            animationRef.current.revert()
        }

        animationRef.current = gsap.context(() => {
            // Timeline principale
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1, // Valeur plus élevée pour un défilement plus doux
                    markers: false, // Mettre à true pour le debugging
                },
            })

            // Animation de base (apparition) - plus douce
            tl.fromTo(
                globeRef.current.position,
                { y: -3 },
                { y: 0, ease: 'power2.out', duration: 0.5 },
                0
            )

            if (deviceType === 'mobile') {
                // MOBILE : Uniquement rotation, pas de mouvement en Z
                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * settings.rotationMultiplier,
                        ease: 'sine.inOut',
                        duration: settings.animationDuration,
                    },
                    0.3
                )

                // Ajoute une légère rotation X pour l'effet visuel
                tl.to(
                    globeRef.current.rotation,
                    {
                        x: Math.PI * 0.05, // Légère inclinaison
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    0.3
                )

                tl.to(
                    globeRef.current.rotation,
                    {
                        x: 0, // Retour à l'horizontal
                        ease: 'sine.inOut',
                        duration: settings.animationDuration / 2,
                    },
                    settings.animationDuration / 2
                )
            } else {
                // Animation complète pour tablette/desktop

                // Zoom avant
                tl.to(
                    globeRef.current.position,
                    {
                        z: settings.zoomFactor,
                        ease: 'power2.inOut',
                        duration: 0.7,
                    },
                    0.3
                )

                // Maintien du zoom pour apprécier
                tl.to(globeRef.current.position, {
                    z: settings.zoomFactor,
                    ease: 'none',
                    duration: settings.animationDuration / 3,
                })

                // Zoom arrière avec dépassement
                tl.to(globeRef.current.position, {
                    z: -settings.zoomFactor,
                    ease: 'power2.inOut',
                    duration: 1,
                })

                // Maintien du zoom arrière
                tl.to(globeRef.current.position, {
                    z: -settings.zoomFactor,
                    ease: 'none',
                    duration: settings.animationDuration / 3,
                })

                // Retour à la position d'origine - PLUS SMOOTH
                tl.to(globeRef.current.position, {
                    z: 0,
                    ease: 'power3.inOut', // Ease plus doux qu'elastic
                    duration: 0.8,
                })

                // Rotations
                tl.to(
                    globeRef.current.rotation,
                    {
                        y: Math.PI * settings.rotationMultiplier,
                        ease: 'sine.inOut',
                        duration: 2,
                    },
                    0
                )

                // Inclinaison sur les axes X et Z
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

                // Rotation complète pour revenir à la position initiale - PLUS SMOOTH
                tl.to(
                    globeRef.current.rotation,
                    {
                        z: Math.PI * 2,
                        x: 0,
                        y: Math.PI,
                        ease: 'power3.inOut', // Easing plus doux
                        duration: settings.animationDuration / 1.5,
                    },
                    settings.animationDuration / 2
                )
            }

            // Apparition progressive (fade-in) des matériaux - seulement pour SnowGlobetest
            gsap.fromTo(
                materialsRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    stagger: 0.02, // Plus rapide et subtil
                    ease: 'power1.out', // Transition plus naturelle
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'top 30%',
                        end: '25% center',
                        scrub: true,
                    },
                    onStart: () => {
                        // Garantit que les textures sont visibles pendant la transition
                        materialsRef.current.forEach((mat) => {
                            mat.needsUpdate = true
                            if (mat.map) {
                                mat.map.needsUpdate = true
                                mat.map.anisotropy = 16 // Meilleure qualité des textures pendant l'animation
                            }
                        })
                    },
                }
            )

            // On garde les matériaux opaques jusqu'à presque la fin du scroll
            // puis fade-out subtil à la toute fin
            gsap.fromTo(
                materialsRef.current,
                { opacity: 1 },
                {
                    opacity: 0.2,
                    ease: 'power1.in',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: '85% bottom', // Plus tard dans le scroll
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
    }, [scrollRef, deviceType]) // Réagit aux changements de taille d'écran

    return (
        <group
            ref={globeRef}
            rotation={[0, Math.PI, 0]}
            scale={0.7}
            position={[0, -3, 0]}
        >
            {/* <SnowGlobeSphere />
            <Base /> */}
            <SnowGlobetest home />
            {/* <axesHelper args={[5, 5, 5]} position={[0, 0, 0]} /> */}
            <Environment
                files="/environnement/poly_haven_studio_1k.hdr"
                intensity={0.3} // Légère augmentation de l'intensité
            />
        </group>
    )
})

AnimatedSnowGlobe.displayName = 'AnimatedSnowGlobe'

export default AnimatedSnowGlobe
