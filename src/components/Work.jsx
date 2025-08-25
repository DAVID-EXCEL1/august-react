import React from 'react'

const Work = () => {
    let myName = "David Excel";
    let myProfession = "Software Developer";
    let myAge = 25;

    const clickMe = (num) => {
        myAge++
        console.log(myAge, num);
        document.getElementById("show").innerHTML = myAge
    }
    return (
        <>
            <h1 className='text-center'>My Work Section</h1>
            <div className='d-flex flex-column align-items-center'>
                <h2>{myName}</h2>
                <p>Age: {myAge}</p>
                <button onClick={()=>clickMe(12)}>Click</button>
                <p>Profession: {myProfession}</p>
                <p>Welcome to my work section where I showcase my projects and skills.</p>
                <p>Feel free to explore and connect with me!</p>
                <p>{Math.random()}</p>
                <div id='show'>

                </div>
            </div>
        </>
    )
}

export default Work