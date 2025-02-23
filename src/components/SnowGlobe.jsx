import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import React from 'react'

const SnowGlobe = () => {
  const { scene } = useGLTF("/models/holosphere_v1.glb"); // Assure-toi du bon chemin

  return (
    <Suspense fallback={null}>
      <primitive object={scene} scale={1} />
    </Suspense>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 3]} intensity={1} />
      <SnowGlobe />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
