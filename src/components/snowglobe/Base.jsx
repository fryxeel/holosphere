'use client'
const Base = () => {
    return (
        <mesh position={[0, -1.2, 0]}>
            <cylinderGeometry args={[1.75, 1.75, 0.7, 64]} />
            <meshStandardMaterial
                color="white"
                roughness={0.7}
                metalness={0.3}
            />
        </mesh>
    )
}

export default Base
