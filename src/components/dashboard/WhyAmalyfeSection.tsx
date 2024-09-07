const data = [
  {
    title: "Amanah",
    message:
      "Aplikasi ini menjaga amanah Anda dengan transparansi penuh, keamanan data berlapis, dan pengelolaan yang diawasi ketat, memastikan zakat Anda tepat sasaran dan terpercaya.",
  },
  {
    title: "Praktis",
    message:
      "Bayar zakat dengan cepat, mudah, dan praktis melalui aplikasi kami, tersedia kapan saja dengan riwayat transaksi terintegrasi dan berbagai metode pembayaran.",
  },
  {
    title: "Flexible",
    message:
      "Sistem ini memungkinkan anda melakukan pembayaran zakat kapan saja dan di mana saja melalui akses online yang mudah di berbagai perangkat, sesuai dengan kebutuhan dan rutinitas anda.",
  },
];

const WhyAmalyfeSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 items-center">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">
          Kenapa <span className="text-green-500">Amalyfe</span>?
        </h1>
      </div>
      <div className="flex w-full">
        {data.map(({ title, message }, index) => (
          <div
            key={title}
            className={`flex flex-col justify-center items-center w-1/3 h-auto py-8 px-4 gap-4 ${
              index % 2 !== 0
                ? "bg-[#DBEFE6] text-[#268693]"
                : "bg-[#268693] text-white"
            } transition-all hover:w-1/2 duration-300 ease-in`}
          >
            <span className="font-semibold text-4xl uppercase">{title}</span>
            <span className="">{message}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAmalyfeSection;
