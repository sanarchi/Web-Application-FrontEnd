import React, { useState } from 'react'
import './Login.css';

const Login = () => {

    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () =>
    {
        setIsRegistering(!isRegistering)
    }

  return (
    <div className='login-container'>
        
        <div className='form-container'>
            {isRegistering ?
            (
                <div className='form'> 
                <h2>Register</h2>
                <form>
                    <input type='text' placeholder='Username' required/>
                    <input type='email' placeholder='Email' required/>
                    <input type='password' placeholder='Password' required/>
                    <input type='password' placeholder='Confirm Password' required/>
                    <button type='submit'>Register</button>
                </form>
                <p>Already have an account?</p>

                <button onClick={toggleForm}>Login </button>
                </div>

            ):(
                <div className='form'> 
                <h2>Login</h2>
                <form>
                    <input type='email' placeholder='Email' required/>
                    <input type='password' placeholder='Password' required/>
                    <button type='submit'> Login</button>
                </form>
                <p>Don't have an Account? <button onClick={toggleForm}>Register</button></p>

                </div>

            )}


        </div>
    </div>
  );
};

export default Login;