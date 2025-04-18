import React from 'react'
import '../styles.css'
import Icon from '../../Icon'

function ItemMenu({
    children,
    active = false,
    iconName = false,
    mobile = false,
}) {
    const lineClass = active && mobile ? 'LineItemMenuMobile' : 'LineItemMenu'
    return (
        <li
            className={`${mobile ? 'itemMenuMobile' : 'itemMenu'} ${
                active ? 'active' : ''
            } `}
        >
            <span
                className={`${active ? 'active' : ''} ${
                    mobile ? 'text-dark' : ''
                } flex gap-2`}
            >
                {iconName && (
                    <Icon color={mobile ? 'black' : 'white'} name={iconName} />
                )}
                {children}
            </span>
            <div className={lineClass} />
        </li>
    )
}

export default ItemMenu
