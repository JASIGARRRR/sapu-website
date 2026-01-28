function cariStatus() {
    const nomor = document.getElementById("nomor").value;
    const hasil = document.getElementById("hasil");

    if (nomor === "001") {
        hasil.innerHTML = `
        <b>Status:</b> Sedang Diproses <br>
        <b>Keterangan:</b> Dalam verifikasi
        `;
    } else {
        hasil.innerHTML = "Data tidak ditemukan.";
    }
}
