import React, {useState} from 'react';
import './Login.css';
import bgImage from '../assets/NasaImg.jpg';
import { Link, useNavigate } from 'react-router-dom';

const EmployerLogin = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login Info
    const database = [
        {
            username: "Apple",
            password: "abc123",
            JobIndex: "AAP-12345"
        }
    ];

    const errors = {
        username: <p className="invalid">Invalid username entered</p>,
        pw: <p className="invalid">Invalid password entered</p>,
        JobIndex: <p className="invalid">Invalid index entered</p>
    };
    
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        
        // Find user login info
        var { username, pw, JobIndex} = document.forms[0];
        const userData = database.find((user => user.username === username.value));

        // Compare user info
        if (userData) {
            if (userData.password !== pw.value) {
                // invalid password
                setErrorMessages({ name: "pw", message: errors.pw});
            } 
            else if (userData.JobIndex !== JobIndex.value) {
                // invalid jobIndex
                setErrorMessages({ name: "JobIndex", message: errors.JobIndex})
            }
            else{
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "username", message: errors.username});
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) => 
        name === errorMessages.name && ( <div className='error'>
            {errorMessages.message}
        </div>);
    
    const navigate = useNavigate();

    return ( 
    <div>
        <div className='hero'>
            <img src={bgImage} alt=''/>
        </div>
        <div className='content'>
            <h1 className='Synergia'>Synergia</h1>
            <p>Connecting you with your potential career.</p>
            <div className='login-buttons'>
                <Link to="/" className='btn'>Users</Link>
                <Link to="/EmployerLoginPage" className='btn btn-light'>Employers</Link>
            </div>
            {isSubmitted ? navigate("/EmployerPage")
            :  <form onSubmit={handleSubmit} className='user-login'>
                <label>
                    <p>Username:</p>
                    <input type="text" name='username' required/>
                    {renderErrorMessage("username")}
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" name='pw' required/>
                    {renderErrorMessage("pw")}
                </label>
                <label>
                    <p>Job Index Number:</p>
                    <input type="text" name='JobIndex' required/>
                    {renderErrorMessage("JobIndex")}
                </label>
                <div>
                    <button type="submit" className='btn down'>Log In</button>
                </div>
                <Link to="/" className='btn down'>Create Listing</Link>
            </form>}
        </div>
    </div>
    );
}
 
export default EmployerLogin;