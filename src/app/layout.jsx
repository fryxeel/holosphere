import './globals.css'
import LayoutWrapper from '../components/layoutwrapper'

export const metadata = {
    title: 'Holosphere',
    description:
        'Holosphere est une entreprise qui propose des boules à neige personnalisées avec vos souvenirs',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </body>
        </html>
    )
}
