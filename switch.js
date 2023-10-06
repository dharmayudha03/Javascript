var item = prompt("Masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)");

switch(item){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert("Makanan / minuman sehat");
        break;
    case 'hamburger':
    case 'softdrink':
        alert("Makanan / minuman tidak sehat");
        break;
    default:
        alert("Makanan / minuman yang anda pilih salah");
            
}

