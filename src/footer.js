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
    color:#C8A2CB;
    font-size:15px;
    border: #C8A2CB 10px dotted;`

export default Footer;