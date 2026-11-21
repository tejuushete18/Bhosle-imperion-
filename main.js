(function () {
  "use strict";

  const SITE_CONFIG = {
    brandName: "Bhosale Imperion",
    brandShort: "BI",
    domain: "www.bhosaleimperion.com",
    email: "contact@bhosaleimperion.com",
    phoneDisplay: "+91 88570 52812",
    whatsappNumber: "918857052812",
    langStorageKey: "bhosale_imperion_lang"
  };

  const SERVICES_DATA = {
    gov: {
      indexLabel: { en: "Service 01 of 06", mr: "सेवा ०१ / ०६" },
      title: { en: "Government Online Services", mr: "सरकारी ऑनलाईन सेवा" },
      desc: {
        en: "Reliable assistance for citizen portals, official registrations, certificate applications, and government scheme submissions.",
        mr: "नागरिक पोर्टल, शासकीय नोंदणी, प्रमाणपत्रे व दाखले तसेच सरकारी योजनांच्या ऑनलाईन अर्जांसाठी अचूक मदत."
      },
      tasks: {
        en: [
          "Citizen portal registrations & status tracking",
          "Certificate & official record applications",
          "Government scheme form submissions"
        ],
        mr: [
          "नागरिक पोर्टल नोंदणी व स्टेटस तपासणी",
          "विविध प्रमाणपत्रे व दाखल्यांसाठी ऑनलाईन अर्ज",
          "शासकीय योजनांचे अर्ज भरणे"
        ]
      },
      docs: {
        en: [
          "Identity & Address Proof (Aadhaar / Voter ID / Ration Card)",
          "Active mobile number linked for OTP",
          "Passport photo, signature & supporting records"
        ],
        mr: [
          "ओळख व पत्ता पुरावा (आधार कार्ड / मतदान कार्ड / रेशन कार्ड)",
          "OTP साठी चालू मोबाईल नंबर",
          "पासपोर्ट फोटो, सही व संबंधित कागदपत्रे"
        ]
      }
    },
    agri: {
      indexLabel: { en: "Service 02 of 06", mr: "सेवा ०२ / ०६" },
      title: { en: "Agriculture Online Services", mr: "कृषी ऑनलाईन सेवा" },
      desc: {
        en: "Dedicated digital support for farmers covering agriculture scheme applications and online farmer records.",
        mr: "शेतकऱ्यांसाठी कृषी योजना अर्ज व संबंधित ऑनलाईन पोर्टल सेवा काळजीपूर्वक पूर्ण केल्या जातात."
      },
      tasks: {
        en: [
          "Agriculture scheme applications & portal support",
          "Farmer profile updates & online entries",
          "Document check & receipt copy"
        ],
        mr: [
          "कृषी योजना व पोर्टलवरील ऑनलाईन अर्ज",
          "शेतकरी माहिती अद्ययावत करणे",
          "कागदपत्र तपासणी व अर्जाची पावती"
        ]
      },
      docs: {
        en: [
          "Aadhaar Card & Bank Passbook copy",
          "Required land/agriculture details",
          "OTP-enabled mobile number & passport photo"
        ],
        mr: [
          "आधार कार्ड व बँक पासबुक प्रत",
          "आवश्यक कृषी / जमीन तपशील",
          "चालू मोबाईल नंबर व पासपोर्ट फोटो"
        ]
      }
    },
    edu: {
      indexLabel: { en: "Service 03 of 06", mr: "सेवा ०३ / ०६" },
      title: { en: "Education & Employment Services", mr: "शिक्षण व नोकरी सेवा" },
      desc: {
        en: "Careful online form filling and document formatting for school/college admissions, scholarships, exams, and job applications.",
        mr: "प्रवेश, शिष्यवृत्ती, परीक्षा व नोकरीच्या अर्जांसाठी अचूक माहिती भरणे, कागदपत्रे अपलोड करणे व पावती देणे."
      },
      tasks: {
        en: [
          "Admission, scholarship & entrance exam forms",
          "Job portal registrations & recruitment applications",
          "Photo, signature & mark-sheet formatting"
        ],
        mr: [
          "प्रवेश, शिष्यवृत्ती व परीक्षा अर्ज भरणे",
          "नोकरी पोर्टल नोंदणी व भरती अर्ज",
          "फोटो, सही व गुणपत्रिका साईझ तपासणी"
        ]
      },
      docs: {
        en: [
          "Mark sheets, leaving/transfer certificates & ID proof",
          "Recent passport photo & clear signature scan",
          "Active email ID & mobile number"
        ],
        mr: [
          "गुणपत्रके, दाखले व ओळखपत्र",
          "ताजा पासपोर्ट फोटो व स्पष्ट सही",
          "चालू ईमेल आयडी व मोबाईल नंबर"
        ]
      }
    }
  };
  travel: {
      indexLabel: { en: "Service 04 of 06", mr: "सेवा ०४ / ०६" },
      title: { en: "Travel & Ticket Booking", mr: "प्रवास व तिकीट बुकिंग" },
      desc: {
        en: "Hassle-free travel ticket booking support with route/schedule check and instant digital ticket sharing.",
        mr: "प्रवासासाठी सोपे तिकीट बुकिंग — मार्ग, तारीख तपासणी व त्वरित डिजिटल तिकीट प्रत."
      },
      tasks: {
        en: [
          "Journey date, route & availability check",
          "Accurate passenger detail entry & booking",
          "Digital ticket copy on WhatsApp or email"
        ],
        mr: [
          "प्रवासाची तारीख, मार्ग व उपलब्धता तपासणी",
          "प्रवाशांची अचूक माहिती व बुकिंग",
          "व्हॉट्सअ‍ॅप किंवा ईमेलवर त्वरित तिकीट प्रत"
        ]
      },
      docs: {
        en: [
          "Passenger full name, age & gender details",
          "Preferred travel date, origin & destination",
          "Valid ID proof detail if required"
        ],
        mr: [
          "प्रवाशाचे पूर्ण नाव, वय व तपशील",
          "प्रवासाची तारीख, मूळ ठिकाण व गंतव्य",
          "आवश्यकतेनुसार ओळखपत्राचा तपशील"
        ]
      }
    },
    forms: {
      indexLabel: { en: "Service 05 of 06", mr: "सेवा ०५ / ०६" },
      title: { en: "Online Forms & Applications", mr: "ऑनलाईन फॉर्म्स व अर्ज" },
      desc: {
        en: "Error-free online form filling, portal document upload, and receipt copy for everyday digital needs.",
        mr: "दैनंदिन ऑनलाईन कामांसाठी अचूक फॉर्म भरणे, कागदपत्रे अपलोड करणे आणि अंतिम पावती देणे."
      },
      tasks: {
        en: [
          "Careful field-by-field form completion",
          "Document & photo upload within limits",
          "Confirmation slip & reference summary"
        ],
        mr: [
          "प्रत्येक माहितीची काळजीपूर्वक नोंद",
          "मर्यादेनुसार कागदपत्रे व फोटो अपलोड",
          "अंतिम पावती व संदर्भ माहिती"
        ]
      },
      docs: {
        en: [
          "Required personal, address & application details",
          "Scanned documents, photo & signature",
          "Contact number / email for updates"
        ],
        mr: [
          "आवश्यक वैयक्तिक, पत्ता व अर्जाची माहिती",
          "स्कॅन केलेली कागदपत्रे, फोटो व सही",
          "माहितीसाठी मोबाईल नंबर किंवा ईमेल"
        ]
      }
    },
    docs: {
      indexLabel: { en: "Service 06 of 06", mr: "सेवा ०६ / ०६" },
      title: { en: "Digital Documentation", mr: "डिजिटल डॉक्युमेंटेशन" },
      desc: {
        en: "Clean scanning, PDF merging/compression, file renaming, and photo/signature sizing for smooth online uploads.",
        mr: "स्पष्ट स्कॅनिंग, PDF मर्ज/कॉम्प्रेस करणे, फाईल नाव बदलणे आणि फोटो/सहीची योग्य साईझ तयार करणे."
      },
      tasks: {
        en: [
          "High-clarity document scanning & PDF creation",
          "PDF merging, splitting & KB/MB compression",
          "Photo & signature dimension/KB resizing"
        ],
        mr: [
          "स्पष्ट स्कॅनिंग व PDF तयार करणे",
          "PDF मर्ज, स्प्लिट व KB/MB साईझ कमी करणे",
          "फोटो व सहीची अचूक साईझ तयार करणे"
        ]
      },
      docs: {
        en: [
          "Original physical sheets or clear phone photos",
          "Portal size/format instructions (if any)",
          "WhatsApp or email for receiving final files"
        ],
        mr: [
          "मूळ कागदपत्रे किंवा स्पष्ट फोटो",
          "पोर्टलची साईझ/फॉरमॅट माहिती (असल्यास)",
          "फाईल्स पाठवण्यासाठी व्हॉट्सअ‍ॅप किंवा ईमेल"
        ]
      }
    }
  };

  const BLOG_POSTS = [
    {
      id: "doc-checklist",
      category: "checklist",
      badge: { en: "Document Checklist", mr: "कागदपत्र तपासणी" },
      readTime: { en: "3 min read", mr: "३ मिनिटे वाचन" },
      title: {
        en: "Essential Documents Checklist Before Applying Online",
        mr: "ऑनलाईन अर्ज करण्यापूर्वी आवश्यक कागदपत्रांची तपासणी"
      },
      summary: {
        en: "Keep ID proof, active OTP mobile number, clear scans, and exact details ready to avoid last-minute portal delays.",
        mr: "अर्ज करताना अडचण येऊ नये म्हणून ओळखपत्र, OTP मोबाईल नंबर, स्पष्ट स्कॅन आणि अचूक माहिती तयार ठेवा."
      },
      points: {
        en: [
          "Check spelling and date of birth across ID proof and application details.",
          "Keep your OTP-linked mobile phone nearby during portal submission.",
          "Save a copy of the acknowledgement receipt after completion."
        ],
        mr: [
          "ओळखपत्रातील व अर्जातील नाव, जन्मतारीख आणि इतर तपशील जुळतात का ते तपासा.",
          "अर्ज भरताना OTP साठी लागणारा मोबाईल जवळ ठेवा.",
          "काम पूर्ण झाल्यानंतर पावतीची प्रत सुरक्षित ठेवा."
        ]
      }
    },
    {
      id: "pdf-photo-guide",
      category: "tips",
      badge: { en: "Digital Tips", mr: "डिजिटल टिप्स" },
      readTime: { en: "3 min read", mr: "३ मिनिटे वाचन" },
      title: {
        en: "How to Keep PDFs Clear and Photos Within Portal Size Limits",
        mr: "पोर्टलच्या साईझ मर्यादेत स्पष्ट PDF आणि फोटो कसे ठेवावेत"
      },
      summary: {
        en: "Portals often reject oversized files or blurry photos. Proper scanning and size compression keep uploads fast and readable.",
        mr: "अनेक पोर्टलवर मोठी फाईल किंवा अस्पष्ट फोटो अपलोड होत नाहीत. योग्य स्कॅनिंग व साईझमुळे काम सोपे होते."
      },
      points: {
        en: [
          "Scan pages flat in good light with no shadows over text.",
          "Merge multi-page documents in order before compressing file size.",
          "Keep photo and signature clear without cropping key edges."
        ],
        mr: [
          "कागदपत्रे चांगल्या उजेडात सरळ स्कॅन करा जेणेकरून मजकूर स्पष्ट राहील.",
          "अनेक पानांची PDF योग्य क्रमाने जोडून साईझ तपासा.",
          "फोटो आणि सही कापली जाणार नाही याची काळजी घ्या."
        ]
      }
    },
    {
      id: "form-accuracy",
      category: "updates",
      badge: { en: "Service Guide", mr: "सेवा मार्गदर्शिका" },
      readTime: { en: "2 min read", mr: "२ मिनिटे वाचन" },
      title: {
        en: "Why Careful Verification Matters Before Submitting Any Form",
        mr: "कोणताही फॉर्म सबमिट करण्यापूर्वी अचूक तपासणी का महत्त्वाची आहे"
      },
      summary: {
        en: "Small typos in numbers, names, or categories can cause delays later—double-checking saves time and stress.",
        mr: "नंबर, नाव किंवा पर्यायातील लहान चूक पुढे त्रासदायक ठरू शकते; वेळेपूर्वी तपासणी फायदेशीर ठरते."
      },
      points: {
        en: [
          "Review every entered field before final submission.",
          "Share clear instructions and any reference numbers upfront.",
          "Keep digital receipts organized in one folder."
        ],
        mr: [
          "अंतिम सबमिट करण्यापूर्वी सर्व माहिती नीट तपासा.",
          "आवश्यक तपशील व संदर्भ माहिती स्पष्ट द्या.",
          "सर्व पावत्या एकाच ठिकाणी व्यवस्थित जपून ठेवा."
        ]
      }
    }
  ];

  const GALLERY_ITEMS = [
    {
      id: "help-desk-setup",
      category: "desk",
      tag: { en: "Service Desk", mr: "सेवा केंद्र" },
      title: {
        en: "Organized Digital Assistance Desk",
        mr: "व्यवस्थित डिजिटल सहाय्य केंद्र"
      },
      caption: {
        en: "Structured support for citizen portals, online forms, and digital documentation.",
        mr: "नागरिक पोर्टल, ऑनलाईन फॉर्म्स आणि डिजिटल डॉक्युमेंटेशनसाठी व्यवस्थित मदत."
      },
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "document-prep",
      category: "docs",
      tag: { en: "Documentation", mr: "डॉक्युमेंटेशन" },
      title: {
        en: "Clean Scanning & PDF Compilation",
        mr: "स्पष्ट स्कॅनिंग व PDF संकलन"
      },
      caption: {
        en: "Readable scans, properly sized files, and organized digital copies.",
        mr: "वाचनीय स्कॅन, योग्य साईझमधील फाईल्स आणि व्यवस्थित डिजिटल प्रती."
      },
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "portal-support",
      category: "desk",
      tag: { en: "Online Support", mr: "ऑनलाईन सहाय्य" },
      title: {
        en: "Guided Form & Portal Submissions",
        mr: "मार्गदर्शनासह अर्ज व पोर्टल सेवा"
      },
      caption: {
        en: "Step-by-step form completion with receipt copy for your records.",
        mr: "अचूक फॉर्म भरणे आणि तुमच्या नोंदीसाठी पावतीची प्रत."
      },
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "travel-desk",
      category: "docs",
      tag: { en: "Travel & Booking", mr: "प्रवास व बुकिंग" },
      title: {
        en: "Quick Travel & Ticket Assistance",
        mr: "जलद प्रवास व तिकीट सहाय्य"
      },
      caption: {
        en: "Route and date verification with digital ticket delivery on WhatsApp or email.",
        mr: "मार्ग व तारीख तपासणीसह व्हॉट्सअ‍ॅप किंवा ईमेलवर डिजिटल तिकीट."
      },
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
    }
  ];
  const NAV_ITEMS = [
    { href: "index.html", en: "Home", mr: "मुख्यपृष्ठ" },
    { href: "about.html", en: "About", mr: "आमच्याबद्दल" },
    { href: "services.html", en: "Services", mr: "सेवा" },
    { href: "products.html", en: "Packages", mr: "पॅकेजेस" },
    { href: "gallery.html", en: "Gallery", mr: "गॅलरी" },
    { href: "blog.html", en: "Guide", mr: "मार्गदर्शिका" },
    { href: "contact.html", en: "Contact", mr: "संपर्क" }
  ];

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(SITE_CONFIG.langStorageKey);
      return saved === "mr" ? "mr" : "en";
    } catch (_) {
      return "en";
    }
  }

  let currentLang = getSavedLang();

  function setSavedLang(lang) {
    currentLang = lang === "mr" ? "mr" : "en";
    try {
      localStorage.setItem(SITE_CONFIG.langStorageKey, currentLang);
    } catch (_) {
      // Ignore storage restrictions
    }
  }

  function t(obj) {
    if (!obj) return "";
    return obj[currentLang] || obj.en || "";
  }

  function getCurrentPageFile() {
    const path = (window.location.pathname || "").split("/").pop() || "index.html";
    return path.split("?")[0] || "index.html";
  }

  function renderHeaderAndFooter() {
    const activePage = getCurrentPageFile();
    const headerSlot = document.getElementById("siteHeaderSlot");
    if (headerSlot) {
      const navLinksHtml = NAV_ITEMS.map((item) => {
        const isActive = item.href === activePage ? " active" : "";
        return `<li><a href="${item.href}" class="nav-link${isActive}">${currentLang === "mr" ? item.mr : item.en}</a></li>`;
      }).join("");

      const topTagline =
        currentLang === "mr"
          ? "भोसले इम्पेरिअन — अचूक व विश्वासार्ह ऑनलाईन सेवा"
          : "Bhosale Imperion — Reliable Online & Digital Assistance";

      const langBtnLabel = currentLang === "mr" ? "English" : "मराठी";

      headerSlot.innerHTML = `
        <div class="top-bar">
          <div class="container top-bar-inner">
            <span class="top-tagline">${topTagline}</span>
            <div class="top-actions">
              <a href="mailto:${SITE_CONFIG.email}" class="top-link">${SITE_CONFIG.email}</a>
              <button type="button" id="langToggleBtn" class="lang-switch-btn">${langBtnLabel}</button>
            </div>
          </div>
        </div>
        <header class="site-header" id="siteHeader">
          <div class="container header-inner">
            <a href="index.html" class="brand-logo">
              <span class="brand-mark">${SITE_CONFIG.brandShort}</span>
              <span class="brand-stack">
                <span class="brand-text">${SITE_CONFIG.brandName}<span>.</span></span>
                <span class="brand-sub">${SITE_CONFIG.domain}</span>
              </span>
            </a>
            <button type="button" class="nav-toggle" id="navToggleBtn" aria-label="Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav class="main-nav" id="mainNav">
              <ul class="nav-list">${navLinksHtml}</ul>
            </nav>
          </div>
        </header>
      `;
    }

    const footerSlot = document.getElementById("siteFooterSlot");
    if (footerSlot) {
      const quickLinks = NAV_ITEMS.slice(0, 4)
        .map((n) => `<li><a href="${n.href}">${currentLang === "mr" ? n.mr : n.en}</a></li>`)
        .join("");

      const moreLinks = NAV_ITEMS.slice(4)
        .map((n) => `<li><a href="${n.href}">${currentLang === "mr" ? n.mr : n.en}</a></li>`)
        .join("");

      const brandDesc =
        currentLang === "mr"
          ? "शासकीय, कृषी, शिक्षण, प्रवास, ऑनलाईन अर्ज आणि डिजिटल डॉक्युमेंटेशनसाठी विश्वासार्ह सहाय्य."
          : "Trusted support for government, agriculture, education, travel, online forms, and digital documentation.";

      const quickTitle = currentLang === "mr" ? "महत्त्वाचे दुवे" : "Quick Links";
      const moreTitle = currentLang === "mr" ? "इतर पृष्ठे" : "Explore";
      const contactTitle = currentLang === "mr" ? "संपर्क" : "Contact";
      const copyrightText =
        currentLang === "mr"
          ? `© ${new Date().getFullYear()} भोसले इम्पेरिअन (${SITE_CONFIG.domain}). सर्व हक्क राखीव.`
          : `© ${new Date().getFullYear()} Bhosale Imperion (${SITE_CONFIG.domain}). All rights reserved.`;

      footerSlot.innerHTML = `
        <footer class="site-footer">
          <div class="container footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="brand-logo">
                <span class="brand-mark">${SITE_CONFIG.brandShort}</span>
                <span class="brand-stack">
                  <span class="brand-text">${SITE_CONFIG.brandName}<span>.</span></span>
                  <span class="brand-sub">${SITE_CONFIG.domain}</span>
                </span>
              </a>
              <p>${brandDesc}</p>
            </div>
            <div class="footer-links">
              <h4>${quickTitle}</h4>
              <ul>${quickLinks}</ul>
            </div>
            <div class="footer-links">
              <h4>${moreTitle}</h4>
              <ul>${moreLinks}</ul>
            </div>
            <div class="footer-contact">
              <h4>${contactTitle}</h4>
              <p>${SITE_CONFIG.phoneDisplay}</p>
              <p><a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a></p>
              <p>${SITE_CONFIG.domain}</p>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">${copyrightText}</div>
          </div>
        </footer>
      `;
    }

    const toggleBtn = document.getElementById("navToggleBtn");
    const mainNav = document.getElementById("mainNav");
    if (toggleBtn && mainNav) {
      toggleBtn.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
      });

      mainNav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          mainNav.classList.remove("is-open");
          toggleBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setSavedLang(currentLang === "en" ? "mr" : "en");
        applyAllTranslations();
      });
    }
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-en]").forEach((el) => {
      const val = currentLang === "mr" ? el.getAttribute("data-mr") : el.getAttribute("data-en");
      if (val) el.textContent = val;
    });
  }

  function initServicesPage() {
    const detailPanel = document.getElementById("serviceDetailPanel");
    if (!detailPanel) return;

    const cards = document.querySelectorAll(".service-select-card");
    const indexEl = document.getElementById("serviceDetailIndex");
    const titleEl = document.getElementById("serviceDetailTitle");
    const descEl = document.getElementById("serviceDetailDesc");
    const tasksEl = document.getElementById("serviceTasksList");
    const docsEl = document.getElementById("serviceDocsList");
    const inquireLink = document.getElementById("serviceInquireLink");

    let activeKey = "gov";
    try {
      const params = new URLSearchParams(window.location.search);
      const qService = params.get("service");
      if (qService && SERVICES_DATA[qService]) {
        activeKey = qService;
      }
    } catch (_) {
      // Ignore query errors
    }

    function renderServiceDetail(key) {
      const srv = SERVICES_DATA[key] || SERVICES_DATA.gov;
      activeKey = key;

      cards.forEach((c) => c.classList.toggle("active-card", c.dataset.serviceKey === activeKey));
      if (indexEl) indexEl.textContent = t(srv.indexLabel);
      if (titleEl) titleEl.textContent = t(srv.title);
      if (descEl) descEl.textContent = t(srv.desc);

      const tasks = (srv.tasks && (srv.tasks[currentLang] || srv.tasks.en)) || [];
      if (tasksEl) tasksEl.innerHTML = tasks.map((item) => `<li>${item}</li>`).join("");

      const docs = (srv.docs && (srv.docs[currentLang] || srv.docs.en)) || [];
      if (docsEl) docsEl.innerHTML = docs.map((item) => `<li>${item}</li>`).join("");

      if (inquireLink) {
        inquireLink.href = `contact.html?service=${encodeURIComponent(srv.title.en)}`;
      }
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const key = card.dataset.serviceKey;
        if (key && SERVICES_DATA[key]) {
          renderServiceDetail(key);
          detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    });

    renderServiceDetail(activeKey);
    document.addEventListener("bhosale:langchange", () => renderServiceDetail(activeKey));
  }

  function initBlogPage() {
    const grid = document.getElementById("blogGrid");
    if (!grid) return;

    const filterBar = document.getElementById("blogFilterBar");
    const readerBox = document.getElementById("blogReaderBox");
    const readerBadge = document.getElementById("readerBadge");
    const readerReadTime = document.getElementById("readerReadTime");
    const readerTitle = document.getElementById("readerTitle");
    const readerSummary = document.getElementById("readerSummary");
    const readerPoints = document.getElementById("readerPoints");
    const readerContactLink = document.getElementById("readerContactLink");

    let activeCat = "all";
    let activePostId = BLOG_POSTS[0].id;

    function renderReader(postId) {
      const post = BLOG_POSTS.find((p) => p.id === postId) || BLOG_POSTS[0];
      activePostId = post.id;

      if (readerBadge) readerBadge.textContent = t(post.badge);
      if (readerReadTime) readerReadTime.textContent = t(post.readTime);
      if (readerTitle) readerTitle.textContent = t(post.title);
      if (readerSummary) readerSummary.textContent = t(post.summary);

      const pts = (post.points && (post.points[currentLang] || post.points.en)) || [];
      if (readerPoints) readerPoints.innerHTML = pts.map((pt) => `<li>${pt}</li>`).join("");

      if (readerContactLink) {
        readerContactLink.href = `contact.html?service=${encodeURIComponent(post.badge.en)}`;
      }
    }

    function renderPosts() {
      const list = activeCat === "all" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCat);
      grid.innerHTML = list
        .map(
          (post) => `
          <article class="card value-card reveal is-visible">
            <div class="card-top-row">
              <span class="badge-tag">${t(post.badge)}</span>
              <span class="card-date">${t(post.readTime)}</span>
            </div>
            <h3>${t(post.title)}</h3>
            <p>${t(post.summary)}</p>
            <button type="button" class="text-link read-post-btn" data-post-id="${post.id}">
              ${currentLang === "mr" ? "सविस्तर वाचा ↑" : "Read Guide ↑"}
            </button>
          </article>
        `
        )
        .join("");

      grid.querySelectorAll(".read-post-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          renderReader(btn.dataset.postId);
          if (readerBox) readerBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    }

    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCat = btn.dataset.category || "all";
          filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderPosts();
        });
      });
    }

    renderReader(activePostId);
    renderPosts();
    document.addEventListener("bhosale:langchange", () => {
      renderReader(activePostId);
      renderPosts();
    });
  }

  function initGalleryPage() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const filterBar = document.getElementById("galleryFilterBar");
    const previewBox = document.getElementById("galleryPreviewBox");
    const previewImg = document.getElementById("galleryPreviewImg");
    const previewBadge = document.getElementById("galleryPreviewBadge");
    const previewTitle = document.getElementById("galleryPreviewTitle");
    const previewDesc = document.getElementById("galleryPreviewDesc");
    const previewContactLink = document.getElementById("galleryPreviewContactLink");

    let activeCat = "all";
    let activeItemId = GALLERY_ITEMS[0].id;

    function renderPreview(itemId) {
      const item = GALLERY_ITEMS.find((g) => g.id === itemId) || GALLERY_ITEMS[0];
      activeItemId = item.id;

      if (previewImg) {
        previewImg.src = item.image;
        previewImg.alt = t(item.title);
      }
      if (previewBadge) previewBadge.textContent = t(item.tag);
      if (previewTitle) previewTitle.textContent = t(item.title);
      if (previewDesc) previewDesc.textContent = t(item.caption);
      if (previewContactLink) {
        previewContactLink.href = `contact.html?service=${encodeURIComponent(item.tag.en)}`;
      }
    }

    function renderItems() {
      const list = activeCat === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === activeCat);
      grid.innerHTML = list
        .map(
          (item) => `
          <article class="card gallery-card reveal is-visible" data-gallery-id="${item.id}">
            <div class="gallery-thumb">
              <img src="${item.image}" alt="${t(item.title)}" loading="lazy" />
            </div>
            <div class="gallery-body">
              <span class="badge-tag">${t(item.tag)}</span>
              <h3>${t(item.title)}</h3>
              <p>${t(item.caption)}</p>
            </div>
          </article>
        `
        )
        .join("");

      grid.querySelectorAll(".gallery-card").forEach((card) => {
        card.addEventListener("click", () => {
          renderPreview(card.dataset.galleryId);
          if (previewBox) previewBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    }

    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCat = btn.dataset.category || "all";
          filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderItems();
        });
      });
    }

    renderPreview(activeItemId);
    renderItems();
    document.addEventListener("bhosale:langchange", () => {
      renderPreview(activeItemId);
      renderItems();
    });
  }

  function initRevealAndScroll() {
    const header = document.getElementById("siteHeader");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
  }

  function applyAllTranslations() {
    document.documentElement.lang = currentLang === "mr" ? "mr" : "en";
    renderHeaderAndFooter();
    applyStaticTranslations();
    document.dispatchEvent(new CustomEvent("bhosale:langchange", { detail: { lang: currentLang } }));
  }

  window.BhosaleImperion = {
    config: SITE_CONFIG,
    getLang: () => currentLang,
    setLang: (lang) => {
      setSavedLang(lang);
      applyAllTranslations();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyAllTranslations();
    initServicesPage();
    initBlogPage();
    initGalleryPage();
    initRevealAndScroll();
  });
})();