import React, { useContext, useState } from 'react'
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(login(username, password)) {
            navigate('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    }

  return (
    <div>
        <ResponsiveAppBar/>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit}>
            <label>Enter UserName</label>
            <input type='text' placeholder='UserName' onChange={(e) => setUsername(e.target.value)}
                style={{margin: '10px', padding: '7px'}} required/>
            <label>Enter Password</label>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}
                style={{margin: '10px', padding: '7px'}} required/>
            <button type='submit' style={{margin: '10px', padding: '7px'}}>Login</button>
        </form>
    </div>
  )
}

export default Login