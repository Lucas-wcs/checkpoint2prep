import React from 'react';
import AppNavLink from "./AppNavLink";
import {useNavigate, useNavigation} from "react-router-dom";

const CheeseCard = ({fromage}) => {
    
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/cheese/"+fromage.id, {state : fromage});
    }
    
    return (
        <button onClick={handleNavigate}>
            <div className={"cheese-card"}>
                <div className={"image-container"}>
                    <img src={fromage.fromageImage} alt={fromage.fromageName}/>
                </div>
                <h2>{fromage.fromageName}</h2>
                <p>{fromage.origine}</p>
            </div>
        </button>
        
    );
};

export default CheeseCard;