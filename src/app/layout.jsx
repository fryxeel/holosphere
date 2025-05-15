import './globals.css'
import LayoutWrapper from '../components/layoutwrapper'

export const metadata = {
    title: 'Holosphere',
    description:
        'Holosphere est une entreprise qui propose des boules à neige personnalisées avec vos souvenirs',
}

export default function RootLayout({ children }) {
    return (
        <html className="overflow-x-hidden max-w-[100vw]" lang="fr">
            <body className="overflow-x-hidden max-w-[100vw]">
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    )
}
