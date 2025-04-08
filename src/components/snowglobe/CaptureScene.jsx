'use client'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

const CaptureScene = ({ setCaptureFunction }) => {
    const { gl, scene, camera } = useThree()

    useEffect(() => {
        const captureImage = () => {
            gl.render(scene, camera)
            const canvas = gl.domElement
            const image = canvas.toDataURL('image/png', 1)

            const link = document.createElement('a')
            link.href = image
            link.download = 'Ma_Holosphere.png'
            link.click()
        }

        setCaptureFunction(() => captureImage)
    }, [gl, scene, camera, setCaptureFunction])

    return null
}

export default CaptureScene
