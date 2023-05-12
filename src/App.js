import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
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
                {/* <Footer /> */}
            </DataState>
    )
}

export default App