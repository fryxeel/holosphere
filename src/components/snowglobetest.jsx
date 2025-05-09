import React, { Suspense } from 'react'
import { SnowGlobeContent } from './snowGlobeContent'

export default function SnowGlobetest(props) {
    return (
        <Suspense fallback={null}>
            <SnowGlobeContent {...props} />
        </Suspense>
    )
}
