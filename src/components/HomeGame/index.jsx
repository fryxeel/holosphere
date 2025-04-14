import React from 'react'
import BoxBlanc from '../BoxBlanc'
import Title from '../Text/Title'
import Body from '../Text/Body'

const HomeGame = () => {
    return (
        <div className="bg-[#8C64C5] h-screen">
            <BoxBlanc className="">
                <div></div>
                <div>
                    <div>
                        <Title>
                            Personnalisez la magie. <br /> Faites vibrer votre
                            monde
                        </Title>
                    </div>
                </div>
                <div>
                    <div>
                        <Body hierarchy={2}>
                            Devenez <span>sculpteur de souvenir</span> l’espace
                            d’un instant et
                            <span>explorez toutes les possibilités</span> depuis
                            votre imagination.
                        </Body>
                    </div>
                </div>
            </BoxBlanc>
        </div>
    )
}

export default HomeGame
