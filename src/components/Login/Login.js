import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputAdornment } from "@mui/material";
import { AccountCircle, PasswordRounded } from "@mui/icons-material";


const ariaLabel = { 'aria-label': 'description' };


const Login = () =>{
    const [username, setUsername] = useState();
    
    function onChangeUsername(){
        setUsername(username);
    }

    return (
        <FormControl sx={{
                        '& > :not(style)': { m: 1 , minWidth: 350},
                        }}
            noValidate
            autoComplete="off" >
                <TextField id="username" label="Username" variant="outlined" inputProps={ariaLabel}
                    onChange={onChangeUsername}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                        ),
                    }} />
            <TextField id="password" type="password" autoComplete="current-password" label="Password" variant="outlined" inputProps={ariaLabel}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <PasswordRounded />
                    </InputAdornment>
                ),
                }} />
          <Button variant="contained"
            onClick={() => {
                alert('clicked: ' + username);
            }}>
                Login
            </Button>
      </FormControl>
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