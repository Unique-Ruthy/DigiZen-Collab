import React from 'react';
import "./Literacy.css"

import Nav from "../../Components/NavBar/index"
import Footer from "../../Components/Footer/index"

/*Upper Side*/
import BugImg from "./images/bug.png"
import Shape from "./images/shape.png"
import Vector2 from "./images/Vector_2.png"
import Subs from "./images/subscription.png"
import CarbonHybrid from "./images/carbon_hybrid.png"
import Carbon from "./images/carbon.png"

/*Lower Side*/
import Dashicons from "./images/dashicons.png"
import Computer from "./images/computer.png"
import Group from "./images/Group.png"
import Key from "./images/key.png"
import Employees from "./images/Office_employees.png"
import Planning from "./images/Planning_work.png"
import Security from "./images/security.png"



const Literacy = () => {
    return (
        <div>
            <Nav />
            <div className="overallContainer">
                <div className="upperside">
                    <div className="tripleImg">
                        <div className="leftSideImg">
                            <img id='bug' src={BugImg} alt='BugImg' />
                        </div>
                        <div className="middleSideImg">
                            <img id='vector' src={Vector2} alt='VectorImg' />
                            <h3 className='overlay-text'>Digital Literacy</h3>
                        </div>
                        <div className="lastImg">
                            <img id='shape' src={Shape} alt='Shape' />
                            <img src={Subs} alt='SubscriptionImg' className='overlay-image' />
                        </div>
                    </div>
                    <div className="textArea">
                        <div className="firstImg">
                            <img className='hybrid' src={CarbonHybrid} alt='HybridImg' />
                        </div>
                        <div className='texts'>
                            <p>In today's rapidly evolving digital world, digital literacy is indispensable.
                                It encompasses the skills, knowledge, and behaviours required to effectively
                                and responsibly engage with digital technologies. From basic internet navigation
                                to critical thinking and cybersecurity, digital literacy empowers individuals to
                                make informed decisions, communicate efficiently, and participate meaningfully in
                                the digital society.
                            </p>
                            <p className='p2'>This overview explores the significance of digital literacy in fostering responsible
                                digital citizenship and provides practical tips for enhancing digital literacy skills.
                                Join us on the journey to become savvy and responsible digital citizens.
                            </p>
                        </div>
                        <div className="secondImg">
                            <img className='hyb' src={Carbon} alt='HybImg' />
                        </div>
                    </div>
                    <div className="buttons">
                        <button>Download 101 Guide</button>
                        <button>Take Quiz</button>
                        <button>Blog</button>
                    </div>
                </div>
                <div className="lowerside">
                    <div className="boxes">
                        <h2>The ABC of Digital Literacy</h2>
                        <div className="threeBoxes">
                            <img id='key' src={Key} alt='KeyImg' />
                            <div className="box">
                                <img src={Group} alt='GroupImg' />
                                <h2>ACCESS</h2>
                                <p>
                                    Ensuring equitable access to digital technologies
                                    and resources for all individuals, regardless of
                                    their socioeconomic background, geographic location,
                                    or physical abilities.
                                </p>
                            </div>
                            <div className="box">
                                <img src={Employees} alt='EmployeesImg' />
                                <h2>BEHAVIOUR</h2>
                                <p>
                                    Ensuring equitable access to digital technologies
                                    and resources for all individuals, regardless of
                                    their socioeconomic background, geographic location,
                                    or physical abilities.
                                </p>
                            </div>
                            <div className="box">
                                <img src={Planning} alt='PlanningImg' />
                                <h2>COMPETENCE</h2>
                                <p>
                                    Ensuring equitable access to digital technologies
                                    and resources for all individuals, regardless of
                                    their socioeconomic background, geographic location,
                                    or physical abilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="remains">
                        <h3>Become a digital Literate today with Digizens</h3>
                        <div className="others">
                            <img src={Computer} alt='ComputerImg' />
                            <div className="remainsButton">
                                <button>Resource Bank</button>
                            </div>
                            <img src={Dashicons} alt='Dashicons' />
                        </div>
                    </div>

                    <div className="lastly">
                        <img src={Security} alt='SecurityImg' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Literacy;