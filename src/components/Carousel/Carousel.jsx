// components/Carousel.jsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import QuoteCard from '@/components/QuoteCard/QuoteCard.jsx'

const quotes = [
    {
        quote: 'Ma vie a radicalement changée',
        author: 'Natalie COUDRAY',
        date: '- le 18 avril',
    },
    {
        quote: 'Mes enfants adorent revivre nos dernières vacances',
        author: ' Sébastien CHÂBALES',
        date: '- le 5 mai',
    },
    {
        quote: 'Quel cadeau parfait pour un anniversaire',
        author: 'Lucie DRAY',
        date: '- le 3 mars',
    },
    {
        quote: 'Quel cadeau parfait pour un anniversaire',
        author: 'Lucie DRAY',
        date: '- le 3 mars',
    },
    {
        quote: 'Quel cadeau parfait pour un anniversaire',
        author: 'Lucie DRAY',
        date: '- le 3 mars',
    },
    {
        quote: 'Quel cadeau parfait pour un anniversaire',
        author: 'Lucie DRAY',
        date: '- le 3 mars',
    },
]

export default function QuoteCarousel() {
    return (
        <div className="h-screen flex items-center">
            <div className="w-full px-4 mx-auto">
                <Swiper
                    modules={[Navigation, A11y, Mousewheel]}
                    spaceBetween={100}
                    slidesPerView={3}
                    slidesPerGroup={1} // défile 1 slide à la fois
                    navigation
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
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
                                <QuoteCard {...quote} white />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
