import Image from "next/image";

const AboutFooter = () => {
  return (
    <footer className="bg-[#0D6396] w-full p-8 relative flex justify-between items-center">
      <Image src="/baznas.png" alt="Logo Baznas" width={200} height={200} />
      <div className="flex flex-col items-center justify-center w-1/2 gap-2">
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-[#EBFFEE] to-[#0D6396] inline-block text-transparent bg-clip-text shadow-inner">
          Amalyfe?
        </h2>
        <span className="text-white text-sm">
          Bersama kita bisa membuat perbedaan. Bayar zakat secara online dan
          bantu wujudkan masa depan yang lebih baik bagi mereka yang
          membutuhkan.
        </span>
        <span className="text-sm text-[#79D6E3]">Copyright © 2024 ZTion</span>
      </div>
      <Image
        src="/people-working.png"
        alt="Illustration"
        width={200}
        height={200}
      />
    </footer>
  );
};

export default AboutFooter;
