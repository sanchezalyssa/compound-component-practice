/* eslint-disable react/prop-types */
// import React from 'react'

function Button({ children, variant }) {
    let variantClass = variant ? variant : ""
    return <button className={variantClass}>{children}</button>
}

export default Button
