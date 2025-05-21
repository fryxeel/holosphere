import Body from '../Text/Body'
import CheckBoxInput from '../Inputs/CheckBox'

const Accordion = ({ title, children, isOpen, onToggle, icons = [] }) => {
    return (
        <div>
            <div
                onClick={onToggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        onToggle()
                    }
                }}
                className={`flex w-full items-center px-6 py-5 rounded-t-lg cursor-pointer focus:outline-none justify-between ${
                    isOpen
                        ? 'border-orange border-b-2 border-x-2 border-t-2'
                        : 'border-gray-200 border-b-2'
                }`}
            >
                <div className="flex items-center gap-2">
                    <CheckBoxInput radio checked={isOpen} onChange={onToggle} />
                    <Body hierarchy={4}>{title}</Body>
                </div>

                <div className="flex items-center gap-2">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt || ''}
                            className="h-6 w-auto"
                        />
                    ))}
                </div>
            </div>

            <div
                className={`w-full flex flex-col gap-3 overflow-hidden transition-all duration-200 ${
                    isOpen ? 'opacity-100 px-6 py-5' : 'hidden opacity-0'
                }`}
            >
                {children}
            </div>
        </div>
    )
}

export default Accordion
