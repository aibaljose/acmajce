import React, { useRef } from 'react';
import AnimatedCursor from "react-animated-cursor";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    var settings = {
        dots: true,
        // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 1262,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='home'>
            <AnimatedCursor innerSize={20} />
            <nav>
                <div className="logo">
                    <img src="https://ajce.acm.org/assets/LOGO23-2Riq8ZYW.png" height="40px" width="70px" alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Events</li>
                    <li>Excom</li>
                    <li>Testimonials</li>
                    <li className='btn'>Join</li>
                </ul>
            </nav>
            <div className="hero">
                <h1>Ready to <i>scale</i><br />your Skill with ACM?</h1>
                <p>Innovative design solutions for technology firms <br />and emerging businesses weary of the typical<br /> aesthetic methodology. Arriving shortly.</p>
                <div className="btn-con">
                    <div className="btn">Events</div>
                    <div className="btn2">Excom</div>
                </div>
            </div>


            <div className="section2">
                {/* <div className="profilecard team" style={{ width: "30px" }}>
                    <div className="texthere">
                        <h1>Our Team</h1>
                    </div>
                </div> */}
                <div className="section1 slider-container ">

                    <Slider {...settings}>

                        <div className="profilecard img3">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>
                        <div className="profilecard img2">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>
                        <div className="profilecard img2">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>
                        <div className="profilecard img2">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>
                        <div className="profilecard img2">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>
                        <div className="profilecard img2">
                            <div className="btn">Aibal Jose <p>web developer</p></div>
                        </div>

                    </Slider>
                </div>

            </div>



            {/* <div className="section2">
                <div className="arrowcon">
                    <div className="arrow" onClick={scrollLeft}>🡸</div>
                    <div className="arrow" onClick={scrollRight}>⮞</div>
                </div>
                <div className="ourteam" ref={scrollContainerRef}>
                    <div className="profilecard img1">
                        <div className="texthere">
                            <h1>Our Team</h1>
                        </div>
                    </div>
                    <div className="profilecard img2">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                    <div className="profilecard img2">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                    <div className="profilecard img2">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                    <div className="profilecard img3">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                    <div className="profilecard img4">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                    <div className="profilecard img5">
                        <div className="btn">Aibal Jose <p>web developer</p></div>
                    </div>
                </div>
            </div> */}
            <div className="section3"></div>
        </div>
    );
}

export default Home;
