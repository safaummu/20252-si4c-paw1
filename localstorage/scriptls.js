let npm = document.getElementById('npm');
let nama = document.getElementById('nama');
let imageUrl = document.getElementById('imageUrl');

function simpan() {
    console.log(npm.value);
    console.log(nama.value);
    console.log(imageUrl.value);

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
        nama: nama.value,
        imageUrl: imageUrl.value
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
       // document.getElementById('list-mhs').innerHTML += `<div class="col-lg-4 col-md-6"> <h4 class="text-primary">${element.nama}</h4> <h6 class="text-danger">${element.npm}</h6></div>`;
        // Tambahkan kondisi untuk menampilkan gambar hanya jika imageUrl ada
        let imgTag = element.imageUrl ? `<img src="${element.imageUrl}" alt="Gambar Mahasiswa" style="width:100px; height:auto;" onerror="this.style.display='none';">` : '';
        document.getElementById('list-mhs').innerHTML += `<div class="col-lg-4 col-md-6"> <h4 class="text-primary">${element.nama}</h4> <h6 class="text-danger">${element.npm}</h6> ${imgTag}</div>`;
    });
}

//jalankan fuction tampil()
tampil();