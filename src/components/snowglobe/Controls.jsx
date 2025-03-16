'use client'
import { OrbitControls } from '@react-three/drei'

const Controls = () => {
    return (
        <OrbitControls
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.34}
            panSpeed={0.5}
            zoomSpeed={0.5}
            minDistance={7.3}
            maxDistance={10}
        />
    )
}

export default Controls
