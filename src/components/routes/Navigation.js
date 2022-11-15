import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../../screens/Home";
import Cheese from "../../screens/Cheese";
import CheeseDetails from "../../screens/CheeseDetails";

const Navigation = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/cheese"} element={<Cheese/>}/>
            <Route path={"/cheese/:id"} element={<CheeseDetails/>}/>
        </Routes>

    );
};

export default Navigation;