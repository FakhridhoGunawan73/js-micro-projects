// ketika ingin membuat click counter,pertama kita memerlukan variable 
// untuk menampung value,lalu setalah itu untuk menambahkan value,
// memerlukan button click untuk ketika button di click value yang ada 
// di html nya bertambah,agar tombol buttonnya bisa berfungsi,connect
// evenlistenner,setelah itu agar evenlistennernya ketika di klik
// valuenya bertambah,buat function untuk menambahkan value,setelah 
// berhasil,sekarang tampilkan displaynya dengan membuat <p> dan menambahkan DOM nya

let counter = 0;

const buttonClick = document.getElementById('click-button')
const textDisplay = document.getElementById('text-display')

function clickCounter() {
    counter++
    textDisplay.textContent = `Jumlah Click = ${counter}`
}

buttonClick.addEventListener('click', clickCounter);