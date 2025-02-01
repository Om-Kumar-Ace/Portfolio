import React from 'react';
import './About.css';
import Image from '../../assets/O__3_-removebg-preview.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I'm Om Kumar, an aspiring Software Engineer currently pursuing a Bachelor of Technology degree in Computer Science Engineering at Asansol Engineering College, affiliated with Maulana Abul Kalam Azad University of Technology. I have a solid foundation in web development and a deep passion for technology.<br /><br />
                        Fast forward to today, and I can honestly say it's been a beautiful journey. I am eager to continue growing as a Software Engineer.My current focus is on expanding my portfolio by building impactful projects while honing my skills and collaborating effectively in team environments<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About