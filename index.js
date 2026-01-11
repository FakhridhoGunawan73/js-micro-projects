// buat button dengan default off,lalu kita memerlukan variable untuk menyimpan
// nilai true dan false,lalu buat DOM untuk dan connectkan ke evenlistenner
// lalu tambahkan function untuk conditional untuk mengaktifkan dan menonaktifkan
// saklarnya

let x = false;

const buttonSaklar = document.getElementById('saklar')

function toggleButton() {
    if (x === false) {
        x = true;
        buttonSaklar.textContent = "ON"
    } else {
        x = false;
        buttonSaklar.textContent = "OFF"
    }

}

buttonSaklar.addEventListener('click', toggleButton)