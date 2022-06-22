import React, { useState, useEffect } from "react";
import axios from "axios";

function FriendsList() {

    const [friends, setFriends] = useState([])

    

    useEffect(() => {
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
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