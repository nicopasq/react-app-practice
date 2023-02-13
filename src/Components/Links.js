import React from "react";
import { githubLogo, linkedinLogo } from "../images/images";

function Links(){
    return(
            <ul className="linkList" style={{listStyle: 'none'}}>
            <li><a href="https://github.com/nicopasq"><img className="linkImg" src={githubLogo}/></a></li>
            <li><a href="https://www.linkedin.com/in/nico-pasquariello-929066252/"><img classname="linkImg" src={linkedinLogo}/></a></li>
            </ul>
    )
}

export default Links