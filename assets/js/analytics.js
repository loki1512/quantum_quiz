(() => {
  const MEASUREMENT_ID = 'G-6WRTRS4JRS';
  const PLACEHOLDER_ID = 'G-XXXXXXXXXX';

  const isConfigured =
    typeof MEASUREMENT_ID === 'string' &&
    MEASUREMENT_ID.trim() !== '' &&
    MEASUREMENT_ID !== PLACEHOLDER_ID;

  window.quantumAnalytics = {
    measurementId: MEASUREMENT_ID,
    enabled: isConfigured
  };

  if (!isConfigured) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const visitorType = (() => {
    try {
      const key = 'qq_ga4_seen';
      const hasVisited = window.localStorage.getItem(key) === '1';
      window.localStorage.setItem(key, '1');
      return hasVisited ? 'returning' : 'new';
    } catch (_error) {
      return 'unknown';
    }
  })();

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: true,
    user_properties: {
      visitor_type: visitorType
    }
  });

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const link = event.target.closest('a[href]');
    if (!link || !window.gtag) {
      return;
    }

    const url = new URL(link.getAttribute('href'), window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    window.gtag('event', 'internal_navigation', {
      link_url: url.href,
      link_text: link.textContent.trim().slice(0, 100),
      transport_type: 'beacon'
    });
  });
})();
