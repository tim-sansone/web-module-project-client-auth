import React, { useState } from "react";
import axiosAuth from "./axiosAuth";

const initialValues = {
    name: "",
    email: ""
}

function AddFriend(props) {
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
        axiosAuth().post("/friends", { name: form.name, email: form.email })
        .then(res => {
            props.history.push("/friends");
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form>
                <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add Friend</button>
            </form>
        </div>
        
    )
}

export default AddFriend;