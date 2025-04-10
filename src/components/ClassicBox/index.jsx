function ClassicBox({ children, cssClass = '' }) {
    return <div className={'flex flex-col ' + cssClass}>{children}</div>
}

export default ClassicBox
