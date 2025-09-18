import React, { useEffect, useState } from 'react'
// UseEffect Hook: It allows you to perform side effects in function components. hence it simply means that it runs some code based on a condition.

// By default, it runs after the first render and after every update. But we can control it by passing a second argument to it.

// 1. useEffect(() => { // code }) -> runs after every render
// 2. useEffect(() => { // code }, []) -> runs only once after the first render
// 3. useEffect(() => { // code }, [dependency]) -> runs when the dependency changes


const UseEffect = () => {
    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])


    const [num, setNum] = useState(0)
    const [name, setName] = useState("David")

    useEffect(() => {
        console.log("UseEffect Running");
    },[]) // it will run only when name changes

    return (
        <>
            <h1 onClick={() => setNum(num + 1)}>{num}</h1>
            <h1 onClick={() => setName(name + "s")}>{name}</h1>
        </>
    )
}

export default UseEffect