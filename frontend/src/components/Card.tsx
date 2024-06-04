import React from 'react';
import '../styles/Card.css';

interface CardProps {
  title?: string;
  content: string;
  height?: string;
  width?: string;
}

const Card: React.FC<CardProps> = ({ title, content, height="300px", width }) => {
  return (
    <div className="card" style={{ height,...(width && { width }) }}>
      {title && <h2>{title}</h2>}
      <div>{content}</div>
    </div>
  );
};

export default Card;
