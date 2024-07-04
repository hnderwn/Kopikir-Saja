// Menambahkan kelas "active" pada ".navbar-nav"
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#sidebar-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Menghilangkan sidebar saat diKlik di luar
const sidebar = document.querySelector('#sidebar-menu');

// !sidebar.contains(e.target): Ini memeriksa apakah elemen yang diklik (e.target) bukan merupakan turunan dari elemen yang direferensikan oleh sidebar variabel.
// !navbarNav.contains(e.target): Ini memeriksa apakah elemen yang diklik (e.target) bukan turunan dari elemen yang direferensikan oleh variabel navbarNav.
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
