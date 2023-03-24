import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const LogIn = ({switchView}) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [welcome, setWelcome] = useState(1)
    const [userData,setUserData]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:6001/api/customers").then(({data})=>setUserData(data)).catch((err)=>console.log(err))
      },[])

    const checkAccount = ()=>{
        userData.map((e)=>{
            if(e.username === username && e.password === password){
                setWelcome(2) 
                console.log(userData, "1")
            }
        })
        setWelcome(3)
        console.log(userData, "2")
    }

    return (
        <>
            {welcome === 1 && <div className="login-section">
                <h2 className="login">Log in to your account</h2>
                <form>
                    <label >Username:</label>
                    <input className="signup__input"  id="email" name="username" required onChange={(event) => { setUserName(event.target.value) }} />
                    <label >Password:</label>
                    <input type="password" id="password" name="password" required onChange={(event) => { setPassword(event.target.value) }} />
                    <button type="submit" onClick={checkAccount}>Log In</button>
                </form>
                <p>Don't have an account yet? <a href="#" onClick={() => switchView("SignUp")}>Sign Up</a></p>
            </div>}
            {welcome === 2 && <div className="login-section"><h2 className="login">Welcome to Arbi GSM</h2></div>}
            {welcome === 3 && <>
                <div className="login-section">
                    <form>
                        <label >Username:</label>
                        <input type="email" id="email" name="email" required onChange={(event) => { setUserName(event.target.value) }} />
                        <label >Password:</label>
                        <input type="password" id="password" name="password" required onChange={(event) => { setPassword(event.target.value) }} />
                        <button type="submit">Log In</button>
                    </form></div>
                <div style={{ color: 'red' }}><h4 className="login">Wrog Password or Username.<br /><br />Try again or create an account </h4></div>
            </>
            }
        </>
    )
}

export default LogIn