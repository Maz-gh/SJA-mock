import React from 'react';
import Link from 'next/link';

const TeacherSection = () => {
    return (
        <section className="teacher-area position-relative pt-120 fix">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-img position-relative">
                            <img className="teacher-main-img" src="assets/img/teacher/teacher-1.png" alt="image not found"/>
                            <img className="teacher-shape" src="assets/img/teacher/teacher-shape-01.png"
                                alt="image not found"/>
                            {/* <img className="teacher-shape-02" src="assets/img/teacher/teacher-shape-02.png"
                                alt="image not found"/> */}
                            <img className="teacher-shape-03" src="assets/img/teacher/teacher-shape-03.png"
                                alt="image not found"/>
                            <img className="teacher-shape-04" src="assets/img/teacher/teacher-shape-04.png"
                                alt="image not found"/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-5">
                        <div className="teacher-content mr-20">
                            <div className="section-title mb-30">
                                <h2>How We Help</h2>
                            </div>
                            <p>Caring for communities from coast-to-coast, St. John Ambulance Canada has more than 15,000 volunteers and coordinates one of the country's largest volunteer networks. Our volunteers contribute an astounding two million hours of volunteer time to communities of all sizes in all regions of Canada.</p>
                            <Link href="/instructor"><a className="edu-btn btn-transparent mt-25">Learn More</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;