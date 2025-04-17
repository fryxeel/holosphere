import ItemMenu from '../ItemMenu'
import Link from 'next/link'
import routes from '../../../routes.jsx'

function MenuDesktop({ currentPage, cssClass = '' }) {
    return (
        <ul className={`${cssClass} flex gap-16`}>
            <Link href={routes.home}>
                <ItemMenu active={currentPage == '/'}>Accueil</ItemMenu>
            </Link>
            <Link href={routes.personnalisation}>
                <ItemMenu
                    active={currentPage == '/personnalisation'}
                    iconName="filled_stars"
                >
                    Personnalisation
                </ItemMenu>
            </Link>
            <Link href={routes.story}>
                <ItemMenu active={currentPage == '/story'}>
                    Notre histoire
                </ItemMenu>
            </Link>
        </ul>
    )
}

export default MenuDesktop
