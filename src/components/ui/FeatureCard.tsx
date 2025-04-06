import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="border flex flex-col gap-1 bg-[#232323] p-3 rounded-xl border-solid border-[#444] max-sm:p-2.5">
      <div className="mb-1">{icon}</div>
      <div className="text-[#E0E0E0] text-sm font-semibold">{title}</div>
      <div className="text-[#B3B3B3] text-xs font-normal leading-[1.2]">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;
