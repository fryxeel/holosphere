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
                                <CTAButton href="test" variant="secondary">
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
                        <div className="flex flex-col sm:flex-row items-stretch w-full max-w-120 gap-2 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Entrez votre adresse mail"
                                className="w-full p-3 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none border-2 border-white bg-[#8F66C5] text-white placeholder-white focus:outline-none"
                            />
                            <button className="w-full sm:w-auto p-3 rounded-2xl sm:rounded-r-2xl sm:rounded-l-none border-2 border-white bg-white text-dark font-semibold hover:bg-gray-100 transition-colors">
                                S'inscrire
                            </button>
                        </div>
                        {/* Arrondis SVG autour du texte */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1090"
                            height="344"
                            viewBox="0 0 1090 344"
                            fill="none"
                            className="absolute -z-10  xl:top-[20%] xl:scale-125 md:left-[15%] md:top-[35%] md:scale-125 sm:scale-125 left-0 top-0 opacity-100"
                            // 2xl:left-[26%] 2xl:top-[35%] 2xl:scale-125 xl:left-[20%]
                        >
                            <path
                                d="M263.561 9.51375C180.006 49.4755 33.7647 64.0078 13.1238 53.2526C-8.23593 42.1227 6.77202 21.9244 28.6505 28.8862C43.7472 33.69 93.1154 90.7764 77.4613 148.131C57.695 220.552 64.6441 299.237 157.804 321.282C219.024 335.77 495.916 344.194 622.515 340.447C749.113 336.701 812.471 281.31 796.098 256.493C777.802 228.762 746.37 256.084 771.234 276.031C796.098 295.977 887.941 314.505 972.512 299.237C1047.06 285.777 1101.4 232.867 1083.92 168.112C1066.3 102.848 1015.56 12.0093 825.658 3.26967C754.693 0.0036507 680.362 25.1287 657.345 80.5801C634.618 135.331 680.362 187.818 713.808 145.992"
                                stroke="white"
                                strokeWidth="4"
                            />
                        </svg>

                        {/* Avion SVG */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="94"
                            height="84"
                            viewBox="0 0 94 84"
                            fill="none"
                            className="absolute -z-10 right-100 top-40 opcity-100"
                            // right-115 top-50
                        >
                            <path
                                d="M35.9691 59.7813L76.7754 74.3775C77.461 74.6239 78.1929 74.714 78.9178 74.6411C79.6427 74.5683 80.3421 74.3344 80.9649 73.9565C81.5878 73.5786 82.1183 73.0663 82.5177 72.4571C82.9171 71.8478 83.1753 71.157 83.2735 70.4351L91.5983 7.50794C92.105 3.67666 88.1359 0.818757 84.6335 2.4855L5.52336 40.2472C1.61208 42.1139 1.90542 47.7586 5.99449 49.212L16.8394 53.0699L22.7508 55.1456M51.6409 65.3816L42.7961 80.1645C39.9071 83.7557 34.0891 81.7245 34.0891 77.1288V65.2927C34.0892 63.0591 34.9302 60.9074 36.4447 59.2658L53.6499 40.5983"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>{' '}
                         */}
                    </div>
                </div>
            </div>
            <Carousel />
            <div className="flex justify-center items-center h-screen">
                <BottomCallActionSection />
            </div>
        </>
    )
}
