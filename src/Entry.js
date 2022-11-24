import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Jira from './components/Jira/Jira';
import JobForm from './components/JobForm/JobForm';
import Cookz from './components/Cookz/Cookz';
import TaskManager from './components/TaskManager/TaskManager';

function Entry() {

    const [currentUser, setCurrentUser] = useState(null);

    return (
        <Router>
            <div>
                <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <Routes>
                    <Route exact path="/" element={<Login setCurrentUser={setCurrentUser} />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/jira-app" element={<Jira />} />
                    <Route exact path="/job-form" element={<JobForm />} />
                    <Route exact path="/cookz" element={<Cookz />} />
                    <Route exact path="/task-manager" element={<TaskManager />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Entry
