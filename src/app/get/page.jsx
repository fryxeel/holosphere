'use client'

import { useState } from 'react'
import ClassicSection from '@/components/ClassicSection'
import FondBlanc from '@/components/FondBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import MaterialSelector from '@/components/snowglobe/TextureSocle'
import CTAButton from '@/components/Buttons/CTAButton'
import Icon from '@/components/Icon'

export default function Get() {
    const [materialTexture, setMaterialTexture] = useState(null) // Texture pour la base
    return (
        <>
            <div className="h-4" />
            <FondBlanc smaller cssClass="p-10 flex justify-center">
                <ClassicSection>
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
                        className="max-h-1/3 lg:w-1/2 aspect-[4/3] lg:aspect-[3/4] overflow-hidden object-cover rounded-2xl"
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
                                href="panier"
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
                        <div className="rounded-xl border-2 border-[#CECFD2]">
                            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#CECFD2]">
                                <div>
                                    <div>
                                        <Icon
                                            color="black"
                                            name={'truck'}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <Body hierarchy={4}>
                                            mar 25 mars - jeu 27 mars
                                        </Body>
                                    </div>
                                    <div>
                                        <Body hierarchy={3}>
                                            Livraison standard
                                        </Body>
                                    </div>
                                </div>
                                <div>
                                    <Body hierarchy={4}>gratuite</Body>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#CECFD2]">
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Icon color="black" name={'speed'} />
                                        <Icon
                                            color="black"
                                            name={'truck'}
                                            height={28}
                                        />
                                    </div>
                                    <div>
                                        <Body hierarchy={4}>
                                            lun 24 mars - mer 25 mars
                                        </Body>
                                    </div>
                                    <div>
                                        <Body hierarchy={3}>
                                            Livraison premium
                                        </Body>
                                    </div>
                                </div>
                                <div>
                                    <Body hierarchy={4}>5,50€</Body>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#CECFD2]">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            color="black"
                                            name={'package'}
                                            height={28}
                                        />
                                        <Body hierarchy={4}>
                                            Livraison et retour gratuits
                                        </Body>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 py-5">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            color="black"
                                            name={'return'}
                                            height={28}
                                        />
                                        <Body hierarchy={4}>
                                            Retour gratuit sous 30 jours
                                        </Body>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Title hierarchy={3} homePage>
                                Détails techniques
                            </Title>
                            <ul className="list-disc pl-6 space-y-2 pt-2">
                                <li>
                                    <Body hierarchy={3}>
                                        Hauteur : <span>20 cm</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Diamètre : <span>13 cm</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Poids : <span>700g</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Matériau : <span>verre acrylique</span>{' '}
                                        ultra-transparent
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>
                                            Technologie holographique 3D
                                        </span>{' '}
                                        haute définition
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Résolution d'affichage :{' '}
                                        <span>1080p</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Luminosité ajustable</span> (5
                                        niveaux)
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Système audio intégré 360º</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Connectivité :{' '}
                                        <span>Wi-Fi, Bluetooth 5.2</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Compatible avec{' '}
                                        <span>iOS et Android</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Application mobile dédiée</span>{' '}
                                        pour la gestion des contenus
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Stockage interne : <span>64 Go</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Autonomie : <span>12 heures</span>{' '}
                                        allumée sur batterie
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Recharge rapide</span> via USB-C
                                        (2 heures pour une charge complète)
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>
                                            Synchronisation multi-sphères
                                        </span>{' '}
                                        pour partager vos souvenirs
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Commande vocale</span> intégrée
                                        (compatible avec Alexa, Siri et Google
                                        Assistant)
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Détection de mouvement</span> pour
                                        changer de projection en secouant la
                                        sphère
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Modes de{' '}
                                        <span>projection personnalisables</span>{' '}
                                        (
                                        <a
                                            className="text-[#8C64C5]"
                                            href="/personnalisation"
                                        >
                                            essayez dès à présent les outils de
                                            personnalisation
                                        </a>
                                        )
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>
                                            Matériaux durables et résistants
                                        </span>{' '}
                                        aux chocs
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Mode <span>économie d’énergie</span>{' '}
                                        avec mise en veille automatique
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        <span>Mise à jour logicielle</span> pour
                                        de nouvelles fonctionnalités
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Garantie : <span>2 ans</span>
                                    </Body>
                                </li>
                                <li>
                                    <Body hierarchy={3}>
                                        Fabrication en matériaux{' '}
                                        <span>recyclés et recyclables</span>
                                    </Body>
                                </li>
                            </ul>
                        </div>
                    </article>
                </ClassicSection>
            </FondBlanc>
        </>
    )
}
