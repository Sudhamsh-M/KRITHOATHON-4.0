import React from "react";
import "./About.css";

export default function AboutKrithomedh() {
  return (
    <section className="about-section">

      {/* Background */}
      <div className="about-bg">
        <div className="glow glow-red" />
        <div className="glow glow-purple" />
      </div>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <h2 className="about-title">ABOUT US</h2>

          <p className="about-text primary">
            Krithomedh is a student-driven technical club of department of CSE- (AIML & IoT), R&AI in VNRVJIET dedicated to exploring and advancing the field of Artificial Intelligence and Machine Learning.We conduct workshops, hands-on coding sessions and project-based learning focused on AI, ML, deep learning, and data-driven technologies.
          </p>

          <p className="about-text secondary">
            Our mission is to empower students with AI knowledge and practical skills, enabling them to build intelligent solutions for real-world problems.
          </p>
        </div>

        {/* RIGHT (ONLY IMAGE) */}
        <div className="about-right">
          <img
            src="./src/assets/1.jpeg"
            alt="Krithomedh"
            className="about-image"
          />
        </div>

      </div>
    </section>
  );
}