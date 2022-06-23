import React, { useEffect } from "react";
import axiosAuth from "./axiosAuth";

function Logout(props) {

    useEffect(() => {
      if(localStorage.getItem("token")){
        axiosAuth().post("/logout")
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