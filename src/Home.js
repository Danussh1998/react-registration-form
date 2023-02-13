import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const location = useLocation();

    console.log('location', location);
  
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }
    }, []);

    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Logged in successfully</h1>
            <h3 className="text-center">Welcome {location.state.username}</h3>
        </div>
    );
}

export default Home;