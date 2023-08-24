import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Profile from "./components/pages/Profile"
import Photos from './components/pages/Photos'
import Projects from './components/pages/Projects'
// import Blog from './components/pages/Blog.js'
import background from './assets/bg2.png'
import FullStackServices from './components/pages/FullStackServices'
export const App = () => {
        return (
            <div style={style}>
            <DataState>
                <Router>
                <Header />
                    <Routes>
                        <Route exact path ="/" element={<Profile />} />
                        <Route exact path ="/photos" element={<Photos />} />
                        <Route exact path ="/projects" element={<Projects />} />
                        <Route exact path ="/services" element={<FullStackServices />} />
                    </Routes>
                </Router>
            </DataState>
            </div>
    )
}
const style = {
    backgroundImage:`url(${background})`,
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"fixed",
    backgroundPosition:"center",
    backgroundSize:"cover"
}
export default App