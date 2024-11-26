import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  title?: string;
  content: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
  return (
    <div className={cn(
      'bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden',
      className
    )}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      <div className="p-6">{content}</div>
    </div>
  );
};

export default Card;