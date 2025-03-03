import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Scene = () => {
  const [scroll, setScroll] = useState(0) // Position du scroll
  const globeRef = useRef() // Référence pour la boule à neige (GLTF)

  // Charger le modèle GLTF
  const { scene } = useGLTF('/models/holosphere_v3.glb')

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY) // Mise à jour de la position du scroll
    }

    // Écoute de l'événement scroll
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Nettoyage
  }, [])

  // Calcul du pourcentage du scroll
  const scrollPercentage = Math.min(scroll / (document.documentElement.scrollHeight - window.innerHeight), 1)

  // Limiter la rotation à 360° en fonction du pourcentage du scroll
  const rotation = scrollPercentage * Math.PI * 2 // De 0 à 2*PI, soit 360°

  return (
    <div style={{
      width: '100vw',
      height: '5000px', // S'assurer qu'il y a suffisamment de contenu pour défiler
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      position: 'relative'
    }}>
      {/* La boule à neige avec position fixe */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',  // Taille de la boule à neige
        height: '100%',
        pointerEvents: 'none' // Pour ne pas interférer avec les autres interactions de la page
      }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 3]} intensity={1} />

          {/* Ton modèle GLTF avec la rotation calculée */}
          <primitive
            ref={globeRef}
            object={scene}
            scale={0.5}
            position={[0, -1.3, 0]}
            rotation={[0, 0, rotation]} // Rotation autour de l'axe Z
          />

          {/* Contrôles de la caméra */}
          <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Le reste du contenu de la page */}
      {/* <div style={{ position: 'absolute', top: '100%', width: '100%', height: '100vh', backgroundColor: 'gray' }}></div> */}
    </div>
  )
}

export default Scene
