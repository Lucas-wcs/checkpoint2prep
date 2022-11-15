import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const CheeseDetails = () => {
    
    const {id} = useParams();
    
    const [fromage, setFromage] = useState(useLocation().state);
    
    const getTheCheese = () => {
        axios.get("http://localhost:5000/api/cheese/"+id)
            .then((res) => {
                setFromage(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    useEffect(() => {
        if(!fromage) {
            getTheCheese();
        }
    }, [])
    
    return (
        fromage !== null &&
        <div>
            <h1>CheeseDetails</h1>
            <div className={"image-container"}>
                <img src={fromage.fromageImage} alt={fromage.fromageName}/>
            </div>
            <h2>{fromage.fromageName}</h2>
            <p>{fromage.origine}</p>
            <p>{fromage.typeDeLait}</p>
            <p>{fromage.typeDePate}</p>
            <p>{fromage.description}</p>
        </div>
    );
};

export default CheeseDetails;