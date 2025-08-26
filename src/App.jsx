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
    </>
  )
}

export default App
