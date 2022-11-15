import React from 'react';
import Navigation from "./components/routes/Navigation";
import Header from "./components/globals/Header";

const App = () => {
    return (
        <div className={"app"}>
            <Header/>
            <Navigation/>
        </div>
    );
};

export default App;