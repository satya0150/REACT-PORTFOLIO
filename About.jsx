import React from "react";
import '../index.css';



function About() {
    return (
        <div className='about' id="about">
            <div className="max-width">
                <h1>About me</h1>
                <div className="left">

                    <p>
                        <h3>Hello!</h3>
                        First of all Thank-you for visitng my website. <br />
                        My name is <b>Satyam Kumar choudhary</b>.I am pursuing <b>B.tech(CSE)</b> from Galgotias University,Greater Noida,UP. <br />
                        I am good in <b>Web developing (HTML, CSS, Javascript, React.js, Express.js and Node.js)</b> and Programming language (C, Python). <br />
                        I am particular about my schedule and always manage time efficiently. I am a quick learner and ready to take new challenges require to perform better. <br />
                        My short-term goal is to get a job in a reputed company and my Long-term goal is to achieve a good position where I can build my carrer as well as organization too. <br />
                        I look forward to hearing from you and  thank-you for your consideration.
                    </p></div>
                <div className="right">
                    <div className="img-bg">
                        <img src="./img/My Post.png" alt="dp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;