import React from 'react';
import './result.scss'
  export default function Result (props) {
 
     if(!props.loading){
         return (
            <div className="result">
                <div className="result-header">
                    <p>
                        {props.Method}  {props.url}
                    </p>
                </div>
                <div className="result-body"> </div>
            </div>
        )
    } else {
        return (
            <div className="result">
                <div className="result-header">
                    <p>
                        {props.Method}  {props.url}
                    </p>
                </div>
                <div className="result-body">
    
               <p>Loading...</p>
                
                </div>
            </div>
        )
    }
       
    }