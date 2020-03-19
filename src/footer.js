import React from "react";
import Styled from "styled-components";

function Footer(props) {
    return (
        <FootStyle>
        <p>{props.copyright}</p>
        <p>{props.date}</p>
        </FootStyle>
    );
}

const FootStyle = Styled.div`
background-color:#FFB6C1;
    color:white;
    font-size:15px;
    border: white 10px dotted;`

export default Footer;