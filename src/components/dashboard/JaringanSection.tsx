import Image from "next/image";

const JaringanSection = () => {
  return (
    <div className="flex flex-col items-end">
      <h1 className="font-bold text-3xl self-center">Jaringan</h1>
      <Image
        src="/jaringan.png"
        alt="Peta Indonesia"
        width={1100}
        height={400}
      />
    </div>
  );
};

export default JaringanSection;
