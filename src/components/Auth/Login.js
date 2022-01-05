import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from "../../utils/local-storage";

export default function Login(props) {

    const navigate = useNavigate();

    const username = useRef(null);
    const password = useRef(null);

    const handleLogin = e => {
        const formUsername = username.current.value;
        const formPassword = password.current.value;

        const loggedInUser = {
            username: formUsername,
            password: formPassword
        }

        setLoggedInUser(loggedInUser);

        props.setCurrentUser(loggedInUser);

        navigate("/jira-app");
    }

    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-4 offset-4'>
                    <h3 className='mb-3'>Login</h3>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='username'>Email Address</label>
                            <input type='email' className='form-control' ref={username} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' ref={password} />
                        </div>

                        <button type='button' onClick={handleLogin} className='btn btn-dark'>login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
