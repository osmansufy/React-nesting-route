import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
  } from "react-router-dom";
  import { useEffect, useState } from "react"
export default function SingleDetails() {
    const [countryDetails,setCountryDetails]=useState({})
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(response=>response.json())
        .then(data=>
           { 
               console.log(data)
               setCountryDetails(data[0])
        }
            )
    },[])
    let { name } = useParams();
    return (
        <div>
            
            <h1>{name}</h1>
            <h3>{countryDetails.capital}</h3> 
        </div>
    )
}
