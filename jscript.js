// Ini 1

let ubahKata = document.getElementById("nama");
ubahKata.innerText = "Ini Nomor Satu ya Pak";

// Ini 2

let elementBaru = document.createElement("p");
elementBaru.innerHTML = "Ini Nomor Dua ya Pak";
ubahKata.appendChild(elementBaru);

// Ini 3

let elemenBaru = document.createElement('p');
elemenBaru.innerHTML = 'Anda menekan sebanyak <span id="count">0</span> kali';
document.body.appendChild(elemenBaru);
let unit = document.getElementById('tombol');

unit.addEventListener('click', function (event) {
  document.querySelector('#count').innerText++;
});