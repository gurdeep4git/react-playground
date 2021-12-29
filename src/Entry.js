import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Jira from './components/Jira/Jira';
import JobForm from './components/JobForm/JobForm';

function Entry() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/jira-app" element={<Jira />} />
                    <Route exact path="/job-form" element={<JobForm />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Entry
