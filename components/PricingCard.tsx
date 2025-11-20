import React from 'react';
import { Button } from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = '/month',
  features,
  highlighted = false,
  ctaText = 'Get Started',
}) => {
  return (
    <div
      className={`relative p-8 rounded-3xl ${
        highlighted
          ? 'bg-white text-black shadow-2xl shadow-white/20 scale-105 border-2 border-white'
          : 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-white/5'
      } transition-all duration-300 hover:shadow-xl`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-black' : 'text-white'}`}>
        {name}
      </h3>
      
      <div className="mb-6">
        <span className={`text-5xl font-bold ${highlighted ? 'text-black' : 'text-white'}`}>
          {price}
        </span>
        <span className={`text-lg ${highlighted ? 'text-gray-600' : 'text-gray-400'}`}>
          {period}
        </span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                highlighted ? 'text-black' : 'text-gray-400'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlighted ? 'text-gray-700' : 'text-gray-400'}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};

