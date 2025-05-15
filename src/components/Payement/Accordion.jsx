import Body from '../Text/Body'
import CheckBoxInput from '../Inputs/CheckBox'

const Accordion = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="">
            <button
                onClick={onToggle}
                className={`flex w-full items-center px-6 py-5 rounded-t-lg ${
                    isOpen
                        ? 'border-orange border-b-2 border-x-2 border-t-2'
                        : 'border-gray-200 border-b-2'
                }`}
            >
                <CheckBoxInput checked={isOpen} onChange={onToggle} />
                <Body hierarchy={4}>{title}</Body>
            </button>

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
