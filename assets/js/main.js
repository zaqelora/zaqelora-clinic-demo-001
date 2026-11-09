// ZAQELORA Clinic Demo 001 — client-side demonstration interactions
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const dateInput = document.getElementById('visitDate');
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().split('T')[0];
    dateInput.min = localToday;
  }

  const form = document.getElementById('appointmentForm');
  const feedback = document.getElementById('formFeedback');

  if (form && feedback) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      // This is deliberately a local-only demo. No data is transmitted or stored.
      const name = document.getElementById('fullName').value.trim();
      feedback.textContent = `Thank you, ${name}. This is a demonstration form; no appointment has been booked and no information has been sent.`;
      form.reset();
      if (dateInput) {
        const today = new Date();
        dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
          .toISOString().split('T')[0];
      }
    });
  }
})();
