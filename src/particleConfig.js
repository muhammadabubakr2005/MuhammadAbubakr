import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
const ParticleConfig = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 130,
          },
          color: {
            value: "#A9A9A9",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 3,
              color: "#A9A9A9",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
            //img
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color:"#00ffca",
            opacity: 0.5,
            width: 2,
          },

          // links: {
          //   color: "#ffffff",
          //   distance: 200,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          move: {
            direction: "none",
            enable: true,

            random: false,
            speed: 1,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        background: {
          color: {
            value: "#000000", // Black background color
          },
        },
        // fpsLimit: 120,
        interactivity: {
          detect_on: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 4,
            },

            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },

        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
       
        // backdropFilter:' blur(10px)',
      }}
    />
  );
};
export default ParticleConfig;