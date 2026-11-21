(function () {
  "use strict";

  const PACKAGES_DATA = [
    {
      id: "gov-citizen-pack",
      category: "government",
      tag: { en: "Government Services", mr: "शासकीय सेवा" },
      turnaround: { en: "Accurate Filing", mr: "अचूक अर्ज प्रक्रिया" },
      title: {
        en: "Citizen Portal & Certificate Pack",
        mr: "नागरिक पोर्टल व प्रमाणपत्र पॅक"
      },
      summary: {
        en: "Guided online applications, status check support, and receipt copy for government and citizen portals.",
        mr: "शासकीय व नागरिक पोर्टलसाठी अचूक ऑनलाईन अर्ज, स्टेटस तपासणी व पावतीची प्रत."
      },
      checklist: {
        en: [
          "Document verification before form submission",
          "Portal registration, application & status check",
          "Acknowledgement slip saved for your record"
        ],
        mr: [
          "अर्ज करण्यापूर्वी कागदपत्रांची तपासणी",
          "पोर्टल नोंदणी, अर्ज व स्टेटस तपासणी",
          "तुमच्या नोंदीसाठी अर्जाची पावती"
        ]
      }
    },
    {
      id: "agri-farmer-pack",
      category: "agriculture",
      tag: { en: "Agriculture Services", mr: "कृषी सेवा" },
      turnaround: { en: "Farmer Focused", mr: "शेतकरी सहाय्य" },
      title: {
        en: "Farmer Scheme & Portal Pack",
        mr: "शेतकरी योजना व पोर्टल पॅक"
      },
      summary: {
        en: "Careful online assistance for agriculture schemes, farmer records, and supporting document uploads.",
        mr: "कृषी योजना अर्ज, शेतकरी नोंदी आणि आवश्यक कागदपत्रे अपलोड करण्यासाठी अचूक मदत."
      },
      checklist: {
        en: [
          "Aadhaar, bank & required record verification",
          "Scheme application & online update support",
          "Clear receipt copy after submission"
        ],
        mr: [
          "आधार, बँक व आवश्यक तपशील तपासणी",
          "योजना अर्ज व ऑनलाईन माहिती अद्ययावत",
          "अर्ज पूर्ण झाल्यावर पावतीची प्रत"
        ]
      }
    },
    {
      id: "digital-docs-pack",
      category: "docs",
      tag: { en: "Digital Documentation", mr: "डिजिटल डॉक्युमेंटेशन" },
      turnaround: { en: "Clean & Ready", mr: "स्पष्ट व तयार फाईल्स" },
      title: {
        en: "Scan, PDF Merge & Photo Resize Pack",
        mr: "स्कॅन, PDF मर्ज व फोटो साईझ पॅक"
      },
      summary: {
        en: "Clean document scans, merged/compressed PDFs, and resized photos/signatures ready for portal uploads.",
        mr: "स्पष्ट स्कॅन, मर्ज/कॉम्प्रेस केलेली PDF आणि पोर्टलसाठी योग्य साईझमधील फोटो व सही."
      },
      checklist: {
        en: [
          "Readable scans & clean file naming",
          "PDF merge, split & KB/MB size adjustment",
          "Photo & signature dimension/size check"
        ],
        mr: [
          "वाचनीय स्कॅन व व्यवस्थित फाईल नावे",
          "PDF मर्ज, स्प्लिट व KB/MB साईझ सेटिंग",
          "फोटो व सहीची योग्य साईझ तपासणी"
        ]
      }
    },
    {
      id: "edu-admission-pack",
      category: "education",
      tag: { en: "Education & Employment", mr: "शिक्षण व नोकरी" },
      turnaround: { en: "Error-Checked Filing", mr: "अचूक अर्ज प्रक्रिया" },
      title: {
        en: "Admission, Scholarship & Job Pack",
        mr: "प्रवेश, शिष्यवृत्ती व नोकरी पॅक"
      },
      summary: {
        en: "Online form filling, upload size checks, and acknowledgement receipt for admissions, exams, and job portals.",
        mr: "प्रवेश, शिष्यवृत्ती, परीक्षा व नोकरी अर्जांसाठी अचूक फॉर्म भरणे, अपलोड व पावती."
      },
      checklist: {
        en: [
          "Accurate entry of academic & personal details",
          "Upload size check for certificates, photo & signature",
          "Final confirmation & receipt copy"
        ],
        mr: [
          "शैक्षणिक व वैयक्तिक माहितीची अचूक नोंद",
          "प्रमाणपत्रे, फोटो व सही योग्य साईझमध्ये अपलोड",
          "अंतिम पावती व कन्फर्मेशन प्रत"
        ]
      }
    },
    {
      id: "travel-booking-pack",
      category: "travel",
      tag: { en: "Travel & Ticket Booking", mr: "प्रवास व तिकीट बुकिंग" },
      turnaround: { en: "Fast Confirmation", mr: "जलद कन्फर्मेशन" },
      title: {
        en: "Travel & Ticket Booking Pack",
        mr: "प्रवास व तिकीट बुकिंग पॅक"
      },
      summary: {
        en: "Smooth ticket booking assistance with route/date check and digital ticket copy on WhatsApp or email.",
        mr: "प्रवासासाठी सोपे तिकीट बुकिंग — मार्ग, तारीख तपासणी व त्वरित डिजिटल तिकीट प्रत."
      },
      checklist: {
        en: [
          "Passenger & travel date verification before booking",
          "Clear itinerary & fare details sharing",
          "Digital ticket delivered on WhatsApp / Email"
        ],
        mr: [
          "बुकिंगपूर्वी प्रवाशांची माहिती व तारीख तपासणी",
          "प्रवासाचा तपशील व तिकीट माहिती",
          "व्हॉट्सअ‍ॅप किंवा ईमेलवर डिजिटल तिकीट"
        ]
      }
    },
    {
      id: "online-forms-pack",
      category: "government",
      tag: { en: "Online Forms & Applications", mr: "ऑनलाईन फॉर्म्स व अर्ज" },
      turnaround: { en: "Complete Form Care", mr: "संपूर्ण फॉर्म सहाय्य" },
      title: {
        en: "End-to-End Online Application Pack",
        mr: "संपूर्ण ऑनलाईन अर्ज पॅक"
      },
      summary: {
        en: "Structured online form submission, document upload formatting, and final receipt copy.",
        mr: "अचूक ऑनलाईन फॉर्म भरणे, कागदपत्रे अपलोड करणे आणि अंतिम पावती देणे."
      },
      checklist: {
        en: [
          "Field-by-field verification before submission",
          "Portal-compliant PDF & photo upload support",
          "Saved acknowledgement slip for future reference"
        ],
        mr: [
          "सबमिटपूर्वी प्रत्येक माहितीची तपासणी",
          "पोर्टलनुसार PDF व फोटो अपलोड मदत",
          "भविष्यातील संदर्भासाठी पावतीची प्रत"
        ]
      }
    }
  ];

  function getCurrentLang() {
    if (window.BhosaleImperion && typeof window.BhosaleImperion.getLang === "function") {
      return window.BhosaleImperion.getLang();
    }
    return "en";
  }

  function pickText(obj) {
    const lang = getCurrentLang();
    if (!obj) return "";
    return obj[lang] || obj.en || "";
  }

  function syncSearchPlaceholder() {
    const searchInput = document.getElementById("productSearchInput");
    if (!searchInput) return;
    searchInput.placeholder =
      getCurrentLang() === "mr"
        ? "पॅकेज, फॉर्म किंवा कागदपत्र शोधा..."
        : "Search packages, forms, docs...";
  }

  function renderHomeFeaturedProducts() {
    const homeGrid = document.getElementById("homeFeaturedProductsGrid");
    if (!homeGrid) return;

    const featured = [PACKAGES_DATA[0], PACKAGES_DATA[1], PACKAGES_DATA[3]];
    homeGrid.innerHTML = featured
      .map(
        (item) => `
        <article class="card value-card reveal is-visible">
          <div class="card-top-row">
            <span class="badge-tag">${pickText(item.tag)}</span>
            <span class="card-date">${pickText(item.turnaround)}</span>
          </div>
          <h3>${pickText(item.title)}</h3>
          <p>${pickText(item.summary)}</p>
          <a href="products.html?package=${encodeURIComponent(item.id)}" class="text-link">
            ${getCurrentLang() === "mr" ? "तपशील पहा →" : "See Details →"}
          </a>
        </article>
      `
      )
      .join("");
  }

  function initProductsPage() {
    const grid = document.getElementById("productsCatalogGrid");
    const filterBar = document.getElementById("productFilterBar");
    const searchInput = document.getElementById("productSearchInput");
    const emptyState = document.getElementById("productsEmptyState");
    const resetBtn = document.getElementById("resetProductFiltersBtn");

    if (!grid) return;

    let activeCategory = "all";
    let searchQuery = "";
    let inspectedId = PACKAGES_DATA[0].id;

    try {
      const params = new URLSearchParams(window.location.search);
      const requestedPkg = params.get("package");
      if (requestedPkg && PACKAGES_DATA.some((p) => p.id === requestedPkg)) {
        inspectedId = requestedPkg;
      }
    } catch (_) {
      // Ignore query param errors
    }

    const inspBadge = document.getElementById("inspectorBadge");
    const inspTurnaround = document.getElementById("inspectorTurnaround");
    const inspTitle = document.getElementById("inspectorTitle");
    const inspDesc = document.getElementById("inspectorDesc");
    const inspChecklist = document.getElementById("inspectorChecklist");
    const inspContactLink = document.getElementById("inspectorContactLink");

    function updateInspector(pkgId) {
      const pkg = PACKAGES_DATA.find((p) => p.id === pkgId) || PACKAGES_DATA[0];
      inspectedId = pkg.id;

      if (inspBadge) inspBadge.textContent = pickText(pkg.tag);
      if (inspTurnaround) inspTurnaround.textContent = pickText(pkg.turnaround);
      if (inspTitle) inspTitle.textContent = pickText(pkg.title);
      if (inspDesc) inspDesc.textContent = pickText(pkg.summary);

      if (inspChecklist) {
        const list = (pkg.checklist && (pkg.checklist[getCurrentLang()] || pkg.checklist.en)) || [];
        inspChecklist.innerHTML = list.map((li) => `<li>${li}</li>`).join("");
      }

      if (inspContactLink) {
        inspContactLink.href = `contact.html?service=${encodeURIComponent(pkg.tag.en)}&package=${encodeURIComponent(pkg.id)}`;
      }
    }

    function renderCatalog() {
      const q = searchQuery.trim().toLowerCase();

      const filtered = PACKAGES_DATA.filter((pkg) => {
        const matchCat = activeCategory === "all" || pkg.category === activeCategory;
        if (!matchCat) return false;
        if (!q) return true;

        const haystack = [
          pkg.title.en,
          pkg.title.mr,
          pkg.summary.en,
          pkg.summary.mr,
          pkg.tag.en,
          pkg.tag.mr
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(q);
      });

      if (!filtered.length) {
        grid.innerHTML = "";
        if (emptyState) emptyState.classList.remove("hidden");
        return;
      }

      if (emptyState) emptyState.classList.add("hidden");

      grid.innerHTML = filtered
        .map(
          (pkg) => `
          <article class="card value-card reveal is-visible" data-category="${pkg.category}">
            <div class="card-top-row">
              <span class="badge-tag">${pickText(pkg.tag)}</span>
              <span class="card-date">${pickText(pkg.turnaround)}</span>
            </div>
            <h3>${pickText(pkg.title)}</h3>
            <p>${pickText(pkg.summary)}</p>
            <div class="card-footer-actions">
              <button type="button" class="text-link inspect-pkg-btn" data-pkg-id="${pkg.id}">
                ${getCurrentLang() === "mr" ? "तपशील पहा ↑" : "Inspect Pack ↑"}
              </button>
              <a href="contact.html?service=${encodeURIComponent(pkg.tag.en)}&package=${encodeURIComponent(pkg.id)}" class="btn btn-outline btn-sm">
                ${getCurrentLang() === "mr" ? "चौकशी करा" : "Inquire"}
              </a>
            </div>
          </article>
        `
        )
        .join("");

      grid.querySelectorAll(".inspect-pkg-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          updateInspector(btn.dataset.pkgId);
          const box = document.getElementById("productInspectorBox");
          if (box) box.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    }

    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCategory = btn.dataset.category || "all";
          filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderCatalog();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value || "";
        renderCatalog();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeCategory = "all";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        if (filterBar) {
          filterBar.querySelectorAll(".filter-btn").forEach((b) => {
            b.classList.toggle("active", b.dataset.category === "all");
          });
        }
        renderCatalog();
      });
    }

    document.addEventListener("bhosale:langchange", () => {
      syncSearchPlaceholder();
      updateInspector(inspectedId);
      renderCatalog();
    });

    syncSearchPlaceholder();
    updateInspector(inspectedId);
    renderCatalog();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHomeFeaturedProducts();
    initProductsPage();
  });

  document.addEventListener("bhosale:langchange", () => {
    renderHomeFeaturedProducts();
  });
})();
