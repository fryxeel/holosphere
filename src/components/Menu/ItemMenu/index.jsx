import React from 'react'
import '../styles.css'
import Icon from '../../Icon'

function ItemMenu({ children, active = false, iconName = false }) {
    return (
        <li className={'itemMenu ' + (active ? 'active' : '')}>
            <span className="flex gap-2">
                {iconName && <Icon name={iconName} />}
                {children}
            </span>
            <div className="LineItemMenu" />
        </li>
    )
}

export default ItemMenu
