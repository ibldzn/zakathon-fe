import React from "react";

interface IIconProps {
  width?: number | string;
  height?: number | string;
}

interface ILayananBaseButtonProps {
  icon: React.FC<IIconProps>;
  text: string;
}

const LayananBaseButton = ({ icon: Icon, text }: ILayananBaseButtonProps) => {
  return (
    <button className="w-[250px] flex flex-col items-center justify-center gap-2 py-6 px-8 rounded-md hover:cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 transition-colors">
      <Icon width="40" height="40" />
      <span className="font-semibold text-lg">{text}</span>
    </button>
  );
};

export default LayananBaseButton;
