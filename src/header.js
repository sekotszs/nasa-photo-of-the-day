import React from "react";
import Styled from "styled-components";

function Header(props) {
    return (
        <HeadStyle>
        <p>{props.title}</p>
        </HeadStyle>
    );
}

//style
const HeadStyle = Styled.div`
    display:flex;
    justify-content:center;
    align-text:center;
    background-color:#FFB6C1;
    color:white;
    font-size:45px;
    border: white 10px dotted;
`




export default Header;


