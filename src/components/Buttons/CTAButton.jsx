import clsx from 'clsx'
import Link from 'next/link'
import './style.css'
export default function CTAButton({
    children,
    href = '#',
    variant = 'primary' | 'secondary' | 'third',
    className = '',
}) {
    // Définir un thème par défaut
    const defaultVariantTheme =
        "inline-block px-4 py-3 text-base font-medium rounded-xl relative cursor-pointer transition-all duration-300 ease-out font-manrope before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:right-[-4px] before:bottom-[-4px] before:border-2 before:rounded-2xl before:transition-opacity before:duration-300 hover:before:opacity-0"

    let variantSwitcher = ''
    let finalHref = href

    // Logique pour ne pas avoir '#' quand le variant est 'third'
    if (variant === 'third') {
        finalHref = '' // ou toute autre valeur valide si vous ne voulez pas de '#'
    }

    switch (variant) {
        case 'primary':
            variantSwitcher =
                defaultVariantTheme +
                ' ' +
                'text-black bg-white before:border-white'
            break
        case 'secondary':
            variantSwitcher =
                defaultVariantTheme +
                ' ' +
                'text-white bg-white/10 before:border-white/10'
            break
        case 'third':
            variantSwitcher =
                defaultVariantTheme +
                ' ' +
                'text-black bg-[#FAC37E] before:border-[#FAC37E]'
            break
        default:
            variantSwitcher =
                defaultVariantTheme +
                ' ' +
                'text-black bg-white before:border-white'
            break
    }

    return (
        <Link href={finalHref} className={clsx(variantSwitcher, className)}>
            {children}
        </Link>
    )
}
