import React from "react";
import "./form.scss";

function Form(props) {
  //-----------------------------------------
    return ( 
        <form className="form">
            <div className="request">
                <input className="input" type="text" name="url" placeholder="http://api.url.here" />
               
                <button className= "send" type="submit"  > Go! </button>
            </div>
            <div className="methods">
                <button className="method" id="GET" name ="GET" >GET</button>
                <button className="method" id="POST" name = "POST">POST</button>
                <button className="method" id="PUT" name = "PUT" >PUT</button>
                <button  className="method" id="DELETE" name = "DELETE" >DELETE</button>

                <textarea name="body"  id="textdata" defaultValue="{}" />
            </div>
        </form>
    )
}
export default Form;