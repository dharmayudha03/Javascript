var jmlAngkot = 15;
var angkotBeroperasi = 9;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot < 9){
        console.log("Angkot No." + noAngkot + ", beroperasi dengan baik");
    } else if (noAngkot === 12){
        console.log("Angkot No." + noAngkot + ", sedang lembur");
    }else {
        console.log("Angkot No." + noAngkot + ", tidak beroperasi dengan baik");
    }
}