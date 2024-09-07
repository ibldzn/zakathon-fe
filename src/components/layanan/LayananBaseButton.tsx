import Link from "next/link";

interface IIconProps {
  width?: number | string;
  height?: number | string;
}

interface ILayananBaseButtonProps {
  icon: React.FC<IIconProps>;
  text: string;
  link?: string;
}

const LayananBaseButton = ({
  icon: Icon,
  text,
  link,
}: ILayananBaseButtonProps) => {
  return (
    <Link
      href={link ?? "#"}
      className="w-[250px] flex flex-col items-center justify-center gap-2 py-6 px-8 rounded-md hover:cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 transition-colors"
    >
      <Icon width="40" height="40" />
      <span className="font-semibold text-lg">{text}</span>
    </Link>
  );
};

export default LayananBaseButton;
