function hitungLuas() {
    var squareSide = document.getElementById("luasSquareSide").value;

    if (squareSide === "" || isNaN(squareSide)) {
        document.getElementById("luasResult").innerHTML = "Mohon masukkan panjang sisi dengan angka.";
    } else {
        var luas = squareSide * squareSide;
        document.getElementById("luasResult").innerHTML = "Luas: " + luas.toFixed(2);
    }
}