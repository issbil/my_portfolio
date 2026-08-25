/**
 * main.js - Rendu du portfolio, i18n, thème et interactions.
 * Aucune dépendance : tout est rendu à partir de window.CV_DATA.
 */
(function () {
  'use strict';

  var D = window.CV_DATA;
  var DICT = window.I18N;
  var PH = window.I18N_PLACEHOLDERS;
  var lang = 'fr';

  /* ---------------------------------------------------------------- */
  /*  Utilitaires                                                      */
  /* ---------------------------------------------------------------- */

  /** Récupère la variante linguistique d'un champ (string ou {fr,en}). */
  function pick(field) {
    if (field === null || field === undefined) return '';
    if (typeof field === 'string') return field;
    return field[lang] !== undefined ? field[lang] : (field.fr || '');
  }

  /** Traduit une clé d'interface. */
  function t(key) {
    return (DICT[lang] && DICT[lang][key]) || (DICT.fr[key] || key);
  }

  /** Échappe le HTML pour toute valeur injectée. */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /** Affiche un domaine lisible à partir d'une URL. */
  function hostOf(url) {
    try { return new URL(url).host.replace(/^www\./, ''); } catch (e) { return url; }
  }

  /* ---------------------------------------------------------------- */
  /*  Icônes                                                           */
  /* ---------------------------------------------------------------- */
  var ICONS = {
    code:     '<path d="M9 18 3 12l6-6M15 6l6 6-6 6"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3.2"/><path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13"/><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2"/>',
    api:      '<path d="M10 13a5 5 0 0 0 7.5.6l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.6l-3 3a5 5 0 0 0 7 7L12.2 19"/>',
    cloud:    '<path d="M17.5 19a4.5 4.5 0 0 0 .3-9 6.5 6.5 0 0 0-12.4 2A4 4 0 0 0 6 19h11.5Z"/>',
    map:      '<path d="m9 4-6 2.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z"/><path d="M9 4v13M15 6.5v13"/>',
    spark:    '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
    check:    '<path d="m4 12.5 5 5L20 6.5"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
    layers:   '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
    award:    '<circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-1 7.5 4.5-2.6 4.5 2.6-1-7.5"/>'
  };
  function icon(name, cls) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : '') + '>' +
      (ICONS[name] || ICONS.code) + '</svg>';
  }

  /* ---------------------------------------------------------------- */
  /*  Rendu des sections                                               */
  /* ---------------------------------------------------------------- */

  function renderHero() {
    $('#heroTagline').textContent = pick(D.identity.tagline);
    typeRole(pick(D.identity.title));

    $('#statsList').innerHTML = D.identity.stats.map(function (s, i) {
      return '<li class="reveal" data-delay="' + Math.min(i + 1, 5) + '">' +
        '<b>' + esc(s.value) + '</b><span>' + esc(pick(s.label)) + '</span></li>';
    }).join('');
  }

  /* Effet machine à écrire sur l'intitulé du poste. */
  var typeTimer = null;
  function typeRole(text) {
    var el = $('#heroRole');
    if (typeTimer) clearInterval(typeTimer);

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.textContent = text; return; }

    var i = 0;
    el.innerHTML = '<span class="typed"></span><span class="cursor"></span>';
    var target = $('.typed', el);
    typeTimer = setInterval(function () {
      target.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(typeTimer); typeTimer = null; }
    }, 38);
  }

  function renderAbout() {
    $('#aboutText').innerHTML = pick(D.identity.summary)
      .map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');

    $('#strengthList').innerHTML = D.strengths.map(function (s) {
      return '<li><span class="tick">' + icon('check') + '</span>' +
        '<span><b>' + esc(pick(s.title)) + '</b><small>' + esc(pick(s.text)) + '</small></span></li>';
    }).join('');

    $('#langList').innerHTML = D.languages.map(function (l) {
      return '<li><div class="row"><span>' + esc(pick(l.name)) + '</span>' +
        '<span>' + esc(pick(l.level)) + '</span></div>' +
        '<div class="bar"><i data-value="' + l.value + '"></i></div></li>';
    }).join('');
  }

  function renderSkills() {
    $('#skillGrid').innerHTML = D.skills.map(function (s, i) {
      return '<article class="skill-card reveal" data-delay="' + Math.min(i % 3 + 1, 5) + '">' +
        '<div class="skill-ico">' + icon(s.icon) + '</div>' +
        '<h3>' + esc(pick(s.name)) + '</h3>' +
        '<p class="note">' + esc(pick(s.note)) + '</p>' +
        '<div class="chips">' + s.items.map(function (it) {
          return '<span class="chip">' + esc(pick(it)) + '</span>';
        }).join('') + '</div></article>';
    }).join('');
  }

  function renderExperience() {
    $('#timeline').innerHTML = D.experience.map(function (x) {
      var badge = x.current ? '<span class="badge-now">' + (lang === 'fr' ? 'En poste' : 'Current') + '</span>' : '';
      return '<article class="tl-item reveal' + (x.current ? ' is-current' : '') + '">' +
        '<div class="tl-card">' +
          '<div class="tl-top"><h3>' + esc(pick(x.role)) + '</h3>' + badge +
            '<span class="tl-period">' + esc(pick(x.period)) + '</span></div>' +
          '<p class="tl-meta"><span class="tl-company">' + esc(pick(x.company)) + '</span>' +
            '<span class="tl-sep">·</span><span>' + esc(pick(x.location)) + '</span>' +
            '<span class="tl-sep">·</span><span>' + esc(pick(x.type)) + '</span></p>' +
          '<ul class="tl-bullets">' + pick(x.bullets).map(function (b) {
            return '<li>' + esc(b) + '</li>';
          }).join('') + '</ul>' +
          '<div class="chips">' + x.stack.map(function (s) {
            return '<span class="chip">' + esc(pick(s)) + '</span>';
          }).join('') + '</div>' +
        '</div></article>';
    }).join('');
  }

  function renderProjects() {
    var active = ($('.filter.active') && $('.filter.active').dataset.filter) || 'all';

    $('#projectFilters').innerHTML = D.projectFilters.map(function (f) {
      return '<button type="button" class="filter' + (f.id === active ? ' active' : '') +
        '" data-filter="' + f.id + '" aria-pressed="' + (f.id === active) + '">' +
        esc(pick(f.label)) + '</button>';
    }).join('');

    $('#projectGrid').innerHTML = D.projects.map(function (p, i) {
      var link = p.link
        ? '<a class="pc-link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' +
          '<span>' + esc(hostOf(p.link)) + '</span>' + icon('external') + '</a>'
        : '';
      var star = p.featured ? '<span class="pc-star">★ ' + esc(t('projFeatured')) + '</span>' : '';
      return '<article class="project-card reveal' + (p.featured ? ' is-featured' : '') +
        '" data-delay="' + Math.min(i % 3 + 1, 5) +
        '" data-tags="' + esc(p.tags.join(' ')) + '">' + star +
        '<div class="pc-head"><span class="pc-ico">' + icon(p.tags.indexOf('gis') > -1 ? 'map' : 'layers') + '</span>' +
          '<span><h3>' + esc(pick(p.name)) + '</h3>' +
          '<span class="pc-org">' + esc(pick(p.org)) + '</span></span></div>' +
        '<p class="pc-desc">' + esc(pick(p.description)) + '</p>' +
        '<div class="pc-foot"><div class="chips">' + p.stack.map(function (s) {
          return '<span class="chip">' + esc(pick(s)) + '</span>';
        }).join('') + '</div>' + link + '</div></article>';
    }).join('');

    applyFilter(active);
  }

  function applyFilter(id) {
    $$('.project-card').forEach(function (card) {
      var match = id === 'all' || card.dataset.tags.split(' ').indexOf(id) > -1;
      card.classList.toggle('hidden', !match);
    });
  }

  function renderEducation() {
    $('#eduGrid').innerHTML = D.education.map(function (e, i) {
      var tags = '';
      if (e.highlight) tags += '<span class="tag-highlight">' + esc(pick(e.highlight)) + '</span>';
      if (e.credential) {
        tags += '<a class="edu-cred" href="' + esc(e.credential) + '" target="_blank" rel="noopener noreferrer">' +
          icon('award') + '<span>' + esc(t('eduCredential')) + '</span></a>';
      }
      var detail = pick(e.detail);
      return '<article class="edu-card reveal" data-delay="' + Math.min(i % 3 + 1, 5) + '">' +
        '<p class="edu-period">' + esc(pick(e.period)) + '</p>' +
        '<h3>' + esc(pick(e.degree)) + '</h3>' +
        '<p class="edu-school">' + esc(pick(e.school)) + '</p>' +
        (detail ? '<p class="edu-detail">' + esc(detail) + '</p>' : '') +
        (tags ? '<div class="edu-tags">' + tags + '</div>' : '') +
        '</article>';
    }).join('');
  }

  /* ---------------------------------------------------------------- */
  /*  Internationalisation                                             */
  /* ---------------------------------------------------------------- */
  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(function (el) {
      var v = DICT[lang][el.dataset.i18n];
      if (v) el.textContent = v;
    });

    Object.keys(PH[lang]).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.placeholder = PH[lang][id];
    });

    document.title = t('docTitle');
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('docDesc'));

    $('#langLabel').textContent = lang === 'fr' ? 'EN' : 'FR';
    $('#langBtn').setAttribute('aria-label', t('langToggle'));
    $('#themeBtn').setAttribute('aria-label', t('themeToggle'));

    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();

    revealAll();
    animateBars();

    try { localStorage.setItem('portfolio-lang', lang); } catch (e) { /* stockage indisponible */ }
  }

  /* ---------------------------------------------------------------- */
  /*  Thème                                                            */
  /* ---------------------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#080b16' : '#f6f8fc');
    try { localStorage.setItem('portfolio-theme', theme); } catch (e) { /* stockage indisponible */ }
  }

  /* ---------------------------------------------------------------- */
  /*  Animations                                                       */
  /* ---------------------------------------------------------------- */
  var observer = null;

  function revealAll() {
    var items = $$('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    }
    items.forEach(function (el) { observer.observe(el); });
  }

  function animateBars() {
    var bars = $$('.bar i');
    if (!('IntersectionObserver' in window)) {
      bars.forEach(function (b) { b.style.width = b.dataset.value + '%'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.value + '%';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { io.observe(b); });
  }

  /* ---------------------------------------------------------------- */
  /*  Interactions                                                     */
  /* ---------------------------------------------------------------- */
  function initHeaderBehaviour() {
    var header = $('#siteHeader');
    var bar = $('#progressBar');
    var links = $$('.nav a');
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle('scrolled', y > 12);

      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

      var current = -1;
      sections.forEach(function (sec, i) {
        if (sec && sec.getBoundingClientRect().top <= 120) current = i;
      });
      links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMenu() {
    var btn = $('#menuBtn');
    var nav = $('#nav');

    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? t('menuClose') : t('menuOpen'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  function initFilters() {
    $('#projectFilters').addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      $$('.filter').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      applyFilter(btn.dataset.filter);
      revealAll();
    });
  }

  function initForm() {
    var form = $('#contactForm');

    function fieldOf(input) { return input.closest('.field'); }

    function validate(input) {
      var value = input.value.trim();
      var ok = input.type === 'email'
        ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
        : (!input.required || value.length > 0);
      fieldOf(input).classList.toggle('invalid', !ok);
      return ok;
    }

    $$('#contactForm input, #contactForm textarea').forEach(function (input) {
      input.addEventListener('blur', function () { if (input.required) validate(input); });
      input.addEventListener('input', function () {
        if (fieldOf(input).classList.contains('invalid')) validate(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var required = $$('#contactForm [required]');
      var valid = required.map(validate).every(Boolean);
      if (!valid) {
        var firstBad = $('.field.invalid input, .field.invalid textarea');
        if (firstBad) firstBad.focus();
        return;
      }

      var name = $('#cf-name').value.trim();
      var email = $('#cf-email').value.trim();
      var subject = $('#cf-subject').value.trim() ||
        (lang === 'fr' ? 'Prise de contact depuis le portfolio' : 'Contact from the portfolio');
      var message = $('#cf-message').value.trim();

      var body = message + '\n\n-\n' + name + '\n' + email;
      window.location.href = 'mailto:' + D.identity.email +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      var status = $('.form-status', form) || document.createElement('p');
      status.className = 'form-status';
      status.textContent = t('formOk');
      form.appendChild(status);
      form.reset();
    });
  }

  /* ---------------------------------------------------------------- */
  /*  Amorçage                                                         */
  /* ---------------------------------------------------------------- */
  function init() {
    var savedTheme = null, savedLang = null;
    try {
      savedTheme = localStorage.getItem('portfolio-theme');
      savedLang = localStorage.getItem('portfolio-lang');
    } catch (e) { /* stockage indisponible */ }

    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

    var browserLang = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    applyLang(savedLang || (browserLang === 'fr' ? 'fr' : 'en'));

    $('#footerYear').textContent = new Date().getFullYear();

    $('#themeBtn').addEventListener('click', function () {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    $('#langBtn').addEventListener('click', function () {
      applyLang(lang === 'fr' ? 'en' : 'fr');
    });

    initHeaderBehaviour();
    initMenu();
    initFilters();
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
