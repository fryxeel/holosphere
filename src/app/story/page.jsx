import FondBlanc from '@/components/FondBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'

export default function Story() {
    return (
        <>
            <div className="text-white text-3xl pt-[60px] pb-[80px] w-screen inline-flex flex-col items-center gap-2 px-12">
                <Body cssClass="text-center">À propos de notre histoire</Body>
                <Title hierarchy={1} cssClass="text-center">
                    Holosphere : La Magie des Souvenirs Réinventée
                </Title>
            </div>
            <FondBlanc cssClass="py-30">
                <Title hierarchy={2}>Pourquoi HoloSphere ?</Title>
                <Body>
                    Chez <span>HoloSphere</span>, nous croyons que les souvenirs
                    ne sont pas de simples images, mais des fragments d’émotion
                    gravés dans nos cœurs. Inspirés par la nostalgie des boules
                    à neige traditionnelles, nous avons décidé de transformer
                    cet objet iconique pour en faire bien plus qu'un simple
                    souvenir figé.
                </Body>
                <Body>
                    Avec <span>HoloSphere</span>, nous avons créé une expérience
                    immersive, un pont entre passé et futur, où chaque souvenir
                    prend vie grâce à un hologramme dynamique. Imaginez projeter
                    vos plus beaux moments en photos ou en vidéos, accompagnés
                    de musiques qui ravivent l’émotion de l’instant. Une simple
                    secousse de la sphère, et un nouveau souvenir apparaît,
                    comme par magie.
                </Body>

                <Title hierarchy={1} homePage>
                    Titre de premier niveau
                </Title>

                <Title hierarchy={2} homePage>
                    Test
                </Title>

                <Title hierarchy={3} homePage>
                    Test
                </Title>
            </FondBlanc>
        </>
    )
}
