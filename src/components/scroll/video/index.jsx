'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollVideo() {
    const videoRef = useRef(null)
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    // Détection du type d'appareil
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        // Vérifier au chargement initial
        checkDevice()

        // Mettre à jour en cas de redimensionnement
        window.addEventListener('resize', checkDevice)

        return () => {
            window.removeEventListener('resize', checkDevice)
        }
    }, [])

    // Configuration de l'animation de zoom
    useEffect(() => {
        if (!videoRef.current || !containerRef.current) return

        // Nettoyer les animations précédentes
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

        // Configuration initiale par JavaScript pour s'assurer qu'elle est correcte
        gsap.set(videoRef.current, {
            borderRadius: '24px',
            width: !isMobile ? '80vw' : '100%',
            scale: isMobile ? 0.8 : 1,
        })

        // Animation unique avec tous les paramètres
        gsap.to(videoRef.current, {
            borderRadius: '2px',
            width: !isMobile ? '100vw' : '100%',
            scale: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom top',
                scrub: true,
                markers: false, // Activé pour déboguer - à désactiver plus tard
            },
            ease: 'power1.out',
        })
    }, [isMobile])

    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <div ref={containerRef} className="flex justify-center w-full">
            <div
                className={`
                w-full relative group 
                ${
                    isMobile
                        ? 'aspect-video'
                        : 'aspect-[19/9] lg:aspect-auto lg:h-[100vh]'
                } 
                overflow-hidden
            `}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full object-cover mx-auto"
                >
                    <source src="videos/final.webm" type="video/webm" />
                    <source src="videos/final.mp4" type="video/mp4" />
                    Votre navigateur ne prend pas en charge les vidéos WEBM ni
                    MP4.
                </video>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={toggleMute}
                        className="bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black/80 transition cursor-pointer"
                    >
                        {isMuted ? '🔇 Son désactivé' : '🔊 Son activé'}
                    </button>
                </div>
            </div>
        </div>
    )
}
