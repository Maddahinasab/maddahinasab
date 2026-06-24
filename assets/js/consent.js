/* ============================================================
   consent.js — Maddahinasab Legal Advisory
   Cookie / privacy consent manager.
   - Shows a banner on first visit
   - Stores consent choice in localStorage (not a cookie itself,
     so the banner mechanism is GDPR-safe by design)
   - Loads Google Fonts + Font Awesome only after a choice is made
     (both "Accept" and "Reject" trigger loading of styling assets,
     since fonts/icons are presentation, not tracking — only
     analytics is gated behind explicit "Accept")
   - Exposes window.consentGiven() for analytics scripts to check
   ============================================================ */

(function () {
  const CONSENT_KEY = 'mla_consent_v1';
  const STYLE_ASSETS_LOADED_KEY = 'mla_style_assets_loaded';

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }

  window.consentGiven = function () {
    return getConsent() === 'accepted';
  };

  /* ── Load presentation assets (fonts, icons) ─────────────── */
  /* These are loaded regardless of accept/reject, since they are
     not tracking technologies — but only after the visitor has
     made a choice, keeping all third-party requests deliberate
     rather than automatic on page load. */
  function loadStyleAssets() {
    if (sessionStorage.getItem(STYLE_ASSETS_LOADED_KEY)) return;

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);

    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(faLink);

    sessionStorage.setItem(STYLE_ASSETS_LOADED_KEY, '1');
  }

  /* ── Analytics loader (placeholder — wire up when ready) ─── */
  /* Call window.loadAnalyticsIfConsented() after adding your
     analytics snippet here. It will only fire if consent was
     given. Example shown for Google Analytics (commented out). */
  window.loadAnalyticsIfConsented = function () {
    if (!window.consentGiven()) return;

    // Example — uncomment and insert your GA4 measurement ID:
    // const gaScript = document.createElement('script');
    // gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    // gaScript.async = true;
    // document.head.appendChild(gaScript);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){ window.dataLayer.push(arguments); }
    // gtag('js', new Date());
    // gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
  };

  /* ── Banner UI ────────────────────────────────────────────── */
  function buildBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <div class="cc-inner">
        <p class="cc-text">
          This site uses essential third-party resources (fonts, icons) to render correctly.
          With your consent, we would also like to use basic, privacy-respecting analytics
          to understand site usage. No data is sold or shared with advertisers.
          See our <a href="privacy-policy.html">Privacy Policy</a>.
        </p>
        <div class="cc-actions">
          <button type="button" class="cc-btn cc-btn-reject" id="cc-reject">Reject analytics</button>
          <button type="button" class="cc-btn cc-btn-accept" id="cc-accept">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('cc-accept').addEventListener('click', () => {
      setConsent('accepted');
      loadStyleAssets();
      window.loadAnalyticsIfConsented();
      hideBanner();
    });
    document.getElementById('cc-reject').addEventListener('click', () => {
      setConsent('rejected');
      loadStyleAssets();
      hideBanner();
    });
  }

  function hideBanner() {
    const el = document.getElementById('cookie-consent-banner');
    if (el) {
      el.classList.add('cc-hide');
      setTimeout(() => el.remove(), 400);
    }
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const existing = getConsent();
    if (existing === 'accepted' || existing === 'rejected') {
      loadStyleAssets();
      if (existing === 'accepted') window.loadAnalyticsIfConsented();
    } else {
      // Load styling assets immediately so the page isn't unstyled
      // while waiting for a decision — only analytics is gated.
      loadStyleAssets();
      buildBanner();
    }
  });
})();
