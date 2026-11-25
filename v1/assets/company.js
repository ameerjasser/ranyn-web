const menu = document.querySelector('.toggle');
function toggleMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
}
menu.addEventListener('click', () => toggleMenu(menu.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    toggleMenu(false);
    menu.focus();
  }
});
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const body = [data.get('message'), '', data.get('name'), data.get('email')].join('\n');
    location.href = 'mailto:info@ranynlabs.com?subject=' + encodeURIComponent('Project inquiry from ' + data.get('name')) + '&body=' + encodeURIComponent(body);
    document.querySelector('#form-status').textContent = 'Send the draft in your email app. If it did not open, copy info@ranynlabs.com into your email service.';
  });
}
