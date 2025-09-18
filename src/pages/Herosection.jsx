import React from 'react'
import myHero from "../assets/header.png"
import PropsBtn from '../components/PropsBtn'


const Herosection = () => {
    const test = ()=>{
        alert("Yeah on point")
    }
    const test1 = ()=>{
        alert("Yeah on point again")
    }
    const test2 = ()=>{
        alert("Yeah on point too")
    }
    return (
        <>
            <div style={{display:"flex", gap:"40px", padding:"0px 300px", alignItems:"center", justifyContent:"center    "}}>
                <div style={{ fontWeight: "900" }} className='hero'>Here is my Hero section Page</div>
                <img src={myHero} alt="" />
            </div>
            <PropsBtn title="Edit" color="btn btn-primary" test={test}/>
            <PropsBtn title="Delete" color="btn btn-danger" test={test1}/>
            <PropsBtn title="Rusticate" color="btn btn-success" test={test2}/>
            
        </>
    )
}

export default Herosection