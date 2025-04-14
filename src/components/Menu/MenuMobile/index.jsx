'use client'

import { useState } from 'react'
import Link from 'next/link'
import routes from '@/routes'

export default function MenuMobile({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="z-50 relative flex flex-col gap-1 w-8 h-8 justify-center items-center"
            >
                <span
                    className={`bg-white h-0.5 w-full transition-transform duration-300 ${
                        isOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                />
                <span
                    className={`bg-white h-0.5 w-full transition-opacity duration-300 ${
                        isOpen ? 'opacity-0' : ''
                    }`}
                />
                <span
                    className={`bg-white h-0.5 w-full transition-transform duration-300 ${
                        isOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                />
            </button>

            <Link href={routes.home} onClick={toggleMenu}>
                Accueil
            </Link>
            <Link href={routes.personnalisation} onClick={toggleMenu}>
                Personnalisation
            </Link>
            <Link href={routes.story} onClick={toggleMenu}>
                Notre hostoire
            </Link>
            <Link
                href={routes.get}
                onClick={toggleMenu}
                className="bg-white text-black px-4 py-2 rounded-md"
            >
                Obtenir la vôtre
            </Link>
        </div>
    )
}
