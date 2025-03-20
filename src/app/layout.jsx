import Header from '../components/Header/index.jsx'
import './globals.css'

export const metadata = {
    title: 'Holosphere',
    description:
        'Holosphere est une entreprise qui propose des boules à neige personnalisées avec vos souvenirs',
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
