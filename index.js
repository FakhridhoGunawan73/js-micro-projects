// untuk membuat reset counter,hal yang perlu dilakukan terlebih dahulu
// buat variable untuk menyimpan value yang akan di reset,lalu buat button
// yang berfungsi untuk menambhakan value,setelah itu tambahkan evenlistenner
// yang di connectkan dengan button,agar ketika di klik valuenya bertambah
// buat function untuk evenlistenner yang mana function tersebut untuk menambahkan
// value ketika button click me di click,lalu tampilkan display menggunakan <p>
// lalu tambahkan button reset,lalu tambahkan dan connectkan variable reset menggunakan
// evenlistenner,lalu buat function untuk mereset value yang sudah di click

let counter = 0;

const clickButton = document.getElementById('click-button')
const textDisplay = document.getElementById('text-display')
const resetButton = document.getElementById('reset-button')

function clickCounter() {
    counter++
    textDisplay.textContent = `Jumlah Click = ${counter}`
}

function resetCounter() {
    counter = 0;
    textDisplay.textContent = `Jumlah Click = ${counter}`
}

clickButton.addEventListener('click', clickCounter);
resetButton.addEventListener('click', resetCounter)
