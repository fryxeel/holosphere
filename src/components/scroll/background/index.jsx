'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SnowGlobeScroll from '@/components/scroll/SnowGlobeScroll'
import BoxBlanc from '@/components/BoxBlanc'
import Title from '@/components/Text/Title'

gsap.registerPlugin(ScrollTrigger)

export default function MultiBackgroundScroll() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const animationRef = useRef({ tl: null })

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return

        // Configuration de la hauteur de scroll
        gsap.set(containerRef.current, { height: '1200vh' })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                pin: false,
                markers: false, // Activer pour debug
                id: 'bg-scroll-trigger',
            },
        })

        animationRef.current.tl = tl

        // 🎨 Background colors avec labels
        tl.addLabel('start')
            .to(sectionRef.current, { backgroundColor: '#252d5a', duration: 3 })
            .addLabel('phase1') // Début texte 1
            .to(sectionRef.current, { backgroundColor: '#8C64C5', duration: 3 })
            .addLabel('phase2') // Fin texte 1, début texte 2
            .to(sectionRef.current, { backgroundColor: '#E99DBC', duration: 3 })
            .addLabel('phase3') // Fin texte 2, début texte 3
            .to(sectionRef.current, { backgroundColor: '#FCDAAF', duration: 3 })
            .addLabel('phase4') // Fin texte 3, début texte 4
            .to(sectionRef.current, { backgroundColor: '#8C64C5', duration: 3 })
            .addLabel('end') // Fin texte 4

        // ✨ Texte 1 - Visible pendant toute la phase1
        tl.fromTo(
            '.feature-text.text-1',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            },
            'phase1'
        ).to(
            '.feature-text.text-1',
            {
                opacity: 0,
                duration: 1,
                ease: 'power2.in',
            },
            'phase2-=0.5' // Disparaît 0.5s avant la fin de phase1
        )

        // ✨ Texte 2 - Visible pendant toute la phase2
        tl.fromTo(
            '.feature-text.text-2',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            },
            'phase2'
        ).to(
            '.feature-text.text-2',
            {
                opacity: 0,
                duration: 1,
                ease: 'power2.in',
            },
            'phase3-=0.5' // Disparaît 0.5s avant la fin de phase2
        )

        // ✨ Texte 3 - Visible pendant toute la phase3
        tl.fromTo(
            '.feature-text.text-3',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            },
            'phase3'
        ).to(
            '.feature-text.text-3',
            {
                opacity: 0,
                duration: 1,
                ease: 'power2.in',
            },
            'phase4-=0.5' // Disparaît 0.5s avant la fin de phase3
        )

        // ✨ Texte 4 - Visible pendant toute la phase4
        tl.fromTo(
            '.feature-text.text-4',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            },
            'phase4'
        ).to(
            '.feature-text.text-4',
            {
                opacity: 0,
                duration: 1,
                ease: 'power2.in',
            },
            'end' // Disparaît à la fin
        )

        return () => {
            animationRef.current.tl?.kill()
            ScrollTrigger.getById('bg-scroll-trigger')?.kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <section
                ref={sectionRef}
                className="sticky top-0 h-screen w-full flex items-center justify-center"
            >
                <div className="relative w-full h-full">
                    <SnowGlobeScroll scrollContainerRef={containerRef} />

                    {/* Tous les textes superposés */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BoxBlanc className="feature-text text-1 opacity-0 absolute mx-auto w-[80%] max-w-2xl">
                            <Title hierarchy={3}>
                                Des souvenirs qui prennent vie
                            </Title>
                            L’HoloSphere projette vos photos et vidéos sous
                            forme d’hologrammes au centre de la sphère, les
                            rendant plus vivants que jamais.
                        </BoxBlanc>
                        <BoxBlanc className="feature-text text-2 opacity-0 absolute mx-auto w-[80%] max-w-2xl">
                            <Title hierarchy={3}>Un moment. Une mélodie</Title>
                            Grâce à son enceinte intégrée, chaque souvenir est
                            accompagné d’une musique synchronisée, renforçant
                            l’émotion du moment.
                        </BoxBlanc>
                        <BoxBlanc className="feature-text text-3 opacity-0 absolute mx-auto w-[80%] max-w-2xl">
                            <Title hierarchy={3}>
                                Un geste, une nouvelle histoire
                            </Title>
                            Un simple mouvement suffit : secoue l’HoloSphere
                            pour changer d’image ou de vidéo et revivre un autre
                            souvenir instantanément.
                        </BoxBlanc>
                        <BoxBlanc className="feature-text text-4 opacity-0 absolute mx-auto w-[80%] max-w-2xl">
                            <Title hierarchy={3}>
                                Un partage magique en famille
                            </Title>
                            Connectez plusieurs HoloSpheres et partagez vos
                            souvenirs avec vos proches en un clin d'œil, pour
                            des instants encore plus forts ensemble.
                        </BoxBlanc>
                    </div>
                </div>
            </section>
        </div>
    )
}
