import DataImage from "./data"
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode yang indah, lahir dari ketekunan.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">hi, Saya Pedrof Da Kristof</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketetarikan dalam bidang programing dan Desainer, terutama pada pembuatan Website dan Desain seperti poster, Pamflet serta Banner, ketetarikan pada ini sudah berlangsung lebih dari 4 tahun untuk semua Bidang</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-violet-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>

      {/*tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Pedrof Da Kristof, seorang full Stack Web Developer dan Desaigner untuk UI/UX Design maupun Product Digital, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi memberikan pengalaman pengguna yang optimal.
          </p>
          <div className=" flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="w-2/5 text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Wbsite ataupun Design</p>
          <div className="tools-box">
            <div className="flex items-center gap-2 p-3 border border-x-zinc-600 rounded-md hover:bg-zinc-800 group">
              <img src="" alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4>Nama Tools</h4>
                <p>Design App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*tentang */}
    </>
  )
}

export default App
