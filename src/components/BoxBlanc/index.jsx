import React from 'react'
import clsx from 'clsx'

const BoxBlanc = ({
    children,
    className,
    interClassName = '',
    padding = true,
}) => {
    return (
        <div
            className={clsx(
                'rounded-[20px] border-white border-2 p-1',
                className
            )}
        >
            <div
                className={clsx(
                    'bg-white rounded-2xl h-full',
                    interClassName,
                    padding ? 'py-4 px-6' : 'py-8 px-10'
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default BoxBlanc
