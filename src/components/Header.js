import Link from 'next/link'
import routes from '../routes.js'
import CTAButton from './CTAButton.js'
export default function Header() {
    const liClass = 'font-manrope text-base opacity-70 font-regular'
    return (
        <header className=" text-white p-4 flex gap-4 font-manrope text-base ">
            <ul className="flex justify-around w-full items-center">
                <li>
                    <Link href={routes.home}>
                        <img
                            src="/images/logos/complet.svg"
                            alt="Logo Holosphere"
                        />
                    </Link>
                </li>
                <div className="flex justify-around gap-10">
                    <li>
                        <Link href={routes.home} className={liClass}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href={routes.detail} className={liClass}>
                            Personnalisation
                        </Link>
                    </li>
                    <li>
                        <Link href={routes.story} className={liClass}>
                            Notre histoire
                        </Link>
                    </li>
                </div>
                <li>
                    <CTAButton href="get">
                        Obtenir la vôtre
                    </CTAButton>
                </li>
            </ul>
        </header>
    )
}
