import { useState } from 'react'
import Body from '@/components/Text/Body'

const CheckBoxInput = ({
    label = '',
    name,
    checked = false,
    onChange,
    className = '',
    showLabel,
    radio = false,
}) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
        onChange?.(event) // 🔁 Assure que le parent reçoit bien le changement
    }

    return (
        <label
            className={`inline-flex items-center cursor-pointer ${className}`}
        >
            <input
                type={radio ? 'radio' : 'checkbox'} // 🆕 Type dynamique
                name={name}
                checked={checked}
                onChange={handleCheckboxChange}
                className="hidden"
                aria-label={showLabel ? undefined : label}
            />
            <div
                className={`w-5 h-5 border-2 ${
                    radio ? 'rounded-full' : 'rounded-md'
                } mr-2 flex items-center justify-center duration-200
                ${checked ? 'bg-[var(--orange)] border-[var(--orange)]' : ''}
                `}
            >
                {checked && (
                    <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
            {label && (
                <span
                    className={`select-none text-gray-700 ${
                        showLabel ? '' : 'sr-only'
                    }`}
                >
                    <Body hierarchy={3}>{label}</Body>
                </span>
            )}
        </label>
    )
}

export default CheckBoxInput
