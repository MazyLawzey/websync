// ===== Theme Toggle =====
(function() {
    const saved = localStorage.getItem('websync-theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

// ===== Language: early apply =====
(function() {
    const saved = localStorage.getItem('websync-lang');
    if (saved) {
        document.documentElement.setAttribute('data-lang', saved);
    }
})();

// ===== Translations =====
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.roles': 'Roles',
        'nav.getStarted': 'Get Started',
        'nav.roadmap': 'Roadmap',
        'nav.install': 'Install',

        'hero.badge': 'VS Code Extension for Education',
        'hero.title1': 'Real-Time Collaborative',
        'hero.title2': 'Web Development',
        'hero.subtitle': 'A teacher opens a session, students join and see code, preview, and cursor positions in real time — like CodeTogether + Live Server + Figma, all inside VS Code.',
        'hero.installBtn': 'Install from Marketplace',
        'hero.githubBtn': 'View on GitHub',

        'features.label': 'Features',
        'features.title1': 'Everything you need for',
        'features.title2': 'collaborative teaching',
        'features.desc': 'A complete toolkit for real-time code sharing, collaboration, and live preview — all without leaving VS Code.',
        'features.liveSession': 'Live Session',
        'features.liveSessionDesc': 'Host creates a session with a unique code. Students join instantly — no setup, no accounts, just a code and a URL.',
        'features.fileSync': 'File Sync',
        'features.fileSyncDesc': 'All workspace files synced from host to students instantly.',
        'features.incrementalEdits': 'Incremental Edits',
        'features.incrementalEditsDesc': 'Only changed ranges are sent — no cursor jumps, no lag.',
        'features.navSync': 'Navigation Sync',
        'features.navSyncDesc': "Host switches file — students' editors follow automatically.",
        'features.cursors': 'Collaborative Cursors',
        'features.cursorsDesc': 'Figma-style colored cursors with names for all participants.',
        'features.comments': 'Code Comments',
        'features.commentsDesc': 'Add inline comments on any line, visible to everyone.',
        'features.livePreview': 'Live Preview',
        'features.livePreviewDesc': 'Built-in iframe preview with live reload on every save. See your HTML, CSS, and JavaScript changes reflected instantly without switching windows.',
        'features.roleSystem': 'Role System',
        'features.roleSystemDesc': 'Host, Admin, Editor, Viewer — each with specific permissions.',
        'features.ngrok': 'ngrok Tunnel',
        'features.ngrokDesc': 'Share sessions over the internet with one click.',

        'stats.features': 'Core Features',
        'stats.roles': 'Permission Roles',
        'stats.lines': 'Lines of Code',
        'stats.opensource': 'Open Source',

        'howItWorks.label': 'How It Works',
        'howItWorks.title1': 'Simple setup,',
        'howItWorks.title2': 'powerful collaboration',
        'howItWorks.step1Title': 'Create Session',
        'howItWorks.step1Desc': 'Teacher enters a display name and clicks <strong>Create Session</strong>. The server starts automatically on localhost:3000 and generates a unique session code.',
        'howItWorks.step2Title': 'Students Join',
        'howItWorks.step2Desc': 'Students enter the session code and server URL, click <strong>Join Session</strong>. All workspace files are synced automatically — no setup needed.',
        'howItWorks.step3Title': 'Code Together',
        'howItWorks.step3Desc': 'Every keystroke, cursor move, and file switch is synced in real time. The built-in live preview shows the rendered page instantly.',
        'howItWorks.architecture': 'Architecture',

        'roles.label': 'Permissions',
        'roles.title1': 'Fine-grained',
        'roles.title2': 'role system',
        'roles.desc': 'Control who can edit, comment, manage roles, and kick users. All permissions enforced server-side.',
        'roles.host': 'Host',
        'roles.hostDesc': 'Session creator with full control.',
        'roles.admin': 'Admin',
        'roles.adminDesc': 'Trusted assistant with elevated permissions.',
        'roles.editor': 'Editor',
        'roles.editorDesc': 'Can contribute code and comments.',
        'roles.viewer': 'Viewer',
        'roles.viewerDesc': 'Read-only access for observation.',
        'roles.editFiles': 'Edit Files',
        'roles.addComments': 'Add Comments',
        'roles.changeRoles': 'Change Roles',
        'roles.changeRolesNote': 'Change Roles',
        'roles.editorsViewers': '(editors/viewers)',
        'roles.kickUsers': 'Kick Users',

        'start.label': 'Quick Start',
        'start.title1': 'Up and running',
        'start.title2': 'in 3 minutes',
        'start.step1Title': 'Install from VS Code Marketplace',
        'start.step1Desc': 'Search for',
        'start.step1Desc2': 'in the Extensions tab, or install directly:',
        'start.openMarketplace': 'Open in Marketplace',
        'start.step2Title': 'Open the Sidebar',
        'start.step2Desc': 'Click the',
        'start.step2Desc2': 'icon in the Activity Bar (left side of VS Code).',
        'start.step3Title': 'Create or Join a Session',
        'start.step3Desc': 'Enter your display name, click',
        'start.createSession': 'Create Session',
        'start.step3Desc2': 'to host, or enter a session code to',
        'start.join': 'Join',
        'start.thatsIt': "That's it!",
        'start.ngrokTitle': 'Share Over the Internet',
        'start.ngrokDesc': 'Behind a NAT or firewall? Use ngrok to share your session globally. Get a free auth token, click <strong>Share</strong>, and paste it. Students get a public URL to join from anywhere.',

        'roadmap.label': 'Roadmap',
        'roadmap.title1': "Where we're",
        'roadmap.title2': 'headed next',
        'roadmap.desc': "We're just getting started. WebSync Live will keep evolving — and our growth depends entirely on you, our users.",
        'roadmap.done': 'Done',
        'roadmap.inProgress': 'In Progress',
        'roadmap.planned': 'Planned',
        'roadmap.publicRelease': 'Public Release',
        'roadmap.publicReleaseDesc': 'Extension published on VS Code Marketplace — free and open source for everyone.',
        'roadmap.cursors': 'Real-time Collaborative Cursors',
        'roadmap.cursorsDesc': 'Figma-style colored cursors with names, selection highlighting, and live position tracking.',
        'roadmap.cloud': 'Cloud Servers',
        'roadmap.cloudDesc': "Our own managed servers so you don't need to self-host. Create a session, get a link — students join from anywhere without ngrok or port forwarding.",
        'roadmap.persistent': 'Persistent Sessions',
        'roadmap.persistentDesc': 'Save and restore session state — reconnect without losing progress, even after VS Code restarts.',
        'roadmap.localization': 'Localization',
        'roadmap.localizationDesc': 'Full multi-language support for the extension UI — starting with English and Russian, with more languages to follow based on community demand.',
        'roadmap.chat': 'Built-in Chat & Voice',
        'roadmap.chatDesc': 'Communicate with your students directly inside VS Code — no need for external apps.',
        'roadmap.encryption': 'End-to-End Encryption',
        'roadmap.encryptionDesc': 'JWT auth, encrypted WebSocket channels, and secure session management for production use.',
        'roadmap.communityTitle': 'Our growth depends on you',
        'roadmap.communityDesc': 'WebSync Live is built by a tiny team with a big vision. Every install, every star, every session created — it all matters. The more people use it, the faster we can develop new features, set up cloud infrastructure, and make collaborative coding accessible for every classroom in the world.',
        'roadmap.installBtn': 'Install Extension',
        'roadmap.starBtn': 'Star on GitHub',

        'cta.title1': 'Ready to transform your',
        'cta.title2': 'classroom experience?',
        'cta.desc': 'Start using WebSync Live today — free, open source, and built for educators.',
        'cta.installBtn': 'Install from Marketplace',
        'cta.githubBtn': 'View on GitHub',

        'footer.desc': 'Real-time collaborative web development for education, built inside VS Code.',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.authors': 'Authors',
        'footer.contacts': 'Contacts',
        'footer.copyright': '© 2026 WebSync Live. Open source under GPL-3.0.',
    },
    ru: {
        'nav.features': 'Возможности',
        'nav.howItWorks': 'Как это работает',
        'nav.roles': 'Роли',
        'nav.getStarted': 'Начать',
        'nav.roadmap': 'Дорога',
        'nav.install': 'Скачать',

        'hero.badge': 'Расширение VS Code для образования',
        'hero.title1': 'Совместная разработка',
        'hero.title2': 'в реальном времени',
        'hero.subtitle': 'Преподаватель открывает сессию, студенты подключаются и видят код, превью и позиции курсоров в реальном времени — как CodeTogether + Live Server + Figma, прямо внутри VS Code.',
        'hero.installBtn': 'Установить из Marketplace',
        'hero.githubBtn': 'Открыть на GitHub',

        'features.label': 'Возможности',
        'features.title1': 'Всё что нужно для',
        'features.title2': 'совместного обучения',
        'features.desc': 'Полный набор инструментов для обмена кодом в реальном времени, совместной работы и живого превью — не выходя из VS Code.',
        'features.liveSession': 'Живая сессия',
        'features.liveSessionDesc': 'Ведущий создаёт сессию с уникальным кодом. Студенты подключаются мгновенно — без настройки, без аккаунтов, только код и URL.',
        'features.fileSync': 'Синхронизация файлов',
        'features.fileSyncDesc': 'Все файлы рабочего пространства синхронизируются от ведущего к студентам мгновенно.',
        'features.incrementalEdits': 'Инкрементальные правки',
        'features.incrementalEditsDesc': 'Отправляются только изменённые фрагменты — без прыжков курсора и задержек.',
        'features.navSync': 'Синхронизация навигации',
        'features.navSyncDesc': 'Ведущий переключает файл — редакторы студентов следуют за ним автоматически.',
        'features.cursors': 'Совместные курсоры',
        'features.cursorsDesc': 'Цветные курсоры с именами в стиле Figma для всех участников.',
        'features.comments': 'Комментарии к коду',
        'features.commentsDesc': 'Добавляйте комментарии к любой строке — видны всем участникам.',
        'features.livePreview': 'Живое превью',
        'features.livePreviewDesc': 'Встроенное превью через iframe с автообновлением при каждом сохранении. Изменения в HTML, CSS и JavaScript отображаются мгновенно без переключения окон.',
        'features.roleSystem': 'Система ролей',
        'features.roleSystemDesc': 'Ведущий, Админ, Редактор, Зритель — каждый с определёнными правами.',
        'features.ngrok': 'Туннель ngrok',
        'features.ngrokDesc': 'Делитесь сессиями через интернет одним кликом.',

        'stats.features': 'Возможностей',
        'stats.roles': 'Роли доступа',
        'stats.lines': 'Строк кода',
        'stats.opensource': 'Открытый код',

        'howItWorks.label': 'Как это работает',
        'howItWorks.title1': 'Простая настройка,',
        'howItWorks.title2': 'мощная совместная работа',
        'howItWorks.step1Title': 'Создать сессию',
        'howItWorks.step1Desc': 'Преподаватель вводит имя и нажимает <strong>Create Session</strong>. Сервер запускается автоматически на localhost:3000 и генерирует уникальный код сессии.',
        'howItWorks.step2Title': 'Студенты подключаются',
        'howItWorks.step2Desc': 'Студенты вводят код сессии и URL сервера, нажимают <strong>Join Session</strong>. Все файлы синхронизируются автоматически — настройка не нужна.',
        'howItWorks.step3Title': 'Код вместе',
        'howItWorks.step3Desc': 'Каждое нажатие клавиши, движение курсора и переключение файла синхронизируются в реальном времени. Встроенное превью показывает страницу мгновенно.',
        'howItWorks.architecture': 'Архитектура',

        'roles.label': 'Права доступа',
        'roles.title1': 'Гибкая',
        'roles.title2': 'система ролей',
        'roles.desc': 'Управляйте тем, кто может редактировать, комментировать, управлять ролями и исключать пользователей. Все права проверяются на сервере.',
        'roles.host': 'Ведущий',
        'roles.hostDesc': 'Создатель сессии с полным контролем.',
        'roles.admin': 'Админ',
        'roles.adminDesc': 'Доверенный помощник с расширенными правами.',
        'roles.editor': 'Редактор',
        'roles.editorDesc': 'Может писать код и оставлять комментарии.',
        'roles.viewer': 'Зритель',
        'roles.viewerDesc': 'Доступ только для чтения.',
        'roles.editFiles': 'Редактировать файлы',
        'roles.addComments': 'Добавлять комментарии',
        'roles.changeRoles': 'Менять роли',
        'roles.changeRolesNote': 'Менять роли',
        'roles.editorsViewers': '(редакторы/зрители)',
        'roles.kickUsers': 'Исключать пользователей',

        'start.label': 'Быстрый старт',
        'start.title1': 'Запуск за',
        'start.title2': '3 минуты',
        'start.step1Title': 'Установить из VS Code Marketplace',
        'start.step1Desc': 'Найдите',
        'start.step1Desc2': 'во вкладке расширений или установите напрямую:',
        'start.openMarketplace': 'Открыть в Marketplace',
        'start.step2Title': 'Откройте боковую панель',
        'start.step2Desc': 'Нажмите на иконку',
        'start.step2Desc2': 'в панели активности (слева в VS Code).',
        'start.step3Title': 'Создайте или присоединитесь к сессии',
        'start.step3Desc': 'Введите ваше имя, нажмите',
        'start.createSession': 'Create Session',
        'start.step3Desc2': 'чтобы создать, или введите код сессии для',
        'start.join': 'Join',
        'start.thatsIt': 'Готово!',
        'start.ngrokTitle': 'Доступ через интернет',
        'start.ngrokDesc': 'За NAT или Firewall? Используйте ngrok для глобального доступа к сессии. Получите бесплатный auth-токен, нажмите <strong>Share</strong> и вставьте его. Студенты получат публичный URL для подключения откуда угодно.',

        'roadmap.label': 'Дорожная карта',
        'roadmap.title1': 'Куда мы',
        'roadmap.title2': 'движемся дальше',
        'roadmap.desc': 'Мы только начинаем. WebSync Live будет развиваться — и наш рост полностью зависит от вас, наших пользователей.',
        'roadmap.done': 'Готово',
        'roadmap.inProgress': 'В процессе',
        'roadmap.planned': 'Планируется',
        'roadmap.publicRelease': 'Публичный релиз',
        'roadmap.publicReleaseDesc': 'Расширение опубликовано в VS Code Marketplace — бесплатно и с открытым исходным кодом для всех.',
        'roadmap.cursors': 'Совместные курсоры в реальном времени',
        'roadmap.cursorsDesc': 'Цветные курсоры с именами в стиле Figma, подсветка выделения и отслеживание позиций в режиме реального времени.',
        'roadmap.cloud': 'Облачные серверы',
        'roadmap.cloudDesc': 'Собственные управляемые серверы, чтобы вам не нужно было хостить самим. Создайте сессию, получите ссылку — студенты подключатся откуда угодно без ngrok или проброса портов.',
        'roadmap.persistent': 'Постоянные сессии',
        'roadmap.persistentDesc': 'Сохранение и восстановление состояния сессии — переподключение без потери прогресса, даже после перезапуска VS Code.',
        'roadmap.localization': 'Локализация',
        'roadmap.localizationDesc': 'Полная мультиязычная поддержка интерфейса расширения — начиная с английского и русского, с добавлением других языков по запросам сообщества.',
        'roadmap.chat': 'Встроенный чат и голос',
        'roadmap.chatDesc': 'Общайтесь со студентами прямо внутри VS Code — без внешних приложений.',
        'roadmap.encryption': 'Сквозное шифрование',
        'roadmap.encryptionDesc': 'JWT-авторизация, зашифрованные WebSocket-каналы и безопасное управление сессиями для продакшена.',
        'roadmap.communityTitle': 'Наш рост зависит от вас',
        'roadmap.communityDesc': 'WebSync Live создаётся маленькой командой с большой мечтой. Каждая установка, каждая звезда, каждая созданная сессия — всё это важно. Чем больше людей используют расширение, тем быстрее мы сможем разрабатывать новые функции, развернуть облачную инфраструктуру и сделать совместное программирование доступным для каждого класса в мире.',
        'roadmap.installBtn': 'Установить расширение',
        'roadmap.starBtn': 'Звезда на GitHub',

        'cta.title1': 'Готовы преобразить ваш',
        'cta.title2': 'учебный опыт?',
        'cta.desc': 'Начните использовать WebSync Live сегодня — бесплатно, с открытым кодом и создано для преподавателей.',
        'cta.installBtn': 'Установить из Marketplace',
        'cta.githubBtn': 'Открыть на GitHub',

        'footer.desc': 'Совместная веб-разработка в реальном времени для образования, прямо внутри VS Code.',
        'footer.product': 'Продукт',
        'footer.resources': 'Ресурсы',
        'footer.authors': 'Авторы',
        'footer.contacts': 'Контакты',
        'footer.copyright': '© 2026 WebSync Live. Открытый код под лицензией GPL-3.0.',
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('websync-lang', lang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.querySelector('.lang-label').textContent = lang === 'en' ? 'RU' : 'EN';
    }
}

// ===== Scroll Animations (Intersection Observer) =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== Dark Theme Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('websync-theme', theme);
    }
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ===== Language Toggle =====
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('websync-lang') || 'en';
    applyTranslations(savedLang);
    langToggle.addEventListener('click', () => {
        const current = localStorage.getItem('websync-lang') || 'en';
        applyTranslations(current === 'en' ? 'ru' : 'en');
    });

    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ===== Mobile Nav Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ===== Copy Button =====
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.copy;
            navigator.clipboard.writeText(text).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });

    // ===== Terminal Typing Effect =====
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        const lines = terminalBody.querySelectorAll('.terminal-line');
        let delay = 0;

        const terminalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lines.forEach((line, index) => {
                        line.style.opacity = '0';
                        line.style.transform = 'translateX(-10px)';
                        line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, 300 + index * 200);
                    });
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        terminalObserver.observe(terminalBody);
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = navbar.offsetHeight + 20;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Parallax Effect on Hero =====
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        }, { passive: true });
    }

    // ===== Hero Mouse Glow Effect =====
    const heroSection = document.querySelector('.hero');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    if (heroSection && heroMouseGlow) {
        let rafId = null;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            if (!rafId) {
                rafId = requestAnimationFrame(updateGlow);
            }
        });

        function updateGlow() {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;

            heroMouseGlow.style.left = currentX + 'px';
            heroMouseGlow.style.top = currentY + 'px';

            if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
                rafId = requestAnimationFrame(updateGlow);
            } else {
                rafId = null;
            }
        }
    }

    // ===== Active Nav Link Highlight =====
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--blue-600)';
            }
        });
    }, { passive: true });

    // ===== Scroll Progress Bar =====
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / docHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        }, { passive: true });
    }

    // ===== Back to Top Button =====
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Stats Counter Animation =====
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (statNumbers.length) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    const duration = 2000;
                    const start = performance.now();

                    function easeOutExpo(t) {
                        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                    }

                    function animate(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = easeOutExpo(progress);
                        const current = Math.round(target * eased);
                        el.textContent = current.toLocaleString() + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }

                    requestAnimationFrame(animate);
                    statsObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statsObserver.observe(el));
    }

    // ===== Feature Card Glow Effect =====
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--glow-x', x + '%');
            card.style.setProperty('--glow-y', y + '%');
        });
    });

    // ===== Stat Card Tilt Effect =====
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-6px) perspective(600px) rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
