const data = {
    "Surabaya": {
        wisata: ["Tugu Pahlawan", "Monumen Kapal Selam", "Kebun Binatang Surabaya"],
        makanan: ["Rawon", "Rujak Cingur", "Lontong Balap"],
        budaya: ["Ludruk", "Tari Remo"]
    },
    "Malang": {
        wisata: ["Jatim Park", "Museum Angkut", "Gunung Bromo"],
        makanan: ["Bakso Malang", "Cwie Mie", "Orem-orem"],
        budaya: ["Topeng Malangan"]
    },
    "Banyuwangi": {
        wisata: ["Kawah Ijen", "Pantai Pulau Merah", "Taman Nasional Baluran"],
        makanan: ["Sego Tempong", "Pecel Pitik"],
        budaya: ["Tari Gandrung"]
    },
    "Madura": {
        wisata: ["Bukit Jaddih", "Pantai Lombang", "Air Terjun Toroan"],
        makanan: ["Sate Madura", "Lorjuk"],
        budaya: ["Karapan Sapi"]
    }
};

document.getElementById("pilihKota").addEventListener("change", function () {
    const kota = this.value;
    const infoBox = document.getElementById("infoKota");

    if (kota === "") {
        infoBox.innerHTML = "";
        return;
    }

    const info = data[kota];

    infoBox.innerHTML = `
        <h2>${kota}</h2>
        <p><strong>Wisata:</strong> ${info.wisata.join(", ")}</p>
        <p><strong>Makanan Khas:</strong> ${info.makanan.join(", ")}</p>
        <p><strong>Budaya:</strong> ${info.budaya.join(", ")}</p>
    `;
});
