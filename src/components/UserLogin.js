import React, {useState} from 'react';
import bgImage from '../assets/NasaImg.jpg';
import { Link, useNavigate} from 'react-router-dom';
import './Login.css';

const BG = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login Info
    const database = [
        {
            username: "user1",
            password: "abc123"
        },
        {
            username: "user2",
            password: "abc123"
        }
    ];

    const errors = {
        username: <p className="invalid">Invalid username entered</p>,
        pw: <p className="invalid">Invalid password entered</p>
    };
    
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        
        // Find user login info
        var { username, pw } = document.forms[0];
        const userData = database.find((user => user.username === username.value));

        // Compare user info
        if (userData) {
            if (userData.password !== pw.value) {
                // invalid password
                setErrorMessages({ name: "pw", message: errors.pw});
            } else{
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
            <img src={bgImage}/>
        </div>
        <div className='content'>
            <h1 className="Synergia">Synergia</h1>
            <p>Connecting you with your potential career.</p>
            <div className='login-buttons'>
                <Link to="/Home" className='btn btn-light'>Users</Link>
                <Link to="/EmployerLoginPage" className='btn'>Employers</Link>
            </div>
            {isSubmitted ? navigate("/UserSwipePage")
            :  <form onSubmit={handleSubmit} className='user-login'>
                <label>
                    <p>Username</p>
                    <input type="text" name='username' required/>
                    {renderErrorMessage("username")}
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name='pw' required/>
                    {renderErrorMessage("pw")}
                </label>
                <div>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>}
        </div>
    </div>
    );
}
 
export default BG;