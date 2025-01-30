import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";


export const About = () => {
  

  const { user } = useAuth();




  return (
    <>
    <main>

    <div className="about-page">
      <div className="content">
        <div className="username">Welcome {user.username}</div>
        <h1 className="title">Why Choose Us?</h1>
        <div className="features">
          <div className="feature-item">
            <strong>Expertise:</strong> Experienced IT professionals staying up-to-date with the latest trends.
          </div>
          <div className="feature-item">
            <strong>Customization:</strong> Tailored solutions to meet your specific needs and goals.
          </div>
          <div className="feature-item">
            <strong>Customer-Centric Approach:</strong> Prioritizing your satisfaction with top-notch support.
          </div>
          <div className="feature-item">
            <strong>Affordability:</strong> Competitive pricing without compromising quality.
          </div>
          <div className="feature-item">
            <strong>Reliability:</strong> Ensuring your IT environment is reliable and available 24/7.
          </div>
        </div>
        <div className="buttons">
          <a href="/contact">
            <button className="btn connect-btn">Connect Now</button>
          </a>
          <a href="/service">
          <button className="btn learn-more-btn">Learn More</button>
          </a>
          
        </div>
      </div>
      <div className="illustration">
        <img src="/images/about.png" alt="Illustration" />
      </div>
      
    </div>
    <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>registered companies</p>
            </div>
            <div className="div1">
                <h2>100,000+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="div1">
                <h2>500+</h2>
                <p>Wellknown developers</p>
            </div>
            <div className="div1">
                <h2>24/7+</h2>
                <p>service</p>
            </div>

        </div>
      </section>
    </main>

    </>
    
    
  );
};



