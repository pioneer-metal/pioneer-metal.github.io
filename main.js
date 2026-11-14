/** Shared behaviour for the static Pioneer Metal site. */
(() => {
    'use strict';
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const assetRoot = 'https://raw.githubusercontent.com/pioneer-metal/pioneer-metal.github.io/refs/heads/main/resources/';
    const storage = {
        get(key) { try { return localStorage.getItem(key); } catch { return null; } },
        set(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferences remain valid for this page. */ } }
    };

    let currentLanguage = storage.get('preferred-lang') || 'en';
    const profiles = {
        reinforcement: { image: 'Products_01.jpg', title: 'p1-name', description: 'p1-desc' },
        drywall: { image: 'Products_02.jpeg', title: 'p2-name', description: 'p2-desc' },
        custom: { image: 'Products_03.jpg', title: 'p3-name', description: 'p3-desc' }
    };
    let selectedProfile = 'reinforcement';
    const translate = key => (i18nData[currentLanguage] || i18nData.en)[key] || i18nData.en[key];
    const copy = translate;
    const setCopy = (element, copy) => {
        element.innerHTML = copy;
        // Legacy translations contain styling spans. The new system owns all presentation.
        element.querySelectorAll('span').forEach(span => span.replaceWith(...span.childNodes));
    };
    const bindImageFallback = image => {
        const fallbackImage = () => {
            const fallback = image.dataset.local;
            if (fallback && image.getAttribute('src') !== fallback) {
                image.closest('figure')?.querySelector('[data-cover-credit]')?.setAttribute('hidden', '');
                if (image.dataset.fallbackAlt) image.alt = image.dataset.fallbackAlt;
                image.src = fallback;
            }
        };
        image.addEventListener('error', fallbackImage);
        if (image.complete && image.currentSrc && image.naturalWidth === 0) fallbackImage();
    };
    document.querySelectorAll('img[data-local]').forEach(bindImageFallback);

    function updateProfile(changeImage = true) {
        const selector = document.querySelector('[data-profile-selector]');
        if (!selector) return;
        const profile = profiles[selectedProfile];
        const image = selector.querySelector('.profile-preview');
        if (changeImage) {
            const requestedProfile = selectedProfile;
            const pending = new Image();
            const local = `resources/${profile.image}`;
            pending.onload = () => {
                if (selectedProfile !== requestedProfile) return;
                const previous = !reduceMotion.matches && image.currentSrc ? image.cloneNode() : null;
                selector.querySelector('.profile-media .profile-transition')?.remove();
                if (previous) {
                    previous.classList.add('profile-transition');
                    previous.removeAttribute('id');
                    previous.alt = '';
                    previous.setAttribute('aria-hidden', 'true');
                    image.parentElement.append(previous);
                }
                image.dataset.local = local;
                image.src = pending.src;
                updateProfile(false);
                if (previous) {
                    const transition = previous.animate([{ opacity: 1 }, { opacity: 0 }], {
                        duration: 350, easing: 'ease-out', fill: 'forwards'
                    });
                    transition.finished.then(() => previous.remove(), () => previous.remove());
                }
            };
            pending.onerror = () => {
                if (pending.getAttribute('src') !== local) pending.src = local;
            };
            pending.src = assetRoot + profile.image;
            return;
        }
        image.alt = translate(profile.title);
        selector.querySelector('.profile-photo-caption').textContent = translate(profile.title);
        const description = selector.querySelector('[data-profile-description]');
        description.dataset.i18n = profile.description;
        setCopy(description, translate(profile.description));
        selector.querySelector('[data-profile-destination]').href = `products.html#${selectedProfile}`;
        selector.querySelectorAll('[data-profile]').forEach(option => {
            const active = option.dataset.profile === selectedProfile;
            option.classList.toggle('is-active', active);
            if (active) option.setAttribute('aria-current', 'true');
            else option.removeAttribute('aria-current');
        });
    }
    function setLanguage(language) {
        currentLanguage = i18nData[language] ? language : 'en';
        root.lang = currentLanguage;
        root.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const copy = translate(element.dataset.i18n);
            if (copy) setCopy(element, copy);
        });
        document.querySelector('#language').value = currentLanguage;
        storage.set('preferred-lang', currentLanguage);
        updateProfile(false);
        updateThemeButton();
        updateMenuLabel();
        document.dispatchEvent(new Event('site:languagechange'));
    }
    document.querySelector('#language')?.addEventListener('change', event => setLanguage(event.target.value));
    document.querySelectorAll('[data-profile]').forEach(option => {
        option.addEventListener('click', event => {
            if (!profiles[option.dataset.profile]) return;
            event.preventDefault();
            selectedProfile = option.dataset.profile;
            updateProfile();
        });
    });

    const themeSelect = document.querySelector('.theme-select');
    const deviceTheme = matchMedia('(prefers-color-scheme: dark)');
    const updateThemeButton = () => {
        const preference = storage.get('theme');
        const selected = preference === 'dark' || preference === 'light' ? preference : 'system';
        root.dataset.theme = selected === 'system' ? (deviceTheme.matches ? 'dark' : 'light') : selected;
        if (themeSelect) {
            themeSelect.value = selected;
            themeSelect.setAttribute('aria-label', copy('theme_label'));
        }
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', root.dataset.theme === 'dark' ? '#191d19' : '#f4f4f0');
    };
    themeSelect?.addEventListener('change', () => {
        if (themeSelect.value === 'system') {
            try { localStorage.removeItem('theme'); } catch { /* Device preference applies for this page. */ }
        } else storage.set('theme', themeSelect.value);
        updateThemeButton();
    });
    deviceTheme.addEventListener('change', updateThemeButton);
    updateThemeButton();

    const menuButton = document.querySelector('.menu-switch');
    const navigation = document.querySelector('#site-nav');
    const updateMenuLabel = () => {
        const open = navigation.classList.contains('is-open');
        const label = copy(open ? 'close' : 'menu');
        menuButton.querySelector('.menu-label').textContent = label;
        menuButton.setAttribute('aria-label', label);
        menuButton.querySelector('path').setAttribute('d', open ? 'M5 5l14 14M5 19L19 5' : 'M3 7h18M3 12h18M3 17h18');
    };
    const closeMenu = () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        updateMenuLabel();
    };
    menuButton?.addEventListener('click', () => {
        const open = navigation.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(open));
        updateMenuLabel();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
            closeMenu();
            menuButton.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!event.target.closest('.site-header')) closeMenu();
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

    const sectionSelector = document.querySelector('[data-section-selector]');
    if (sectionSelector) {
        const chooseSection = model => {
            sectionSelector.querySelectorAll('.section-model').forEach(panel => {
                panel.hidden = panel.id !== `section-${model}`;
            });
            sectionSelector.querySelectorAll('[data-section]').forEach(link => {
                const active = link.dataset.section === model;
                link.classList.toggle('is-active', active);
                if (active) link.setAttribute('aria-current', 'true');
                else link.removeAttribute('aria-current');
            });
        };
        sectionSelector.querySelectorAll('[data-section]').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                chooseSection(link.dataset.section);
                history.replaceState(null, '', link.getAttribute('href'));
            });
        });
        const initialSection = location.hash.replace('#section-', '');
        chooseSection(['c', 'u', 'tube'].includes(initialSection) ? initialSection : 'c');
    }

    const form = document.querySelector('#contactForm');
    if (form) {
        const query = new URLSearchParams(location.search);
        const requestedProduct = query.get('product');
        if (requestedProduct) form.querySelector('#formProduct').value = requestedProduct;
        const requestedSection = query.get('section');
        if (['C', 'U', 'Tube'].includes(requestedSection)) form.querySelector('#formMsg').value = `Section: ${requestedSection}\nRequired dimensions:\nQuantity:\nDelivery destination:`;
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.reportValidity()) return;
            const name = form.querySelector('#formName').value.trim();
            const email = form.querySelector('#formEmail').value.trim();
            const product = form.querySelector('#formProduct').value;
            const message = form.querySelector('#formMsg').value.trim();
            const subject = query.get('subject') || `Pioneer Metal inquiry${product ? `: ${product}` : ''}`;
            const body = `Name: ${name}\nEmail: ${email}\nProduct: ${product || 'Not specified'}\n\n${message}`;
            location.href = `mailto:pioneermetal@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            form.querySelector('.form-status').textContent = copy('form_status');
        });
    }

    document.querySelectorAll('[data-copy-value]').forEach(button => {
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(button.dataset.copyValue);
                button.textContent = copy('copied');
                window.setTimeout(() => { button.textContent = copy('copy'); }, 1800);
            } catch {
                const status = document.querySelector('.copy-status');
                if (status) status.textContent = button.dataset.copyValue;
            }
        });
    });

    setLanguage(currentLanguage);
    root.classList.add('enhanced');
    if ('IntersectionObserver' in window && !reduceMotion.matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const element = entry.target;
                const delay = Number(element.dataset.revealDelay || 0);
                element.animate([
                    { opacity: 0, transform: `translateY(${element.tagName === 'FIGURE' ? 32 : 20}px)` },
                    { opacity: 1, transform: 'translateY(0)' }
                ], { duration: 800, delay, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'both' });
                observer.unobserve(element);
            });
        }, { threshold: .08 });
        document.querySelectorAll('[data-reveal]').forEach((element, index) => {
            element.dataset.revealDelay = String((index % 3) * 75);
            observer.observe(element);
        });
    }
})();
