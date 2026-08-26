const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if (menu) menu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '74px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 7%';
  nav.style.background = '#050914';
  nav.style.flexDirection = 'column';
});
