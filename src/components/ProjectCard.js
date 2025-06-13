// import React, { useEffect, useRef } from "react";
// import "./ProjectCardStyle.css";
// import Tilt from "react-parallax-tilt";


// export default function ProjectCard(props) {

//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     // Function to handle video play on entering the viewport
//     const handlePlayVideo = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           videoElement.currentTime = 0;
//           videoElement
//             .play()
//             .catch((error) => {
//               console.warn("Autoplay failed:", error);
//             });
//         } else {
//           videoElement.pause();
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handlePlayVideo, {
//       threshold: 0.5, // Adjust as needed
//     });

//     if (videoElement) {
//       observer.observe(videoElement);
//     }

//     return () => {
//       if (videoElement) {
//         observer.unobserve(videoElement);
//       }
//     };
//   }, []);

//   return (
//     <div className="project-window" id={props.id} style={{ backdropFilter:"blur(3px)",
//       webkitBackdropFilter: "blur(5px)",}}>
//       <div className={`project-wrapper ${props.className}`}>
//         <div className="about-project">
//           <div className="project-title">{props.projectTitle}</div>
//           <div className="desc">{props.projectDesc}</div>
//         </div>
//         <Tilt className="project-img" gyroscope={true}>
//           <a
//             href={props.projectLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <video
//               ref={videoRef}
//               width="100%"
//               height="auto"
//               controls={false}
//               muted
//               playsInline
//               src={props.projectImg}
//               alt="Displaying Project"
//               autostart={true}
//               autoPlay={true}
//             />
           
//           </a>
//         </Tilt>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import "./ProjectCardStyle.css";
import Tilt from "react-parallax-tilt";

export default function ProjectCard(props) {
  const videoRef = useRef(null);
  const [isVideoLink, setIsVideoLink] = useState(false);

  useEffect(() => {
    // Check if the source is a video file or YouTube/Vimeo link
    setIsVideoLink(
      typeof props.projectImg === 'string' && 
      (props.projectImg.includes('youtube') || props.projectImg.includes('vimeo'))
    );

    // Only run intersection observer for local videos
    if (videoRef.current && !isVideoLink) {
      const videoElement = videoRef.current;

      const handlePlayVideo = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.currentTime = 0;
            videoElement.play().catch((error) => {
              console.warn("Autoplay failed:", error);
            });
          } else {
            videoElement.pause();
          }
        });
      };

      const observer = new IntersectionObserver(handlePlayVideo, {
        threshold: 0.5,
      });

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    }
  }, [props.projectImg, isVideoLink]);

  const extractVideoId = (url) => {
    // YouTube ID extraction
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    }
    // Vimeo ID extraction
    else if (url.includes('vimeo.com')) {
      const regExp = /^.*(vimeo.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
      const match = url.match(regExp);
      return match ? match[5] : null;
    }
    return null;
  };

  const renderVideo = () => {
    if (isVideoLink) {
      const videoId = extractVideoId(props.projectImg);
      
      if (props.projectImg.includes('youtube')) {
        return (
          <div className="project-video">
            <iframe
              // width="100%"
              // height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={props.projectTitle}
            />
          </div>
        );
      } else if (props.projectImg.includes('vimeo')) {
        return (
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={props.projectTitle}
            />
          </div>
        );
      }
    }

    // Default to local video
    return (
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        controls={false}
        muted
        playsInline
        loop
        src={props.projectImg}
        alt={props.projectTitle}
      />
    );
  };

  return (
    <div 
      className="project-window" 
      id={props.id} 
      style={{ 
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(5px)"
      }}
    >
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
        </div>
        <Tilt className="project-img" gyroscope={true}>
          <a
            href={props.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderVideo()}
          </a>
        </Tilt>
      </div>
    </div>
  );
}