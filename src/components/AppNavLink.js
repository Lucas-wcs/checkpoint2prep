import React from 'react';
import {NavLink} from "react-router-dom";

const AppNavLink = ({to, children, state}) => {
    return (
        <div className={"app-navlink"}>
            <NavLink to={to} state={state}>{children}</NavLink>
        </div>
    );
};

export default AppNavLink;