import React from "react";
import validation from "./validation.js"
import styles from "./Form.module.css"

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });


    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    });


    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                    className={errors.username && styles.warning} />
                <p className='danger'>{errors.username}</p>
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className={errors.password && styles.warning} />
                <p className='danger'>{errors.password}</p>

                <button type='submit'>LOGIN</button>
            </form>
        </div>

    )
};