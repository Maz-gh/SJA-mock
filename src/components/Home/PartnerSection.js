import React from 'react';

const PartnerSection = () => {
    return (
        <div className="patner-area pt-110 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 col-md-4">
                        <div className="partner-box mb-30">
                            <div className="partner-thumb d-none d-sm-block">
                                <img src="assets/img/bg/partner.png" alt="partner-png"/>
                            </div>
                            <div className="section-title mb-30">
                                <h2>Business Accounts</h2>
                            </div>
                            <div className="Partner-content">
                                <p>If you own or manage a workplace in Canada, First Aid isn’t an option for you; it’s the law. Most businesses know this; yet few understand exactly what they need to do to satisfy their requirements.</p>
                                {/* <div className="partner-text">
                                    <p> <span>9,500</span>+businesses and students
                                        around the world</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8">
                        <div className="partner-wrapper">
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-01.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-02.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-03.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-04.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-05.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-06.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-07.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-08.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-09.png" alt="image not found"/>
                            </div>
                            <div className="singel-partner">
                                <img src="assets/img/brand/partner-10.png" alt="image not found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;