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
                        className={`relative w-16 h-16 rounded-[10px] p-0.5 border-2 overflow-hidden ${
                            selectedMaterial === material.src
                                ? 'border-black'
                                : 'border-transparent'
                        }`}
                        onClick={() => handleSelect(material.src)}
                    >
                        <img
                            src={material.src}
                            alt={material.text}
                            className="w-full h-full rounded-lg"
                        />
                        {selectedMaterial === material.src && (
                            <div className="absolute bottom-0 left-0 z-10">
                                <img
                                    src="/images/Checked.svg"
                                    alt="icone check"
                                    className="h-[28px] w-[28px]"
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
