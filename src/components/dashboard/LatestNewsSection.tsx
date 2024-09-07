import LatestNewsCard from "./card/LatestNewsCard";

const LatestNewsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-3xl">Berita Terkini</h1>
      <span className="text-sm w-1/2 text-center">
        Anda dapat melihat berita terbaru kami di sini, klik untuk melihat
        detail berita. Anda dapat melihat aktivitas harian kami atau berita
        tentang penyaluran zakat, event BAZNAS, dll.
      </span>

      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 max-w-max">
          {Array.from(Array(10).keys()).map((x) => (
            <LatestNewsCard
              key={x}
              thumbnail="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/04/buka-puasa-bersama-keluarga-3.jpg"
              title="Lorem ipsum dolor sit amet"
              date={new Date()}
              kind="Berita"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
