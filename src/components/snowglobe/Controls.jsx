'use client'
import { OrbitControls } from '@react-three/drei'

const Controls = () => {
    return (
        <OrbitControls
            target={[0, 1.5, 0]}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
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
