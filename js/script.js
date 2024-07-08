// Menambahkan kelas "active" pada ".navbar-nav"
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#sidebar-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Menambahkan kelas "active" pada ".search-form"
//  e.preventDefault(); Agar tidak balik ke halaman awal
const searchForm = document.querySelector('.search-form'); 
const searchBox = document.querySelector('#search-box'); 
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Menambahkan kelas "active" pada ".navbar-nav"
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Menghilangkan Elemen saat diKlik di luar
const sidebar = document.querySelector('#sidebar-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');


// !sidebar.contains(e.target): Ini memeriksa apakah elemen yang diklik (e.target) bukan merupakan turunan dari elemen yang direferensikan oleh sidebar variabel.
// !navbarNav.contains(e.target): Ini memeriksa apakah elemen yang diklik (e.target) bukan turunan dari elemen yang direferensikan oleh variabel navbarNav.
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  
  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart  .classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// Klik tombol Close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display ='none';
  e.preventDefault();
}

// Klik di luar Modal
window.onclick = (e) => {
  if (e.target ===itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}
