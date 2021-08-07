import React from "react";

function Home() {
    return (
        <div className="home" id="home">
            <div className="max-width">
                <div className="box">
                    <div className="cont">
                        <img src="./img/DP.png" alt="Dp" />
                    </div>
                    <h1 className="home-h1">Satyam Kumar Choudhary</h1>
                    <h3 className="home-h3">Web Developer | Computer Science Student</h3>
                    <div className="social">
                        <a href="https://github.com/satya0150" target="_blank" rel="noopener noreferrer"><img src="./img/github.png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/bip-satyam/" target="_blank" rel="noopener noreferrer"><img src="./img/linkedin.png" alt="linkdin" /></a>
                        <a href="https://www.codechef.com/users/satya0150" target="_blank" rel="noopener noreferrer"><img src="./img/codechef.png" alt="codechef" /></a>
                        <a href="https://www.instagram.com/bip_satyam/" target="_blank" rel="noopener noreferrer"><img src="./img/insta.png" alt="instagram" /></a>
                        <a href="https://twitter.com/bip_satyam" target="_blank" rel="noopener noreferrer"><img src="./img/twitter.png" alt="twitter" /></a>
                    </div>
                    <div className="hire">
                        <button className="bnt"><b>Hire me</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;