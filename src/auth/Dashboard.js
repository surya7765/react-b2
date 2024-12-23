import React, { useContext } from 'react'
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar';

function Dashboard() {

    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logout logic here
        logout();
        navigate('/');
    }
  return (
    <div>
        <ResponsiveAppBar/>
        <h3>Welcome To Dashboard</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard