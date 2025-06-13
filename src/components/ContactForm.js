import React, { useRef } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import cartoon from "../assets/pic6.png";

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          toast.success("Message sent successfully.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("FAILED:", error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="contact-window" id={id} style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(5px)" }}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img src={cartoon} alt="Cartoon" className="contact-wrapper-left" />
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email ID" required />
          <textarea name="message" rows="5" placeholder="Share your thoughts..." required />
          <button className="btn" type="submit" style={{ color: "#fff", background: "#7722e7", borderColor: "#7722e7" }}>
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
