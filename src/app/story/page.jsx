import FondBlanc from '@/components/FondBlanc'
import Text from '@/components/Text'

export default function Story() {
    return (
        <>
            <div className="text-white text-3xl pt-[60px] pb-[80px]">
                <p className="text-span3 font-manrope text-center">
                    À propos de notre histoire
                </p>
                <h1 className="text-span1 font-recoleta text-center ">
                    Holosphere : La Magie des Souvenirs Réinventée
                </h1>
                <Text type="title" hierarchy="3">
                    Mamamia
                </Text>
            </div>
            <FondBlanc className="h-screen w-full"></FondBlanc>
        </>
    )
}
