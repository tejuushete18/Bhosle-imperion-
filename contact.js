(function () {
  "use strict";

  const SERVICE_OPTIONS = [
    "Government Online Services",
    "Agriculture Online Services",
    "Education & Employment Services",
    "Travel & Ticket Booking",
    "Online Forms & Applications",
    "Digital Documentation"
  ];

  function getSiteConfig() {
    if (window.BhosaleImperion && window.BhosaleImperion.config) {
      return window.BhosaleImperion.config;
    }
    return {
      brandName: "Bhosale Imperion",
      domain: "www.bhosaleimperion.com",
      email: "contact@bhosaleimperion.com",
      phoneDisplay: "+91 88570 52812",
      whatsappNumber: "918857052812"
    };
  }

  function getLang() {
    if (window.BhosaleImperion && typeof window.BhosaleImperion.getLang === "function") {
      return window.BhosaleImperion.getLang();
    }
    return "en";
  }

  function syncPhoneAndWhatsApp() {
    const cfg = getSiteConfig();
    const phoneEl = document.getElementById("contactPhoneDisplay");
    const waLink = document.getElementById("directWhatsAppLink");

    if (phoneEl && cfg.phoneDisplay) {
      phoneEl.textContent = cfg.phoneDisplay;
    }

    if (waLink && cfg.whatsappNumber) {
      const msg =
        getLang() === "mr"
          ? "नमस्कार भोसले इम्पेरिअन, मला ऑनलाईन सेवेसाठी मदत हवी आहे."
          : "Hello Bhosale Imperion, I need help with an online service.";
      waLink.href = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    }
  }

  function initServicePresets() {
    const pillsWrap = document.getElementById("contactServicePills");
    const selectEl = document.getElementById("serviceType");
    if (!selectEl) return;

    function setActiveService(serviceName) {
      if (!serviceName) return;
      const matched = SERVICE_OPTIONS.find(
        (opt) => opt.toLowerCase() === serviceName.trim().toLowerCase()
      );
      const finalValue = matched || serviceName.trim();

      const exists = Array.from(selectEl.options).some((o) => o.value === finalValue);
      if (!exists) {
        const customOpt = document.createElement("option");
        customOpt.value = finalValue;
        customOpt.textContent = finalValue;
        selectEl.appendChild(customOpt);
      }
      selectEl.value = finalValue;

      if (pillsWrap) {
        pillsWrap.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.service === finalValue);
        });
      }
    }

    if (pillsWrap) {
      pillsWrap.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          setActiveService(btn.dataset.service || "");
        });
      });
    }

    selectEl.addEventListener("change", () => {
      setActiveService(selectEl.value);
    });

    try {
      const params = new URLSearchParams(window.location.search);
      const queryService = params.get("service");
      const queryPackage = params.get("package");
      const notesEl = document.getElementById("messageDetails");

      if (queryService) {
        setActiveService(queryService);
      }
      if (queryPackage && notesEl && !notesEl.value.trim()) {
        notesEl.value =
          getLang() === "mr"
            ? `पॅकेज संदर्भ: ${queryPackage} — कृपया पुढील माहिती द्या.`
            : `Package inquiry reference: ${queryPackage} — please share next steps.`;
      }
    } catch (_) {
      // Ignore URLSearchParams issues
    }
  }
  function buildInquiryMessage(payload) {
    const lang = getLang();
    if (lang === "mr") {
      return [
        "नमस्कार भोसले इम्पेरिअन (www.bhosaleimperion.com),",
        `नाव: ${payload.name}`,
        `मोबाईल: ${payload.phone}`,
        payload.email ? `ईमेल: ${payload.email}` : null,
        `सेवा: ${payload.service}`,
        payload.details ? `तपशील: ${payload.details}` : null
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      "Hello Bhosale Imperion (www.bhosaleimperion.com),",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      payload.email ? `Email: ${payload.email}` : null,
      `Service: ${payload.service}`,
      payload.details ? `Details: ${payload.details}` : null
    ]
      .filter(Boolean)
      .join("\n");
  }

  function showFeedback(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = "form-feedback";
    if (type === "error") el.classList.add("is-error");
    if (type === "success") el.classList.add("is-success");
  }

  function initInquiryForm() {
    const form = document.getElementById("inquiryForm");
    if (!form) return;

    const nameInput = document.getElementById("fullName");
    const phoneInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("emailAddress");
    const serviceSelect = document.getElementById("serviceType");
    const detailsInput = document.getElementById("messageDetails");
    const feedbackEl = document.getElementById("formFeedback");
    const waSendBtn = document.getElementById("sendViaWhatsAppBtn");

    function collectAndValidate() {
      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const service = serviceSelect ? serviceSelect.value.trim() : "";
      const details = detailsInput ? detailsInput.value.trim() : "";
      const isMr = getLang() === "mr";

      if (name.length < 2) {
        showFeedback(
          feedbackEl,
          isMr ? "कृपया तुमचे पूर्ण नाव प्रविष्ट करा." : "Please enter your full name.",
          "error"
        );
        if (nameInput) nameInput.focus();
        return null;
      }

      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        showFeedback(
          feedbackEl,
          isMr ? "कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा." : "Please enter a valid 10-digit phone number.",
          "error"
        );
        if (phoneInput) phoneInput.focus();
        return null;
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFeedback(
          feedbackEl,
          isMr ? "कृपया वैध ईमेल पत्ता प्रविष्ट करा." : "Please enter a valid email address.",
          "error"
        );
        if (emailInput) emailInput.focus();
        return null;
      }

      if (!service) {
        showFeedback(
          feedbackEl,
          isMr ? "कृपया एक सेवा निवडा." : "Please select a service.",
          "error"
        );
        if (serviceSelect) serviceSelect.focus();
        return null;
      }

      return { name, phone, email, service, details };
    }

    function openWhatsAppWithPayload(payload) {
      const cfg = getSiteConfig();
      const text = buildInquiryMessage(payload);
      const url = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = collectAndValidate();
      if (!payload) return;

      try {
        const key = "bhosale_imperion_inquiries";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.unshift({ ...payload, submittedAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing.slice(0, 20)));
      } catch (_) {
        // Ignore storage errors
      }

      const isMr = getLang() === "mr";
      showFeedback(
        feedbackEl,
        isMr
          ? "तुमची चौकशी नोंदवली गेली आहे. जलद मदतीसाठी तुम्ही 'Send on WhatsApp' वापरू शकता."
          : "Your inquiry details are ready. You can also send them directly via 'Send on WhatsApp' for faster response.",
        "success"
      );
    });

    if (waSendBtn) {
      waSendBtn.addEventListener("click", () => {
        const payload = collectAndValidate();
        if (!payload) return;

        openWhatsAppWithPayload(payload);
        const isMr = getLang() === "mr";
        showFeedback(
          feedbackEl,
          isMr
            ? "तुमचा व्हॉट्सअ‍ॅप मेसेज तयार करून उघडला आहे."
            : "Opening WhatsApp with your pre-filled service inquiry.",
          "success"
        );
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    syncPhoneAndWhatsApp();
    initServicePresets();
    initInquiryForm();
  });

  document.addEventListener("bhosale:langchange", () => {
    syncPhoneAndWhatsApp();
  });
})();
  
  
  