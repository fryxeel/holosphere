import ClassicSection from '../ClassicSection'
import Body from '../Text/Body'
import CTAButton from '../Buttons/CTAButton'
import './styles.css'
import ClassicBox from '../ClassicBox'

function BottomCallActionSection() {
    return (
        <ClassicSection cssClass="bottomCallActionSection rounded-3xl py-16 px-8 sm:px-12 md:py-28 md:px-28">
            <ClassicBox cssClass="gap-10">
                <Body hierarchy={1} cssClass="text-center text-white">
                    HoloSphere, bien plus qu’un objet, c’est une véritable porte
                    vers vos souvenirs.
                </Body>
                <div className="flex gap-4 justify-center items-center flex-row flex-wrap">
                    <CTAButton href="get" iconName="shoppingCart">
                        Commander maintenant
                    </CTAButton>
                    <CTAButton href="/" variant="secondary">
                        Découvrir
                    </CTAButton>
                </div>
            </ClassicBox>
        </ClassicSection>
    )
}

export default BottomCallActionSection
