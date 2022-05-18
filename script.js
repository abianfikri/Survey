function tampilData(){
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var kritik =  document.getElementById("kritik").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var produk = document.getElementsByName("via");
    var opsi = document.getElementById("opsi");
    var layanan = document.querySelector("input[name=layanan]:checked").value;
    

    var daftarProduk='';

    for(var produk2 of produk){
        if(produk2.checked){
            daftarProduk += ', ' + produk2.value;
        }
    }
    daftarProduk =  daftarProduk.substring(1)
    // var hobi = document.getElementsByName("hobi");
    // var daftarHobi= '';

    // for(var hobi2 of hobi){
    //     if(hobi2.checked){
    //         daftarHobi += ', ' + hobi2.value
    //     }
        
    // }

    // daftarHobi = daftarHobi.substring(1)

    alert(
        "Terima kasih Telah mengisi Survey Kepuasan😊" +
        "Jawaban Anda Telah direkam : " +
        
        "\nNama            : " + nama +
        "\nUmur            : " + umur +
        "\nJenisKelamin : " + jeniskelamin +
        "\nProduk          : " + daftarProduk+
        "\nKepuasan      : " + opsi.options[opsi.selectedIndex].value +
        "\nLayanan        : " + layanan +
        "\nKritik             : " + kritik
    );
}