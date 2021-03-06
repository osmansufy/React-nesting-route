import { useEffect, useState } from "react"
import { SingleCountries } from "./SingleCountries"
import {
 
    useLocation,
   
  } from "react-router-dom";

const Countries=()=>{
   
    const [countries,setCountries]=useState([])
useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data=>
       { setCountries(data)
        console.log(data)}
        
        )

},[])
return( <>
<h2>All Countries</h2>
<div className="row" style={{display:"flex",flexWrap:"wrap"}}>
  {countries?.map((c)=>
    <SingleCountries country={c} />
  )}
  </div>
 </>   
   )

}

export default Countries