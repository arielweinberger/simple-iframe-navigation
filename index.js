var iframe = document.getElementById('content-iframe');
var navItems = document.getElementsByClassName('nav-item');

Array.from(navItems).forEach((navItem, idx) => {
  const pageName = navItem.getAttribute('data-page');

  navItem.addEventListener('click', () => {
    iframe.src = 'pages/' + pageName + '.html';
  })
});
