import CTAButton from '../components/CTAButton.js'
export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen text-white text-3xl flex-col">
                <h1 className='text-h1 font-recoleta'>Capturez vos souvenirs en hologramme</h1>
                <p>
                    Une sphère immersive qui projette vos souvenirs en images et
                    en musique, pour une expérience sensorielle et interactive
                    unique.
                </p>
                <div className="flex justify-center items-center gap-10">
                    <CTAButton href="vue3D">
                        vue3D (commander maintenant)
                    </CTAButton>
                    <CTAButton href="vue3D" variant="secondary">
                        Découvrir
                    </CTAButton>
                </div>
            </div>
        </>
    )
}
