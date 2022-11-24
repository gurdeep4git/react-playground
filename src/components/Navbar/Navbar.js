import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { clearStorage } from '../../utils/local-storage';

function Navbar(props) {

    const navigate = useNavigate();
    const { currentUser } = props;

    const handleLogout = (e) => {
        e.preventDefault();
        clearStorage();
        props.setCurrentUser(null);
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {currentUser ?
                    (<div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jira-app">Jira-app</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/job-form">Job Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cookz">Cookz</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/task-manager">Task Manger</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            {currentUser && currentUser.username}
                        </span>
                        <span onClick={(e) => handleLogout(e)} className="navbar-text ml-3">
                            logout
                        </span>

                    </div>) : null
                }
            </nav>
        </div>
    )
}

export default Navbar
