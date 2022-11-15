import React, {useEffect, useState} from 'react';
import CheeseCard from "../components/CheeseCard";
import axios from "axios";

const Cheese = () => {
    
    const [cheeses, setCheeses] = useState([]);
    
    
    const getALlCheeses = () => {
        axios.get("http://localhost:5000/api/cheese")
            .then( (res) => {
                setCheeses(res.data);
            } )
            .catch( (err) => {
                console.log(err);
            } )
    }
    
    useEffect( () => {
        getALlCheeses();
    }, []);
    
    
    return (
        <div className={"cheese"}>
            {cheeses.map(fromage => <CheeseCard fromage={fromage} key={fromage.id}/>)}
        </div>
    );
};

export default Cheese;