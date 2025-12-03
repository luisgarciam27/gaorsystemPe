import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; // If true, text is white. If false, text is dark purple.
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", lightMode = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Rocket Icon SVG replicating the user's image */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket Body */}
        <path 
          d="M50 15 C50 15 85 35 85 70 C85 85 70 85 70 85 L30 85 C30 85 15 85 15 70 C15 35 50 15 50 15 Z" 
          fill="#2dd4bf" 
          stroke="#4c1d95" 
          strokeWidth="6" 
          strokeLinejoin="round"
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />
        
        {/* Window */}
        <circle 
          cx="50" 
          cy="45" 
          r="10" 
          fill="#4c1d95" 
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />
        <circle 
          cx="50" 
          cy="45" 
          r="6" 
          fill="#2dd4bf" 
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />

        {/* Fins */}
        <path 
          d="M25 65 L10 80 L25 80 Z" 
          fill="#4c1d95" 
          stroke="#4c1d95" 
          strokeWidth="4" 
          strokeLinejoin="round"
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />
        <path 
          d="M75 65 L90 80 L75 80 Z" 
          fill="#4c1d95" 
          stroke="#4c1d95" 
          strokeWidth="4" 
          strokeLinejoin="round"
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />
        
        {/* Flame/Thrust */}
        <path 
          d="M40 88 L50 100 L60 88" 
          stroke="#4c1d95" 
          strokeWidth="5" 
          strokeLinecap="round" 
          fill="none"
          className="transform rotate-45 origin-center translate-y-[-5px]"
        />
      </svg>
      
      {/* Text Logo */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-bold text-xl tracking-tight ${lightMode ? 'text-white' : 'text-brand-900'}`}>
          GaorSystem
        </span>
        <span className={`text-[0.65rem] font-medium tracking-widest uppercase ${lightMode ? 'text-accent-300' : 'text-brand-600'}`}>
          Perú
        </span>
      </div>
    </div>
  );
};

export default Logo;