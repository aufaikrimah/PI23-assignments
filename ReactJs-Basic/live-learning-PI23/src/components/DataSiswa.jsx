function DataSiswa() {
  let dataSiswa = [
    {
      nama: "Indah",
      nilai: [80, 50, 75, 80]
    },
    {
      nama: "Budi",
      nilai: [85, 80, 75, 90]
    },
    {
      nama: "Dewi",
      nilai: [70, 50, 50, 80]
    },
    {
      nama: "Intan",
      nilai: [40, 60, 75, 75]
    }
  ]

  const hitungRataRata = (nilai) => {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    return total / nilai.length;
  };

  const siswaLulus = (nilai) => {
    const rataRata = hitungRataRata(nilai);
    return rataRata >= 70;
  };

  return (
    <>
      <div>
        <h1>Daftar Siswa</h1>
        <ul>
          {dataSiswa.map((siswa, index) => (
            <li key={index}>
              <strong>{siswa.nama}</strong> - Rata-rata nilai: {hitungRataRata(siswa.nilai)} - <i>{siswaLulus(siswa.nilai) ? 'Lulus' : 'Tidak Lulus'}</i>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DataSiswa
