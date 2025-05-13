import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import routes from '../../../routes.jsx'
import ItemMenu from '../ItemMenu'
import CTAButton from '@/components/Buttons/CTAButton.jsx'

export default function MobileMenu({ open, setOpen, currentPage }) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])
    return (
        <nav
            className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-10 z-40 transition-transform duration-300  ${
                open ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div>
                <Link href={routes.home} onClick={() => setOpen(false)}>
                    <img
                        className="h-10"
                        src="/images/logos/logo-home-black-starsColored.svg"
                        alt="Logo Holosphere"
                    />
                </Link>
            </div>
            <div></div>

            <Link href={routes.home} onClick={() => setOpen(false)}>
                <ItemMenu active={currentPage == '/'} mobile>
                    Accueil
                </ItemMenu>
            </Link>
            <Link href={routes.personnalisation} onClick={() => setOpen(false)}>
                <ItemMenu
                    active={currentPage == '/personnalisation'}
                    mobile
                    iconName="filled_stars"
                >
                    Modélisation
                </ItemMenu>
            </Link>
            <Link href={routes.story} onClick={() => setOpen(false)}>
                <ItemMenu active={currentPage == '/story'} mobile>
                    Notre histoire
                </ItemMenu>
            </Link>
            <div onClick={() => setOpen(false)}>
                <CTAButton href="/get" darkBG>
                    Obtenir la vôtre
                </CTAButton>
            </div>
        </nav>
    )
}
