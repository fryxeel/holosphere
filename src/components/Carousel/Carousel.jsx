// components/Carousel.jsx
'use client'
import Body from '@/components/Text/Body/index.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import QuoteCard from '@/components/QuoteCard/QuoteCard.jsx'
import './style.css'
const quotes = [
    {
        quote: 'Un souvenir magique chaque jour à la maison.',
        author: 'Élodie MARTIN',
        date: '- le 12 février',
    },
    {
        quote: 'C’est comme revivre les plus beaux moments de notre vie.',
        author: 'Jean-Pierre LEROY',
        date: '- le 27 avril',
    },
    {
        quote: 'L’effet wahou est immédiat, tout le monde est bluffé !',
        author: 'Camille DUPONT',
        date: '- le 9 mars',
    },
    {
        quote: 'Un concept émouvant et ultra moderne.',
        author: 'Nicolas BRUN',
        date: '- le 14 mai',
    },
    {
        quote: 'Mes grands-parents ont pleuré de joie.',
        author: 'Sophie BAILLY',
        date: '- le 1er avril',
    },
    {
        quote: 'C’est devenu notre petit rituel du soir en famille.',
        author: 'Thomas LAMARRE',
        date: '- le 22 janvier',
    },
]

export default function QuoteCarousel() {
    return (
        <div className=" flex flex-col items-center">
            <div className="self-start pb-20 pl-20">
                <Body
                    hierarchy={2}
                    cssClass="text-white opacity-70 pb-4 border-white/30 border-b-2"
                >
                    Ils ont laissé leur avis
                </Body>
            </div>
            <div className="w-full px-4 mx-auto">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={100}
                    slidesPerView={3}
                    slidesPerGroup={1} // défile 1 slide à la fois
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    centeredSlides={true}
                    className="!pb-20"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {quotes.map((quote, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-full">
                                <QuoteCard {...quote} homePage />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
