let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}

const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more-text');
readMoreBtn.addEventListener('click', function () {
  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'block';
    readMoreBtn.textContent = 'Leer Menos';
  } else {
    moreText.style.display = 'none';
    readMoreBtn.textContent = 'Leer Más';
  }
});