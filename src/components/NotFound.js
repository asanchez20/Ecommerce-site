import Hero from "./Hero";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <>
        <Hero text={"Opps Page Not Found Let me help you out"}/>
        <Link to="/">Home Page</Link>
        </>
    )
}

export default NotFound