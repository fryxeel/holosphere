import clsx from 'clsx'
import Link from 'next/link'
import './style.css'
import Icon from '../Icon'

export default function CTAButton({
    children,
    href = '#',
    variant = 'primary' | 'secondary',
    className = '',
    darkBG = false,
    iconName = false,
}) {
    // Définir un thème par défaut
    const defaultVariantTheme =
        "flex justify-center items-center gap-2 px-4 py-3 text-base font-medium rounded-xl relative cursor-pointer transition-all duration-300 ease-out font-manrope before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:right-[-4px] before:bottom-[-4px] before:border-2 before:rounded-2xl before:transition-opacity before:duration-300 hover:before:opacity-0"

    let variantSwitcher = ''

    switch (variant) {
        case 'primary':
            darkBG
                ? (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-light bg-dark before:border-dark')
                : (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-dark bg-light before:border-light')
            break
        case 'secondary':
            darkBG
                ? (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-dark bg-dark/10 before:border-dark/10')
                : (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-light bg-light/10 before:border-light/10')
            break
        default:
            darkBG
                ? (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-light bg-dark before:border-dark')
                : (variantSwitcher =
                      defaultVariantTheme +
                      ' ' +
                      'text-dark bg-light before:border-light')
            break
    }

    return (
        <Link href={href} className={clsx(variantSwitcher, className)}>
            {children}
            {iconName && (
                <Icon
                    name={iconName}
                    height={20}
                    color={darkBG ? 'white' : '#0d0f1e'}
                />
            )}
        </Link>
    )
}
