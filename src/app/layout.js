import Header from '../components/Header'
import './globals.css'

export const metadata = {
    title: 'Holosphere',
    description:
        'Holosphere est une entreprise qui propose des boules à neige personnalisées avec vos souvenirs',
    // Pas besoin de la balise <link> ici puisque Manrope est déjà chargé via next/font/google
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
