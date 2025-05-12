import Body from '@/components/Text/Body'

const CheckBoxInput = ({
    label = '', // Valeur par défaut
    name,
    checked,
    onChange,
    className = '',
    showLabel,
}) => {

    return (
        <label
            className={`inline-flex items-center cursor-pointer ${className}`}
        >
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="hidden"
                aria-label={showLabel ? undefined : label} // Accessibilité quand le label est caché
            />
            <div
                className={`w-5 h-5 border-2 rounded-md mr-2 flex items-center justify-center transition-colors duration-200 ${
                    checked ? 'bg-[var(--orange)] border-[var(--orange)]' : ' '
                }
          `}
            >
                {checked && (
                    <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true" // Cache l'icône aux lecteurs d'écran
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
