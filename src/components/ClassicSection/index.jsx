function ClassicSection({ children, cssClass = '' }) {
    return (
        <section
            className={
                'max-w-266 flex flex-col lg:flex-row gap-13 lg:gap-20 lg:items-center ' +
                cssClass
            }
        >
            {children}
        </section>
    )
}

export default ClassicSection
