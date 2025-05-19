import React from 'react'
import Body from '../Text/Body'

const HomeText = () => {
    return (
        <div id="discover">
            <div className="flex justify-center items-center flex-col pt-80 lg:px-70 md:px-50 sm:px-10 gap-12">
                <div>
                    <Body
                        hierarchy={3}
                        cssClass="text-white text-center opacity-50"
                    >
                        DÉCOUVREZ UNE NOUVELLE DIMENSION
                    </Body>
                </div>
                <div className="p-2.5 ">
                    <Body hierarchy={1} cssClass="text-white text-center">
                        L’HoloSphère allie technologie et émotion pour{' '}
                        <span>donner vie à vos souvenirs</span> à travers une
                        projection immersive et une musique synchronisée.
                    </Body>
                </div>
            </div>
        </div>
    )
}

export default HomeText
