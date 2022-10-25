import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="about-area p-relative pt-90 pb-70">
            <div className="container">
                {/* <img className="about-shape" src="assets/img/shape/education-shape-03.png" alt="shape"/> */}
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img position-relative mb-50">
                            <div className="about-main-img">
                                <img src="assets/img/slider/hero-01.png" alt="about"/>
                            </div>
                            {/* <img className="about-shape-1" src="assets/img/shape/education-shape-01.png" alt="about"/>
                            <img className="about-shape-2" src="assets/img/shape/education-shape-02.png" alt="about"/>
                            <img className="about-shape-3" src="assets/img/shape/education-shape-05.png" alt="about"/> */}
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="about-content mb-50">
                            <div className="section-title mb-30">
                                <h2>Standard First Aid<br/>
                                (CSA Intermediate)
                                </h2>
                            </div>
                            <div className="student-choose-list">
                                <p className=" mb-30">Standard First Aid (CSA Intermediate) courses meet provincial regulations for workplace first aid across Canada. Each course covers topics such as managing emergency scenes, CPR, wound care, fractures...</p>
                                <ul>
                                    <li><i className="fas fa-check-circle"></i>Certificate valid for 3 years</li>
                                    <li><i className="fas fa-check-circle"></i>Meets Occupational Health & Safety (OHS) standards</li>
                                    <li><i className="fas fa-check-circle"></i>Meets Workplace First Aid (WFA) standards</li>
                                </ul>
                            </div>

                            <Link href="/course"><a className="edu-btn">Apply now</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;