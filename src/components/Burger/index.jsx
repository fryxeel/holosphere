import React from 'react'

const Burger = ({ open, setOpen }) => {
    return (
        <button
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir ou fermer le menu"
            aria-expanded={open}
            className="relative w-8 h-8 flex items-center justify-center z-50"
        >
            <div className="relative w-6 h-5">
                <span
                    className={`absolute left-0 w-full h-0.5 bg-white transform transition duration-300 ease-in-out
                    ${open ? 'rotate-45 top-2.5' : 'top-0'}
                `}
                />
                <span
                    className={`absolute left-0 w-full h-0.5 bg-white transform transition duration-300 ease-in-out
                    ${open ? 'opacity-0 top-2.5' : 'top-2.5'}
                `}
                />
                <span
                    className={`absolute left-0 w-full h-0.5 bg-white transform transition duration-300 ease-in-out
                    ${open ? '-rotate-45 top-2.5' : 'top-5'}
                `}
                />
            </div>
        </button>
    )
}

export default Burger
