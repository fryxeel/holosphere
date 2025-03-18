'use client'
const Base = () => {
    const spacing = 0.8 // Distance entre chaque mousse
    const foamPositions = [
        [spacing, -1.6, spacing], // Avant droite
        [-spacing, -1.6, spacing], // Avant gauche
        [spacing, -1.6, -spacing], // Arrière droite
        [-spacing, -1.6, -spacing], // Arrière gauche
    ]

    return (
        <>
            <mesh position={[0, -1.2, 0]}>
                <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
                <meshStandardMaterial
                    color="white"
                    roughness={0.7}
                    metalness={0.3}
                />
            </mesh>
            {foamPositions.map((pos, index) => (
                <mesh key={index} position={pos}>
                    <cylinderGeometry args={[0.3, 0.3, 0.09, 64]} />
                    <meshStandardMaterial
                        color="grey"
                        roughness={0.7}
                        metalness={0.3}
                    />
                </mesh>
            ))}
        </>
    )
}

export default Base
