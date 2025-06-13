import React, { useEffect, useRef } from "react";
import "./ProjectCardStyle.css";
import Tilt from "react-parallax-tilt";


export default function ProjectCard(props) {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to handle video play on entering the viewport
    const handlePlayVideo = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.currentTime = 0;
          videoElement
            .play()
            .catch((error) => {
              console.warn("Autoplay failed:", error);
            });
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5, // Adjust as needed
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="project-window" id={props.id} style={{ backdropFilter:"blur(3px)",
      webkitBackdropFilter: "blur(5px)",}}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
        </div>
        <Tilt className="project-img" gyroscope={true}>
          <a
            href={props.deployedProjectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              ref={videoRef}
              width="100%"
              height="auto"
              controls={false}
              muted
              playsInline
              src={props.projectImg}
              alt="Displaying Project"
              autostart={true}
              loop={true}
              autoPlay={true}
            />
           
          </a>
        </Tilt>
      </div>
    </div>
  );
}
