import React from 'react'

const PropsBtn = ({title, color, test}) => {
    console.log(title, color);
    
    return (
        <>
        <button className={color} onClick={test}>{title}</button>
        </>
    )
}

export default PropsBtn