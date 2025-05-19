import React from 'react'
import { clsx } from 'clsx'
import './style.css'
import BoxBlanc from '@/components/BoxBlanc'
import Body from '@/components/Text/Body'
import Title from '@/components/Text/Title'
import Icon from '@/components/Icon'

const CardsGameHome = ({
    width = 'w-[400px]',
    height = 'h-[400px]',
    img = '/images/sphereToSell/black_base.svg',
    imgW = 'w-[325px]',
    className,
    nbrLikes = 10,
    name = 'Holosphere',
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
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="218"
                    height="175"
                    viewBox="0 0 218 175"
                    fill="none"
                    className="absolute top-0"
                >
                    <path
                        d="M51.8869 -184.416C87.0882 -205.109 124.03 -255.289 123.542 -265.598C123.037 -276.266 110.918 -275.83 109.459 -266.021C108.452 -259.252 123.581 -226.693 152.378 -218.005C188.739 -207.034 222.322 -184.65 212.726 -144.796C206.42 -118.607 157.894 -24.114 129.847 21.5515C101.801 67.217 68.1061 69.2233 60.4689 56.9423C51.9345 43.2189 70.6482 38.531 74.3479 52.711C78.0475 66.8909 57.575 122.309 33.1557 149.598C11.6304 173.653 -23.2489 180.329 -48.4357 157.575C-73.8203 134.643 -103.689 93.0739 -68.0136 20.957"
                        stroke="white"
                        strokeWidth="6"
                    />
                </svg>
                <img
                    className={clsx(imgW, 'absolute top-2 right-2')}
                    src={img}
                    alt="votre holosphere personnalisé"
                    loading="lazy"
                />
            </div>

            <BoxBlanc>
                <div className="flex justify-between items-center">
                    <div>
                        <Body hierarchy={3} cssClass="opacity-50">
                            Ma création
                        </Body>
                        <Title hierarchy={3} homePage>
                            {name}
                        </Title>
                    </div>
                </div>
            </BoxBlanc>
        </div>
    )
}

export default CardsGameHome
