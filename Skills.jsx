import React from "react";

function Skills() {
    return (
        <div className="skill" id="skill">
            <div className="max-width">
                <h1>Skills</h1>
                <div className="left">
                    <h2>Web Development</h2>
                    <div className="front">
                        <h3>Front-end:</h3>
                        <img src="./img/html.png" alt="html" />
                        <img src="./img/css.png" alt="css" />
                        <img src="./img/js.png" alt="js" />
                        <img src="./img/react.png" alt="react" />
                    </div>
                    <div className="back">
                        <h3>Back-end:</h3>
                        <img src="./img/node.png" alt="node" />
                        <img src="./img/express.png" alt="express" />
                    </div>
                    <div className="data">
                        <h3>Database:</h3>
                        <img src="./img/sql.png" alt="sql" />
                    </div>
                    <div className="design">
                        <h3>Design:</h3>
                        <img src="./img/canva.png" alt="canva" />
                        <img src="./img/spark.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>Programming language</h2>
                    <img src="./img/c.png" alt="c" />
                    <img src="./img/python.png" alt="python" />
                </div>
            </div>
        </div>

    );
};

export default Skills;