import React, { useState, useEffect } from "react";
import axiosAuth from "./axiosAuth";

function FriendsList() {

    const [friends, setFriends] = useState([])

    

    useEffect(() => {
        axiosAuth().get("/friends")
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <h2>Friends List</h2>
            {
                friends.length > 0
                ? friends.map(friend => <p key={friend.id}>- {friend.name} - {friend.email}</p>)
                : <p>No Friends To Display</p>
            }
        </div>
        
    )
}

export default FriendsList;