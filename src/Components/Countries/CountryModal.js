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
import { SingleCountries } from "./SingleCountries"
function Modal() {
    let history = useHistory();
    let { name } = useParams();
 const [countryDetails,setCountryDetails]=useState({})
useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    .then(response=>response.json())
    .then(data=>
       { 
           console.log(data)
           setCountryDetails(data)
    }
        )
},[])

  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>{name}</h1>
        {countryDetails?.capital}
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }
  export default Modal