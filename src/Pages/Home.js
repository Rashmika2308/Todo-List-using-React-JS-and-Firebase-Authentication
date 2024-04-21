import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import TodoList from './TodoList';
const Home = ()=>{
    const navigate=useNavigate();
        const handleLogout=async()=>{
           await signOut(auth);
           localStorage.removeItem('token');
           localStorage.removeItem('user');
           navigate("/login");
         };
    
    return (
        <div>   
            <h1>Welcome to home page</h1>
            <p className='todo-app'><TodoList /></p>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Home;

