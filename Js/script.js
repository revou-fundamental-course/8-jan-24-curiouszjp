function hitungLuas() {
  var squareSide = document.getElementById("luasSquareSide").value;

  if (squareSide === "" || isNaN(squareSide)) {
    document.getElementById("luasResult").innerHTML =
      "Mohon masukkan panjang sisi dengan angka.";
  } else {
    var luas = squareSide * squareSide;
    document.getElementById("luasResult").innerHTML =
      "Luas: " + luas.toFixed(2);
  }
}

function hitungKeliling() {
  var squareSide = document.getElementById("kelilingSquareSide").value;

  if (squareSide === "" || isNaN(squareSide)) {
    document.getElementById("kelilingResult").innerHTML =
      "Mohon masukkan panjang sisi dengan angka.";
  } else {
    var keliling = 4 * squareSide;
    document.getElementById("kelilingResult").innerHTML =
      "Keliling: " + keliling.toFixed(2);
  }
}

function resetForm(inputId) {
  document.getElementById(inputId).value = "";
  if (inputId === "luasSquareSide") {
    document.getElementById("luasResult").innerHTML = "";
  } else if (inputId === "kelilingSquareSide") {
    document.getElementById("kelilingResult").innerHTML = "";
  }
}

document.querySelector('.cardLuas button:nth-child(1)').addEventListener('click', hitungLuas);
document.querySelector('.cardLuas button:nth-child(2)').addEventListener('click', function() { resetForm('luasSquareSide'); });

document.querySelector('.cardKeliling button:nth-child(1)').addEventListener('click', hitungKeliling);
document.querySelector('.cardKeliling button:nth-child(2)').addEventListener('click', function() { resetForm('kelilingSquareSide'); });
