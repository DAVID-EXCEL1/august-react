import React from 'react'
import myHero from "../assets/header.png"


const Herosection = () => {
    return (
        <>
            <div style={{display:"flex", gap:"40px", padding:"0px 300px", alignItems:"center", justifyContent:"center    "}}>
                <div style={{ fontWeight: "900" }} className='hero'>Here is my Hero section Page</div>
                <img src={myHero} alt="" />
            </div>
        </>
    )
}

export default Herosection