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
                    className={`absolute left-0 w-full h-0.5  transform transition duration-300 ease-in-out
                    ${open ? 'rotate-45 top-2.5 bg-dark' : 'top-0 bg-white'}
                `}
                />
                <span
                    className={`absolute left-0 w-full h-0.5 transform transition duration-300 ease-in-out
                    ${open ? 'opacity-0 top-2.5 bg-dark' : 'top-2.5 bg-white'}
                `}
                />
                <span
                    className={`absolute left-0 w-full h-0.5  transform transition duration-300 ease-in-out
                    ${open ? '-rotate-45 top-2.5 bg-dark' : 'top-5 bg-white'}
                `}
                />
            </div>
        </button>
    )
}

export default Burger
