/* eslint-disable react/prop-types */
import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()

export default function Menu({ children }) {
    const [open, toggleOpen] = useToggle()
    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div>{children}</div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
