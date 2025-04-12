'use client'

import Link from 'next/link'
import routes from '../../routes.jsx'
import CTAButton from '../Buttons/CTAButton.jsx'
import './styles.css'
import MenuDesktop from '../Menu/MenuDesktop/index.jsx'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className=" text-white p-4 flex gap-4">
            <ul className="flex justify-around w-full items-center">
                <li>
                    <Link href={routes.home}>
                        <img
                            className="h-10"
                            src="/images/logos/complet.svg"
                            alt="Logo Holosphere"
                        />
                    </Link>
                </li>
                <MenuDesktop currentPage={pathname} />
                <li>
                    <CTAButton href="get" iconName="shoppingBag">
                        Obtenir la vôtre
                    </CTAButton>
                </li>
            </ul>
        </header>
    )
}
