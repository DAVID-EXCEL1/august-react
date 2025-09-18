import React from 'react'
import Products from '../components/Products'
import Button from '../components/Button'

const Contact = () => {
    const test1 = () =>{
        alert("Green Button")
    }
    const test2 = () =>{
        alert("Cyan Button")
    }
    const test3 = () =>{
        alert("Warning Button")
    }
    return (
        <>
            <Products/>
            <Button title="Get out" color="btn btn-success" padding="py-3 px-3" test={test1}/>
            <Button title="Get in" color="btn btn-info" test={test2}/>
            <Button title="Get in out" color="btn btn-warning" test={test3}/>
        </>
    )
}

export default Contact