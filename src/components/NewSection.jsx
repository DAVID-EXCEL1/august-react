import React, { useState } from 'react'

const NewSection = () => {
    // const [nameoftheVariable, setnameoftheVariable] = useState("initialvalue")
    // const [myAge, setmyAge] = useState(25)

    const [myAge, setmyAge] = useState(25)
    const [myName, setmyName] = useState("David Excel")

    // let myName = "David Excel";
    let myProfession = "Software Developer";
    // let myAge = 25;

    const increaseAge = () => {
        // myAge++;
        // console.log(`I am ${myAge} today`);
        // document.getElementById("show2").innerHTML = `I am ${myAge} today`;
        // let newAge = myAge++
        setmyAge(myAge + 1)
        console.log(myAge);
        
        // setmyAge(myAge + 1);
        // console.log(`I am ${myAge} today`);
        // console.log(myAge); 
        // useState is an asynchronous function
        // Hence React Dev Tools

        

    }

    const clickMe = (num) => {
        let display = `${num} is already here`
        console.log(display); 
        document.getElementById("show").innerHTML = display
    }

    return (
        <>
            <div className='card bg-body-secondary shadow w-50 mx-auto text-center my-2 py-2'>
                <h1>My name {myName}</h1>
                <h2>I am a {myProfession}</h2>
                <h3>I am {myAge} years old</h3>
                <button onClick={increaseAge} className='btn my-3 btn-outline-secondary w-25 mx-auto'>My Birthday</button>
                <button onClick={()=>clickMe(12)} className='btn btn-outline-secondary w-25 mx-auto'>Check</button>
                <div id="show"></div>
                <div id="show2"></div>
                <p>{Math.random()}</p>
            </div>
        </>
    )
}

export default NewSection

// React hooks = useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useImperativeHandle, useLayoutEffect, useDebugValue, useOptimistic and so on. It simply relates directly with React.


// Assignment 
// Dice Roller - Create a simple dice roller application using React hooks. The application should have the following features:
// 1. A button to roll the dice - between 1 and 6 (random number)
// 2. Display the result of the dice roll and make use of Image for the dice faces