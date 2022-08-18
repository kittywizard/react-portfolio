//import * as FontAwesome from "react-icons/fa";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"

export default function Card({icon}) {
    //const displayIcon = FontAwesome[icon];


    return (
        <article className="card">
            <img src="https://placekitten.com/g/300/300" className="card-img"/>
            <div className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div className="icon-container">
                {/* replace with prop icons eventually */}
                <FaCss3 /> 
                <FaReact />
                <FaHtml5 />
            </div>

        </article>
    )
}