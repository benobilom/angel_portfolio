import React from "react";
import classes from "../styles/Hero.module.css";
import arrowIcon from "../../assets/arrow.png";
import profilePic from "../../assets/profile-pic.jpg";
import resume from "../../assets/resume.pdf";
import mediaKit from "../../assets/media-kit.pdf";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";
import Brands from "../sections/Brands";
import About from "../sections/About";
import VideoAnalytics from "../sections/VideoAnalytics";

function Hero() {
  return (
    <>
      <section id="hero" className={classes.hero}>
        <div className={classes.sectionPicContainer}>
          <img src={profilePic} alt="Angel profile pic" />
        </div>
        <div className={classes.sectionText}>
          <h1 className={classes.title}>Angel Ojuola</h1>
          <p className={classes.sectionTextP2}>
            Empowering your confidence and growth through content creation
          </p>
          <div className={classes.btnContainer}>
            <button
              className={`${classes.btn} ${classes.btnColor2}`}
              onClick={() => window.open(mediaKit, "_blank")}
            >
              View Media-kit
            </button>
            <button
              className={`${classes.btn} ${classes.btnColor1}`}
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div className={classes.socialContainer}>
            <img
              src={linkedIn}
              alt="My LinkedIn Profile"
              className={classes.icon}
              onClick={() =>
                (location.href = "https://www.linkedin.com/in/angelariyibi/")
              }
            />
            <img
              src={tiktok}
              alt="My Tiktok Profile"
              className={classes.icon}
              onClick={() =>
                (location.href = "https://www.tiktok.com/@angelojuola")
              }
            />
            <img
              src={instagram}
              alt="My Instagram Profile"
              className={classes.icon}
              onClick={() =>
                (location.href = "https://www.instagram.com/angelojuola/")
              }
            />
            <img
              src={youtube}
              alt="My Youtube Profile"
              className={classes.icon}
              onClick={() =>
                (location.href = "https://www.youtube.com/@angelojuola")
              }
            />
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className={`${classes.arrow} ${classes.icon}`}
          onClick={() => (location.href = "./#brands")}
        />
      </section>
      <About />
      {/* Add VideoAnalytics Component */}
      <VideoAnalytics
        videoUrl="https://www.tiktok.com/embed/7314652239593753888"
        views="12,345"
        shares="234"
        comments="56"
        saves="89"
      />
      <Brands />
    </>
  );
}

export default Hero;
