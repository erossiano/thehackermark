import React from "react";


const Login = () =>
    (
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
    );

export default Login;