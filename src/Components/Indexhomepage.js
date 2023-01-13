import React from "react";
import { Link } from "react-router-dom";


const IndexForHomePage = () => {
    return (
        <div id="homepage">
            <h1>Tori Deblinger</h1>
            <div id="titles">
                <h2>Full Stack Web Developer</h2>
                <h2>UI/UX Developer</h2>
                <h2>Frontend/Backend Engineer</h2>
            </div>
            {/* <div>
                <a><img src="https://www.facebook.com/photo.php?fbid=10215598184560800&set=pb.1026261510.-2207520000.&type=3" alt="Photo of Tori Deblinger Sitting on a porch" /></a>
            </div> */}
            <div>
                <Link to="/skills" className="skills-link"><h4>Skills</h4></Link>
            </div>
        </div>
    )
}
export default IndexForHomePage