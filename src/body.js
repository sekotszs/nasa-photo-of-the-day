import React from "react";

function Body (props){
    return(
        <>
        <div>
           <img src ={props.image}></img> 
        </div>
        <div>
            <p>
                {props.description}
            </p>
        </div>
        </>
    )
}

export default Body;