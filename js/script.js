// Data makanan, wisata, kesenian setiap kota
const dataDaerah = {
    Surabaya: {
        makanan: ["Rawon", "Rujak Cingur", "Lontong Balap"],
        wisata: ["Tugu Pahlawan", "Kebun Binatang Surabaya", "Jembatan Suramadu"],
        kesenian: ["Ludruk", "Remo Surabaya"]
    },

    Malang: {
        makanan: ["Bakso Malang", "Orem-orem", "Cwie Mie"],
        wisata: ["Jatim Park", "Museum Angkut", "Kampung Warna-Warni"],
        kesenian: ["Topeng Malang", "Karawitan"]
    },

    Banyuwangi: {
        makanan: ["Rujak Soto", "Pecel Pitik"],
        wisata: ["Kawah Ijen", "Pantai Pulau Merah"],
        kesenian: ["Gandrung", "Seblang"]
    },

    Madura: {
        makanan: ["Sate Madura", "Kaldu Kokot"],
        wisata: ["Pantai Lombang", "Bukit Jaddih"],
        kesenian: ["Sapi Sonok", "Karapan Sapi"]
    }
};

// Fungsi untuk menampilkan konten
function tampilkanDaerah(namaDaerah) {
    const daerah = dataDaerah[namaDaerah];
    const content = document.getElementById("contentArea");

    if (!daerah) {
        content.innerHTML = "<p>Data tidak ditemukan.</p>";
        return;
    }

    content.innerHTML = `
        <h2>${namaDaerah}</h2>
        <h3>Makanan Khas</h3>
        <ul>${daerah.makanan.map(m => `<li>${m}</li>`).join("")}</ul>

        <h3>Tempat Wisata</h3>
        <ul>${daerah.wisata.map(w => `<li>${w}</li>`).join("")}</ul>

        <h3>Kesenian Daerah</h3>
        <ul>${daerah.kesenian.map(k => `<li>${k}</li>`).join("")}</ul>
    `;
}

// Pasang event listener ke tombol
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnSurabaya").addEventListener("click", () => tampilkanDaerah("Surabaya"));
    document.getElementById("btnMalang").addEventListener("click", () => tampilkanDaerah("Malang"));
    document.getElementById("btnBanyuwangi").addEventListener("click", () => tampilkanDaerah("Banyuwangi"));
    document.getElementById("btnMadura").addEventListener("click", () => tampilkanDaerah("Madura"));
});
