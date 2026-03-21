document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const { BOOKING_URL, EMAIL, FACEBOOK_MESSENGER_URL } = window.CONTACT_CONFIG || {};

document.querySelectorAll('[data-contact="booking"]').forEach((el) => {
  if (!BOOKING_URL) return;
  el.setAttribute('href', BOOKING_URL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noreferrer');
});

document.querySelectorAll('[data-contact="email"]').forEach((el) => {
  if (!EMAIL) return;
  el.setAttribute('href', `mailto:${EMAIL}`);
  if (el.classList.contains('btn')) el.textContent = `Email ${EMAIL}`;
});

document.querySelectorAll('[data-contact="messenger"]').forEach((el) => {
  if (!FACEBOOK_MESSENGER_URL) return;
  el.setAttribute('href', FACEBOOK_MESSENGER_URL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noreferrer');
});
