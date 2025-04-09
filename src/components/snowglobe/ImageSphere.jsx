import { useState, useRef } from 'react'

const ImageSphere = ({ onSelectTexture }) => {
    const imageSpheres = [
        {
            src: '/images/zerry_pfp.png',
            alt: 'pfp zerry',
        },
        {
            src: '/images/pfp_pogachar_capxelio.png',
            alt: 'pfp pogachar',
        },
        {
            src: '/images/pfp_revan.png',
            alt: 'pfp revan',
        },
    ]

    const fileInputRef = useRef(null)
    const [imageTexture, setImageTexture] = useState(null) // Stockage local de l'image sélectionnée

    // const handleImageClick = (imageSrc) => {
    //     setImageTexture(imageSrc) // Mise à jour locale
    //     onSelectTexture(imageSrc) // Envoi au parent
    // }

    // Transformation de l'image en base64 pour l'afficher en texture
    const handleImageSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageTexture(reader.result)
                onSelectTexture(reader.result) // Envoi au parent
            }
            reader.onerror = () => {
                alert("Erreur lors du chargement de l'image.")
            }
            reader.readAsDataURL(file)
        } else {
            alert('Veuillez sélectionner une image valide.')
        }
    }

    return (
        <div className="py-6 flex flex-col gap-2">
            <h4 className="font-semibold font-manrope text-span3">
                Vos propres images
            </h4>
            <div className="flex gap-2 items-center bg-amber-400 w-16 h-16">
                {imageSpheres.map((image, index) => (
                    <button
                        key={index} // Utilisation de l'index pour éviter les doublons
                        className={`relative w-16 h-16 rounded-xl overflow-hidden p-0.5 box-border border-2 ${
                            imageTexture === image.src
                                ? 'border-black'
                                : 'border-transparent'
                        }`}
                        onClick={() => handleImageClick(image.src)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-16 h-16 rounded-lg"
                        />
                        {imageTexture === image.src && (
                            <div className="absolute top-0 right-0 rounded-full p-0.5">
                                <img
                                    src="/images/less.svg"
                                    alt="icone less"
                                    className="h-5 w-5"
                                />
                            </div>
                        )}
                    </button>
                ))}

                {/* <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageSelect}
                    accept="image/*"
                />
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="cta-button-black w-18 h-18 flex-col gap-1 m-0.5 py-2.5 px-1.5 rounded-2xl"
                >
                    <img
                        className="w-4.5 h-4.5"
                        src="/images/Download.svg"
                        alt="Ajouter une image"
                    />
                    Ajouter
                </button> */}
            </div>
            <p>
                <span>Astuce : </span>Cliquez sur l'image, maintenez et
                glissez-la jusqu'à l'emplacement souhaité dans la boule.
            </p>
        </div>
    )
}

export default ImageSphere
