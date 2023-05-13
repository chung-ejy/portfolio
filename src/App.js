import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Dashboard from "./components/pages/Dashboard"
export const App = () => {
        return (
            <DataState>
                <Router>
                <Header />
                    <Routes>
                        <Route exact path ="/" element={<Dashboard />} />
                    </Routes>
                </Router>
            </DataState>
    )
}

export default App