import React from 'react'
import myImage from "../assets/edozzier.png"

const Navbar = () => {
    return (
        <>
            <nav style={{backgroundColor: `rgba(0, 15, 64, 1)`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 200px"}}>
                <img src={myImage} alt=""/>
                <ul style={{color:"white", listStyle:"none"}}>
                    <li style={{display: "inline-block", marginLeft: "140px"}}>Home</li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}>About</li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar