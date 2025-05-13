import React from 'react'
import BoxBlanc from '../../BoxBlanc'
import Title from '../../Text/Title'
import Body from '../../Text/Body'
import Icon from '../../Icon'
import clsx from 'clsx'

const GetDiscountByShare = ({ captureFunction, forSmallerScreens = false }) => {
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
                    Partagez votre création avec le tag <span>#holosphere</span>{' '}
                    et tentez de remporter des réductions exclusives, jusqu’à
                    50% !
                </Body>
                <button
                    className="cta-button-orange"
                    onClick={() => captureFunction && captureFunction()}
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
