import React from "react";

function Footer(props) {
    return (
        <div>
        <p>{props.copyright}</p>
        <p>{props.date}</p>
        </div>
    );
}

export default Footer;