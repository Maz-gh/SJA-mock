import React, { useState } from "react";

const ShopSidebar = () => {
    const [isActive, setActive] = useState("false");
    const [isActiveA, setActiveA] = useState("false");
    const [isActiveB, setActiveB] = useState("false");
    const [isActiveC, setActiveC] = useState("false");
    const [isActiveD, setActiveD] = useState("false");
    const [isActiveE, setActiveE] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggleA = () => {
        setActiveA(!isActiveA);
    };
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };
    const handleToggleC = () => {
        setActiveC(!isActiveC);
    };
    const handleToggleD = () => {
        setActiveD(!isActiveD);
    };
    const handleToggleE = () => {
        setActiveE(!isActiveE);
    };

    return (
        <div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActive ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggle}>Categories</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-bus"/>
                            <label className="edu-check-label" htmlFor="e-bus">AEDs (29)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-dev"/>
                            <label className="edu-check-label" htmlFor="e-dev">AED Supplies (30)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-data"/>
                            <label className="edu-check-label" htmlFor="e-data">Books (3)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-art"/>
                            <label className="edu-check-label" htmlFor="e-art">First Aid Equipment (16)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-fin"/>
                            <label className="edu-check-label" htmlFor="e-fin">First Aid Kits (61)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-mark"/>
                            <label className="edu-check-label" htmlFor="e-mark">First Aid Supplies (17)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveC ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleC}>Province Availability</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-lave"/>
                            <label className="edu-check-label" htmlFor="e-lave">Quebec (154)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-beg"/>
                            <label className="edu-check-label" htmlFor="e-beg">Manitoba (148)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-inter"/>
                            <label className="edu-check-label" htmlFor="e-inter">New Brunswick (136)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Newfoundland & Labrador (136)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Nova Scotia (136)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Prince Edward Island (136)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Northwest Territories (130)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Nunavut (130)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Alberta (118)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Saskatchewan (104)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Yukon (103)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">British Columbia (102)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Ontario (156)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveA ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleA}>Ratings</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-25" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-25">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-24" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-24">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-12" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-12">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                (12)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-28" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-28">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                (28)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-14" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-14">
                                <i className="fas fa-star">
                                </i> <i className="fal fa-star">
                                </i> <i className="fal fa-star">
                                </i><i className="fal fa-star">
                                </i><i className="fal fa-star"></i>
                                (14)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveB ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleB}>Price</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-85" name="price"/>
                            <label className="edu-check-label" htmlFor="e-85">All (85)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-all" name="price"/>
                            <label className="edu-check-label" htmlFor="e-all">Free (21)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="f-all" name="price"/>
                            <label className="edu-check-label" htmlFor="f-all">Paid (54)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveD ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleD}>Language</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-eng"/>
                            <label className="edu-check-label" htmlFor="e-eng">English (21)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-fren"/>
                            <label className="edu-check-label" htmlFor="e-fren">French (7)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveE ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleE}>Duration</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-less"/>
                            <label className="edu-check-label" htmlFor="e-less">Less than 1 Hours (24)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-36"/>
                            <label className="edu-check-label" htmlFor="e-36">1-2 Hours (36)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-25"/>
                            <label className="edu-check-label" htmlFor="m-25">2-5 Hours (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-32"/>
                            <label className="edu-check-label" htmlFor="m-32">6-7 Hours (32)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-11"/>
                            <label className="edu-check-label" htmlFor="m-11">7-10 Hours (11)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;