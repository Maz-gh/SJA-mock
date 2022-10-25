import React from 'react';
import Link from 'next/link';

const ZoomSection = () => {
    return (
        <section className="zoom-area pt-120 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-2">
                        <div className="zoom-thumb position-relative">
                            {/* <img className="zoom-shape-01" src="assets/img/teacher/therapydogs-bc.jpeg" alt="image not found"/> */}
                            {/* <img className="zoom-shape-02" src="assets/img/teacher/therapydogs-bc.jpeg" alt="image not found"/> */}
                            <img className="zoom-thumb-main-img" src="assets/img/teacher/therapydogs-bc.jpeg" alt="image not found"/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5 order-lg-1">
                        <div className="zoom-class-wrapper mb-60">
                            <div className="section-title mb-30">
                                <h2>Therapy Dog program</h2>
                            </div>
                            <div className="zoon-class-text">
                                <p>The St. John Ambulance Therapy Dog Program reaches out to thousands of people across Canada on a daily basis bringing comfort, joy and companionship to members of the community who are sick, lonely, reside in long-term care and mental health facilities; are in hospitals, schools and library settings...</p>
                            </div>
                            <Link href="/zoom-class"><a className="edu-btn btn-transparent mt-25">Learn More</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZoomSection;