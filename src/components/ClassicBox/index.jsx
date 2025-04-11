function ClassicBox({ children, cssClass = '' }) {
    return <div className={'px-4 flex flex-col ' + cssClass}>{children}</div>
}

export default ClassicBox
