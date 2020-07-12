import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', (event) => {
  event.preventDefault();
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 1) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-150px';
    }
  }
  prevScrollpos = currentScrollPos;
});
