import React from 'react';
import './result.scss'
import PrettyJson from 'react-json-pretty';
export default function Result (props) {

   if(!props.loading){
       return (
          <div id='review' > <div > <p><h5>{props.Method}</h5> <b>{props.url}</b></p></div><div >
               <PrettyJson data={props.header}/>
                  
               <PrettyJson data={props.data}/>
              
              </div>
          </div>
      )
  } else {
      return (
         <div id='review'> <p><h5>{props.Method}</h5> <b>{props.url}</b></p></div>
      )
  }
     
  }