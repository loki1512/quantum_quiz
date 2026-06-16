(() => {
  const openButton = document.querySelector('[data-analytics-open]');
  const modal = document.getElementById('analytics-modal');
  const closeButton = document.querySelector('[data-analytics-close]');

  if (!openButton || !modal || !closeButton) {
    return;
  }

  const status = document.getElementById('analytics-status');
  const analytics = window.quantumAnalytics || { enabled: false };

  if (status) {
    status.textContent = analytics.enabled
      ? `Tracking is configured for ${analytics.measurementId}. Live GA4 reports are available in Google Analytics.`
      : 'Tracking is not active yet. Replace G-XXXXXXXXXX in assets/js/analytics.js with your GA4 Measurement ID.';
  }

  const openModal = () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
      return;
    }

    modal.setAttribute('open', '');
  };

  const closeModal = () => {
    if (typeof modal.close === 'function') {
      modal.close();
      return;
    }

    modal.removeAttribute('open');
  };

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
})();
