import React, { useEffect, useRef } from 'react'
import * as BABYLON from '@babylonjs/core'
import '@babylonjs/loaders' // Nécessaire pour charger GLB/GLTF

export default function SnowGlobe() {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (!canvasRef.current) return

        // Initialisation du moteur Babylon.js
        const engine = new BABYLON.Engine(canvasRef.current, true)
        const scene = new BABYLON.Scene(engine)

        //couleur de la scène 
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0) // transparent
        
        // Création de la caméra
        const camera = new BABYLON.ArcRotateCamera(
            'camera',
            Math.PI / 2,
            Math.PI / 2,
            20,
            BABYLON.Vector3.Zero(),
            scene
        )
        camera.attachControl(canvasRef.current, true)
        camera.inputs.clear(); // Désactive tous les contrôles utilisateur

        // Lumière
        new BABYLON.HemisphericLight(
            'light',
            new BABYLON.Vector3(1, 1, 0),
            scene
        )

        // Chargement du modèle 3D
        BABYLON.SceneLoader.ImportMesh(
            '',
            '/models/',
            'scene.glb',
            scene,
            function (meshes) {
                if (meshes.length > 0) {
                    meshes[0].position = new BABYLON.Vector3(0, 0, 0)
                }
            }
        )

        // Démarrage du rendu
        engine.runRenderLoop(() => scene.render())

        // Gestion du redimensionnement de la fenêtre
        window.addEventListener('resize', () => engine.resize())

        // Nettoyage à la destruction du composant
        return () => {
            engine.dispose()
            window.removeEventListener('resize', () => engine.resize())
        }
    }, [])

    return <canvas ref={canvasRef} id="renderCanvas" className="w-full h-full bg-transparent" />
}
