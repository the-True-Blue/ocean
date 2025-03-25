import React from "react";
import arrow from "../assets/hero/arrow.png";

const ExploreBtn = ({ text, onClick, className }) => {
  // SVG con forma personalizada que incluye bordes curvados
  const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="143" height="63" viewBox="0 0 143 63">
      <defs>
        <linearGradient id="borderGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stop-color="#FAF6FA" />
          <stop offset="100%" stop-color="#063186" />
        </linearGradient>
        <linearGradient id="fillGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stop-color="#A9EAFA" />
          <stop offset="60%" stop-color="#94C5EF" />
          <stop offset="100%" stop-color="#3593D2" />
        </linearGradient>
      </defs>
      
      <!-- Borde con gradiente -->
      <path d="M21.5,12.5 
              C21.5,12.5 21.5,12.5 21.5,12.5 
              L140,9.5 
              C141.4,9.5 142.5,10.6 142.5,12 
              L142.5,41 
              C142.5,41 142.5,41 142.5,41 
              L121.5,53.5 
              C121.5,53.5 121.5,53.5 121.5,53.5 
              L1,54.5 
              C0.6,54.5 0.5,53.9 0.5,52.5 
              L0.5,25.5 
              C0.5,25.5 0.5,25.5 0.5,25.5 
              L21.5,12.5 Z" 
            fill="url(#borderGradient)" />
            
      <!-- Fondo con gradiente -->
      <path d="M23,14.7 
              C23,14.7 23,14.7 23,14.7 
              L138.5,12 
              C139.3,12 140,12.7 140,13.5 
              L140,40 
              C140,40 140,40 140,40 
              L120.5,51.5 
              C120.5,51.5 120.5,51.5 120.5,51.5 
              L3,52.2 
              C2.2,52.2 2,51.8 2,51 
              L2,27 
              C2,27 2,27 2,27 
              L23,14.7 Z" 
            fill="url(#fillGradient)" />
    </svg>
  `;

  // Convertir SVG a Data URL
  const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    svgCode
  )}`;

  return (
    <button
      onClick={onClick}
      className={`
        relative w-[143px] h-[63px] 
        flex items-center justify-center 
        cursor-pointer 
        transition-transform duration-200 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
        ${className}
      `}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Contenido: Texto y flecha */}
      <div className="relative z-10 flex items-center justify-center space-x-2 ">
        <span className="font-medium text-white select-none">{text}</span>
        <img
          src={arrow}
          alt="arrow"
          className="w-[32px] h-[15.48px] object-contain"
        />
      </div>
    </button>
  );
};

export default ExploreBtn;
