import React, { useState } from "react";
import axios from "axios";

const initialValues = {
    username: "",
    password: ""
}

function Login(props) {
    const [form, setForm] = useState(initialValues)

    const handleChange = event => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:9000/api/login", { username: form.username, password: form.password })
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push("/friends")
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" name="username" value={form.username} placeholder="Enter Username" onChange={handleChange}/>
                <input type="text" name="password" value={form.password} placeholder="Enter Password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
        
    )

}

export default Login;