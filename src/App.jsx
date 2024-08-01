import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
const App = () => {
  return (
    <Router>
    <div className="app">

      <Routes >
        <Route path="/" exact Component={Home} />

      </Routes>

    </div>
  </Router>
  )
}

export default App
