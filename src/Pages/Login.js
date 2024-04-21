import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
         const userCredential = await signInWithEmailAndPassword(auth,email,password);
         console.log(userCredential);
         const user = userCredential.user;
         localStorage.setItem('token',user.accessToken);
         localStorage.setItem('user',JSON.stringify(user));
         alert("sucessfully logined in");
         navigate("/");
        }
        catch(error){
         console.log(error);
         alert(error);
        }
     };
    return (
        <div>
            <h2>Login page</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>Need to Signup<Link to ="/signup">SignUp</Link></p>
        </div>
    );
};
export default Login;