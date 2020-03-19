import React from "react";
import Styled from "styled-components";

function Body (props){
    return(
        <>
        <ImgStyle>
           <PicStyle src ={props.image}></PicStyle> 
        </ImgStyle>
        <DesStyle>
            <p>
                {props.description}
            </p>
        </DesStyle>
        </>
    )
}

//styled compontents
const ImgStyle = Styled.div`
    background-color:#FFB6C1;
    border-left: white 10px dotted;
    border-right: white 10px dotted;

`
const DesStyle = Styled.div`
    display:flex;
    justify-content:center;
    align-text:center;
    background-color:#FFB6C1;
    color:white;
    font-size:20px;
    border-left: white 10px dotted;
    border-right: white 10px dotted;
    `

    const PicStyle = Styled.img`
    border-radius: 45px;
    padding-top: 20px;
    width:50%;
    `

export default Body;