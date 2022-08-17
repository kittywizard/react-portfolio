import Link from "./Link";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { linkData } from "../data/linkdata";

export default function Nav() {
    const linkMap = linkData.map(link => (
        <Link 
            icon={link.icon}
            url={link.url}
        />

    ))
    return (
        <ul>
            {linkMap}
        </ul>
    )
}