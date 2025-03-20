'use client'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const SnowGlobeSphere = ({ texture, selectedTheme }) => {
    console.log(selectedTheme)
    return (
        <>
            <mesh position={[0, 0.5, 0]} rotation={[0, 150, 0]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshPhysicalMaterial
                    transparent
                    transmission={1}
                    ior={1.5}
                    roughness={0}
                    metalness={0.1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    thickness={0.5}
                    color="white"
                />
                {texture && (
                    <group position={[0, 0, 2]}>
                        <mesh
                            position={[0, 0, -2]}
                            rotation={[0, Math.PI / 2.5, 0]}
                        >
                            <planeGeometry args={[2, 2]} />
                            <meshBasicMaterial map={texture} opacity={1} />
                        </mesh>
                    </group>
                )}
                {selectedTheme &&
                    selectedTheme.map((item, index) => {
                        const model = useLoader(GLTFLoader, item.model)
                        return (
                            <primitive
                                key={index}
                                object={model.scene}
                                position={item.position}
                                scale={item.scale}
                            />
                        )
                    })}
            </mesh>
        </>
    )
}

export default SnowGlobeSphere
