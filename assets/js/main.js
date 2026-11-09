// ZAQELORA Clinic Demo 001 — demonstration interactions only
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.navigation');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const dateField = document.getElementById('preferredDate');
  const setMinimumDate = () => {
    if (!dateField) return;
    const now = new Date();
    dateField.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
  };
  setMinimumDate();

  const form = document.getElementById('appointmentForm');
  const message = document.getElementById('formMessage');

  if (form && message) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const patientName = document.getElementById('fullName').value.trim();
      message.textContent = `Thank you, ${patientName}. This is a demo form only. No appointment has been booked and no information has been sent or saved.`;
      form.reset();
      setMinimumDate();
    });
  }
})();
