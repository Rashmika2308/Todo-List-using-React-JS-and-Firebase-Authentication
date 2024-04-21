import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
         const userCredential = await createUserWithEmailAndPassword(auth,email,password);
         console.log(userCredential);
         const user = userCredential.user;
         localStorage.setItem('token',user.accessToken);
         localStorage.setItem('user',JSON.stringify(user));
         alert("sucessfully registered");
         navigate("/login");
        }
        catch(error){
         console.log(error);
         alert(error);
        }
     };
    return (
        <div>
            <h2>Signup page</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input 
                type="email"  
                placeholder="Email" 
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                /><br></br>

                <input type="password" 
                placeholder="Password"
                required 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                /><br></br>
                <button type="submit"  className="signup-button">Signup</button>
            </form>
            <p>Need to Login<Link to ="/login" >Login</Link></p>
        </div>
    );
};
export default Signup;