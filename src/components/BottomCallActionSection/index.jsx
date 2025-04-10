import ClassicSection from '../ClassicSection'
import Body from '../Text/Body'
import CTAButton from '../Buttons/CTAButton'
import './styles.css'
import ClassicBox from '../ClassicBox'

function BottomCallActionSection() {
    return (
        <ClassicSection cssClass="bottomCallActionSection rounded-3xl py-28 px-28">
            <ClassicBox cssClass="gap-10">
                <Body hierarchy={1} cssClass="text-center text-white">
                    HoloSphere, bien plus qu’un objet, c’est une véritable porte
                    vers vos souvenirs.
                </Body>
                <div className="flex gap-2 justify-center">
                    <CTAButton href="get">Commander maintenant</CTAButton>
                    <CTAButton href="get" variant="secondary">
                        Découvrir
                    </CTAButton>
                </div>
            </ClassicBox>
        </ClassicSection>
    )
}

export default BottomCallActionSection
