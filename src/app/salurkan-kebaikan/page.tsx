import ImageSlider from "@/components/ui/imageSlider";
import Image from "next/image";

const styles = {
  progressWidth: {
    width: '45%'
  }
}

const SalurkanKebaikan = () => {
  return (
    <>
      <div className="m-6">
        <div className="flex">
          {/* TODO: LOOP CARD */}
          <div className="block gap-4 max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center">
            <div className="grid bg-green-200 shadow rounded-lg px-8 py-4 mb-4">
              <span className="text-xs">Dana Terkumpul</span>
              <span className="font-semibold">Rp 4.000.000-'</span>
            </div>

            <h3 className="text-center">
              Yayasan yang fokus pada bantuan pendidikan bagi anak-anak yatim piatu dan kurang mampu.
            </h3>

            <div className="flex justify-center">
              <button className="mt-4 font-semibold">
                Yayasan Harapan Umat
              </button>
            </div>
          </div>

          <div className="block gap-4 max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center">
          <div className="grid bg-green-200 shadow rounded-lg px-8 py-4 mb-4">
              <span className="text-xs">Dana Terkumpul</span>
              <span className="font-semibold">Rp 4.000.000-'</span>
            </div>

            <h3 className="text-center">
              Bergerak di bidang bantuan kesehatan untuk masyarakat kurang mampu, termasuk bantuan obat-obatan dan layanan kesehatan gratis.
            </h3>

            <div className="flex justify-center">
              <button className="mt-4 font-semibold">
                Yayasan Cahaya Kasih
              </button>
            </div>
          </div>

          <div className="block gap-4 max-w-sm m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center">
          <div className="grid bg-blue-200 shadow rounded-lg px-8 py-4 mb-4">
              <span className="text-xs">Dana Terkumpul</span>
              <span className="font-semibold">Rp 4.000.000-'</span>
            </div>
            
            <h3 className="text-center">
              Fokus pada program bantuan sosial seperti distribusi sembako, pakaian, dan bantuan darurat bagi korban bencana alam.
            </h3>

            <div className="flex justify-center">
              <button className="mt-4 font-semibold">
                Yayasan Peduli Sesama
              </button>
            </div>
          </div>

          {/* END TODO: LOOP CARD */}
        </div>

        <h1 className="text-2xl font-semibold mb-8">
          Jadilah Pahlawan Kebaikan
        </h1>

        <ImageSlider />
      </div>

      <div className="m-6 rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-8">
          Jadilah Pahlawan Kebaikan
        </h1>

        <div className="flex justify-center gap-4">
          <select id="location" name="location" autoComplete="location-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Cari Kota / Provinsi / Nasional</option>
          </select>

          <select id="category" name="category" autoComplete="category" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Cari Kategori</option>
          </select>

          <select id="location" name="location" autoComplete="location-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Cari Nama, dll</option>
          </select>
        </div>
      </div>

      {/* TODO: LOOP */}

      <div className="flex gap-4 max-w-7xl m-6 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center">
        <Image
          src="/jaringan.png"
          alt="Avatar"
          width={120}
          height={120}
        />

        <div className="w-full">
          <h2>Muhamad Haikal Nugraha</h2>
          <span className="text-xs">Dana Terkumpul</span>
          <h4 className="font-semibold">Rp 3.050.000-'</h4>

          <div className="grid grid-cols-2">
            <div className="col-span-2 mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={styles.progressWidth}></div>
            </div>

            <div className="mt-2">
              <span className="bg-green-400 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Zakat</span>
            </div>
          </div>
        </div>
      </div>

      {/* END TODO: LOOP */}

      <div className="flex justify-center">
        <button type="submit" className="rounded-2xl bg-green-400 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
          Selengkapnya
        </button>
      </div>
    </>
  );
};

export default SalurkanKebaikan;
