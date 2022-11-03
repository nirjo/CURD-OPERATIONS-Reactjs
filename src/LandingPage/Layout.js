import React from "react";
import "./styles.css";
import banner from "../Assets/Images/Illustration/Illustration.png";
import Mask1 from "../Assets/Images/Mask Group 1/Mask Group 1.png";
import Mask2 from "../Assets/Images/Mask Group 1 (1)/Mask Group 1.png";
import Mask3 from "../Assets/Images/Mask Group 1.png";
import John from "../Assets/Images/John.png";
import Jane from "../Assets/Images/Jane.png";
import Jack from "../Assets/Images/Jack.png";

import "./styles.css";
function Layout(props) {
    return (
        <div className="banner">
            <div className="bannerDiv">
                <div className="bannertext">
                    <div>
                        We take care <br />
                        Marketing
                        <br />
                        things
                    </div>
                    <button class="btn btn-primary my-2 my-sm-0 PickPlan" type="submit">
                        <p>Pick a Plan</p>
                    </button>
                </div>
                <div className="bannerimage">
                    <img src={banner} alt="banner" />
                </div>
            </div>
            {/* Blog Section */}
            <div className="blogSection">
                <div className="bloglineSection">
                    <div className="blogline"></div>

                    <div className="blogtext">BLOG</div>

                </div>

                <div className="arrow">
                    <div><i class="fa fa-long-arrow-left" aria-hidden="true" size={25} ></i></div>
                    <div><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>

                </div>

            </div>

            {/* Images Section */}
            <div >
                <h2 className="imagetext">Explore Marketing Tips</h2>
                <div className="imagesection">
                    <div>
                        <img src={Mask1} alt="banner" />
                        <div className="bannerJohn">
                            <div>
                                <img src={John} alt="john" />
                            </div>
                            <div className="JohnText">John Doe</div>
                        </div>
                        <div className="ImageContent1">Tips for a good Pitching Presentation</div>
                        <div className="ImageContent2">
                            Far far away, behind the word mountains, <br />far from the countries
                            Vokalia and <br /> Consonantia.
                        </div>
                    </div>
                    <div>
                        <img src={Mask2} alt="banner" />
                        <div className="bannerJohn">
                            <div>
                                <img src={Jane} alt="john" />
                            </div>
                            <div className="JohnText">Jane Maria</div>
                        </div>
                        <div className="ImageContent1">Improve Your Content's Traffic</div>
                        <div className="ImageContent2">
                            Far far away, behind the word mountains, <br />far from the countries
                            Vokalia and <br /> Consonantia.
                        </div>
                    </div>
                    <div>
                        <img src={Mask3} alt="banner" />
                        <div className="bannerJohn">
                            <div>
                                <img src={Jack} alt="john" />
                            </div>
                            <div className="JohnText">Jack Dorsey</div>
                        </div>
                        <div className="ImageContent1">Reaching Deal with your Clients</div>
                        <div className="ImageContent2">
                            "Far far away, behind the word mountains, <br />far from the countries
                            Vokalia and <br /> Consonantia.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
