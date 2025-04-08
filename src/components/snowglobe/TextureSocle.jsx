import { useState } from 'react'

const MaterialSelector = ({ onSelectMaterial }) => {
    const materials = [
        { src: '/textures/Wood003_2K-JPG_Color.jpg', text: 'Bois de chêne' },
        {
            src: '/textures/Fabric062_2K-JPG_AmbientOcclusion.jpg',
            text: 'Tissu',
        },
        { src: '/textures/Asphalt025B_2K-JPG_Color.jpg', text: 'Asphalte' },
        {
            src: '/textures/NightSkyHDRI007_2K-TONEMAPPED.jpg',
            text: 'Ciel étoilé',
        },
    ]

    const [selectedMaterial, setSelectedMaterial] = useState(materials[0].src)

    const handleSelect = (src) => {
        setSelectedMaterial(src)
        onSelectMaterial(src)
    }

    return (
        <div className="space-y-3">
            <h4 className="font-semibold font-manrope text-span3 ">
                Matériau du socle
            </h4>
            <div className="flex gap-2">
                {materials.map((material) => (
                    <button
                        key={material.src}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden p-0.5 box-border border-2 ${
                            selectedMaterial === material.src
                                ? 'border-black'
                                : 'border-transparent'
                        }`}
                        onClick={() => handleSelect(material.src)}
                    >
                        <img
                            src={material.src}
                            alt={material.text}
                            className="w-14 h-14 object-cover rounded-lg"
                        />
                        {selectedMaterial === material.src && (
                            <div className="absolute bottom-0 left-0 rounded-full p-0.5">
                                <img
                                    src="/images/Checked.svg"
                                    alt="icone check"
                                    className="h-5 w-5"
                                />
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <p className="text-sm font-regular">
                {materials.find((m) => m.src === selectedMaterial)?.text}
            </p>
        </div>
    )
}

export default MaterialSelector
