'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollVideo() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current && window.innerWidth >= 1024) {
            gsap.fromTo(
                videoRef.current,
                {
                    width: '60vw',
                    transformOrigin: 'center',
                },
                {
                    width: '100vw',
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: 'top 80%',
                        end: 'bottom top',
                        scrub: true,
                    },
                    ease: 'power1.out',
                }
            )
        }
    }, [])

    return (
        <div className="flex justify-center ">
            <div className="w-full aspect-[19/9] lg:aspect-auto lg:h-[100vh] overflow-hidden rounded-3xl">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[60vw] lg:w-[60vw] h-full object-cover mx-auto will-change-[width] rounded-3xl"
                >
                    <source src="videos/video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
