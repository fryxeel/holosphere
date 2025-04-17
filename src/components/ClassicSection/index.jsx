function ClassicSection({ children, cssClass = '', withMaxWidth = true }) {
    return (
        <section
            className={`${
                withMaxWidth ? 'max-w-266' : ''
            } flex flex-col lg:flex-row gap-13 lg:gap-20 ${cssClass}`}
        >
            {children}
        </section>
    )
}

export default ClassicSection
