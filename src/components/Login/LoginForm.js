import React, { useState } from "react";
import '../../index.css';
import { toast } from 'react-toastify';

const ariaLabel = { 'aria-label': 'description' };

const notify = (message) => toast(message);

const Login = () =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }


    const handleSubmit = () => {
        const gxhttp = new XMLHttpRequest();
        gxhttp.open("GET", `https://thehackermark.up.railway.app/api/users/email/${email}`, false);
        gxhttp.send();
        let usr = JSON.parse(gxhttp.responseText);
        let id = usr[0]._id;
        let pass = usr[0].password;
        //console.log("id: ", id, " pass:", pass);
        let message = "";

        if(id){
            let user = {
                email : email,
                password : password,
            };

            const xhttp = new XMLHttpRequest();
            //xhttp.open("POST", 'http://localhost:3001/api/users/auth', false);
            xhttp.open("POST", 'https://thehackermark.up.railway.app/api/users/auth', false);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhttp.send(JSON.stringify(user));  
            //console.log(xhttp.responseText);
            

            console.log(user.email);
            if (xhttp.status === 200) {
                // Output username
                message = 'Welcome back, ' + user.email + '!';
            } else {
                // Not logged in
                message = 'Please login to view this page!';
                window.location.reload();
            }
             
        }else{
            message = "El usuario con Email: " + email + " no existe!";
        }

        notify(message);
    }

    
    return (
        <>
            <h1 className="produ">LOGIN</h1>
                <div className="d-flex justify-content-center my-5">
                <div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email </label>
                        <input  className="form-control" type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)}  placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password </label>
                        <input className="form-control" type="password" value={password} onChange = {(e) => handleInputChange(e)}   id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit()} >Login</button>
                    </div>
                </div>

            </div>
        </>
)};

/* 


        <div className="login-item">
        <form action="" className="form form-login">
            <div className="form-field">
            <label className="email" for="login-email"><span className="hidden">Email</span></label>
            <input id="login-email" type="text" className="form-input" placeholder="Email" required />
            </div>

            <div className="form-field">
            <label className="lock" for="login-password"><span className="hidden">Password</span></label>
            <input id="login-password" type="password" className="form-input" placeholder="Password" required />
            </div>

            <div className="form-field">
            <input type="submit" value="Log in" />
            </div>
        </form>
        </div>
 */   

export default Login;