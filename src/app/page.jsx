import Title from '@/components/Text/Title/index.jsx'
import CTAButton from '../components/Buttons/CTAButton.jsx'
import Body from '@/components/Text/Body/index.jsx'
export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen text-white ">
                <div className="flex flex-col text-3xl h-[60vh]">
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
        </>
    )
}
