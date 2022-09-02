import React from 'react'
import "./Testimonial.css";

function Testimonial() {
    return (
        <div className="testimonial">
            <h1 className="testimonialHeader">
                GitHub builds with Codespaces
            </h1>
            <h3 className="testimonialParaLine">
                Learn how GitHub builds GitHub with Codespaces <span>
                    <i className="fa-solid fa-angle-right"></i>
                </span>
            </h3>
            <div className="testimonail__TestimonialContainer">
                <div className="Testimonial Testimonailbox1">
                    <i className="fa-solid fa-quote-left testimonial__qouteIcon"></i>
                    <p className="testimonial__desc">
                        Unreal—Codespaces had me running a server in minutes, and that never happens as a new hire. What an awesome first week!
                    </p>
                    <div className="testimonial__profileFooter">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/yumin.jpg" alt="" />
                        
                        <div className="testimonialGiverDetials">
                            <h3 className="testimonialGiverName">Yumin Wong</h3>
                            <p className="testimonailGiverProfile">Staff Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="Testimonial Testimonailbox2">
                    <i className="fa-solid fa-quote-left testimonial__qouteIcon"></i>
                    <p className="testimonial__desc">
                        Day 2 of Codespaces: Shipped a pull request and started working on another one without waiting for script/bootstrap.
                    </p>
                    <div className="testimonial__profileFooter">
                        <img src="https://github.githubassets.com/images/modules/site/codespaces/chris.jpg" alt="" />
                        <div className="testimonialGiverDetials">
                            <h3 className="testimonialGiverName">Chris Westra</h3>
                            <p className="testimonailGiverProfile">Senior Software Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial