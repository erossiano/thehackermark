import React, {useState} from 'react';
import '../../index.css';
function RegistrationForm() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        //console.log(name, email, password, confirmPassword);

        const gxhttp = new XMLHttpRequest();
        gxhttp.open("GET", `http://localhost:3001/api/users/email/${email}`, false);
        gxhttp.send();
        let usr = JSON.parse(gxhttp.responseText);
        let id = usr[0]._id;
        console.log("id: ", id);

        if(!id){
            let user = {
                name : name,
                email : email,
                password : password,
                date : Date.now,
                type :'user',
            };      

            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'http://localhost:3001/api/users', false);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhttp.send(JSON.stringify(user));
        }else{
            alert("El usuario con Email: " + email + " ya existe!");
        }
    }

    return(
        <>
        <div className="row mt-5 mb-3">
            <div className="mb-3">
                <div className="form-group">
                    <label className="form-label" for="name">Name </label>
                    <input className="form-control" value={name} onChange = {(e) => handleInputChange(e)}  type="text" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label className="form-label" for="email">Email </label>
                    <input  className="form-control" type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)}  placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label className="form-label" for="password">Password </label>
                    <input className="form-control" type="password" value={password} onChange = {(e) => handleInputChange(e)}   id="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label className="form-label" for="confirmPassword">Confirm Password </label>
                    <input className="form-control" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)}  id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn" onClick={()=>handleSubmit()} >Register</button>
            </div>
        </div>   
        </>   
    )       
}
export default RegistrationForm;