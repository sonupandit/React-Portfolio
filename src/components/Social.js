import React from 'react';
import { Link } from "react-router-dom";
const Social = (props) =>{
    let social = props.socialData;
    return(
        <ul className="social list-unstyled d-flex align-items-center">
           {
               social.map(function(data, index) {
                  return(
                    <li key={index}>
                        <Link to={data.link} title={data.socialName} target="_blank">
                            <span className={data.className}></span>
                        </Link>
                    </li>
                  )
               })
           }
        </ul>
    )
}


export default Social;