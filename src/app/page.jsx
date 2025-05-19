import Title from '@/components/Text/Title/index.jsx'
import CTAButton from '../components/Buttons/CTAButton.jsx'
import Body from '@/components/Text/Body/index.jsx'
import ScrollVideo from '@/components/scroll/video/index.jsx'
import HomeText from '@/components/HomeText/index.jsx'
import BackgroundScroll from '@/components/scroll/background/index.jsx'
import HomeGame from '@/components/HomeGame/index.jsx'
import Carousel from '@/components/Carousel/Carousel.jsx'
import BottomCallActionSection from '@/components/BottomCallActionSection/index.jsx'

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center text-white h-[calc(95vh-100px)]">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center max-w-5xl gap-16">
                        <div>
                            <Title
                                homePage
                                hierarchy={1}
                                cssClass="text-center text-pretty"
                            >
                                Capturez vos souvenirs en hologramme
                            </Title>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="max-w-xl">
                                <Body cssClass="opacity-70 text-center text-pretty">
                                    Une sphère immersive qui projette vos
                                    souvenirs en images et en musique, pour une
                                    expérience sensorielle et interactive
                                    unique.
                                </Body>
                            </div>
                            <div className="flex justify-center items-center gap-10">
                                <CTAButton href="vue3D">
                                    Commander maintenant
                                </CTAButton>
                                <CTAButton
                                    href="/#discover"
                                    variant="secondary"
                                >
                                    Découvrir
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollVideo />
            <HomeText />
            <BackgroundScroll />

            <HomeGame />
            <div className="relative h-screen p-10">
                {/* Fond flouté qui déborde largement */}
                <div className="absolute inset-0 fond-news-letter"></div>

                {/* Contenu net par-dessus */}
                <div className="relative p-6 h-full flex justify-center items-center">
                    <div className="flex justify-center flex-col isolate">
                        <div>
                            <Title
                                hierarchy={2}
                                homePage
                                cssClass="text-white "
                            >
                                Newsletter
                            </Title>
                            <Body
                                hierarchy={3}
                                cssClass="text-white pb-6.5 w-2/3"
                            >
                                Abonnez-vous et profitez de{' '}
                                <span>10 % de réduction</span> sur votre
                                première commande !
                            </Body>
                        </div>
                        <div className="relative flex flex-col sm:flex-row items-stretch max-w-120 gap-2 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Entrez votre adresse mail"
                                className="w-full p-3 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none border-2 border-white bg-[#8F66C5] text-white placeholder-white focus:outline-none"
                            />
                            <button className="w-full sm:w-auto p-3 rounded-2xl sm:rounded-r-2xl sm:rounded-l-none border-2 border-white bg-white text-dark font-semibold hover:bg-gray-100 transition-colors">
                                S'inscrire
                            </button>
                            <img
                                src="/images/newsletter.svg"
                                alt="image newletter paper plane"
                                className="max-[900px]:hidden absolute -z-10 scale-250 2xl:scale-280 md:scale-176 md:bottom-2 bottom-10 left-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
            <div className="flex justify-center items-center h-[80vh]">
                <BottomCallActionSection />
            </div>
        </>
    )
}
