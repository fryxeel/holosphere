'use client'
import { useThree } from '@react-three/fiber'

const CaptureScene = ({ setCaptureFunction }) => {
    const { gl, scene, camera } = useThree()

    const captureImage = () => {
        gl.render(scene, camera)
        const canvas = gl.domElement
        const image = canvas.toDataURL('image/png', 0.8)

        const link = document.createElement('a')
        link.href = image
        link.download = 'Ma_Holosphere.png'
        link.click()
    }

    setCaptureFunction(() => captureImage)

    return null
}

export default CaptureScene
