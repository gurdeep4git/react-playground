import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import Navbar from './components/Navbar/Navbar'
import News from './components/News'

export default class App extends Component {
  pageSize = 5;

  state = {
    progress: 0
  }

  setProgress = (value) => {
    this.setState({ progress: value });
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
