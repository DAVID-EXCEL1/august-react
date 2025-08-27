import React, { useState } from 'react'

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [allUsers, setAllUsers] = useState([])

    const addUser = () => {
        let newUser = { firstName, lastName, email, password, profilePicture }
        setAllUsers([...allUsers, newUser])
        console.log(newUser);
    }
    return (
        <>
            <h1>Signup</h1>
            <input type="text" placeholder='Enter your first name' onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder='Enter your last name' onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder='Enter your profile picture URL' onChange={(e) => setProfilePicture(e.target.value)} />
            <button onClick={addUser}>Signup</button>
            <h1>All Users</h1>

            {allUsers.length === 0 ? <p>No users signed up yet.</p> : allUsers.map((user, index) => (
                <div key={index}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <img src={user.profilePicture} alt="" />
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            ))}
        </>
    )
}

export default Signup