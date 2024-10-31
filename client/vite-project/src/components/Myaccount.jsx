import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Myaccount = () => {
    const location = useLocation();
    const { email } = location.state || {};  
    const [userName, setUserName] = useState(''); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/usere/${email}`);
                setUserName(response.data); // Assuming the response has a 'name' field
                console.log(response.data);
                
            } catch (err) {
                setError('Error fetching user name'); // Set error message if the request fails
            } finally {
                setLoading(false);  
            }
        };

        if (email) {
            fetchUserName(); // Fetch user name only if email is available
        }
    }, [email]);

    if (loading) return <div>Loading...</div>; // Show loading message while fetching
    if (error) return <div>{error}</div>; // Show error message if any

    return (
        <div>
            <h1>Welcome to My Account</h1>
            <p>Your email: {email}</p>
            <p>Your name: {userName}</p> {/* Display the user's name */}
        </div>
    );
};

export default Myaccount;
