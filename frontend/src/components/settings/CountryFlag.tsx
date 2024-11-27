import React from 'react';

interface CountryFlagProps {
  code: string;
  className?: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ code, className = "w-6 h-6" }) => {
  return (
    <div 
      className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ 
        border: '1px solid rgba(134, 134, 134, 0.2)'
      }}
    >
      <img 
        src={`/flags/${code.toLowerCase()}.svg`}
        alt={code}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CountryFlag;