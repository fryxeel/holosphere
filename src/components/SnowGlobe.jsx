import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import React from 'react'

const SnowGlobe = () => {
  const { scene } = useGLTF('/models/holosphere_v3.glb')

  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={0.5} position={[0, -1.3, 0]} />
    </Suspense>
  )
}


const Scene = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000' // Pour voir si le centrage fonctionne bien
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        style={{ width: '500px', height: '500px' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 3]} intensity={1} />
        <SnowGlobe />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}


export default Scene
