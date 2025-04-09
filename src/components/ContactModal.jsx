import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Logo from "../assets/Logo1.svg";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const modalRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Block scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close with the Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("DM5-yHQq83juMFDrz");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send("service_yi4m10d", "template_c0oqlza", templateParams)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSubmitStatus("success");

        // Reset form after submission
        setName("");
        setEmail("");
        setMessage("");

        // Close the modal after a short delay
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">
      <div
        ref={modalRef}
        className="relative max-w-[946px] w-full mx-4 md:mx-auto md:max-h-[524px] bg-[#253e85]/40 rounded-lg text-white p-8 flex flex-col md:flex-row"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute hover:text-gray-400 right-4 top-4 text-white text-2xl font-normal focus:outline-none"
        >
          X
        </button>

        {/* Form content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 tracking-[8%] font-poppins">
          <h2 className="text-2xl mb-2 text-[#AAEBFB]  font-[600]">
            Contact Form
          </h2>
          <p className="text-lg mb-6 text-[12px] ">Let's ride, Gamers!</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 font-poppins text-[12px]"
          >
            <div className="relative w-full md:w-[430px]">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-8 md:h-[50px] bg-[#AAEBFB]/30 px-4 py-2 rounded text-white focus:outline-none placeholder-transparent"
                required
                id="name"
                name="user_name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 md:top-4 top-2 text-white transition-all duration-200 underline pointer-events-none"
                style={{
                  opacity: name ? "0" : "1",
                  transform: name ? "translateY(-2rem)" : "translateY(0)",
                }}
              >
                Enter your name
              </label>
            </div>

            <div className="relative w-full md:w-[430px]">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-8 md:h-[50px] bg-[#AAEBFB]/30 px-4 py-2 rounded text-white focus:outline-none placeholder-transparent"
                required
                id="email"
                name="user_email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 md:top-4 top-2 text-white transition-all duration-200 underline pointer-events-none"
                style={{
                  opacity: email ? "0" : "1",
                  transform: email ? "translateY(-2rem)" : "translateY(0)",
                }}
              >
                Enter your email address
              </label>
            </div>

            <div className="relative w-full md:w-[430px]">
              <textarea
                placeholder="Go ahead. We are listening..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-25 md:h-[150px] bg-[#AAEBFB]/30 p-4 rounded text-white focus:outline-none resize-none placeholder-transparent"
                required
                id="message"
                name="message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-white transition-all duration-200 underline pointer-events-none"
                style={{
                  opacity: message ? "0" : "1",
                  transform: message ? "translateY(-2rem)" : "translateY(0)",
                }}
              >
                Go ahead. We are listening...
              </label>
            </div>

            {submitStatus === "success" && (
              <div className="text-green-400 text-sm">
                Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-red-400 text-sm">
                Failed to send message. Please try again later.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full underline md:w-[430px] h-10 md:h-[50px] text-[20px] ${
                isSubmitting
                  ? "bg-[#76b3c2] cursor-not-allowed"
                  : "bg-[#AAEBFB] hover:bg-[#76b3c2]"
              } text-white font-[700] tracking-[8%] py-0 md:py-2 px-4 rounded 
              active:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#AAEBFB] focus:ring-opacity-50 
              transform active:scale-95 active:translate-y-1 transition-all duration-200 shadow-md hover:shadow-lg`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Contact information and logo */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col items-center justify-center ">
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 md:w-[263px] md:h-[248px] mb-4 object-contain"
          />

          <div className="space-y-8 text-[14px] font-poppins tracking-[8%]">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 rounded-full flex items-center justify-center border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p>Yonkers, New York</p>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 rounded-full flex items-center justify-center border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p>914-230-9113</p>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 rounded-full flex items-center justify-center border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p>dq.mcc@tempest-digital.io</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
