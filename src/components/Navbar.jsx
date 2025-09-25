import React from 'react'
import myImage from "../assets/edozzier.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{backgroundColor: `#008080`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 200px"}}>
                <img src={myImage} alt=""/>
                <ul style={{color:"white", listStyle:"none"}}>
                    <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/"> Home</Link></li>
                <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/about"> About</Link></li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/contact"> Contact</Link></li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/service"> Service</Link></li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/api"> API</Link></li>
                    <li style={{display: "inline-block", marginLeft: "140px"}}><Link to="/form"> Form</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar