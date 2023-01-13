import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <h2>About Me</h2>
            <p>Born August 4 1992, I was adopted and brought to America in July 2 1997. Growing up, my biggest passion was singing and music, which in turn, I attended a highschool for vocals. I became acquainted with writting poetry, followed by stories, no of which I have finished in its entirety. Video games was briefly introduced in my childhood and strongly enjoyed.</p>
            <p>Growing up with the rise of wifi, and the forgotten times of dial up, I became drawn to computers. Id find myself playing with word office as microsoft continued to improve its software. Silly to think that I genuilly enjoyed making power points for various reasons and figuring out Excel to impress my teachers. Social media had a boom once Facebook became known. My mother was a bigger fan than myself. However, in the back of my mind I wondered how it was all done and how one would even begin to program such an intelligent and responsive sight. Thus my curiosuty peaked.</p>
            <p>Before my journey to web development, I had mamy different jobs, and one career path. I thought I would soon be enveloped with helping addicts recover for the remainder of my days. I was passionate about my work, but something was missing. I did not feel proud, simply because my creative side was hushed. I love the idea of creating something of my own and having others enjoy it as much as i had enjoyed creating it. During that time, I became big in video games. The graphics were emesly superior to those of the ps2 which was my favorite console as a teenager. It was an entirely new world. Of course, consoles, games, and computers werent the only thing that have evolved into something incredible. The internet and all of the websites had become beyond dominate in the 21st centery. Everything was becoming paperless, social media turned to an addiction for so many.</p>
            <p>Knowing I want to be a part of that development, I took the next step. I went into a Full Stack web development boot camp. I knew I would enjoy it, learning new things had always been intriguing, but never thought that I would truly fall in love with coding and all the possibilities it implored. I know now this is the career path I have always wanted. </p>
            <p>Please take a gander at some of my completed projects and others still in the making.</p>
            <Link to="/hobbies" className="hobbies-link"><h4>Hobbies</h4></Link>
        </div>
    )
}

export default AboutMe