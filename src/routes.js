import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './Containers/Home/Index'
import Users from './Containers/Users'

function MyRoutes(){

    return(
        <Router> 
            <Routes>

        <Route   path="/" element = {<Home/>} />
        <Route  path="/usuarios" element = {<Users/>} />

        </Routes>
     </Router>
    )

}


export default MyRoutes