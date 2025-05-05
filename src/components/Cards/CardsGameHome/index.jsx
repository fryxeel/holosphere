import React from 'react'
import { clsx } from 'clsx'
import './style.css'
import BoxBlanc from '@/components/BoxBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import Icon from '@/components/Icon'

const CardsGameHome = ({
    width = 'w-[300px]',
    height = 'h-[300px]',
    img = '/images/sphereToSell/black_base.svg',
    imgW = '',
    className,
    nbrLikes = 10,
    name = 'eliott',
}) => {
    return (
        <div
            className={clsx(
                width,
                height,
                ' rounded-3xl cardGameHome flex flex-col justify-end',
                className
            )}
        >
            <img
                className={clsx(imgW, 'absolute top-1 left-2')}
                src={img}
                alt=""
            />
            <BoxBlanc>
                <div className="flex justify-between items-center">
                    <div>
                        <Body hierarchy={3} cssClass="opacity-50">
                            Créé par{' '}
                        </Body>
                        <Title hierarchy={3} homePage>
                            {name}
                        </Title>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Icon name="like" color="orange" height="16px" />
                        <Body hierarchy={3} cssClass="text-orange">
                            {nbrLikes}
                        </Body>
                    </div>
                </div>
            </BoxBlanc>
        </div>
    )
}

export default CardsGameHome
