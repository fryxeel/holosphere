import React from 'react'
import clsx from 'clsx'

const FondBlanc = ({ children, className }) => {
    return (
        <div
            className={clsx(
                'rounded-[20px] border-white border-2 p-1',
                className
            )}
        >
            <div className="bg-white rounded-2xl h-full py-4 px-6">
                {children}
            </div>
        </div>
    )
}

export default FondBlanc
