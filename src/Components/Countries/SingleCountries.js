import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export const SingleCountries = (props) => {
    let location = useLocation();
    return (
        <Link
     
        to={{
          pathname: `/country/${props.country.name}`,
          // This is the trick! This link sets
          // the `background` in location state.
          state: { background: location }
        }}
      >
        <div>
            <img style={{maxHeight:"50px",maxWidth:"40px",margin:"10px"}} src={props.country.flag} />
        </div>
        </Link>
    )
}
