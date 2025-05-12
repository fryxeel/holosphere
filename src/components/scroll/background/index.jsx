'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SnowGlobeScroll from '@/components/scroll/snowglobescroll/index'
import BoxBlanc from '@/components/BoxBlanc'
import Title from '@/components/Text/Title'
import Icon from '@/components/Icon'

gsap.registerPlugin(ScrollTrigger)

export default function MultiBackgroundScroll() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const animationRef = useRef({ tl: null })
    const [isMobile, setIsMobile] = useState(false)

    // Détection de l'appareil mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        // Vérifier au chargement
        checkMobile()

        // Vérifier au redimensionnement
        window.addEventListener('resize', checkMobile)
        console.log('isMobile', isMobile)
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return

        // Configuration de la hauteur de scroll - Augmentée pour mobile
        const scrollHeight = isMobile ? '1500vh' : '1200vh'
        gsap.set(containerRef.current, { height: scrollHeight })

        // Nettoyer les anciennes animations si elles existent
        if (animationRef.current.tl) {
            animationRef.current.tl.kill()
        }
        const scrollTriggerId = 'bg-scroll-trigger'
        if (ScrollTrigger.getById(scrollTriggerId)) {
            ScrollTrigger.getById(scrollTriggerId).kill()
        }

        // Création d'une nouvelle timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1, // Légère fluidité pour améliorer l'animation
                pin: false,
                markers: false,
                id: scrollTriggerId,
                onUpdate: (self) => {
                    // Nous pouvons utiliser cette fonction pour optimiser davantage si nécessaire
                    // console.log('Progress:', self.progress.toFixed(3))
                },
            },
        })

        animationRef.current.tl = tl

        // 🎨 Background colors avec transitions plus douces
        tl.addLabel('start')
            .to(sectionRef.current, {
                backgroundColor: '#252d5a',
                duration: 3,
                ease: 'power1.inOut',
            })
            .addLabel('phase1')
            .to(sectionRef.current, {
                backgroundColor: '#8C64C5',
                duration: 3,
                ease: 'power1.inOut',
            })
            .addLabel('phase2')
            .to(sectionRef.current, {
                backgroundColor: '#E99DBC',
                duration: 3,
                ease: 'power1.inOut',
            })
            .addLabel('phase3')
            .to(sectionRef.current, {
                backgroundColor: '#FCDAAF',
                duration: 3,
                ease: 'power1.inOut',
            })
            .addLabel('phase4')
            .to(sectionRef.current, {
                backgroundColor: '#0C0F1E',
                duration: 3,
                ease: 'power1.inOut',
            })
            .addLabel('end')

        // Animation améliorée pour Texte 1
        tl.fromTo(
            '.feature-text.text-1',
            {
                opacity: 0,
                y: 50, // Commence plus bas
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            },
            'phase1+=0.3' // Léger délai pour une meilleure synchronisation
        ).to(
            '.feature-text.text-1',
            {
                opacity: 0,
                y: -30, // Disparaît vers le haut
                duration: 1.2,
                ease: 'power2.in',
            },
            'phase2-=0.7'
        )

        // Animation améliorée pour Texte 2
        tl.fromTo(
            '.feature-text.text-2',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            },
            'phase2+=0.3'
        ).to(
            '.feature-text.text-2',
            {
                opacity: 0,
                y: -30,
                duration: 1.2,
                ease: 'power2.in',
            },
            'phase3-=0.7'
        )

        // Animation améliorée pour Texte 3
        tl.fromTo(
            '.feature-text.text-3',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            },
            'phase3+=0.3'
        ).to(
            '.feature-text.text-3',
            {
                opacity: 0,
                y: -30,
                duration: 1.2,
                ease: 'power2.in',
            },
            'phase4-=0.7'
        )

        // Animation améliorée pour Texte 4
        tl.fromTo(
            '.feature-text.text-4',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
            },
            'phase4+=0.3'
        ).to(
            '.feature-text.text-4',
            {
                opacity: 0,
                y: -30,
                duration: 1.2,
                ease: 'power2.in',
            },
            'end-=1'
        )

        return () => {
            if (animationRef.current.tl) {
                animationRef.current.tl.kill()
            }
            if (ScrollTrigger.getById(scrollTriggerId)) {
                ScrollTrigger.getById(scrollTriggerId).kill()
            }
        }
    }, [isMobile]) // Ajouter isMobile comme dépendance pour recalculer lors du changement

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <section
                ref={sectionRef}
                className="sticky top-0 h-screen w-full flex items-center  justify-center"
            >
                <div className="relative w-full h-full">
                    <SnowGlobeScroll scrollContainerRef={containerRef} />

                    {/* Conteneur de texte positionné plus bas sur mobile */}
                    <div className="absolute inset-0 flex items-end md:items-center justify-center">
                        <BoxBlanc
                            padding={false}
                            className="feature-text text-1 opacity-0 absolute mx-auto w-[90%] max-w-2xl"
                        >
                            <div className="flex items-center gap-4 flex-wrap">
                                <Icon name={'camera'} color="var(--dark)" />
                                <Title hierarchy={3} homePage>
                                    Des souvenirs qui prennent vie
                                </Title>
                            </div>

                            <p className="mt-2">
                                L'HoloSphere projette vos photos et vidéos sous
                                forme d'hologrammes au centre de la sphère, les
                                rendant plus vivants que jamais.
                            </p>
                        </BoxBlanc>
                        <BoxBlanc
                            padding={false}
                            className="feature-text text-2 opacity-0 absolute mx-auto w-[90%] max-w-2xl"
                        >
                            <div className="flex items-center gap-4 flex-wrap">
                                <Icon name={'music'} color="var(--dark)" />
                                <Title hierarchy={3} homePage>
                                    Un moment. Une mélodie
                                </Title>
                            </div>

                            <p className="mt-2">
                                Grâce à son enceinte intégrée, chaque souvenir
                                est accompagné d'une musique synchronisée,
                                renforçant l'émotion du moment.
                            </p>
                        </BoxBlanc>
                        <BoxBlanc
                            padding={false}
                            className="feature-text text-3 opacity-0 absolute mx-auto w-[90%] max-w-2xl"
                        >
                            <div className="flex items-center gap-4 flex-wrap">
                                <Icon
                                    name={'filled_stars'}
                                    color="var(--dark)"
                                    height={'30'}
                                />
                                <Title hierarchy={3} homePage>
                                    Un geste, une nouvelle histoire
                                </Title>
                            </div>

                            <p className="mt-2">
                                Un simple mouvement suffit : secoue l'HoloSphere
                                pour changer d'image ou de vidéo et revivre un
                                autre souvenir instantanément.
                            </p>
                        </BoxBlanc>
                        <BoxBlanc
                            padding={false}
                            className="feature-text text-4 opacity-0 absolute mx-auto w-[90%] max-w-2xl"
                        >
                            <div className="flex items-center gap-4 flex-wrap">
                                <Icon name={'family'} color="var(--dark)" />
                                <Title hierarchy={3} homePage>
                                    Un partage magique en famille
                                </Title>
                            </div>

                            <p className="mt-2">
                                Connectez plusieurs HoloSpheres et partagez vos
                                souvenirs avec vos proches en un clin d'œil,
                                pour des instants encore plus forts ensemble.
                            </p>
                        </BoxBlanc>
                    </div>
                </div>
            </section>
        </div>
    )
}
