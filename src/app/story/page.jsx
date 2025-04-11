import BottomCallActionSection from '@/components/BottomCallActionSection'
import ClassicBox from '@/components/ClassicBox'
import ClassicSection from '@/components/ClassicSection'
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
            <FondBlanc cssClass="px-6 md:px-10 lg:px-16 py-12 md:py-18 lg:py-30 flex flex-col justify-center items-center gap-36">
                <ClassicSection cssClass="md:flex-row">
                    <img
                        src="/images/HolosphereMockup1.png"
                        alt="Mockup de l'Holosphère"
                        className="md:max-w-100 md:max-h-100 rounded-3xl"
                    />
                    <ClassicBox cssClass="gap-7 lg:gap-10">
                        <Title hierarchy={2}>Pourquoi HoloSphere ?</Title>
                        <Body>
                            Chez <span>HoloSphere</span>, nous croyons que les
                            souvenirs ne sont pas de simples images, mais des
                            fragments d’émotion gravés dans nos cœurs. Inspirés
                            par la nostalgie des boules à neige traditionnelles,
                            nous avons décidé de transformer cet objet iconique
                            pour en faire bien plus qu'un simple souvenir figé.
                        </Body>
                        <Body>
                            Avec <span>HoloSphere</span>, nous avons créé une
                            expérience immersive, un pont entre passé et futur,
                            où chaque souvenir prend vie grâce à un hologramme
                            dynamique. Imaginez projeter vos plus beaux moments
                            en photos ou en vidéos, accompagnés de musiques qui
                            ravivent l’émotion de l’instant. Une simple secousse
                            de la sphère, et un nouveau souvenir apparaît, comme
                            par magie.
                        </Body>
                    </ClassicBox>
                </ClassicSection>

                <section className="flex gap-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="431"
                        height="94"
                        viewBox="0 0 431 94"
                        fill="none"
                    >
                        <path
                            d="M0.4823 90.2809C192.733 90.2809 231.902 44.1982 202.71 13.649C174.317 -16.0648 121.873 19.9706 196.864 66.725C310.491 137.568 353.414 31.8903 430.223 31.8903"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>

                    <Body
                        cssClass="max-w-48 md:max-w-96 text-center"
                        hierarchy={1}
                    >
                        Let’s keep the dream
                    </Body>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="431"
                        height="94"
                        viewBox="0 0 431 94"
                        fill="none"
                    >
                        <path
                            d="M430.518 90.2809C238.267 90.2809 199.098 44.1982 228.29 13.649C256.683 -16.0648 309.127 19.9706 234.137 66.725C120.509 137.568 77.5859 31.8903 0.777496 31.8903"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>
                </section>

                <ClassicSection>
                    <ClassicBox cssClass="max-w-90 gap-4">
                        <Title hierarchy={2}>Notre Vision</Title>
                        <Body>
                            Dans un monde où les photos et vidéos s’entassent
                            sur nos appareils sans jamais être réellement
                            revisitées, HoloSphere donne un nouveau souffle aux
                            souvenirs, en les plaçant au cœur de notre
                            quotidien.
                        </Body>
                    </ClassicBox>
                    <ClassicBox cssClass="max-w-90">
                        <Body>
                            Nous avons voulu créer un objet qui ne se contente
                            pas de rappeler des instants passés, mais qui permet
                            de les revivre pleinement, en famille ou entre amis.
                            Plus qu’un simple gadget, HoloSphere est un gardien
                            d'émotions, un lien entre les générations qui
                            célèbre la mémoire collective et le partage.
                        </Body>
                    </ClassicBox>
                </ClassicSection>
                <ClassicSection>
                    <picture>
                        <source
                            media="(min-width: 640px)"
                            srcSet="/images/HolosphereMockup2.png"
                        />
                        <img
                            src="/images/HolosphereMockup2_small.png"
                            alt="Mockup de l'Holosphère sur une table basse"
                            className="rounded-3xl"
                        />
                    </picture>
                </ClassicSection>
                <ClassicSection cssClass="lg:pt-20">
                    <ClassicBox cssClass="gap-5 px-8 lg:px-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="33"
                            viewBox="0 0 42 33"
                            fill="none"
                        >
                            <path
                                d="M13.664 0.754104C15.456 -0.397897 17.76 1.9061 16.096 3.57011C11.36 8.0501 9.824 10.9941 8.928 14.9621C8.672 16.1141 8.928 16.8821 10.08 16.8821C13.664 16.8821 16.48 19.9541 16.48 24.4341C16.48 29.2981 13.408 32.7541 8.672 32.7541C4.192 32.7541 0.48 29.2981 0.48 23.2821C0.48 14.8341 4.96 6.7701 13.664 0.754104ZM38.368 0.754104C40.16 -0.397897 42.464 1.9061 40.8 3.57011C35.936 8.0501 34.4 10.9941 33.632 14.9621C33.376 16.1141 33.632 16.8821 34.784 16.8821C38.368 16.8821 41.056 19.9541 41.056 24.4341C41.056 29.2981 37.984 32.7541 33.376 32.7541C28.896 32.7541 25.184 29.2981 25.184 23.2821C25.184 14.8341 29.664 6.7701 38.368 0.754104Z"
                                fill="#F8AD4D"
                            />
                        </svg>
                        <Body cssClass="text-right" hierarchy={1}>
                            Le bonheur ne crée rien que des souvenirs.
                        </Body>
                        <div className="flex justify-between">
                            <Body>⏤ Honoré De Balzac</Body>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="41"
                                height="33"
                                viewBox="0 0 41 33"
                                fill="none"
                            >
                                <path
                                    d="M3.11973 32.0381C1.32773 33.1901 -0.976268 31.0141 0.687732 29.3501C5.42373 24.7421 6.95973 21.7981 7.85573 17.8301C8.11173 16.8061 7.85573 16.0381 6.70373 16.0381C3.11973 16.0381 0.303731 12.9661 0.303731 8.35809C0.303731 3.49408 3.37573 0.0380859 8.11173 0.0380859C12.5917 0.0380859 16.3037 3.62209 16.3037 9.51009C16.3037 17.9581 11.8237 26.0221 3.11973 32.0381ZM27.6957 32.0381C25.9037 33.1901 23.5997 31.0141 25.3917 29.3501C30.1277 24.7421 31.6637 21.7981 32.4317 17.8301C32.6877 16.8061 32.5597 16.0381 31.4077 16.0381C27.6957 16.0381 25.0077 12.9661 25.0077 8.35809C25.0077 3.49408 28.0797 0.0380859 32.8157 0.0380859C37.1677 0.0380859 40.8797 3.62209 40.8797 9.51009C40.8797 17.9581 36.3997 26.0221 27.6957 32.0381Z"
                                    fill="#F8AD4D"
                                />
                            </svg>
                        </div>
                    </ClassicBox>
                    <div className="lg:w-16/10 h-100 rounded-3xl bg-[#FDE3C3] flex justify-center align-center mt-10 lg:mt-0">
                        <img
                            src="images/HolosphereMockup3.png"
                            alt="Holosphère fond transparent"
                            className="h-100 scale-180 sm:scale-210 -translate-y-6"
                        />
                    </div>
                </ClassicSection>
                <ClassicSection cssClass="justify-center items-center !flex-col h-110 py-130 sm:py-100 lg:py-0 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1089"
                        height="343"
                        viewBox="0 0 1089 343"
                        fill="none"
                        className="hidden absolute translate-y-13 scale-x-105 scale-y-110 lg:block"
                    >
                        <path
                            d="M263.353 8.53265C179.798 48.4944 33.5568 63.0267 12.916 52.2715C-8.44382 41.1416 6.56413 20.9433 28.4426 27.9051C43.5393 32.7089 92.9075 89.7954 77.2534 147.15C57.4872 219.571 64.4362 298.256 157.596 320.302C218.816 334.789 469.708 343.213 596.307 339.466C722.905 335.72 766.263 280.329 749.89 255.512C731.594 227.781 700.162 255.103 725.026 275.05C749.89 294.996 887.734 313.525 972.304 298.256C1046.85 284.796 1101.2 231.886 1083.71 167.131C1066.09 101.867 1015.35 11.0302 825.45 2.28857"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="474"
                        height="740"
                        viewBox="0 0 474 740"
                        fill="none"
                        className="absolute lg:hidden scale-y-130 sm:scale-y-105 sm:scale-x-130 md:scale-x-150"
                    >
                        <path
                            d="M111.257 2.70068C71.85 94.134 29.2567 132.251 9.43382 98.0945C-8.26674 67.5953 12.7473 19.9852 28.8647 51.9094C39.4634 72.9026 30.8701 188.632 23.4872 319.86C14.1649 485.562 19.5373 643.848 85.3905 698.501C137.246 741.537 226.502 744.686 301.345 726.842C381.257 707.789 450.159 618.1 415.714 588.709C395.727 571.656 383.918 606.554 402.465 630.696C421.013 654.838 471.656 676.458 471.656 570.442C471.656 447.56 423.96 404.755 415.714 256.593C407.402 107.268 436.909 22.7017 347.348 2.70064"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>
                    <Title hierarchy={2} cssClass="max-w-1/2 text-center">
                        Nos valeurs fondatrices
                    </Title>
                    <div className="justify-center items-center relative flex flex-col lg:flex-row gap-13 lg:gap-8">
                        <ClassicBox cssClass="gap-4 w-3/5 lg:w-3/12 z-2 lg:min-h-40">
                            <Title hierarchy={3}>Émotion</Title>
                            <Body>
                                Chaque HoloSphere est conçu pour éveiller les
                                sentiments les plus sincères et raviver la magie
                                de vos souvenirs les plus précieux.
                            </Body>
                        </ClassicBox>
                        <ClassicBox cssClass="gap-4 w-3/5 lg:w-3/12 z-2 lg:min-h-40">
                            <Title hierarchy={3}>Connexion Humaine</Title>
                            <Body>
                                Un véritable lien entre les générations,
                                favorisant les échanges et les moments partagés.
                            </Body>
                        </ClassicBox>
                        <ClassicBox cssClass="gap-4 w-3/5 lg:w-3/12 z-2 lg:min-h-40">
                            <Title hierarchy={3}>Innovation</Title>
                            <Body>
                                Réinventer la boule à neige en une expérience
                                interactive et sensorielle unique.
                            </Body>
                        </ClassicBox>
                    </div>
                </ClassicSection>
                <ClassicSection>
                    <img
                        src="/images/ourGroup.jpg"
                        alt="Notre groupe de 4 personne"
                        className="md:max-w-140 rounded-3xl"
                    />
                    <ClassicBox cssClass="gap-7 lg:gap-10">
                        <Title hierarchy={2}>
                            Notre Histoire : <br />
                            De l'Idée à la Réalité
                        </Title>
                        <Body>
                            Nous sommes quatre passionnés, animés par l’idée de
                            donner un nouveau souffle aux souvenirs. Dès le
                            début, nous avons fait face à des défis techniques
                            et créatifs pour concrétiser notre vision.
                        </Body>
                        <Body>
                            <span>
                                De la conception de l’hologramme dynamique à
                                l'intégration musicale
                            </span>
                            , chaque étape a été un défi relevé avec
                            détermination et passion. Aujourd’hui, nous sommes
                            fiers de proposer un produit qui incarne à la fois
                            <span>la tradition et l'innovation</span>.
                        </Body>
                    </ClassicBox>
                </ClassicSection>

                <section className="flex gap-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="431"
                        height="94"
                        viewBox="0 0 431 94"
                        fill="none"
                    >
                        <path
                            d="M0.4823 90.2809C192.733 90.2809 231.902 44.1982 202.71 13.649C174.317 -16.0648 121.873 19.9706 196.864 66.725C310.491 137.568 353.414 31.8903 430.223 31.8903"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>

                    <Body
                        cssClass="max-w-56 md:max-w-96 text-center"
                        hierarchy={1}
                    >
                        Une Équipe de Rêveurs
                    </Body>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="431"
                        height="94"
                        viewBox="0 0 431 94"
                        fill="none"
                    >
                        <path
                            d="M430.518 90.2809C238.267 90.2809 199.098 44.1982 228.29 13.649C256.683 -16.0648 309.127 19.9706 234.137 66.725C120.509 137.568 77.5859 31.8903 0.777496 31.8903"
                            stroke="#FCDAAF"
                            strokeWidth="4"
                        />
                    </svg>
                </section>

                <div className="flex flex-col gap-14">
                    <Body cssClass="text-center">
                        Notre équipe est composée de quatre rêveurs aux talents
                        complémentaires :
                    </Body>
                    <ClassicSection cssClass="!flex-row !gap-y-12 !gap-[8%] md:!gap-[6%] flex-wrap !items-start">
                        <ClassicBox cssClass="gap-4 max-w-4/9 md:max-w-1/5">
                            <img
                                src="/images/teamFrancisco.jpg"
                                alt="Francisco"
                                className="rounded-2xl"
                            />
                            <Body>
                                Francisco, spécialisé en design 3D, Francisco
                                donne du relief à l’univers d’Holosphère. Il
                                façonne les volumes et les animations en
                                cohérence avec la direction artistique du
                                projet.
                            </Body>
                        </ClassicBox>
                        <ClassicBox cssClass="gap-4 max-w-4/9 md:max-w-1/5">
                            <img
                                src="/images/teamFrancisco.jpg"
                                alt="Francisco"
                                className="rounded-2xl"
                            />
                            <Body>
                                Céline travaille sur des aspects plus graphiques
                                et illustratifs du projet. Elle décline la
                                direction artistique avec soin à travers des
                                compositions claires, harmonieuses et
                                expressives.
                            </Body>
                        </ClassicBox>
                        <ClassicBox cssClass="gap-4 max-w-4/9 md:max-w-1/5">
                            <img
                                src="/images/teamFrancisco.jpg"
                                alt="Francisco"
                                className="rounded-2xl"
                            />
                            <Body>
                                Axel conçoit l’interactivité du site, en mêlant
                                design d’interface et développement. Il a aussi
                                contribué à poser les bases de la direction
                                artistique, centrée sur l’émotion et
                                l’expérience utilisateur.
                            </Body>
                        </ClassicBox>
                        <ClassicBox cssClass="gap-4 max-w-4/9 md:max-w-1/5">
                            <img
                                src="/images/teamFrancisco.jpg"
                                alt="Francisco"
                                className="rounded-2xl"
                            />
                            <Body>
                                Eliott, développeur principal du projet, il fait
                                preuve d’une rigueur précieuse. Son travail
                                garantit une solution technique fiable et
                                fluide, essentielle à l’expérience utilisateur.
                            </Body>
                        </ClassicBox>
                    </ClassicSection>
                </div>

                <BottomCallActionSection />
            </FondBlanc>
        </>
    )
}
