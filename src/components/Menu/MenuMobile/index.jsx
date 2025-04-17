import React from 'react'
import Link from 'next/link'
import routes from '../../../routes.jsx'

export default function MobileMenu({ open, setOpen }) {
    return (
        <nav
            className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-6 z-40 transition-transform duration-300 ${
                open ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <Link href={routes.home} onClick={() => setOpen(false)}>
                Accueil
            </Link>
            <Link href={routes.story} onClick={() => setOpen(false)}>
                À propos
            </Link>
            <Link href={routes.get} onClick={() => setOpen(false)}>
                Obtenir la vôtre
            </Link>
        </nav>
    )
}
