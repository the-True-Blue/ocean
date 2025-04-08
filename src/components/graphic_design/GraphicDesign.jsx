import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rectangle from "../../assets/graphic_design/Rectangle.png";
import centerImg from "../../assets/graphic_design/center_img.png";
import leftImg from "../../assets/graphic_design/left_img.png";
import rightImg from "../../assets/graphic_design/right_img.png";
import check from "../../assets/hero/check.png";
import avatar from "../../assets/hero/avatar.png";

const GraphicDesign = () => {
  const [hoverCenter, setHoverCenter] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  // Controls for animations
  const controls = useAnimation();
  const titleControls = useAnimation();
  const userInfoControls = useAnimation();

  // References to detect when elements are in viewport
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [userInfoRef, userInfoInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Start animations when elements enter viewport
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (userInfoInView) {
      userInfoControls.start("visible");
    }
  }, [userInfoInView, userInfoControls]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const userInfoVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Function to scroll to footer
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative md:min-h-fit flex flex-col items-center pb-35 -mb-2">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[#060757]"></div>

        {/* Gradients for corners */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#060757] from-65% via-[#070862] via-68% to-[#212eb4] to-100%"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#060757] from-65% via-[#070862] via-30% to-[#212eb4] to-100%"></div>

        {/* Layer for stars/points */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-40 stars-background"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20 stars-background-small"
          style={{ animationDelay: "-3s" }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full opacity-15 stars-background-tiny"
          style={{ animationDelay: "-5s" }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div
        className="w-full max-w-6xl px-4 md:pl-16 mt-10 relative z-10"
        ref={titleRef}
      >
        <motion.h1
          className="text-white font-orbitron text-[32px] md:text-[40px] font-[900] [text-shadow:_3px_6px_4px_rgba(52,140,240,1)] drop-shadow-xl"
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
        >
          Graphic Design
        </motion.h1>
      </div>

      {/* Card container with overlay effect */}
      <div
        className="relative flex items-center justify-center mt-8 w-full z-30"
        ref={ref}
      >
        {/* Center card */}
        <motion.div
          className="relative z-30 mx-auto scale-[0.65] xs:scale-75 sm:scale-80 lg:scale-100 origin-center"
          initial="hidden"
          animate={controls}
          custom={1}
          variants={cardVariants}
        >
          <motion.div
            className="rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoverCenter(true)}
            onMouseLeave={() => setHoverCenter(false)}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            style={{
              boxShadow: hoverCenter
                ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                : "none",
            }}
          >
            <img src={centerImg} alt="center image" className="w-[469px]" />
          </motion.div>

          {/* Right card */}
          <motion.div
            className="absolute md:-right-20 right-10 md:top-15 top-52 -z-10 transform translate-x-1/2"
            initial="hidden"
            animate={controls}
            custom={2}
            variants={cardVariants}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
              style={{
                boxShadow: hoverRight
                  ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                  : "none",
              }}
            >
              <img src={rectangle} alt="bg-rectangle" className="w-64" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={rightImg}
                  alt="right image"
                  className="w-full scale-170 h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Left card */}
          <motion.div
            className="absolute md:-left-20 left-10 md:top-15 top-52 -z-10 transform -translate-x-1/2"
            initial="hidden"
            animate={controls}
            custom={3}
            variants={cardVariants}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              whileHover={{
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
              style={{
                boxShadow: hoverLeft
                  ? "0 0 25px 5px rgba(251, 55, 255, 0.4)"
                  : "none",
              }}
            >
              <img src={rectangle} alt="bg-rectangle" className="w-64" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={leftImg}
                  alt="left image"
                  className="w-full scale-110 h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* User Info Container */}
      <motion.div
        ref={userInfoRef}
        initial="hidden"
        animate={userInfoControls}
        variants={userInfoVariant}
        className="relative z-20 mt-32 md:mt-4  w-full max-w-md mx-auto bg-[#0a0e5e]/80 rounded-xl p-4 backdrop-blur-sm border border-[#242bcf]/30"
        style={{
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="flex items-start">
          <img
            src={avatar}
            alt="Avatar"
            className="w-[31px] h-[27px] rounded-full"
          />
          <div className="ml-3 flex-1">
            <div className="flex items-center">
              <span className="text-white font-medium">@tempestdigital_</span>
              <img src={check} alt="Verified" className="w-4 h-4 ml-1" />
            </div>
            <p className="text-blue-100 md:text-sm text-xs mt-1">
              Come check out my graphic designs of logos, ads, banners, flyers
              and more on my social media!
            </p>
          </div>
        </div>

        {/* Social Media Button */}
        <div className="mt-4 flex justify-center">
          <motion.button
            onClick={scrollToFooter}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-sm flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            style={{
              boxShadow: hoverButton
                ? "0 0 15px 2px rgba(147, 51, 234, 0.5)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            View Social Media
          </motion.button>
        </div>
      </motion.div>

      {/* CSS for stars */}
      <style jsx>{`
        .stars-background {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        .stars-background-small {
          background-image: radial-gradient(
              1px 1px at 10px 10px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 150px 150px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 100px 50px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 60px 120px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 175px 55px, #4f7df2, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 20px 180px, #97c1ff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        .stars-background-tiny {
          background-image: radial-gradient(
              1px 1px at 45px 45px,
              #77a0ff,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(1px 1px at 95px 95px, #a1b8ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 145px 25px, #5d99ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 195px 155px, #8bb3ff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 85px 185px, #4f7df2, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }
      `}</style>
    </div>
  );
};

export default GraphicDesign;
