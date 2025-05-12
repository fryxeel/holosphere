'use client'

import { usePathname } from 'next/navigation'
import Footer from '../components/Footer/footer.jsx'
import Header from '../components/Header/index.jsx'

export default function LayoutWrapper({ children }) {
    const pathname = usePathname()
    const hideFooter = pathname === '/personnalisation'

    return (
        <>
            <Header />
            {children}
            {!hideFooter && <Footer />}
        </>
    )
}
