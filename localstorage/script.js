// simpan ke lcal storage
localStorage.setItem('npm', '123');

//baca ke local storage
//tampil di console
console.log(localStorage.getItem('npm'));

// tampilkan diparagraf id=npm
document.getElementById('npm').innerHTML = localStorage.getItem('npm');
