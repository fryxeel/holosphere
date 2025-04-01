import CTAButton from '../components/Buttons/CTAButton.jsx'
export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen text-white ">
                <div className="flex flex-col text-3xl h-[60vh]">
                    <div className="flex flex-col justify-center items-center w-5xl gap-16">
                        <div>
                            <h1 className="text-h1 font-medium text-center font-recoleta">
                                Capturez vos souvenirs en hologramme
                            </h1>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="w-xl">
                                <p className="text-base opacity-70 text-center font-manrope">
                                    Une sphère immersive qui projette vos
                                    souvenirs en images et en musique, pour une
                                    expérience sensorielle et interactive
                                    unique.
                                </p>
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
