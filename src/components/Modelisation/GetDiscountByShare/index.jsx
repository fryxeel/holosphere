import React from 'react'
import BoxBlanc from '../../BoxBlanc'
import Title from '../../Text/Title'
import Body from '../../Text/Body'
import Icon from '../../Icon'
import clsx from 'clsx'

const GetDiscountByShare = ({
    captureFunction,
    forSmallerScreens = false,
    setShowPopupEnd,
}) => {
    function onClickGetDiscount() {
        captureFunction && captureFunction()
        setShowPopupEnd(true)
    }
    return (
        <BoxBlanc
            className={clsx(
                'flex-shrink-0',
                forSmallerScreens ? 'w-full' : 'w-sm'
            )}
        >
            <div className="flex flex-col gap-4">
                <Title hierarchy={3} cssClass="text-dark">
                    Imaginez, modelez, partagez !
                </Title>
                <Body hierarchy={3} cssClass="text-dark">
                    Utilisez le tag <span>#Holosphere</span> sur vos réseaux
                    pour débloquer <span> 5% de réduction</span> immédiate et
                    s’inscrire à notre concours pour -20%.
                </Body>
                <button
                    className="cta-button-orange"
                    onClick={() => onClickGetDiscount()}
                >
                    <Body hierarchy={3} cssClass="text-dark">
                        Débloquer mes réductions
                    </Body>
                    <Icon name="arrowRight" color="black" />
                </button>
            </div>
        </BoxBlanc>
    )
}

export default GetDiscountByShare
