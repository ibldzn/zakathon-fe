import { CalendarFold, FileSpreadsheet } from "lucide-react";
import Image from "next/image";

interface ILatestNewsCardProps {
  thumbnail: string;
  title: string;
  date: Date;
  kind: string;
  description: string;
}

const LatestNewsCard = (props: ILatestNewsCardProps) => {
  const { thumbnail, title, date, kind, description } = props;

  return (
    <div className="flex flex-col gap-1 w-1/4 h-1/4 p-4">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={250}
        className="rounded-xl"
      />

      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold">{title}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <CalendarFold size={16} />
            <div className="w-1" />
            <span className="text-sm">
              {date.toLocaleString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <FileSpreadsheet size={16} />
            <div className="w-1" />
            <span className="text-sm">{kind}</span>
          </div>
        </div>
        <span className="text-sm truncate">{description}</span>
      </div>
    </div>
  );
};

export default LatestNewsCard;
