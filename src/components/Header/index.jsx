'use client'
import { useState } from 'react'
import Link from 'next/link'
import routes from '../../routes.jsx'
import CTAButton from '../Buttons/CTAButton.jsx'
import './styles.css'
import MenuDesktop from '../Menu/MenuDesktop/index.jsx'
import { usePathname } from 'next/navigation'
import Burger from '../Burger/index.jsx'
import MobileMenu from '../Menu/MenuMobile/index.jsx'

export default function Header() {
    const pathname = usePathname()
    const dissimulGetButton = pathname === '/get'
    const [open, setOpen] = useState(false)

    return (
        <header className="h-25 text-white p-4 flex gap-4">
            <ul className="flex justify-around w-full items-center">
                <li>
                    <Link href={routes.home}>
                        <img
                            className="h-10"
                            src="/images/logos/logo-home-white.svg"
                            alt="Logo Holosphere"
                        />
                    </Link>
                </li>
                <MenuDesktop
                    currentPage={pathname}
                    cssClass="max-[900px]:hidden"
                />
                <li className="max-[900px]:hidden">
                    {dissimulGetButton ? (
                        <CTAButton href="get" variant="secondary">
                            Obtenir la vôtre
                        </CTAButton>
                    ) : (
                        <CTAButton href="get" iconName="shoppingBag">
                            Obtenir la vôtre
                        </CTAButton>
                    )}
                </li>
                <li className="max-[900px]:block min-[900px]:hidden">
                    <Burger open={open} setOpen={setOpen} />
                </li>
            </ul>
            <MobileMenu currentPage={pathname} open={open} setOpen={setOpen} />
        </header>
    )
}
