const InputText = ({
    type = 'text',
    label = '',
    name = '',
    placeholder = '',
    className = '',
    showLabel, // Nouvelle prop pour contrôler la visibilité du label
    required = false, // Ajout du support pour les champs requis
    ...props
}) => {
    return (
        <div className={` ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-sm font-medium text-gray-700 ${
                        showLabel ? '' : 'sr-only'
                    }`}
                >
                    {label}
                    {required && (
                        <span className="text-orange-500 ml-1">*</span>
                    )}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                aria-label={showLabel ? undefined : label} // Fallback pour l'accessibilité
                required={required}
                className={`
            bg-white
            w-full p-4
            border-2 border-dark/20 rounded-xl
            focus:outline-none focus:ring-1 focus:ring-[var(--orange)] focus:border-transparent
            transition duration-150
            placeholder-gray-400
            ${props.disabled ? 'opacity-70 cursor-not-allowed' : ''}
          `}
                {...props}
            />
        </div>
    )
}

export default InputText
