'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//import SnowGlobeScroll from '../snowglobescrollAnimated'
import SnowGlobeScroll from '../snowGlobeScroll'
gsap.registerPlugin(ScrollTrigger)

export default function MultiBackgroundScroll() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null) // Nouvelle référence pour le conteneur
    const animationRef = useRef({
        tl: null,
        st: null,
    })

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return

        // Crée un conteneur fixe pour la section
        gsap.set(containerRef.current, {
            height: '400vh', // 4x la hauteur de l'écran pour le défilement
        })

        // Store animation instances in ref
        animationRef.current.tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                pin: false,
                markers: false, // À désactiver en production
                id: 'bg-scroll-trigger',
            },
        })

        animationRef.current.tl
            .to(sectionRef.current, {
                backgroundColor: '#8C64C5',
                duration: 1,
            })
            .to(sectionRef.current, {
                backgroundColor: '#E99DBC',
                duration: 1,
            })
            .to(sectionRef.current, {
                backgroundColor: '#FCDAAF',
                duration: 1,
            })
            .to(sectionRef.current, {
                backgroundColor: '#8C64C5',
                duration: 1,
            })

        return () => {
            if (animationRef.current.tl) {
                animationRef.current.tl.kill()
                animationRef.current.tl = null
            }

            const st = ScrollTrigger.getById('bg-scroll-trigger')
            if (st) st.kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="relative">
            <section className="h-screen w-full flex items-center justify-center text-white text-4xl font-bold sticky top-0">
                <SnowGlobeScroll scrollContainerRef={containerRef} />
            </section>
            <div className="h-[300vh]"></div>
        </div>
    )
}
