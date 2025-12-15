// Scroll features: reveal on scroll, back-to-top button, compact header
(function () {
    const backBtn = document.getElementById('backToTop');
    const header = document.querySelector('header');

    function onScroll() {
        const y = window.scrollY || window.pageYOffset;
        // show back button after some scroll
        if (y > 360) backBtn.classList.add('show'); else backBtn.classList.remove('show');
        // compact header after small scroll
        if (y > 100) header.classList.add('compact'); else header.classList.remove('compact');
    }

    // reveal elements
    function setupReveal() {
        const targets = document.querySelectorAll('.card, .career-item, section');
        targets.forEach(el => el.classList.add('reveal'));

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }

    document.addEventListener('DOMContentLoaded', () => {
        setupReveal();
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
})();

// Build page nav from h3 headings and highlight active link
(function () {
    function slugify(text) {
        return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const list = document.getElementById('pageNavList');
        if (!list) return;
        const headings = Array.from(document.querySelectorAll('h2'));
        headings.forEach(h => {
            const id = h.id || slugify(h.textContent);
            h.id = id;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = h.textContent;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const header = document.querySelector('header');
                const offset = (header && header.getBoundingClientRect) ? header.getBoundingClientRect().height + 12 : 72;
                const top = document.getElementById(id).getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            });
            li.appendChild(a);
            list.appendChild(li);
        });

        // highlight active link using IntersectionObserver
        const links = Array.from(list.querySelectorAll('a'));
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
                }
            });
        }, { rootMargin: '-30% 0% -55% 0%', threshold: 0 });

        headings.forEach(h => obs.observe(h));
    });
})();