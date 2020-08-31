import React, { useState } from 'react';

export default () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    function login(){
        let opt = {
            headers: {
                "content-type": "application/json" 
            },
            method: "post",
            body: JSON.stringify({
                email,
                password
            })
        }

        fetch("http://localhost:3001/login", opt)
            .then(respon => respon.json())
            .then(data => {
                if(data.message){
                    setMsg(data.message)
                }else{
                    localStorage.setItem("access_token", data.access_token)
                }
            })
            .catch(err => {
                setMsg(err)
            })
    }

    return(
        <div>
            {msg}
            <form>
                <label>email:</label>
                <input type='email' onChange={e => setEmail(e.target.value) }/><br/>
                <label>password:</label>
                <input type='password' onChange={e => setPassword(e.target.value) }/><br/>
                <button onClick={() => login()}>login</button>
            </form>
        </div>
    )
}