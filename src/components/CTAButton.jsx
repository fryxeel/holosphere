import clsx from 'clsx'
import Link from 'next/link'

export default function CTAButton({
    children,
    href = '#',
    variant = 'primary' | 'secondary',
    //si on veut ajouter un style on utilisera clsx pour ajouter une class dans le className de l'élément
    className = '', //c'est pour du facultatif par exemple si on veut surprimer le le bouton quand on est sur téléphone
}) {
    //definission d'un theme par défaut
    const defaultVariantTheme =
        "inline-block px-4 py-3 text-base font-medium rounded-xl relative cursor-pointer transition-all duration-300 ease-out font-manrope before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:right-[-4px] before:bottom-[-4px] before:border-2 before:rounded-2xl before:transition-opacity before:duration-300 hover:before:opacity-0"
    let variantSwitcher = ''

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
        default:
            variantSwitcher =
                defaultVariantTheme +
                ' ' +
                'text-black bg-white before:border-white'
            break
    }

    return (
        <Link href={href} className={clsx(variantSwitcher, className)}>
            {children}
        </Link>
    )
}

// import Link from 'next/link';
// import styled, { css } from 'styled-components';

// const ButtonBase = css`
//   display: inline-block;
//   padding: 0.75rem 1rem;
//   font-size: 1rem;
//   font-weight: 500;
//   border-radius: 1.25rem;
//   position: relative;
//   cursor: pointer;
//   transition: all 0.3s ease-out;
//   font-family: 'Manrope', sans-serif;
//   &::before {
//     content: '';
//     position: absolute;
//     top: -4px;
//     left: -4px;
//     right: -4px;
//     bottom: -4px;
//     border: 2px solid;
//     border-radius: 1.5rem;
//     transition: opacity 0.3s ease-out;
//   }
//   &:hover::before {
//     opacity: 0;
//   }
// `;

// const PrimaryButton = styled.a`
//   ${ButtonBase}
//   color: black;
//   background-color: white;
//   &::before {
//     border-color: white;
//   }
// `;

// const SecondaryButton = styled.a`
//   ${ButtonBase}
//   color: white;
//   background-color: rgba(255, 255, 255, 0.1);
//   &::before {
//     border-color: rgba(255, 255, 255, 0.1);
//   }
// `;

// const CTAButtonWrapper = ({ children, href, variant, className }) => {
//   switch (variant) {
//     case 'primary':
//       return (
//         <PrimaryButton href={href} className={className}>
//           {children}
//         </PrimaryButton>
//       );
//     case 'secondary':
//       return (
//         <SecondaryButton href={href} className={className}>
//           {children}
//         </SecondaryButton>
//       );
//     default:
//       return (
//         <PrimaryButton href={href} className={className}>
//           {children}
//         </PrimaryButton>
//       );
//   }
// };

// export default function CTAButton({
//   children,
//   href = '#',
//   variant = 'primary',
//   className = '',
// }) {
//   return <CTAButtonWrapper href={href} variant={variant} className={className}>{children}</CTAButtonWrapper>;
// }
