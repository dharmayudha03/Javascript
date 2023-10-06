console.log("Selamat Datang");

var nama = prompt("Masukan Nama Kamu");
var umur = parseInt(prompt("Masukan Umur Kamu"));

if (umur >= 18){
    console.log("Selamat Datang " + nama);
    console.log("Ayo kita bermain");

    var angka = prompt("Masukan angka");

    if(angka % 2 === 0){
    console.log("Angka yang anda masukan adalah bilang GENAP");
    }else {
    console.log("Angka yang anda masukan adalah bilang GANJIL");
    }

}else if (umur !== umur){
    console.log("Yang anda masukan bukan angka");
}
else {
    console.log("Umur anda tidak mencukupi");
    console.log("Terimakasih");
}

