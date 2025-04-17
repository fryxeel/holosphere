import React from 'react'
import '../styles.css'
import Icon from '../../Icon'

function ItemMenu({
    children,
    active = false,
    iconName = false,
    mobile = false,
}) {
    return (
        <li
            className={`${mobile ? 'itemMenuMobile' : 'itemMenu'} ${
                active ? 'active' : ''
            } `}
        >
            <span
                className={`${active ? 'active' : ''} ${
                    mobile ? 'text-dark !opacity-100' : ''
                } flex gap-2`}
            >
                {iconName && (
                    <Icon
                        color={mobile ? 'black' : 'inherit'}
                        name={iconName}
                    />
                )}
                {children}
            </span>
            <div className="LineItemMenu" />
        </li>
    )
}

export default ItemMenu
