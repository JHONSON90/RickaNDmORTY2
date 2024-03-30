import { useEffect, useState } from 'react'

function CreateUser() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombres y Apellidos</label>
            <input type="text" />
            <label htmlFor='email'>Email</label>
            <input type="email"
                name="email"
                value={userData.email}
                onchange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input type="text"
                name="password"
                value={userData.password}
                onchange={handleChange} />

        </form>
    )
}

export default CreateUser
