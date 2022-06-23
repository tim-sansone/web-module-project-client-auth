import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import axiosAuth from "./axiosAuth"

const initialFriend = {
    id: "",
    name: "",
    age: null,
    email: ""
}

function Friend() {
    const [friend, setFriend] = useState(initialFriend);

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosAuth().get(`/friends/${id}`)
            .then(res => {
                setFriend(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <p>Server ID: {friend.id}</p>
            <input type="button" value="Back" onClick={() => push("/friends")}/>
        </div>
    )
}

export default Friend;