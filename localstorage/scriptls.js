let npm = document.getElementById('npm');
let nama = document.getElementById('nama');

function simpan() {
    console.log(npm.value);
    console.log(nama.value);

    // localStorage.setItem('npm', npm.value);
    // localStorage.setItem('nama', nama.value);

    //cek apakah local storage belum ada isi/valeu
    if (localStorage.getItem('mahasiswa')===null) {
        // simpan array kosong[] ke local storage dengan key 'mahasiswa'
        localStorage.setItem('mahasiswa', "[]");
    }

    //panggil local storage(konversi string => object) 
    let data = JSON.parse(localStorage.getItem('mahasiswa'));
    console.log(data);

    //simpan valeu npm dan nama ke dalam object
    data.push({
        npm: npm.value,
        nama: nama.value
    });
    console.log(data);

    //simpan data terbaru ke local storage 
    // konversi object => string
    localStorage.setItem('mahasiswa', JSON.stringify(data));

    //panggil tampil()
    tampil();
}

function tampil() {
    //panggil local storage 
    let hasil = JSON.parse(localStorage.getItem('mahasiswa'));

    //clear elemet ul id=list-mhs
    document.getElementById('list-mhs').innerHTML = '';

    //lakukan perulangan untuk menampilkan data mahasiswa (forEach)
    hasil.forEach((element) => {
        //console.log(element);
        document.getElementById('list-mhs').innerHTML += `<li>${element.npm} ${element.nama}</li>`;
    });
}

//jalankan fuction tampil()
tampil();