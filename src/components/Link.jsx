import React from "react";
import * as FontAwesome from "react-icons/fa";

export default function Link({icon, url}) {
    const displayIcon = FontAwesome[icon];
    return(
        <li>
            <a href={url} className="nav-link" target="_blank" rel="noopener">
                {React.createElement(displayIcon)}
            </a>
        </li>
    )
}