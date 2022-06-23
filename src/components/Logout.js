import React, { useEffect } from "react";
import axios from "axios";

function Logout(props) {

    useEffect(() => {
      if(localStorage.getItem("token")){
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
      }
        
    },[])

    return (
        <h2>Logging out....</h2>
    )
}

export default Logout;