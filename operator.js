// Belajar Pop Up / Dialog Box
// alert
// alert('Hello, World');
// alert('Nama');
// alert('Yudha');

// prompt
// var nama = prompt('Masukan Nama :');
// alert('nama saya ' + nama);

// confirm
// confirm('apakah anda yakin??');

alert('Selamat Datang..');
alert('masukan biodata sederhana kamu');
var lagi = true;

while(lagi === true){
    var nama = prompt('Masukan Nama');
    var umur = prompt('Masukan Umur Kamu');

    alert('Halo ' + nama);
    alert('Umur kamu ' + umur);

    lagi = confirm('Ingin mencoba lagi??');
}

alert('terimakasih');