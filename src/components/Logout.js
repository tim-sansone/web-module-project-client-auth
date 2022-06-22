import React, { useEffect } from "react";
import axios from "axios";

function Logout(props) {

    useEffect(() => {
        axios.post("http://localhost:9000/api/logout", null, {
          headers: {
            authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
          localStorage.removeItem("token")
          props.history.push("/login")
        })
        .catch(err => console.log(err))
      }, [])

    return (
        <h2>Logging Out...</h2>
    )
}

export default Logout;