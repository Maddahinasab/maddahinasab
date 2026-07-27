/**
 * schema.js — Maddahinasab Legal Advisory
 * Structured data (JSON-LD) for Google, Bing, and AI search systems.
 * Include this script in the <head> of every page:
 *   <script src="schema.js"></script>
 *
 * Page-specific schema is injected based on the current URL path.
 */

(function () {

  /* ── 1. ORGANISATION (all pages) ──────────────────────────── */
  const org = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService"],
    "@id": "https://maddahinasab.com/#organisation",
    "name": "Maddahinasab Legal Advisory",
    "alternateName": "Maddahinasab Legal Advisory — Transitional Risk Intelligence",
    "url": "https://maddahinasab.com",
    "logo": "https://maddahinasab.com/assets/images/logo2026.svg",
    "description": "Boutique legal-strategic intelligence firm specialising exclusively in transitional, frontier, and institutionally volatile markets. Creator of the MTRIS™ framework — the Maddahinasab Transitional Risk Intelligence System — and publisher of Interregnum Counsel, a legal intelligence letter for transitional markets.",
    "slogan": "Legal Intelligence for Transitional Markets",
    "knowsAbout": [
      "Transitional market legal risk",
      "Iran investment law",
      "Afghanistan legal risk",
      "Sanctions compliance and intelligence",
      "Foreign direct investment in frontier markets",
      "Energy law and critical minerals governance",
      "Institutional risk assessment",
      "Contractual resilience structuring",
      "MTRIS™ framework",
      "Political transition risk for investors",
      "Regulatory governance in fragmented authority environments"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Advisory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transitional Risk Assessment",
            "description": "Pre-entry and mid-venture evaluations using the MTRIS™ framework to map institutional, transactional, and operational exposure."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Market Entry Strategy",
            "description": "Structuring investment entry for legal durability from day one — anticipating governance shocks, not reacting to them."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanctions and Compliance Intelligence",
            "description": "Navigating evolving sanctions regimes — mapping what is permitted, what is ambiguous, and what is changing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contractual Resilience Structuring",
            "description": "Designing agreements that survive institutional disruption — stress-testing legal constructs against realistic scenarios of change."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Energy and Critical Minerals Governance",
            "description": "Sector-specific advisory for extractive and energy investments in environments where resource governance is politically contested."
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "@id": "https://maddahinasab.com/team.html#mostapha-maddahinasab",
      "name": "Mostapha Maddahinasab",
      "honorificSuffix": "Ph.D.",
      "jobTitle": "Founder and Principal Advisor",
      "description": "Specialist in investment law, energy governance, transitional regulatory risk, and sanctions intelligence. Creator of the MTRIS™ framework and author of Interregnum Counsel.",
      "sameAs": [
        "https://orcid.org/0000-0002-0598-4980",
        "https://www.researchgate.net/profile/Mostapha-Maddahinasab",
        "https://www.linkedin.com/in/mostapha-maddahinasab-28107692/",
        "https://interregnumcounsel.substack.com/"
      ],
      "knowsAbout": [
        "Investment law",
        "Energy governance",
        "Transitional regulatory risk",
        "Sanctions law",
        "Iran legal risk",
        "Afghanistan investment law",
        "Frontier market legal due diligence",
        "MTRIS™ framework"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/mostapha-maddahinasab-28107692/",
      "https://orcid.org/0000-0002-0598-4980",
      "https://www.researchgate.net/profile/Mostapha-Maddahinasab"
    ]
  };

  inject(org);

  /* ── 2. WEBSITE (all pages) ───────────────────────────────── */
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://maddahinasab.com/#website",
    "url": "https://maddahinasab.com",
    "name": "Maddahinasab Legal Advisory",
    "description": "Legal-strategic intelligence for transitional, frontier, and institutionally volatile markets.",
    "publisher": { "@id": "https://maddahinasab.com/#organisation" }
  };

  inject(website);

  /* ── 3. INTERREGNUM COUNSEL — Periodical entity (all pages) ── */
  const interregnumCounsel = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "@id": "https://maddahinasab.com/#interregnum-counsel",
    "name": "Interregnum Counsel",
    "alternateName": "Interregnum Counsel — A Legal Intelligence Letter for Transitional Markets",
    "description": "A periodic legal intelligence letter distinguishing structural legal change from temporary noise in transitional markets. Published by Maddahinasab Legal Advisory and authored by Mostapha Maddahinasab, Ph.D., applying the MTRIS™ framework to real-time sanctions, regulatory, and institutional developments.",
    "publisher": { "@id": "https://maddahinasab.com/#organisation" },
    "author": { "@id": "https://maddahinasab.com/team.html#mostapha-maddahinasab" },
    "url": "https://maddahinasab.com/interregnum-counsel.html",
    "mainEntityOfPage": "https://maddahinasab.com/interregnum-counsel.html",
    "sameAs": [
      "https://interregnumcounsel.substack.com/"
    ],
    "inLanguage": "en",
    "isPartOf": { "@id": "https://maddahinasab.com/#organisation" }
  };

  inject(interregnumCounsel);

  /* ── 4. PAGE-SPECIFIC SCHEMA ──────────────────────────────── */
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';

  /* Homepage */
  if (path === '' || path === '/' || path.endsWith('index.html')) {
    inject({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://maddahinasab.com/#webpage",
      "url": "https://maddahinasab.com/",
      "name": "Maddahinasab Legal Advisory | Legal Intelligence for Transitional Markets",
      "description": "Maddahinasab Legal Advisory provides legal-strategic intelligence for foreign investors in transitional, frontier, and institutionally volatile markets, using the proprietary MTRIS™ framework.",
      "isPartOf": { "@id": "https://maddahinasab.com/#website" },
      "about": { "@id": "https://maddahinasab.com/#organisation" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maddahinasab.com/" }]
      }
    });

    inject({
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": "https://maddahinasab.com/#mtris-termset",
      "name": "MTRIS™ Framework Terminology",
      "description": "Proprietary analytical framework created by Mostapha Maddahinasab, Ph.D.",
      "publisher": { "@id": "https://maddahinasab.com/#organisation" },
      "hasDefinedTerm": {
        "@type": "DefinedTerm",
        "@id": "https://maddahinasab.com/#mtris",
        "name": "MTRIS™",
        "alternateName": "Maddahinasab Transitional Risk Intelligence System",
        "description": "A proprietary three-layer legal-strategic framework created by Mostapha Maddahinasab, Ph.D., designed to evaluate investment resilience in environments where formal law and institutional reality diverge. The three layers are: Institutional (governance legitimacy and regulatory continuity), Transactional (contractual robustness and legal survivability), and Operational (practical feasibility and execution risk under fragmented authority).",
        "inDefinedTermSet": { "@id": "https://maddahinasab.com/#mtris-termset" }
      }
    });

    /* ── FAQPage — AEO. Must mirror the visible <details>/<summary>
       Q&A content on the homepage word-for-word, or close to it.
       This is what gets lifted into AI Overviews, direct-answer
       boxes, and voice assistant responses. ──────────────────── */
    inject({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://maddahinasab.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MTRIS™?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MTRIS™ (the Maddahinasab Transitional Risk Intelligence System) is a proprietary legal-strategic framework created by Mostapha Maddahinasab, Ph.D. It evaluates investment resilience across three layers — Institutional (governance legitimacy), Transactional (contractual survivability), and Operational (execution feasibility) — to assess whether a legal position will hold if political or regulatory conditions shift."
          }
        },
        {
          "@type": "Question",
          "name": "What is a transitional market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transitional market is a jurisdiction where institutional continuity, regulatory predictability, and legal durability cannot be assumed — typically due to political volatility, fragmented governance, sanctions exposure, or post-conflict reconstruction. This differs from frontier or emerging market classifications, which focus primarily on economic development stage rather than institutional stability."
          }
        },
        {
          "@type": "Question",
          "name": "Who does Maddahinasab Legal Advisory work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The firm advises foreign investors, private equity and fund managers, law firms requiring specialist co-counsel, institutional actors, and energy, mining, and infrastructure companies operating in or considering entry to transitional and sanctions-sensitive markets. Mandates are accepted on a selective basis."
          }
        },
        {
          "@type": "Question",
          "name": "Is it currently legal or advisable to invest in Iran?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This depends on the current sanctions regime, which has changed materially and repeatedly in recent months, and on the specific transaction, sector, and counterparties involved. This is not general investment advice — Maddahinasab Legal Advisory provides commissioned MTRIS™ assessments evaluating specific transactions against the current legal and institutional environment."
          }
        },
        {
          "@type": "Question",
          "name": "What is Interregnum Counsel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Interregnum Counsel is Maddahinasab Legal Advisory's periodic legal intelligence letter, distinguishing structural legal change from temporary noise in transitional markets. Each issue applies the MTRIS™ framework to a current development and closes with a forward-looking scenario and decision matrix."
          }
        },
        {
          "@type": "Question",
          "name": "How do I request an MTRIS™ assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commissioned MTRIS™ assessments are requested through the contact page at maddahinasab.com/contact.html, where you can describe the market, transaction, or investment scenario you need evaluated. All inquiries are reviewed personally by the Principal Advisor."
          }
        },
        {
          "@type": "Question",
          "name": "What markets does Maddahinasab Legal Advisory currently cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Published MTRIS™ outlooks currently cover Iran and Afghanistan, with Iraq, Libya, Kazakhstan, Uzbekistan, Pakistan, Sudan, the Democratic Republic of Congo, post-conflict Ukraine, Georgia, and Azerbaijan under active assessment. Commissioned analysis of markets outside this list is available on request."
          }
        }
      ]
    });
  }

  /* Whitepapers / Research page */
  if (path.endsWith('whitepapers.html')) {
    inject({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://maddahinasab.com/whitepapers.html#webpage",
      "url": "https://maddahinasab.com/whitepapers.html",
      "name": "Research & Transitional Risk Outlooks | Maddahinasab Legal Advisory",
      "description": "Published transitional risk outlooks applying the MTRIS™ framework to specific markets, including Iran and Afghanistan, with forthcoming analyses of Central Asia, MENA, and post-conflict environments.",
      "isPartOf": { "@id": "https://maddahinasab.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maddahinasab.com/" },
          { "@type": "ListItem", "position": 2, "name": "Research", "item": "https://maddahinasab.com/whitepapers.html" }
        ]
      }
    });

    inject({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "name": "Iran Transitional Risk Outlook",
      "headline": "Iran Transitional Legal Risk Framework™ — Institutional Transitional Risk Assessment for Foreign Investments",
      "description": "Strategic analysis of institutional volatility, sanctions dynamics, and investment legal risk in Iran. Applies the MTRIS™ framework across governance, contractual, and operational dimensions.",
      "author": { "@id": "https://maddahinasab.com/team.html#mostapha-maddahinasab" },
      "publisher": { "@id": "https://maddahinasab.com/#organisation" },
      "datePublished": "2026",
      "about": ["Iran", "Investment law", "Sanctions", "Transitional risk", "MTRIS"],
      "url": "https://maddahinasab.com/whitepapers.html"
    });

    inject({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "name": "Afghanistan Transitional Risk Outlook",
      "headline": "Afghanistan Transitional Risk Outlook — Legal Survivability Under De Facto Authority and Post-Conflict Institutional Gaps",
      "description": "Structured risk assessment of investment durability in Afghanistan under de facto governance, post-conflict institutional fragmentation, and suspended international legal recognition.",
      "author": { "@id": "https://maddahinasab.com/team.html#mostapha-maddahinasab" },
      "publisher": { "@id": "https://maddahinasab.com/#organisation" },
      "datePublished": "2026",
      "about": ["Afghanistan", "De facto governance", "Post-conflict law", "Investment risk", "MTRIS"],
      "url": "https://maddahinasab.com/whitepapers.html"
    });
  }

  /* Interregnum Counsel — dedicated newsletter page */
  if (path.endsWith('interregnum-counsel.html')) {
    inject({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://maddahinasab.com/interregnum-counsel.html#webpage",
      "url": "https://maddahinasab.com/interregnum-counsel.html",
      "name": "Interregnum Counsel | A Legal Intelligence Letter for Transitional Markets",
      "description": "Archive and subscription page for Interregnum Counsel, the legal intelligence letter published by Maddahinasab Legal Advisory, distinguishing structural legal change from temporary noise in transitional markets.",
      "isPartOf": { "@id": "https://maddahinasab.com/#website" },
      "mainEntity": { "@id": "https://maddahinasab.com/#interregnum-counsel" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maddahinasab.com/" },
          { "@type": "ListItem", "position": 2, "name": "Newsletter", "item": "https://maddahinasab.com/interregnum-counsel.html" }
        ]
      }
    });

    inject({
      "@context": "https://schema.org",
      "@type": "PublicationIssue",
      "@id": "https://maddahinasab.com/interregnum-counsel.html#issue-1",
      "issueNumber": "1",
      "name": "The Trends of Uncertainty: Energy Markets Under Renewed U.S.–Iran Tensions",
      "headline": "Interregnum Counsel, Issue No. 1: The Trends of Uncertainty: Energy Markets Under Renewed U.S.–Iran Tensions",
      "description": "Examines the legal and regulatory mechanics behind renewed U.S.–Iran tensions through an energy-sector lens — the Islamabad Memorandum, the narrowing of OFAC General License X to X1, comparative precedent from the JCPOA sanctions cycle, and commercial implications for energy companies, EPC contractors, insurers, banks, and investors. Includes scenario analysis and the MTRIS™ Intelligence Index.",
      "isPartOf": { "@id": "https://maddahinasab.com/#interregnum-counsel" },
      "author": { "@id": "https://maddahinasab.com/team.html#mostapha-maddahinasab" },
      "publisher": { "@id": "https://maddahinasab.com/#organisation" },
      "datePublished": "2026-07",
      "inLanguage": "en",
      "about": ["Iran", "United States", "Sanctions", "Energy markets", "Strait of Hormuz", "MTRIS", "Transitional risk"],
      "url": "https://maddahinasab.com/interregnum-counsel.html#archive",
      "sameAs": "https://interregnumcounsel.substack.com/",
      "associatedMedia": {
        "@type": "MediaObject",
        "contentUrl": "https://maddahinasab.com/assets/docs/newsletter/Interregnum%20Counsel%20-%20Issue%201.pdf",
        "encodingFormat": "application/pdf"
      }
    });
  }

  /* Team page */
  if (path.endsWith('team.html')) {
    inject({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://maddahinasab.com/team.html#webpage",
      "url": "https://maddahinasab.com/team.html",
      "name": "Expert Network | Maddahinasab Legal Advisory",
      "description": "Multidisciplinary expert network of legal practitioners, technical specialists, and academics supporting legal due diligence and investment strategy in transitional markets.",
      "isPartOf": { "@id": "https://maddahinasab.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maddahinasab.com/" },
          { "@type": "ListItem", "position": 2, "name": "Expert Network", "item": "https://maddahinasab.com/team.html" }
        ]
      }
    });
  }

  /* Contact page */
  if (path.endsWith('contact.html')) {
    inject({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://maddahinasab.com/contact.html#webpage",
      "url": "https://maddahinasab.com/contact.html",
      "name": "Contact | Maddahinasab Legal Advisory",
      "description": "Request an advisory engagement, MTRIS™ assessment, research collaboration, or expert network inquiry.",
      "isPartOf": { "@id": "https://maddahinasab.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://maddahinasab.com/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://maddahinasab.com/contact.html" }
        ]
      }
    });
  }

  /* ── HELPER ───────────────────────────────────────────────── */
  function inject(data) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(s);
  }

})();
