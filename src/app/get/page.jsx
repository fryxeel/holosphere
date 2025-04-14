'use client'

import { useState } from 'react'
import ClassicSection from '@/components/ClassicSection'
import FondBlanc from '@/components/FondBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import MaterialSelector from '@/components/snowglobe/TextureSocle'
import CTAButton from '@/components/Buttons/CTAButton'

export default function Get() {
    const [materialTexture, setMaterialTexture] = useState(null) // Texture pour la base
    return (
        <>
            <div className="h-4" />
            <FondBlanc smaller cssClass="p-10 flex justify-center">
                <ClassicSection cssClass="">
                    <div className="flex flex-col gap-4 lg:hidden">
                        <Title hierarchy={2}>Holosphere One</Title>
                        <Body>
                            La première sphère holographique connectée qui
                            projette vos souvenirs en images et vidéos.
                        </Body>
                        <div className="flex gap-2">
                            <Title hierarchy={3}>299€</Title>
                            <Body cssClass="text-dark/50">TVA incluses</Body>
                        </div>
                    </div>
                    <img
                        src="images/HolosphereMockup2_small.png"
                        alt="Image de l'Holosphere"
                        className="lg:w-1/2 aspect-[4/3] lg:aspect-[3/4] overflow-hidden object-cover rounded-2xl"
                    />
                    <article className="flex flex-col gap-8 lg:w-1/2">
                        <div className="hidden lg:flex flex-col gap-4">
                            <Title hierarchy={2}>Holosphere One</Title>
                            <Body>
                                La première sphère holographique connectée qui
                                projette vos souvenirs en images et vidéos.
                            </Body>
                            <div className="flex gap-2">
                                <Title hierarchy={3}>299€</Title>
                                <Body cssClass="text-dark/50">
                                    TVA incluses
                                </Body>
                            </div>
                        </div>

                        <MaterialSelector
                            onSelectMaterial={setMaterialTexture}
                        />

                        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                            <CTAButton
                                darkBG
                                iconName="shoppingCart"
                                className="w-full"
                            >
                                Ajouter au panier
                            </CTAButton>
                            <CTAButton
                                darkBG
                                iconName="share"
                                variant="secondary"
                                className="w-full sm:w-auto"
                            >
                                Partager
                            </CTAButton>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Title
                                hierarchy={3}
                                homePage
                                cssClass="text-pretty"
                            >
                                Vos souvenirs prennent vie
                            </Title>
                            <Body>
                                Plongez au cœur de vos souvenirs avec l’
                                <span>Holosphere One</span>, l'objet connecté
                                qui
                                <span>sublime vos moments précieux</span> en
                                hologrammes flottants. Grâce à sa technologie
                                innovante, il projette photos et vidéos en 3D au
                                centre d'une élégante sphère, offrant une{' '}
                                <span>
                                    expérience visuelle fascinante et immersive
                                </span>
                                . Personnalisez vos projections, partagez-les
                                avec vos proches et{' '}
                                <span>laissez la magie opérer</span> à chaque
                                regard.
                            </Body>
                        </div>
                    </article>
                </ClassicSection>
            </FondBlanc>
        </>
    )
}
