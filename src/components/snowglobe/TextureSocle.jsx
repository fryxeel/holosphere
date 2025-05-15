import { useState } from 'react'
import Title from '../Text/Title'
import Body from '../Text/Body'
import Icon from '../Icon'

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
            <Title>Matériau du socle</Title>
            <div className="flex gap-2">
                {materials.map((material) => (
                    <button
                        key={material.src}
                        className={`relative w-16 h-16 rounded-[10px] p-0.5 border-2 overflow-hidden cursor-pointer ${
                            selectedMaterial === material.src
                                ? 'border-dark'
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
                                <div className="bg-dark p-[2px] rounded-lg border-2 border-white">
                                    <Icon
                                        color={'white'}
                                        name={'check'}
                                        height={20}
                                    />
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <Body>
                {materials.find((m) => m.src === selectedMaterial)?.text}
            </Body>
        </div>
    )
}

export default MaterialSelector
