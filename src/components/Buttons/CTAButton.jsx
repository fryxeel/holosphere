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
    onclick,
}) {
    // Définir un thème par défaut
    const defaultVariantTheme =
        "button-typo flex justify-center items-center gap-2 px-4 py-3 text-base rounded-xl relative cursor-pointer transition-all duration-300 ease-out before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:right-[-4px] before:bottom-[-4px] before:border-2 before:rounded-2xl before:transition-opacity before:duration-300 hover:before:opacity-0"

    let variantSwitcher = ''
    let iconColor = ''

    switch (variant) {
        case 'primary':
            if (darkBG) {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-light bg-dark before:border-dark'
                iconColor = 'white'
            } else {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-dark bg-light before:border-light'
                iconColor = '#0d0f1e'
            }

            break
        case 'secondary':
            if (darkBG) {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-dark bg-dark/10 before:border-dark/10'
                iconColor = '#0d0f1e'
            } else {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-light bg-light/10 before:border-light/10'
                iconColor = 'white'
            }

            break
        default:
            if (darkBG) {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-light bg-dark before:border-dark'
                iconColor = 'white'
            } else {
                variantSwitcher =
                    defaultVariantTheme +
                    ' ' +
                    'text-dark bg-light before:border-light'
                iconColor = '#0d0f1e'
            }

            break
    }

    return (
        <Link
            href={href}
            className={clsx(variantSwitcher, className)}
            onClick={onclick}
        >
            {children}
            {iconName && <Icon name={iconName} height={18} color={iconColor} />}
        </Link>
    )
}
