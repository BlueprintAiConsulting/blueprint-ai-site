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

const facebookRecommendations = [
  {
    name: 'Next Gen Interior-Exterior',
    source: 'Facebook Recommendation',
    quote:
      'Drew did an amazing job creating my Google web page. From start to finish, the process was smooth, professional, and stress-free. He took the time to understand exactly what I wanted and turned it into a clean, professional page that represents my business perfectly.'
  },
  {
    name: 'New Creation Community Church',
    source: 'Facebook Recommendation',
    quote:
      'Drew is extremely knowledgeable and helpful. He helped us plan, design, and create a beautiful web page for our church that will vastly improve our image within the community.'
  },
  {
    name: 'J.Z. Construction Services',
    source: 'Facebook Recommendation',
    quote:
      'Blueprint AI Consulting helped us build out our entire online presence, from our website to Google Business Profile, Facebook setup, and ad creation. Drew was extremely timely and responsive throughout the process and made everything easy to understand. Everything was tailored to our business and handled start to finish.'
  },
  {
    name: 'Tanner Zortman',
    detail: 'ATP Power Washing Solutions LLC',
    source: 'Facebook Recommendation',
    quote:
      'This is your guy. Highly recommend Blueprint AI Consulting Co. They will give your business a new look with modern technology. Super responsive, great turnaround time, and a great investment for business owners. He knocked this one out of the park for me at ATP Power Washing Solutions LLC.'
  }
];

const recommendationsContainer = document.querySelector('#facebook-recommendations');

if (recommendationsContainer) {
  recommendationsContainer.innerHTML = facebookRecommendations
    .map((review) => {
      const detailLine = review.detail
        ? `<span class="review-detail">${review.detail}</span>`
        : '';

      return `
        <article class="review-card">
          <p class="review-copy">"${review.quote}"</p>
          <div class="review-footer">
            <p class="review-meta">${review.name}${detailLine}</p>
            <span class="review-source">${review.source}</span>
          </div>
        </article>
      `;
    })
    .join('');
}
