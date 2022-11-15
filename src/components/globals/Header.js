import React from 'react';
import AppNavLink from "../AppNavLink";

const Header = () => {
    return (
        <div className={"header"}>
            <AppNavLink to={"/"}>Home</AppNavLink>
            <AppNavLink to={"/cheese"}>Cheese</AppNavLink>
        </div>
    );
};



export default Header;