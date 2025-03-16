'use client'
import { useState } from 'react'

export default function Personnalisation() {
    const [draggedItem, setDraggedItem] = useState(null)
    const [circleImage, setCircleImage] = useState(null) // Image initiale du cercle

    const handleDragStart = (e, image) => {
        setDraggedItem(image) // Stocke l'URL de l'image à déplacer
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setCircleImage(draggedItem) // Met à jour l'image du cercle avec celle du carré glissé
    }

    const handleDragOver = (e) => {
        e.preventDefault() // Permet au cercle d'accepter le dépôt
    }

    return (
        <>
            <div className="flex justify-center w-full h-screen">
                <div className="grid grid-cols-1 gap-5 w-full">
                    {/* Cercle où l'on dépose l'image */}
                    <div className="flex items-center">
                        <div
                            className="w-64 h-64 rounded-full bg-gray-300 mx-auto flex items-center justify-center border border-gray-500"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            style={{
                                backgroundImage: circleImage
                                    ? `url(${circleImage})`
                                    : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {!circleImage && (
                                <span className="text-gray-700">
                                    Déposez une image
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Grille avec les images à glisser */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-10 p-4 justify-center bg-white h-40 rounded-xl">
                            {[
                                '/images/zerry_pfp.png',
                                '/images/pfp_pogachar_capxelio.png',
                                '/images/pfp_revan.png',
                                '/images/pfp_powder.png',
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className="w-32 h-32 bg-gray-200 cursor-pointer"
                                    draggable
                                    onDragStart={(e) =>
                                        handleDragStart(e, image)
                                    }
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
