import Title from '@/components/Text/Title/index.jsx'
import CTAButton from '../components/Buttons/CTAButton.jsx'
import Body from '@/components/Text/Body/index.jsx'
import ScrollVideo from '@/components/scroll/video/index.jsx'
import HomeText from '@/components/HomeText/index.jsx'
import BackgroundScroll from '@/components/scroll/background/index.jsx'
import HomeGame from '@/components/HomeGame/index.jsx'

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center text-white 2xl:py-45">
                {' '}
                {/* pt-65"*/}
                <div className="flex flex-col h-[60vh]">
                    <div className="flex flex-col justify-center items-center w-5xl gap-16">
                        <div>
                            <Title
                                homePage
                                hierarchy={1}
                                cssClass="text-center"
                            >
                                Capturez vos souvenirs en hologramme
                            </Title>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="w-xl">
                                <Body cssClass="opacity-70 text-center">
                                    Une sphère immersive qui projette vos
                                    souvenirs en images et en musique, pour une
                                    expérience sensorielle et interactive
                                    unique.
                                </Body>
                            </div>
                            <div className="flex justify-center items-center gap-10">
                                <CTAButton className="" href="vue3D">
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
        </>
    )
}
