import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosAuth from "./axiosAuth";

const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "1% 0"
}

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
        <>
            <h2>Friends List</h2>
            <div className="friends-container">
                {
                    friends.length > 0
                    ? friends.map(friend => <Link to={`/friends/${friend.id}`} style={linkStyle} key={friend.id}>{friend.name}</Link>)
                    : <p>No Friends To Display</p>
                }
            </div>
        </>
        
    )
}

export default FriendsList;