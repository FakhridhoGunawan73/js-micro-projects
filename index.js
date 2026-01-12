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
