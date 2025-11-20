import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] backdrop-blur-sm border border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 flex items-start gap-6">
      <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-white flex items-center justify-center text-black shadow-lg shadow-white/20">
        <div className="scale-110">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};

