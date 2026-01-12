// buatlah button hide/show,lalu buat text untuk ditampilkan,lalu masukkan ke dalam variable DOM
// lalu buat variable untuk menyimpan value,lalu tambahkan evenlistenner untuk button bisa di click
// setelah itu buat function untuk evenlistenner,setelah itu karena memakai ternary,tambahkan di tag p 
// style display none agar funtionnya berjalan

let x = false;

const clickButton = document.getElementById('button-click')
const displayText = document.getElementById('text-display')

function toggleButton() {
    x = !x;

    clickButton.textContent = x ? "HIDE" : 'SHOW';

    displayText.style.display = x ? 'block' : 'none';
}

clickButton.addEventListener('click', toggleButton)
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
