import React from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



function Experience() {
    return (
        <div className='experience' id="experience">
            <div className="max-width">
                <h1>Experiences</h1>
                <Tabs>
                    <TabList>
                        <Tab>Internship</Tab>
                        <Tab>Project</Tab>
                        <Tab>Certificates</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Work & internship</h2>
                        <a href="https://www.thesparksfoundationsingapore.org/" target='_blank'>
                        <div className="panel">
                            
                            <img src="./img/grip.png" alt="logo" />
                            <h3>The Sparks Foundation</h3>
                            <h6>Web Development & Designing</h6>
                            <h6>Intern (August 2021 - Present)</h6>
                        </div>
                        </a>
                    </TabPanel>
                    <TabPanel>
                        <h2>Project</h2>
                        <h3>Wordpress:</h3>
                        <a href="http://wordpressdummy.epizy.com/" target='_blank'>
                        <div className="panel">
                            <img className='gif' src="./img/wordpress.gif" alt="logo" />
                            <h3>E-commerce Website</h3>
                            <p>Created this website using wordpress & it's plugin</p>
                        </div>
                        </a>
                        <h3 className="panel-h3">React:</h3>
                        <a href="#" target='_blank'>
                        <div className="panel">
                            <img className='gif' src="./img/portfolio.gif" alt="logo" />
                            <h3>This Porfolio</h3>
                            <p>Created this website using React.js,js & React-Bootstrap</p>
                        </div>
                        </a>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default Experience;
