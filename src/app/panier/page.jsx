'use client'
import React from 'react'
import { useState } from 'react'
import FondBlanc from '@/components/FondBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import Icon from '@/components/Icon'
import CheckBoxInput from '@/components/Inputs/CheckBox/index.jsx'
import InputText from '@/components/Inputs/InputText/index.jsx'
import FAQ from '@/components/Payement/FAQ'
const panier = () => {
    // const [isChecked, setIsChecked] = useState(false) // <-- Gère l'état ici
    // Un seul état pour toutes les checkboxes
    const [checkboxes, setCheckboxes] = useState({
        contact: false,
        same_address: true,
        save_info: false,
    })

    // Gestionnaire unique pour toutes les checkboxes
    const handleCheckboxChange = (name) => (e) => {
        setCheckboxes((prev) => ({
            ...prev,
            [name]: e.target.checked,
        }))
    }
    return (
        <>
            <div className="h-4" />

            <FondBlanc smaller cssClass="p-6 ">
                <div className="block lg:hidden sm:px-6 py-4">
                    {' '}
                    <Title hierarchy={1} homePage={false} cssClass="mb-2.5 ">
                        {' '}
                        Validation de commande
                    </Title>
                </div>

                <article className="flex flex-col-reverse lg:flex-row">
                    <div className="xl:w-[70%] sm:px-6 sm:py-4">
                        <Title
                            hierarchy={1}
                            homePage={false}
                            cssClass="mb-2.5 hidden lg:block"
                        >
                            Validation de commande
                        </Title>
                        <div className="my-12 sm:mx-2 md:m-8">
                            <div className="md:p-8 p-2">
                                <Title hierarchy={3} cssClass="mb-4">
                                    Paiement express
                                </Title>
                                <div className="flex gap-3 sm:gap-4 flex-wrap mb-10 w-full">
                                    {/* Bouton Apple Pay */}
                                    <div className="w-full sm:flex-1 bg-black rounded-lg flex items-center justify-center min-h-[60px] cursor-pointer">
                                        <img
                                            src="/images/Apple-Pay-Logo.svg"
                                            alt="Payer avec Apple Pay"
                                            className="h-8 object-contain" // Ajuste la hauteur selon besoin
                                        />
                                    </div>

                                    {/* Bouton Google Pay */}
                                    <div className="w-full sm:flex-1 bg-[#F0F1F4] rounded-lg flex items-center justify-center min-h-[60px] cursor-pointer">
                                        <img
                                            src="/images/Google-Pay-Logo.svg"
                                            alt="Payer avec Google Pay"
                                            className="h-8 object-contain"
                                        />
                                    </div>

                                    {/* Bouton PayPal */}
                                    <div className="w-full sm:flex-1 bg-[#F9C439] rounded-lg flex items-center justify-center min-h-[60px] cursor-pointer">
                                        <img
                                            src="/images/PayPal-logo.svg"
                                            alt="Payer avec PayPal"
                                            className="h-8 object-contain"
                                        />
                                    </div>
                                </div>
                                {/* Séparateur amélioré */}
                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t-1 border-dark/50"></div>
                                    </div>
                                    <div className="relative flex justify-center mb-10">
                                        <span className="px-4 bg-white text-dark text-sm">
                                            OU
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <Title hierarchy={2}>Contact</Title>
                                    <a href="#">
                                        <Body
                                            hierarchy={3}
                                            cssClass="text-[#9747FF] underline"
                                        >
                                            Se connecter
                                        </Body>
                                    </a>
                                </div>
                                <div className="my-4">
                                    <InputText
                                        type="text"
                                        placeholder="Email"
                                        label="email"
                                    ></InputText>
                                </div>
                                <div className="mb-10">
                                    <CheckBoxInput
                                        label="Actualités et offres exclusives par email"
                                        name="actualités"
                                        showLabel
                                        checked={checkboxes.contact}
                                        onChange={handleCheckboxChange(
                                            'contact'
                                        )}
                                    />
                                </div>
                                <div>
                                    <Title hierarchy={2} className="mb-4">
                                        Livraison
                                    </Title>
                                    <div className="space-y-4 mb-10">
                                        <InputText
                                            type="text"
                                            name="country"
                                            label="Pays"
                                            placeholder="France"
                                        />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputText
                                                type="text"
                                                name="lastname"
                                                label="Nom"
                                                placeholder="Dupont"
                                                required
                                            />
                                            <InputText
                                                type="text"
                                                name="firstname"
                                                label="Prénom"
                                                placeholder="Jean"
                                                required
                                            />
                                        </div>
                                        <InputText
                                            type="text"
                                            name="address"
                                            label="Adresse"
                                            placeholder="1 rue de la Paix"
                                            required
                                        />
                                        <InputText
                                            type="text"
                                            name="address2"
                                            label="Complément d'adresse (facultatif)"
                                            placeholder="Appartement, étage..."
                                        />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputText
                                                type="text"
                                                name="zipcode"
                                                label="Code postal"
                                                placeholder="75001"
                                                required
                                            />
                                            <InputText
                                                type="text"
                                                name="city"
                                                label="Ville"
                                                placeholder="Paris"
                                                required
                                            />
                                        </div>
                                        <InputText
                                            type="tel"
                                            name="phone"
                                            label="Téléphone"
                                            placeholder="06 12 34 56 78"
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <Title hierarchy={2} cssClass="mb-4">
                                            Sélection du mode d'expédition
                                        </Title>
                                        <div className="bg-[#ECECED] p-16 flex items center justify-center rounded-3xl">
                                            <Body
                                                hierarchy={3}
                                                cssClass="max-w-[300px]]"
                                            >
                                                Renseignez d'abord votre adresse
                                                pour découvrir les options de
                                                livraison disponibles.
                                            </Body>
                                        </div>
                                    </div>
                                    <div>
                                        <Title hierarchy={2} cssClass="mb-4">
                                            Paiement
                                        </Title>
                                        <div>
                                            <FAQ />
                                        </div>
                                    </div>
                                    <div className="pt-10">
                                        <Title hierarchy={2} cssClass="mb-4">
                                            Se souvenir de moi
                                        </Title>
                                        <div className="pb-10">
                                            <CheckBoxInput
                                                label="Enregistrer mes informations pour un paiement plus rapide"
                                                name="enregistrement paiement"
                                                showLabel
                                                checked={checkboxes.save_info}
                                                onChange={handleCheckboxChange(
                                                    'save_info'
                                                )}
                                            ></CheckBoxInput>
                                        </div>
                                        <div>
                                            <button className="cta-button-black-panier w-full flex gap-2">
                                                <Body hierarchy={3}>
                                                    Paiement sécurisé
                                                </Body>
                                                <Icon name={'lock'} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-8 bg-dark/8 lg:w-[30%] rounded-3xl">
                        <Title hierarchy={2}>Votre panier</Title>
                        <div>
                            <div className="flex gap-4 items-center justify-between mt-8">
                                <div className="flex items-center gap-4 ">
                                    <div className="relative w-18 h-18 rounded-[10px] p-0.5 border-2 border-dark overflow-hidden">
                                        <img
                                            src="/images/sphereToSell/black_base.svg"
                                            alt=""
                                            className="w-full h-full rounded-lg bg-light"
                                        />
                                        <div className="absolute top-0 right-0 z-10 h-7 w-7">
                                            <div className="bg-dark p-[2px] rounded-lg border-2 border-white">
                                                <Body cssClass="text-center text-light !font-semibold">
                                                    1
                                                </Body>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Title
                                            hierarchy={3}
                                            cssClass="!font-semibold"
                                        >
                                            Holosphere One
                                        </Title>
                                        <Body hierarchy={3}>
                                            Socle en pierre sombre
                                        </Body>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Body hierarchy={4}>299€</Body>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center justify-between mt-8">
                                <div className="flex items-center gap-4 ">
                                    <div className="relative w-18 h-18 rounded-[10px] p-0.5 border-2 border-dark overflow-hidden">
                                        <img
                                            src="/images/sphereToSell/cable5m.png"
                                            alt=""
                                            className="w-full h-full rounded-lg"
                                        />
                                        <div className="absolute top-0 right-0 z-10 h-7 w-7">
                                            <div className="bg-dark p-[2px] rounded-lg border-2 border-white">
                                                <Body cssClass="text-center text-light !font-semibold">
                                                    1
                                                </Body>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Title
                                            hierarchy={3}
                                            cssClass="!font-semibold"
                                        >
                                            Câble de chargement
                                        </Title>
                                        <Body hierarchy={3}>Longueur 5m</Body>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Body hierarchy={4}>29€</Body>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Title hierarchy={3} cssClass="mb-2">
                                    Code promotionnel
                                </Title>
                                <div className="flex items-center gap-2 promo">
                                    <InputText
                                        type="text"
                                        label="code promo"
                                        name="promo"
                                        placeholder="Un code promo? Tapez-le ici"
                                        className="w-full lg:w-3/4 input-promo"
                                    />
                                    <button className="cta-button-black-panier h-[52px] w-auto">
                                        Appliquer
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="flex justify-between items-center">
                                    <Body hierarchy={3}>
                                        Sous-total (2 produits)
                                    </Body>
                                    <Body hierarchy={3}>328€</Body>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Body hierarchy={3}>Livraison</Body>
                                    <Body hierarchy={3}>
                                        Indiquez votre adresse
                                    </Body>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Body hierarchy={4}>Total</Body>
                                    <Body hierarchy={4}>328€</Body>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </FondBlanc>
        </>
    )
}

export default panier
