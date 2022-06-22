import React, { useState } from "react";
import axios from "axios";

const initialValues = {
    name: "",
    email: ""
}

function AddFriend() {
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
        axios.post("http://localhost:9000/api/friends", { name: form.name, email: form.email }, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log(res)
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