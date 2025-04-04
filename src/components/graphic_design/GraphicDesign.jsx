import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rectangle from "../../assets/graphic_design/Rectangle.png";
import centerImg from "../../assets/graphic_design/center_img.png";
import leftImg from "../../assets/graphic_design/left_img.png";
import rightImg from "../../assets/graphic_design/right_img.png";

const GraphicDesign = () => {
  const [hoverCenter, setHoverCenter] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  // Controles para las animaciones
  const controls = useAnimation();
  const titleControls = useAnimation();

  // Referencias para detectar cuando los elementos están en el viewport
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Iniciar animaciones cuando los elementos entran en el viewport
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

  // Variantes para las animaciones
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

  return (
    <div className="relative md:min-h-fit flex flex-col items-center pb-35 -mb-2">
      {/* Background con gradiente mejorado */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[#060757]"></div>

        {/* Gradientes para las esquinas */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#060757] from-65% via-[#070862] via-68% to-[#212eb4] to-100%"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#083395] to-[#060757]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#060757] from-65% via-[#070862] via-30% to-[#212eb4] to-100%"></div>

        {/* Capa para estrellas/puntos */}
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

      {/* Contenedor de tarjetas con efecto overlay */}
      <div
        className="relative flex items-center justify-center mt-8 w-full z-30"
        ref={ref}
      >
        {/* Tarjeta central */}
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

          {/* Tarjeta derecha */}
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

          {/* Tarjeta izquierda */}
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

      {/* CSS para estrellas */}
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
