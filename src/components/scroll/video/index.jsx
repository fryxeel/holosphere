'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollVideo() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            gsap.fromTo(
                videoRef.current,
                { width: '50vw' },
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
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="h-[100vh] object-cover rounded-3xl"
            >
                <source src="videos/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
