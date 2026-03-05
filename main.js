/**
 * PIONEER METAL - Centralized Logic
 * Handles: Internationalization (i18n), Mobile Navigation, and Shared UI state.
 */

// --- 1. Centralized Translation Data ---
const i18nData = {
    en: {
        // Navigation
        "nav-home": "Home", "nav-about": "About", "nav-products": "Products", "nav-news": "News", "nav-contact": "Contact",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "All Rights Reserved",
        "btn-copied": "COPIED!", "btn-copy-failed": "Copy failed", "form-redirecting": "REDIRECTING...",
        "feedback-name": "✔️ Hello, ", "feedback-email": "✔️ Thanks for your interest", "feedback-msg": "✔️ We will review it seriously",

        // Home Page
        "hero-tag": "Industrial Excellence Since 2006",
        "hero-title": "PRECISION",
        "hero-desc": "Global leader in manufacturing cold-rolled steel solutions for window systems and industrial infrastructure.",
        "hero-btn": "Discover Pioneer",
        "stat-years-t": "18", "stat-years-d": "Years of Excellence",
        "stat-supply-t": "ACTIVE SUPPLY", "stat-supply-d": "Factory Operations",
        "stat-scale-tag": "Scale & Precision", "stat-scale-title": "GLOBAL CAPABILITY", "stat-scale-desc": "Optimizing the threshold between high yield production, pristine finishing, and structural integrity.",
        "coop-subtitle": "Partnership & Growth", "coop-title": "Business<br><span class='text-neutral-900 dark:text-white/80'>Cooperation</span>",
        "coop-desc": "Collaborating with leading enterprises globally to provide tailored OEM solutions, superior logistics, and high-resilience sealing integration.",
        "btn-partner": "Partner With Us",
        "pillar-1-title": "Lijialong Sealing Strip", "pillar-1-desc": "Specialized manufacturer of high-resilience weather strips for advanced sealing solutions.",
        "pillar-2-title": "OEM & Custom", "pillar-2-desc": "OEM customers assist us in achieving success, improving product quality, and achieving a win-win situation.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Professional import & export services ensuring efficient global logistics and commerce.",
        "stat-worldwide-tag": "Global Impact", "stat-worldwide-title": "Worldwide<br><span class='text-neutral-900 dark:text-white/70'>Scale</span>", "stat-worldwide-desc": "Pioneer Metal's commitment to industrial excellence reaches every corner of the globe, delivering precision engineering at scale.",
        "stat-capacity-tag": "Global Capacity", "stat-tons": "Annual Tons", "stat-tons-d": "Massive global supply capacity ensures zero downtime for partner projects.",
        "stat-customers-t": "Customers", "stat-customers-d": "Pioneer Metal serves 280+ customers all over the world with uncompromising quality.",
        "stat-countries-t": "Countries", "stat-countries-d": "Travelled to 30+ countries, successfully exporting to 24+ nations globally.",
        "prod-core": "Core Profiles", "prod-square": "Square Steel", "prod-flat": "Flat Bars", "btn-all-products": "View All<br>Products",

        // About Page
        "about-tag": "About Pioneer Metal", "about-header": "Our Story",
        "about-subheader": "Forging the future of construction with unyielding strength and precision.",
        "about-intro": "Pioneer Metal Product Factory is a leading supplier of high-quality metal sections, serving a wide range of industries across the China. With years of expertise, we specialize in manufacturing reinforcement steel of uPvc window and door, offering Drywall Steel Sections and others.",
        "bg-pioneer": "PIONEER",
        "about-quote": "\"Precision is not just a standard,<br><span class='font-bold text-red-500'>it's our promise.</span>\"",
        "about-core-value": "Pioneer Metal Core Value",
        "story-t": "Manufacturing<br><span class='text-neutral-900 dark:text-white/70'>Power</span>",
        "story-d1": "Our factory is equipped with advanced automated production lines. We integrate precision engineering with rapid manufacturing to deliver cold-rolled steel solutions that define industry standards.",
        "stat-history-tag": "History", "stat-exp": "Years Experience",
        "stat-capacity-tag": "Capacity", "stat-tons-short": "Annual Tons",

        // Products Page
        "prod-tag": "Our Products", "prod-header": "Precision Solutions", "prod-intro": "High-performance cold-rolled steel profiles engineered for durability and exact specifications.",
        "p1-tag": "Galvanized Steel", "p1-name": "Steel Reinforcement", "p1-desc": "High-strength galvanized steel profiles for UPVC/Aluminum window and door systems.",
        "p2-tag": "Framing System", "p2-name": "Drywall & Ceiling", "p2-desc": "Lightweight steel framing systems for partition walls and architectural suspended ceilings.",
        "p3-tag": "Bespoke Design", "p3-name": "Custom Fabrication", "p3-desc": "Specialized hot-rolling, punching, and CNC services tailored to your specific technical drawings.",
        "btn-catalog": "DOWNLOAD E-CATALOG", "btn-coming-soon": "COMING SOON", "btn-inquiry": "INQUIRY NOW",

        // News Page
        "news-tag": "Our Updates", "news-header": "Latest Insights", "news-subheader": "Stay updated with Pioneer Metal's industrial advancements and global exhibition highlights.",
        "tag-event": "Global Event", "btn-schedule": "Schedule a Meeting", "btn-visit": "Visit Our Booth",
        "news1-date": "MAR 24-27, 2026", "news1-t": "FENSTERBAU<br>FRONTALE",
        "news1-d": "Join Pioneer Metal at FENSTERBAU FRONTALE in Nuremberg, Germany. Explore our cutting-edge steel profile solutions for modern window and facade systems.",
        "news2-date": "SEP 9-12, 2026", "news2-t": "FESQUA<br>BRAZIL 2026",
        "news2-d": "Expanding our reach in South America! Pioneer Metal will showcase high-performance cold-rolled steel technologies at FESQUA, São Paulo.",

        // Contact Page
        "contact-tag": "Get in Touch", "contact-header": "Let's connect", "contact-subheader": "Ready to discuss your next project? Reach out to our global sales team today.",
        "form-title": "Send Inquiry", "form-name": "Your Name", "form-email": "Email Address", "form-msg": "Message", "form-btn": "SEND INQUIRY",
        "contact-phone": "Phone Support", "contact-email": "Email Inquiries"
    },
    es: {
        "nav-home": "Inicio", "nav-about": "Nosotros", "nav-products": "Productos", "nav-news": "Noticias", "nav-contact": "Contacto",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "Todos los derechos reservados",
        "btn-copied": "¡COPIADO!", "btn-copy-failed": "Error al copiar", "form-redirecting": "REDIRECCIONANDO...",
        "feedback-name": "✔️ Hola, ", "feedback-email": "✔️ Gracias por su interés", "feedback-msg": "✔️ Lo revisaremos seriamente",
        "hero-tag": "Excelencia Industrial desde 2006", "hero-title": "PRECISION", "hero-desc": "Líder mundial en la fabricación de soluciones de acero laminado en frío para sistemas de ventanas e infraestructura industrial.", "hero-btn": "Descubrir Pioneer",
        "stat-years-t": "18", "stat-years-d": "Años de Excelencia",
        "stat-supply-t": "SUMINISTRO ACTIVO", "stat-supply-d": "Operaciones de Fábrica",
        "stat-scale-tag": "Escala y Precisión", "stat-scale-title": "CAPACIDAD GLOBAL", "stat-scale-desc": "Optimizando el umbral entre la producción de alto rendimiento, el acabado impecable y la integridad estructural.",
        "coop-subtitle": "Asociación y Crecimiento", "coop-title": "Cooperación<br><span class='text-neutral-900 dark:text-white/80'>Empresarial</span>", "coop-desc": "Colaborando con empresas líderes a nivel mundial para proporcionar soluciones OEM personalizadas, logística superior e integración de sellado de alta resiliencia.",
        "btn-partner": "Asóciese con nosotros",
        "pillar-1-title": "Lijialong Sealing Strip", "pillar-1-desc": "Fabricante especializado de burletes de alta resistencia para soluciones de sellado avanzadas.",
        "pillar-2-title": "OEM y Personalizado", "pillar-2-desc": "Los clientes de OEM nos ayudan a lograr el éxito, mejorar la calidad del producto y lograr una situación en la que todos ganen.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Servicios profesionales de importación y exportación que garantizan un comercio y una logística global eficientes.",
        "stat-worldwide-tag": "Impacto Global", "stat-worldwide-title": "Escala<br><span class='text-neutral-900 dark:text-white/70'>Mundial</span>", "stat-worldwide-desc": "El compromiso de Pioneer Metal con la excelencia industrial llega a todos los rincones del mundo, ofreciendo ingeniería de precisión a escala.",
        "stat-capacity-tag": "Capacidad Global", "stat-tons": "Toneladas Anuales", "stat-tons-d": "La enorme capacidad de suministro global garantiza cero tiempo de inactividad para los proyectos asociados.",
        "stat-customers-t": "Clientes", "stat-customers-d": "Pioneer Metal sirve a más de 280 clientes en todo el mundo con una calidad innegable.",
        "stat-countries-t": "Países", "stat-countries-d": "Viajó a más de 30 países, exportando con éxito a más de 24 naciones a nivel mundial.",
        "prod-core": "Perfiles Principales", "prod-square": "Acero Cuadrado", "prod-flat": "Barras Planas", "btn-all-products": "Ver Todos<br>los Productos",
        "about-tag": "Sobre Pioneer Metal", "about-header": "Nuestra Historia",
        "about-subheader": "Forjando el futuro de la construcción con una fuerza y precisión inquebrantables.",
        "about-intro": "Pioneer Metal Product Factory es un proveedor líder de secciones metálicas de alta calidad, sirviendo a una amplia gama de industrias en toda China. Con años de experiencia, nos especializamos en la fabricación de acero de refuerzo de ventanas y puertas de uPvc, ofreciendo secciones de acero para paneles de yeso y otros.",
        "bg-promise": "PROMESA",
        "about-quote": "\"La precisión no es solo un estándar,<br><span class='font-bold text-red-500'>es nuestra promesa.</span>\"",
        "about-core-value": "Valor Fundamental de Pioneer Metal",
        "story-t": "Poder de<br><span class='text-neutral-900 dark:text-white/70'>Fabricación</span>", "story-d1": "Nuestra fábrica está equipada con líneas de producción automatizadas avanzadas. Integramos la ingeniería de precisión con la fabricación rápida para ofrecer soluciones de acero laminado en frío que definen los estándares de la industria.",
        "stat-history-tag": "Historia", "stat-exp": "Años de Experiencia", "stat-capacity-tag": "Capacidad", "stat-tons-short": "Toneladas Anuales",
        "prod-tag": "Nuestros Productos", "prod-header": "Soluciones de Precisión", "prod-intro": "Perfiles de acero laminados en frío de alto rendimiento diseñados para durabilidad y especificaciones exactas.",
        "p1-tag": "Acero Galvanizado", "p1-name": "Refuerzo de Acero", "p1-desc": "Perfiles de acero galvanizado de alta resistencia para sistemas de ventanas y puertas de UPVC/Aluminio.",
        "p2-tag": "Sistema de Encuadre", "p2-name": "Drywall y Techo", "p2-desc": "Sistemas de entramado de acero ligero para tabiques y techos suspendidos arquitectónicos.",
        "p3-tag": "Diseño a Medida", "p3-name": "Fabricación Personalizada", "p3-desc": "Servicios especializados de laminación en caliente, punzonado y CNC adaptados a sus dibujos técnicos específicos.",
        "btn-catalog": "DESCARGAR CATÁLOGO E", "btn-coming-soon": "PRÓXIMAMENTE", "btn-inquiry": "CONSULTAR AHORA",
        "news-tag": "Nuestras Actualizaciones", "news-header": "Últimas Perspectivas", "news-subheader": "Manténgase actualizado con los avances industriales de Pioneer Metal y los aspectos más destacados de las exposiciones mundiales.",
        "tag-event": "Evento Global", "btn-schedule": "Programar una Reunión", "btn-visit": "Visite Nuestro Stand",
        "news1-date": "24-27 DE MARZO DE 2026", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Únase a Pioneer Metal en FENSTERBAU FRONTALE en Nuremberg, Alemania. Explore nuestras soluciones de perfiles de acero de vanguardia para sistemas modernos de ventanas y fachadas.",
        "news2-date": "9-12 DE SEPTIEMBRE DE 2026", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "¡Expandiendo nuestro alcance en América del Sur! Pioneer Metal exhibirá tecnologías de acero laminado en frío de alto rendimiento en FESQUA, São Paulo.",
        "contact-tag": "Ponerse en Contacto", "contact-header": "Conectemos", "contact-subheader": "¿Listo para discutir su próximo proyecto? Comuníquese con nuestro equipo de ventas global hoy.",
        "form-title": "Enviar Consulta", "form-name": "Tu Nombre", "form-email": "Correo Electrónico", "form-msg": "Mensaje", "form-btn": "ENVIAR CONSULTA",
        "contact-phone": "Soporte Telefónico", "contact-email": "Consultas por Correo"
    },
    pt: {
        "nav-home": "Início", "nav-about": "Sobre", "nav-products": "Produtos", "nav-news": "Notícias", "nav-contact": "Contato",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "Todos os direitos reservados",
        "btn-copied": "COPIADO!", "btn-copy-failed": "Falha ao copiar", "form-redirecting": "REDIRECIONANDO...",
        "feedback-name": "✔️ Olá, ", "feedback-email": "✔️ Obrigado pelo seu interesse", "feedback-msg": "✔️ Analisaremos seriamente",
        "hero-tag": "Excelência Industrial desde 2006", "hero-title": "PRECISION", "hero-desc": "Líder global na fabricação de soluções de aço laminado a frio para sistemas de janelas e infraestrutura industrial.", "hero-btn": "Descobrir Pioneer",
        "stat-years-t": "18", "stat-years-d": "Anos de Excelência",
        "stat-supply-t": "SUPRIMENTO ATIVO", "stat-supply-d": "Operações de Fábrica",
        "stat-scale-tag": "Escala & Precisão", "stat-scale-title": "CAPACIDADE GLOBAL", "stat-scale-desc": "Otimizando o limite entre produção de alto rendimento, acabamento impecável e integridade estrutural.",
        "coop-subtitle": "Parceria & Crescimento", "coop-title": "Cooperação<br><span class='text-neutral-900 dark:text-white/80'>Empresarial</span>", "coop-desc": "Colaborando com empresas líderes globais para fornecer soluções OEM personalizadas, logística superior e integração de vedação de alta resiliência.",
        "btn-partner": "Seja nosso parceiro",
        "pillar-1-title": "Lijialong Sealing Strip", "pillar-1-desc": "Fabricante especializado de escovas de vedação de alta resiliência para soluções avançadas.",
        "pillar-2-title": "OEM & Custom", "pillar-2-desc": "Os clientes OEM nos ajudam a alcançar o sucesso, melhorar a qualidade do produto e alcançar uma situação de ganho mútuo.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Serviços profissionais de importação e exportação garantindo logística e comércio globais eficientes.",
        "stat-worldwide-tag": "Impacto Global", "stat-worldwide-title": "Escala<br><span class='text-neutral-900 dark:text-white/70'>Mundial</span>", "stat-worldwide-desc": "O compromisso da Pioneer Metal com a excelência industrial atinge todos os cantos do globo, oferecendo engenharia de precisão em escala.",
        "stat-capacity-tag": "Capacidade Global", "stat-tons": "Toneladas Anuais", "stat-tons-d": "A enorme capacidade de suprimento global garante tempo de inatividade zero para projetos parceiros.",
        "stat-customers-t": "Clientes", "stat-customers-d": "A Pioneer Metal atende mais de 280 clientes em todo o mundo com qualidade intransigente.",
        "stat-countries-t": "Países", "stat-countries-d": "Viajou para mais de 30 países, exportando com sucesso para mais de 24 nações globalmente.",
        "prod-core": "Perfis Principais", "prod-square": "Aço Quadrado", "prod-flat": "Barras Chatas", "btn-all-products": "Ver Todos<br>os Produtos",
        "about-tag": "Sobre a Pioneer Metal", "about-header": "Nossa História",
        "about-subheader": "Forjando o futuro da construção com força e precisão inabaláveis.",
        "about-intro": "A Pioneer Metal Product Factory é uma fornecedora líder de seções metálicas de alta qualidade, atendendo a uma ampla gama de indústrias em toda a China. Com anos de experiência, somos especializados na fabricação de aço de reforço de janelas e portas de uPvc, oferecendo seções de aço para drywall e outros.",
        "bg-promise": "PROMESSA",
        "about-quote": "\"Precisão não é apenas um padrão,<br><span class='font-bold text-red-500'>é a nossa promessa.</span>\"",
        "about-core-value": "Valor Fundamental da Pioneer Metal",
        "story-t": "Poder de<br><span class='text-neutral-900 dark:text-white/70'>Fabricação</span>", "story-d1": "Nossa fábrica está equipada com linhas de produção automatizadas avançadas. Integramos engenharia de precisão com fabricação rápida para oferecer soluções de aço laminado a frio que definem os padrões da indústria.",
        "stat-history-tag": "História", "stat-exp": "Anos de Experiência", "stat-capacity-tag": "Capacidade", "stat-tons-short": "Toneladas Anuais",
        "prod-tag": "Nossos Produtos", "prod-header": "Soluções de Precisão", "prod-intro": "Perfis de aço laminados a frio de alto desempenho projetados para durabilidade e especificações exatas.",
        "p1-tag": "Aço Galvanizado", "p1-name": "Reforço de Aço", "p1-desc": "Perfis de aço galvanizado de alta resistência para sistemas de janelas e portas de UPVC/Alumínio.",
        "p2-tag": "Sistema de Estrutura", "p2-name": "Drywall & Teto", "p2-desc": "Sistemas de estrutura de aço leve para paredes de divisória e tetos suspensos arquitetônicos.",
        "p3-tag": "Design Sob Medida", "p3-name": "Fabricação Personalizada", "p3-desc": "Serviços especializados de laminação a quente, puncionamento e CNC adaptados aos seus desenhos técnicos específicos.",
        "btn-catalog": "BAIXAR E-CATÁLOGO", "btn-coming-soon": "EM BREVE", "btn-inquiry": "CONSULTE AGORA",
        "news-tag": "Nossas Atualizações", "news-header": "Últimas Notícias", "news-subheader": "Fique atualizado com os avanços industriais da Pioneer Metal e os destaques das exposições mundiais.",
        "tag-event": "Evento Global", "btn-schedule": "Agendar uma Reunião", "btn-visit": "Visite Nosso Estande",
        "news1-date": "24-27 DE MARÇO DE 2026", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Junte-se à Pioneer Metal na FENSTERBAU FRONTALE em Nuremberg, Alemanha. Explore nossas soluções de perfil de aço de ponta para sistemas modernos de janelas e fachadas.",
        "news2-date": "9-12 DE SETEMBRO DE 2026", "news2-t": "FESQUA<br>BRASIL 2026", "news2-d": "Expandindo nosso alcance na América do Sul! A Pioneer Metal apresentará tecnologias de aço laminado a frio de alto desempenho na FESQUA, São Paulo.",
        "contact-tag": "Entrar em Contato", "contact-header": "Vamos nos conectar", "contact-subheader": "Pronto para discutir seu próximo projeto? Entre em contato com nossa equipe de vendas global hoje.",
        "form-title": "Enviar Consulta", "form-name": "Seu Nome", "form-email": "Endereço de E-mail", "form-msg": "Mensagem", "form-btn": "ENVIAR CONSULTA",
        "contact-phone": "Suporte por Telefone", "contact-email": "Consultas por E-mail"
    },
    ru: {
        "nav-home": "Главная", "nav-about": "О нас", "nav-products": "Продукция", "nav-news": "Новости", "nav-contact": "Контакты",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "Все права защищены",
        "btn-copied": "СКОПИРОВАНО!", "btn-copy-failed": "Ошибка копирования", "form-redirecting": "ПЕРЕНАПРАВЛЕНИЕ...",
        "feedback-name": "✔️ Здравствуйте, ", "feedback-email": "✔️ Спасибо за ваш интерес", "feedback-msg": "✔️ Мы серьезно это рассмотрим",
        "hero-tag": "Промышленное совершенство с 2006 года", "hero-title": "PRECISION", "hero-desc": "Мировой лидер в производстве холоднокатаных стальных решений для оконных систем и промышленной инфраструктуры.", "hero-btn": "Узнать больше",
        "stat-years-t": "18", "stat-years-d": "Лет Совершенства",
        "stat-supply-t": "АКТИВНЫЕ ПОСТАВКИ", "stat-supply-d": "Заводские Операции",
        "stat-scale-tag": "Масштаб и Точность", "stat-scale-title": "ГЛОБАЛЬНЫЕ ВОЗМОЖНОСТИ", "stat-scale-desc": "Оптимизация баланса между высокой производительностью, безупречной отделкой и структурной целостностью.",
        "coop-subtitle": "Партнерство и Рост", "coop-title": "Бизнес<br><span class='text-neutral-900 dark:text-white/80'>Сотрудничество</span>", "coop-desc": "Сотрудничество с ведущими мировыми предприятиями для предоставления индивидуальных OEM-решений, превосходной логистики и высокоэластичной герметизации.",
        "btn-partner": "Партнерство с Нами",
        "pillar-1-title": "Уплотнительная лента Lijialong", "pillar-1-desc": "Специализированный производитель высокоэластичных уплотнителей для передовых решений герметизации.",
        "pillar-2-title": "OEM и Индивидуальный заказ", "pillar-2-desc": "OEM-клиенты помогают нам достигать успеха, улучшать качество продукции и добиваться беспроигрышной ситуации.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Профессиональные услуги импорта и экспорта, обеспечивающие эффективную глобальную логистику и коммерцию.",
        "stat-worldwide-tag": "Глобальное Влияние", "stat-worldwide-title": "Мировой<br><span class='text-neutral-900 dark:text-white/70'>Масштаб</span>", "stat-worldwide-desc": "Стремление Pioneer Metal к промышленному совершенству охватывает все уголки земного шара, обеспечивая высокоточное проектирование в масштабе.",
        "stat-capacity-tag": "Глобальная Мощность", "stat-tons": "Тонн в Год", "stat-tons-d": "Огромные глобальные мощности поставок гарантируют отсутствие простоев для партнерских проектов.",
        "stat-customers-t": "Клиенты", "stat-customers-d": "Pioneer Metal обслуживает более 280 клиентов по всему миру с бескомпромиссным качеством.",
        "stat-countries-t": "Страны", "stat-countries-d": "Поставки в 30+ стран, успешный экспорт в 24+ страны мира.",
        "prod-core": "Основные Профили", "prod-square": "Квадратная Сталь", "prod-flat": "Плоские Полосы", "btn-all-products": "Все<br>Товары",
        "about-tag": "О Pioneer Metal", "about-header": "Наша История",
        "about-subheader": "Создаем будущее строительства с непоколебимой силой и точностью.",
        "about-intro": "Завод Pioneer Metal является ведущим поставщиком высококачественных металлических профилей, обслуживающим широкий спектр отраслей промышленности в Китае. Обладая многолетним опытом, мы специализируемся на производстве армирующей стали для окон и дверей из ПВХ, предлагая стальные профили для гипсокартона и другое.",
        "bg-promise": "ОБЕЩАНИЕ",
        "about-quote": "\"Точность — это не просто стандарт,<br><span class='font-bold text-red-500'>это наше обещание.</span>\"",
        "about-core-value": "Основная Ценность Pioneer Metal",
        "story-t": "Мощность<br><span class='text-neutral-900 dark:text-white/70'>Производства</span>", "story-d1": "Наш завод оснащен современными автоматизированными производственными линиями. Мы интегрируем прецизионное проектирование с быстрым производством для предоставления холоднокатаных стальных решений, определяющих отраслевые стандарты.",
        "stat-history-tag": "История", "stat-exp": "Лет Опыта", "stat-capacity-tag": "Мощность", "stat-tons-short": "Тонн в Год",
        "prod-tag": "Наша Продукция", "prod-header": "Прецизионные Решения", "prod-intro": "Высокоэффективные холоднокатаные стальные профили, разработанные для долговечности и точного соблюдения спецификаций.",
        "p1-tag": "Оцинкованная Сталь", "p1-name": "Стальное Армирование", "p1-desc": "Высокопрочные оцинкованные стальные профили для оконных и дверных систем из ПВХ/Алюминия.",
        "p2-tag": "Каркасная Система", "p2-name": "Гипсокартон и Потолки", "p2-desc": "Легкие стальные каркасные системы для перегородок и архитектурных подвесных потолков.",
        "p3-tag": "Индивидуальный Дизайн", "p3-name": "Индивидуальный Заказ", "p3-desc": "Специализированные услуги горячей прокатки, перфорации и ЧПУ-обработки по вашим техническим чертежам.",
        "btn-catalog": "СКАЧАТЬ Э-КАТАЛОГ", "btn-coming-soon": "СКОРО", "btn-inquiry": "УЗНАТЬ ЦЕНУ",
        "news-tag": "Наши Обновления", "news-header": "Последние Новости", "news-subheader": "Будьте в курсе промышленных достижений Pioneer Metal и основных событий мировых выставок.",
        "tag-event": "Мировое Событие", "btn-schedule": "Назначить Встречу", "btn-visit": "Посетить Стенд",
        "news1-date": "24-27 МАРТА 2026", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Присоединяйтесь к Pioneer Metal на FENSTERBAU FRONTALE в Нюрнберге, Германия. Изучите наши передовые решения на рынке стальных профилей.",
        "news2-date": "9-12 СЕНТЯБРЯ 2026", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "Расширяем наше присутствие в Южной Америке! Pioneer Metal продемонстрирует технологии холоднокатаной стали на выставке FESQUA в Сан-Паулу.",
        "contact-tag": "Связаться с Нами", "contact-header": "Давайте Общаться", "contact-subheader": "Готовы обсудить ваш следующий проект? Свяжитесь с нашей глобальной командой продаж сегодня.",
        "form-title": "Отправить Запрос", "form-name": "Ваше Имя", "form-email": "Электронная Почта", "form-msg": "Сообщение", "form-btn": "ОТПРАВИТЬ ЗАПРОС",
        "contact-phone": "Телефонная Поддержка", "contact-email": "Запросы по Электронной Почте"
    },
    ja: {
        "nav-home": "ホーム", "nav-about": "会社概要", "nav-products": "製品", "nav-news": "ニュース", "nav-contact": "お問い合わせ",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "無断転載を禁じます",
        "btn-copied": "コピーしました！", "btn-copy-failed": "コピーに失敗しました", "form-redirecting": "リダイレクト中...",
        "feedback-name": "✔️ こんにちは、", "feedback-email": "✔️ ご関心をお寄せいただきありがとうございます", "feedback-msg": "✔️ 真剣に検討させていただきます",
        "hero-tag": "2006年創業以来の卓越した産業", "hero-title": "PRECISION", "hero-desc": "窓システムおよび産業インフラ向けの冷間圧延鋼ソリューションの製造におけるグローバルリーダー。", "hero-btn": "パイオニアを発見する",
        "stat-years-t": "18", "stat-years-d": "卓越した歳月",
        "stat-supply-t": "稼働中の供給", "stat-supply-d": "工場の運営",
        "stat-scale-tag": "スケールと精密", "stat-scale-title": "グローバルな能力", "stat-scale-desc": "高歩留まり生産、完璧な仕上げ、および構造的完全性の間のしきい値を最適化します。",
        "coop-subtitle": "パートナーシップと成長", "coop-title": "ビジネス<br><span class='text-neutral-900 dark:text-white/80'>協力</span>", "coop-desc": "世界をリードする企業と協力して、カスタマイズされたOEMソリューション、優れた物流、高反発シーリングの統合を提供します。",
        "btn-partner": "パートナーになる",
        "pillar-1-title": "Lijialong シーリングストリップ", "pillar-1-desc": "高度なシーリングソリューション向けの高品質ウェザーストリップ専門メーカー。",
        "pillar-2-title": "OEMとカスタム", "pillar-2-desc": "OEMのお客様は、私たちが成功を収め、製品の品質を向上させ、ウィンウィンの状況を実現するのを支援してくださいます。",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "専門的な輸出入サービスにより、効率的なグローバル物流と貿易を保証します。",
        "stat-worldwide-tag": "世界への影響", "stat-worldwide-title": "世界規模の<br><span class='text-neutral-900 dark:text-white/70'>スケール</span>", "stat-worldwide-desc": "産業の卓越性に対するパイオニアメタルの取り組みは、世界のあらゆる隅々に届き、大規模な精密工学を提供しています。",
        "stat-capacity-tag": "グローバル生産能力", "stat-tons": "年間生産量", "stat-tons-d": "大規模なグローバル供給能力により、パートナープロジェクトのダウンタイムをゼロにします。",
        "stat-customers-t": "顧客数", "stat-customers-d": "パイオニアメタルは、妥協のない品質で世界中の280以上の顧客にサービスを提供しています。",
        "stat-countries-t": "対象国", "stat-countries-d": "30カ国以上を訪問し、世界24カ国以上への輸出に成功しています。",
        "prod-core": "コアプロファイル", "prod-square": "角鋼", "prod-flat": "フラットバー", "btn-all-products": "全製品を<br>見る",
        "about-tag": "パイオニアメタルについて", "about-header": "私たちの物語",
        "about-subheader": "不屈の強さと精密さで建設の未来を築きます。",
        "about-intro": "Pioneer Metal Product Factoryは、高品質の金属セクションのリーディングサプライヤーであり、中国全土の幅広い産業にサービスを提供しています。多年にわたる専門知識を活かし、uPvcの窓やドアの補強鋼の製造を専門とし、ドライウォール用鋼材などを提供しています。",
        "bg-promise": "約束",
        "about-quote": "「精度は単なる基準ではなく、<br><span class='font-bold text-red-500'>私たちの約束です。</span>」",
        "about-core-value": "パイオニアメタルの核心価値",
        "story-t": "製造の<br><span class='text-neutral-900 dark:text-white/70'>力</span>", "story-d1": "当社の工場は、高度な自動生産ラインを備えています。精密工学と迅速な製造を統合し、業界標準を定義する冷間圧延鋼ソリューションを提供します。",
        "stat-history-tag": "歴史", "stat-exp": "年間の経験", "stat-capacity-tag": "生産能力", "stat-tons-short": "年間生産量",
        "prod-tag": "当社の製品", "prod-header": "精密ソリューション", "prod-intro": "耐久性と正確な仕様に合わせて設計された高性能な冷間圧延鋼プロファイル。",
        "p1-tag": "亜鉛メッキ鋼", "p1-name": "鋼製補強材", "p1-desc": "UPVC/アルミニウム窓およびドアシステム用の高強度亜鉛メッキ鋼プロファイル。",
        "p2-tag": "フレーミングシステム", "p2-name": "ドライウォールと天井", "p2-desc": "間仕切り壁および建築用吊り天井用の軽量鉄骨フレーミングシステム。",
        "p3-tag": "オーダーメイド設計", "p3-name": "カスタム製造", "p3-desc": "お客様の特定の技術図面に合わせた特別な熱延加工、パンチング、CNCサービス。",
        "btn-catalog": "Eカタログをダウンロード", "btn-coming-soon": "近日公開", "btn-inquiry": "今すぐお問い合わせ",
        "news-tag": "最新情報", "news-header": "最新の洞察", "news-subheader": "パイオニアメタルの産業進歩とグローバルな展示会のハイライトについて最新情報を入手してください。",
        "tag-event": "グローバルイベント", "btn-schedule": "会議を予約する", "btn-visit": "ブースを訪問する",
        "news1-date": "2026年3月24-27日", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "ドイツのニュルンベルクで開催されるFENSTERBAU FRONTALEでパイオニアメタルにご参加ください。最新の窓およびファサードシステム向けの最先端のスチールプロファイルソリューションをご覧ください。",
        "news2-date": "2026年9月9-12日", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "南米での拠点を拡大中！パイオニアメタルは、サンパウロのFESQUAで高性能冷間圧延鋼技術を披露します。",
        "contact-tag": "お問い合わせ", "contact-header": "繋がりましょう", "contact-subheader": "次のプロジェクトについて話し合う準備はできていますか？今すぐ当社のグローバルセールスチームにお問い合わせください。",
        "form-title": "お問い合わせを送信", "form-name": "お名前", "form-email": "メールアドレス", "form-msg": "メッセージ", "form-btn": "お問い合わせを送信",
        "contact-phone": "電話サポート", "contact-email": "メールでのお問い合わせ"
    },
    ko: {
        "nav-home": "홈", "nav-about": "소개", "nav-products": "제품", "nav-news": "뉴스", "nav-contact": "문의",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "모든 권리 보유",
        "btn-copied": "복사되었습니다!", "btn-copy-failed": "복사 실패", "form-redirecting": "리다이렉트 중...",
        "feedback-name": "✔️ 안녕하세요, ", "feedback-email": "✔️ 관심을 가져주셔서 감사합니다", "feedback-msg": "✔️ 진지하게 검토하겠습니다",
        "hero-tag": "2006년부터 시작된 산업적 탁월함", "hero-title": "PRECISION", "hero-desc": "창호 시스템 및 산업 인프라를 위한 냉간 압연 강철 솔루션 제조 분야의 글로벌 리더.", "hero-btn": "파이오니아 알아보기",
        "stat-years-t": "18", "stat-years-d": "탁월함의 시간",
        "stat-supply-t": "활발한 공급", "stat-supply-d": "공장 운영",
        "stat-scale-tag": "규모와 정밀도", "stat-scale-title": "글로벌 역량", "stat-scale-desc": "높은 수율 생산, 완벽한 마감 및 구조적 무결성 사이의 임계값을 최적화합니다.",
        "coop-subtitle": "파트너십과 성장", "coop-title": "비즈니스<br><span class='text-neutral-900 dark:text-white/80'>협력</span>", "coop-desc": "글로벌 선도 기업들과 협력하여 맞춤형 OEM 솔루션, 우수한 물류 및 고탄성 실링 통합을 제공합니다.",
        "btn-partner": "우리와 파트너가 되세요",
        "pillar-1-title": "Lijialong 실링 스트립", "pillar-1-desc": "고급 실링 솔루션을 위한 고탄성 웨더스트립 전문 제조업체.",
        "pillar-2-title": "OEM 및 맞춤 제작", "pillar-2-desc": "OEM 고객은 우리가 성공을 거두고 제품 품질을 개선하며 윈윈 상황을 달성할 수 있도록 지원합니다.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "효율적인 글로벌 물류 및 무역을 보장하는 전문 수출입 서비스.",
        "stat-worldwide-tag": "글로벌 영향력", "stat-worldwide-title": "세계적인<br><span class='text-neutral-900 dark:text-white/70'>규모</span>", "stat-worldwide-desc": "산업적 탁월함에 대한 파이오니아 메탈의 약속은 전 세계 곳곳에 닿아 대규모 정밀 공학을 제공합니다.",
        "stat-capacity-tag": "글로벌 생산 능력", "stat-tons": "연간 생산량", "stat-tons-d": "방대한 글로벌 공급 능력으로 파트너 프로젝트의 가동 중지 시간을 제로화합니다.",
        "stat-customers-t": "고객 수", "stat-customers-d": "파이오니아 메탈은 타협하지 않는 품질로 전 세계 280개 이상의 고객사에게 서비스를 제공합니다.",
        "stat-countries-t": "대상 국가", "stat-countries-d": "30개국 이상을 방문하고 전 세계 24개국 이상으로 성공적으로 수출하고 있습니다.",
        "prod-core": "핵심 프로파일", "prod-square": "각강", "prod-flat": "평철", "btn-all-products": "모든 제품<br>보기",
        "about-tag": "파이오니아 메탈 소개", "about-header": "우리의 이야기",
        "about-subheader": "불굴의 강인함과 정밀함으로 건설의 미래를 형성합니다.",
        "about-intro": "Pioneer Metal Product Factory는 고품질 금속 섹션의 선도적인 공급업체로, 중국 전역의 다양한 산업 분야에 서비스를 제공하고 있습니다. 수년간의 전문 지식을 바탕으로 uPvc 창호 및 도어용 보강강 제조를 전문으로 하며, 드라이월용 강재 등을 제공합니다.",
        "bg-promise": "약속",
        "about-quote": "「정밀함은 단순한 기준이 아니라<br><span class='font-bold text-red-500'>우리의 약속입니다.</span>」",
        "about-core-value": "파이오니아 메탈 핵심 가치",
        "story-t": "제조의<br><span class='text-neutral-900 dark:text-white/70'>힘</span>", "story-d1": "당사 공장은 첨단 자동화 생산 라인을 갖추고 있습니다. 정밀 공학과 신속한 제조를 통합하여 업계 표준을 정의하는 냉간 압연 강철 솔루션을 제공합니다.",
        "stat-history-tag": "역사", "stat-exp": "수년간의 경험", "stat-capacity-tag": "생산 능력", "stat-tons-short": "연간 생산량",
        "prod-tag": "우리의 제품", "prod-header": "정밀 솔루션", "prod-intro": "내구성과 정확한 사양을 위해 설계된 고성능 냉간 압연 강철 프로파일.",
        "p1-tag": "아연 도금 강판", "p1-name": "냉연 보강재", "p1-desc": "UPVC/알루미늄 창호 및 도어 시스템용 고강도 아연 도금 강철 프로파일.",
        "p2-tag": "프레이밍 시스템", "p2-name": "드라이월 및 천장", "p2-desc": "파티션 벽 및 건축용 매립형 천장용 경량 철골 프레이밍 시스템.",
        "p3-tag": "맞춤형 디자인", "p3-name": "주문 제작", "p3-desc": "귀하의 특정 기술 도면에 맞춘 특수 압연, 펀칭 및 CNC 서비스.",
        "btn-catalog": "E-카탈로그 다운로드", "btn-coming-soon": "출시 예정", "btn-inquiry": "지금 문의하기",
        "news-tag": "새 소식", "news-header": "최신 인사이트", "news-subheader": "파이오니아 메탈의 산업적 발전과 글로벌 전시회 하이라이트에 대한 최신 정보를 확인하세요.",
        "tag-event": "글로벌 이벤트", "btn-schedule": "미팅 예약하기", "btn-visit": "부스 방문하기",
        "news1-date": "2026년 3월 24-27일", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "독일 뉘른베르크에서 열리는 FENSTERBAU FRONTALE에서 파이오니아 메탈과 함께하세요. 현대적인 창호 및 파사드 시스템을 위한 최첨단 스틸 프로파일 솔루션을 만나보세요.",
        "news2-date": "2026년 9월 9-12일", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "남미로의 영향력 확대! 파이오니아 메탈은 상파울루 FESQUA에서 고성능 냉간 압연 강철 기술을 선보일 예정입니다.",
        "contact-tag": "문의하기", "contact-header": "연결합시다", "contact-subheader": "다음 프로젝트에 대해 논의할 준비가 되셨나요? 지금 바로 글로벌 영업 팀에 연락하세요.",
        "form-title": "문의 보내기", "form-name": "이름", "form-email": "이메일 주소", "form-msg": "메시지", "form-btn": "문의 보내기",
        "contact-phone": "전화 지원", "contact-email": "이메일 문의"
    },
    ar: {
        "nav-home": "الرئيسية", "nav-about": "من نحن", "nav-products": "المنتجات", "nav-news": "الأخبار", "nav-contact": "اتصل بنا",
        "footer-company": "&copy; 2025 مصنع بايونير للمنتجات المعدنية.",
        "footer-rights": "جميع الحقوق محفوظة",
        "btn-copied": "تم النسخ!", "btn-copy-failed": "فشل النسخ", "form-redirecting": "جاري التحويل...",
        "feedback-name": "✔️ مرحبًا، ", "feedback-email": "✔️ شكرًا لاهتمامك", "feedback-msg": "✔️ سنقوم بمراجعتها بجدية",
        "hero-tag": "التميز الصناعي منذ 2006", "hero-title": "PRECISION", "hero-desc": "الرائد العالمي في تصنيع حلول الصلب المدرفل على البارد لأنظمة النوافذ والبنية التحتية الصناعية.", "hero-btn": "اكتشف بايونير",
        "stat-years-t": "18", "stat-years-d": "عاماً من التميز",
        "stat-supply-t": "توريد نشط", "stat-supply-d": "عمليات المصنع",
        "stat-scale-tag": "المقياس والدقة", "stat-scale-title": "قدرة عالمية", "stat-scale-desc": "تحسين العتبة بين الإنتاج عالي الإنتاجية، والتشطيب الدقيق، والنزاهة الهيكلية.",
        "coop-subtitle": "الشراكة والنمو", "coop-title": "التعاون<br><span class='text-neutral-900 dark:text-white/80'>التجاري</span>", "coop-desc": "التعاون مع الشركات الرائدة عالمياً لتقديم حلول OEM مخصصة، ولوجستيات متفوقة، وتكامل عزل عالي المرونة.",
        "btn-partner": "كن شريكاً لنا",
        "pillar-1-title": "Lijialong شريط إحكام", "pillar-1-desc": "مصنع متخصص لشرائط منع التسرب عالية المرونة للحلول المتقدمة.",
        "pillar-2-title": "OEM والتخصيص", "pillar-2-desc": "يساعدنا عملاء OEM على تحقيق النجاح وتحسين جودة المنتج وتحقيق وضع مربح للجانبين.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "خدمات استيراد وتصدير احترافية تضمن اللوجستيات العالمية والتجارة الفعالة.",
        "stat-worldwide-tag": "تأثير عالمي", "stat-worldwide-title": "على نطاق<br><span class='text-neutral-900 dark:text-white/70'>عالمي</span>", "stat-worldwide-desc": "يصل التزام بايونير ميتال بالتميز الصناعي إلى كل ركن من أركان العالم، مقدماً هندسة دقيقة على نطاق واسع.",
        "stat-capacity-tag": "سعة عالمية", "stat-tons": "طن سنوياً", "stat-tons-d": "تضمن قدرة التوريد العالمية الهائلة عدم وجود فترات توقف للمشاريع الشريكة.",
        "stat-customers-t": "العملاء", "stat-customers-d": "بايونير ميتال تخدم أكثر من 280 عميلًا حول العالم بجودة لا تساوم.",
        "stat-countries-t": "الدول", "stat-countries-d": "سافرت إلى أكثر من 30 دولة، وصدرت بنجاح إلى أكثر من 24 دولة عالمياً.",
        "prod-core": "المقاطع الأساسية", "prod-square": "الفولاذ المربع", "prod-flat": "القضبان المسطحة", "btn-all-products": "عرض جميع<br>المنتجات",
        "about-tag": "حول بايونير ميتال", "about-header": "قصتنا",
        "about-subheader": "نصيغ مستقبل البناء بقوة ودقة لا تتزعزع.",
        "about-intro": "مصنع بايونير ميتال هو مورد رائد للمقاطع المعدنية عالية الجودة، يخدم مجموعة واسعة من الصناعات في جميع أنحاء الصين. بفضل سنوات من الخبرة، نحن متخصصون في تصنيع الفولاذ المقوى لنوافذ وأبواب uPvc، ونقدم مقاطع فولاذية للجدران الجافة وغيرها.",
        "bg-promise": "وعدنا",
        "about-quote": "\"الدقة ليست مجرد معيار،<br><span class='font-bold text-red-500'>بل هي وعدنا.</span>\"",
        "about-core-value": "القيمة الجوهرية لبايونير ميتال",
        "story-t": "قوة<br><span class='text-neutral-900 dark:text-white/70'>التصنيع</span>", "story-d1": "مصنعنا مجهز بخطوط إنتاج آلية متقدمة. نحن ندمج الهندسة الدقيقة مع التصنيع السريع لتقديم حلول الصلب المدرفل على البارد التي تحدد معايير الصناعة.",
        "stat-history-tag": "التاريخ", "stat-exp": "سنوات الخبرة", "stat-capacity-tag": "السعة", "stat-tons-short": "طن سنوياً",
        "prod-tag": "منتجاتنا", "prod-header": "حلول دقيقة", "prod-intro": "مقاطع فولاذية مدرفلة على البارد عالية الأداء مصممة للمتانة والمواصفات الدقيقة.",
        "p1-tag": "فولاذ مجلفن", "p1-name": "تدعيم الصلب", "p1-desc": "مقاطع فولاذية مجلفنة عالية القوة لأنظمة نوافذ وأبواب UPVC/الألومنيوم.",
        "p2-tag": "نظام التأطير", "p2-name": "الجدران الجافة والأسقف", "p2-desc": "أنظمة تأطير فولاذية خفيفة الوزن للجدران الفاصلة والأسقف المعلقة المعمارية.",
        "p3-tag": "تصميم مخصص", "p3-name": "التصنيع المخصص", "p3-desc": "خدمات الدرفلة والتثقيب وCNC المتخصصة المصممة خصيصاً لرسوماتك الفنية.",
        "btn-catalog": "تحميل الكتالوج الإلكتروني", "btn-coming-soon": "قريباً", "btn-inquiry": "استفسر الآن",
        "news-tag": "تحديثاتنا", "news-header": "أحدث الرؤى", "news-subheader": "ابق على اطلاع بالتطورات الصناعية لشركة بايونير ميتال وأبرز المعارض العالمية.",
        "tag-event": "حدث عالمي", "btn-schedule": "جدولة اجتماع", "btn-visit": "زيارة جناحنا",
        "news1-date": "24-27 مارس 2026", "news1-t": "معرض فينسترباو<br>فرونتالي", "news1-d": "انضم إلى بايونير ميتال في معرض فينسترباو فرونتالي في نورمبرغ، ألمانيا. استكشف حلولنا المتطورة لقطاعات الصلب لأنظمة النوافذ والواجهات الحديثة.",
        "news2-date": "9-12 سبتمبر 2026", "news2-t": "معرض فيسكوا<br>البرازيل 2026", "news2-d": "نوسع انتشارنا في أمريكا الجنوبية! ستعرض بايونير ميتال تقنيات الصلب المدرفل على البارد عالية الأداء في معرض فيسكوا، ساوباولو.",
        "contact-tag": "تواصل معنا", "contact-header": "دعونا نتواصل", "contact-subheader": "هل أنت مستعد لمناقشة مشروعك القادم؟ تواصل مع فريق المبيعات العالمي لدينا اليوم.",
        "form-title": "إرسال استفسار", "form-name": "اسمك", "form-email": "البريد الإلكتروني", "form-msg": "الرسالة", "form-btn": "إرسال استفسار",
        "contact-phone": "الدعم الهاتفي", "contact-email": "الاستفسارات عبر البريد"
    },
    fr: {
        "nav-home": "Accueil", "nav-about": "À Propos", "nav-products": "Produits", "nav-news": "Actualités", "nav-contact": "Contact",
        "footer-company": "&copy; 2025 USINE DE PRODUITS MÉTALLIQUES PIONEER.",
        "footer-rights": "Tous droits réservés",
        "btn-copied": "COPIÉ !", "btn-copy-failed": "Échec de la copie", "form-redirecting": "REDIRECTION...",
        "feedback-name": "✔️ Bonjour, ", "feedback-email": "✔️ Merci pour votre intérêt", "feedback-msg": "✔️ Nous l'examinerons sérieusement",
        "hero-tag": "Excellence Industrielle depuis 2006", "hero-title": "PRECISION", "hero-desc": "Leader mondial dans la fabrication de solutions en acier laminé à froid pour systèmes de fenêtres et infrastructures industrielles.", "hero-btn": "Découvrir Pioneer",
        "stat-years-t": "18", "stat-years-d": "Années d'Excellence",
        "stat-supply-t": "APPROVISIONNEMENT ACTIF", "stat-supply-d": "Opérations d'Usine",
        "stat-scale-tag": "Échelle & Précision", "stat-scale-title": "CAPACITÉ GLOBALE", "stat-scale-desc": "Optimisation du seuil entre haute productivité, finition impeccable et intégrité structurelle.",
        "coop-subtitle": "Partenariat & Croissance", "coop-title": "Coopération<br><span class='text-neutral-900 dark:text-white/80'>Commerciale</span>", "coop-desc": "Collaboration avec des entreprises leaders mondiales pour fournir des solutions OEM sur mesure, une logistique supérieure et l'intégration de joints haute résilience.",
        "btn-partner": "Devenir Partenaire",
        "pillar-1-title": "Joint d'Étanchéité Lijialong", "pillar-1-desc": "Fabricant spécialisé de joints d'étanchéité haute résilience pour des solutions avancées.",
        "pillar-2-title": "OEM & Sur Mesure", "pillar-2-desc": "Les clients OEM nous aident à réussir, à améliorer la qualité des produits et à atteindre une situation gagnant-gagnant.",
        "pillar-3-title": "Commerce Melan", "pillar-3-desc": "Services professionnels d'import-export assurant une logistique et un commerce mondiaux efficaces.",
        "stat-worldwide-tag": "Impact Global", "stat-worldwide-title": "Échelle<br><span class='text-neutral-900 dark:text-white/70'>Mondiale</span>", "stat-worldwide-desc": "L'engagement de Pioneer Metal envers l'excellence industrielle s'étend à tous les coins du globe, offrant une ingénierie de précision à grande échelle.",
        "stat-capacity-tag": "Capacité Globale", "stat-tons": "Tonnes Annuelles", "stat-tons-d": "Une capacité d'approvisionnement mondiale massive garantit l'absence de temps d'arrêt pour les projets partenaires.",
        "stat-customers-t": "Clients", "stat-customers-d": "Pioneer Metal sert plus de 280 clients à travers le monde avec une qualité sans compromis.",
        "stat-countries-t": "Pays", "stat-countries-d": "Présence dans plus de 30 pays, exportations réussies vers plus de 24 nations dans le monde.",
        "prod-core": "Profilés de base", "prod-square": "Acier Carré", "prod-flat": "Barres Plates", "btn-all-products": "Voir Tous les<br>Produits",
        "about-tag": "À Propos de Pioneer Metal", "about-header": "Notre Histoire",
        "about-subheader": "Forger l'avenir de la construction with une force et une précision inébranlables.",
        "about-intro": "L'usine de produits métalliques Pioneer est un fournisseur de premier plan de profilés métalliques de haute qualité, desservant un large éventail d'industries à travers la Chine. Avec des années d'expertise, nous nous spécialisons dans la fabrication d'acier de renfort pour fenêtres et portes en PVC, offrant des profilés en acier pour cloisons sèches et autres.",
        "bg-promise": "PROMESSE",
        "about-quote": "\"La précision n'est pas juste une norme,<br><span class='font-bold text-red-500'>c'est notre promesse.</span>\"",
        "about-core-value": "Valeur Fondamentale de Pioneer Metal",
        "story-t": "Puissance de<br><span class='text-neutral-900 dark:text-white/70'>Fabrication</span>", "story-d1": "Notre usine est équipée de lignes de production automatisées avancées. Nous intégrons l'ingénierie de précision à la fabrication rapide pour fournir des solutions en acier laminé à froid qui définissent les standards de l'industrie.",
        "stat-history-tag": "Histoire", "stat-exp": "Ans d'Expérience", "stat-capacity-tag": "Capacité", "stat-tons-short": "Tonnes Annuelles",
        "prod-tag": "Nos Produits", "prod-header": "Solutions de Précision", "prod-intro": "Profilés en acier laminés à froid haute performance conçus pour la durabilité et des spécifications exactes.",
        "p1-tag": "Acier Galvanisé", "p1-name": "Renfort en Acier", "p1-desc": "Profilés en acier galvanisé haute résistance pour systèmes de fenêtres et portes en UPVC/Aluminium.",
        "p2-tag": "Système de Structure", "p2-name": "Cloison & Plafond", "p2-desc": "Systèmes de cadres en acier léger pour cloisons et plafonds suspendus architecturaux.",
        "p3-tag": "Design Sur Mesure", "p3-name": "Fabrication Personnalisée", "p3-desc": "Services spécialisés de laminage à chaud, poinçonnage et CNC adaptés à vos dessins techniques spécifiques.",
        "btn-catalog": "TÉLÉCHARGER E-CATALOGUE", "btn-coming-soon": "BIENTÔT", "btn-inquiry": "CONTACTER MAINTENANT",
        "news-tag": "Nos Mises à Jour", "news-header": "Dernières Perspectives", "news-subheader": "Restez informé des avancées industrielles de Pioneer Metal et des événements phares des expositions mondiales.",
        "tag-event": "Événement Mondial", "btn-schedule": "Planifier une Réunion", "btn-visit": "Visiter notre Stand",
        "news1-date": "24-27 MARS 2026", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Rejoignez Pioneer Metal à FENSTERBAU FRONTALE à Nuremberg, Allemagne. Découvrez nos solutions de profilés en acier de pointe pour systèmes de fenêtres et façades modernes.",
        "news2-date": "9-12 SEPTEMBRE 2026", "news2-t": "FESQUA<br>BRÉSIL 2026", "news2-d": "Expansion de notre présence en Amérique du Sud ! Pioneer Metal présentera des technologies d'acier laminé à froid haute performance à FESQUA, São Paulo.",
        "contact-tag": "Nous Contacter", "contact-header": "Connectons-nous", "contact-subheader": "Prêt à discuter de votre prochain projet ? Contactez notre équipe commerciale mondiale aujourd'hui.",
        "form-title": "Envoyer une Demande", "form-name": "Votre Nom", "form-email": "Adresse E-mail", "form-msg": "Message", "form-btn": "ENVOYER DEMANDE",
        "contact-phone": "Support Téléphonique", "contact-email": "Demandes par E-mail"
    },
    sq: {
        "nav-home": "Ballina", "nav-about": "Rreth", "nav-products": "Produktet", "nav-news": "Lajme", "nav-contact": "Kontakt",
        "footer-company": "&copy; 2025 FABRIKA E PRODUKTEVE METALTIKE PIONEER.",
        "footer-rights": "Të gjitha të drejtat e rezervuara",
        "btn-copied": "U KOPJUA!", "btn-copy-failed": "Kopjimi dështoi", "form-redirecting": "DUKE RIDREJTUAR...",
        "feedback-name": "✔️ Përshëndetje, ", "feedback-email": "✔️ Faleminderit për interesimin tuaj", "feedback-msg": "✔️ Ne do ta shqyrtojmë atë me seriozitet",
        "hero-tag": "Përsosmëri Industriale që nga viti 2006", "hero-title": "PRECISION", "hero-desc": "Lider global në prodhimin e zgjidhjeve të çelikut të mbështjellë në të ftohtë për sisteme dritaresh dhe infrastrukturë industriale.", "hero-btn": "Zbuloni Pioneer",
        "stat-years-t": "18", "stat-years-d": "Vite Përsosmërie",
        "stat-supply-t": "FURNIZIM AKTIV", "stat-supply-d": "Operacionet e Fabrikës",
        "stat-scale-tag": "Shkalla & Precizioni", "stat-scale-title": "KAPACITET GLOBAL", "stat-scale-desc": "Optimizimi i kufirit midis prodhimit me rendiment të lartë, përfundimit të përsosur dhe integritetit strukturor.",
        "coop-subtitle": "Partneriteti & Rritja", "coop-title": "Bashkëpunim<br><span class='text-neutral-900 dark:text-white/80'>Biznesi</span>", "coop-desc": "Bashkëpunimi me ndërmarrjet kryesore globalisht për të ofruar zgjidhje OEM të personalizuara, logjistikë superiore dhe integrim të izolimit me rezistencë të lartë.",
        "btn-partner": "Partneritet me Ne",
        "pillar-1-title": "Shirit Izolues Lijialong", "pillar-1-desc": "Prodhues i specializuar i shiritave kundër motit me rezistencë të lartë për zgjidhje të avancuara izolimi.",
        "pillar-2-title": "OEM & Me Porosi", "pillar-2-desc": "Klientët OEM na ndihmojnë të arrijmë sukses, të përmirësojmë cilësinë e produktit dhe të arrijmë një situatë të favorshme për të dyja palët.",
        "pillar-3-title": "Tregtia Melan", "pillar-3-desc": "Shërbime profesionale importi dhe eksporti që sigurojnë logjistikë dhe tregti globale efikase.",
        "stat-worldwide-tag": "Ndikimi Global", "stat-worldwide-title": "Në Shkallë<br><span class='text-neutral-900 dark:text-white/70'>Botërore</span>", "stat-worldwide-desc": "Angazhimi i Pioneer Metal për përsosmëri industriale arrin në çdo cep të globit, duke ofruar inxhinieri precize në shkallë të gjerë.",
        "stat-capacity-tag": "Kapacitet Global", "stat-tons": "Ton në Vit", "stat-tons-d": "Kapaciteti masiv global i furnizimit siguron zero kohë joproduktive për projektet partnere.",
        "stat-customers-t": "Klientët", "stat-customers-d": "Pioneer Metal u shërben mbi 280 klientëve në mbarë botën me cilësi të pakompromis.",
        "stat-countries-t": "Shtetet", "stat-countries-d": "Udhëtuar në mbi 30 shtete, duke eksportuar me sukses në mbi 24 kombe globalisht.",
        "prod-core": "Profilet kryesore", "prod-square": "Çelik katror", "prod-flat": "Shufra të rrafshëta", "btn-all-products": "Shiko të gjitha<br>Produktet",
        "about-tag": "Rreth Pioneer Metal", "about-header": "Historia Jonë",
        "about-subheader": "Formësimi i së ardhmes së ndërtimit me forcë dhe precizion të palodhur.",
        "about-intro": "Fabrika e Produkteve Metalike Pioneer është një furnizues kryesor i seksioneve metalike me cilësi të lartë, duke u shërbyer një game të gjerë industrish në të gjithë Kinën. Me vite ekspertizë, ne jemi të specializuar në prodhimin e çelikut përforcues të dritareve dhe dyerve të uPvc, duke ofruar seksione çeliku për mure të thatë dhe të tjerë.",
        "bg-promise": "PREMTIMI",
        "about-quote": "\"Precizioni nuk është thjesht një standard,<br><span class='font-bold text-red-500'>është premtimi ynë.</span>\"",
        "about-core-value": "Vlera Kryesore e Pioneer Metal",
        "story-t": "Fuqia e<br><span class='text-neutral-900 dark:text-white/70'>Prodhimit</span>", "story-d1": "Fabrika jonë është e pajisur me linja të avancuara të prodhimit të automatizuar. Ne integrojmë inxhinierinë precize me prodhimin e shpejtë për të ofruar zgjidhje të çelikut të mbështjellë në të ftohtë që përcaktojnë standardet e industrisë.",
        "stat-history-tag": "Historia", "stat-exp": "Vite Përvojë", "stat-capacity-tag": "Kapaciteti", "stat-tons-short": "Ton në Vit",
        "prod-tag": "Produktet tona", "prod-header": "Zgjidhje Precize", "prod-intro": "Profile çeliku të mbështjellë në të ftohtë me performancë të lartë, të projektuara për qëndrueshmëri dhe specifika të sakta.",
        "p1-tag": "Çelik i Galvanizuar", "p1-name": "Përforcim Çeliku", "p1-desc": "Profile çeliku të galvanizuar me forcë të lartë për sisteme dritaresh dhe dyersh UPVC/Alumini.",
        "p2-tag": "Sistemi i Kornizës", "p2-name": "Mur i Thatë & Tavan", "p2-desc": "Sisteme kornizash çeliku të lehta për mure ndarëse dhe tavane të varura arkitektonike.",
        "p3-tag": "Dizajn i Personalizuar", "p3-name": "Prodhim me Porosi", "p3-desc": "Shërbime të specializuara të mbështjelljes së nxehtë, shpimit dhe CNC sipas vizatimeve tuaja teknike specifike.",
        "btn-catalog": "SHKARKO E-KATALOGUN", "btn-coming-soon": "SË SHPEJTI", "btn-inquiry": "KËRKO TANI",
        "news-tag": "Përditësimet tona", "news-header": "Njohuritë e Fundit", "news-subheader": "Qëndroni të përditësuar me përparimet industriale të Pioneer Metal dhe pikat kryesore të ekspozitave globale.",
        "tag-event": "Ngjarje Globale", "btn-schedule": "Lini një Takim", "btn-visit": "Vizitoni Stendën tonë",
        "news1-date": "24-27 MARS 2026", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Bashkohuni me Pioneer Metal në FENSTERBAU FRONTALE në Nuremberg, Gjermani. Eksploroni zgjidhjet tona të fundit të profileve të çelikut për sistemet moderne të dritareve dhe fasadave.",
        "news2-date": "9-12 SHTATOR 2026", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "Po zgjerojmë shtrirjen tonë në Amerikën e Jugut! Pioneer Metal do të shfaqë teknologjitë e çelikut të mbështjellë në të ftohtë me performancë të lartë në FESQUA, São Paulo.",
        "contact-tag": "Kontaktoni", "contact-header": "Le të lidhemi", "contact-subheader": "Gati për të diskutuar projektin tuaj të ardhshëm? Kontaktoni ekipin tonë global të shitjeve sot.",
        "form-title": "Dërgo Kërkesë", "form-name": "Emri Juaj", "form-email": "Adresa Email", "form-msg": "Mesazhi", "form-btn": "DËRGO KËRKESË",
        "contact-phone": "Mbështetje Telefonike", "contact-email": "Kërkesat me Email"
    },
    sr: {
        "nav-home": "Početna", "nav-about": "O nama", "nav-products": "Proizvodi", "nav-news": "Vesti", "nav-contact": "Kontakt",
        "footer-company": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY.",
        "footer-rights": "Sva prava zadržana",
        "hero-tag": "Industrijska izvrsnost od 2006. godine", "hero-title": "PRECISION", "hero-desc": "Globalni lider u proizvodnji hladno valjanih čeličnih rešenja za sisteme prozora i industrijsku infrastrukturu.", "hero-btn": "Otkrijte Pioneer",
        "stat-years-t": "18", "stat-years-d": "Godina izvrsnosti",
        "stat-supply-t": "AKTIVNO SNABDEVANJE", "stat-supply-d": "Fabričke operacije",
        "stat-scale-tag": "Razmera i preciznost", "stat-scale-title": "GLOBALNA SPOSOBNOST", "stat-scale-desc": "Optimizovanje praga između visoke proizvodnje, besprekorne završne obrade и strukturnog integriteta.",
        "coop-subtitle": "Partnerstvo i rast", "coop-title": "Poslovna<br><span class='text-neutral-900 dark:text-white/80'>saradnja</span>", "coop-desc": "Saradnja sa vodećim svetskim preduzećima radi pružanja prilagođenih OEM rešenja, vrhunske logistike i integracije zaptivki visoke otpornosti.",
        "btn-partner": "Partnerujte sa nama",
        "pillar-1-title": "Lijialong zaptivna traka", "pillar-1-desc": "Specijalizovani proizvođač visoko elastičnih zaptivnih traka za napredna rešenja zaptivanja.",
        "pillar-2-title": "OEM i prilagođeno", "pillar-2-desc": "OEM kupci nam pomažu da postignemo uspeh, poboljšamo kvalitet proizvoda i ostvarimo situaciju u kojoj svi dobijaju.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Profesionalne usluge uvoza i izvoza koje obezbeđuju efikasnu globalnu logistiku i trgovinu.",
        "stat-worldwide-tag": "Globalni uticaj", "stat-worldwide-title": "Širom<br><span class='text-neutral-900 dark:text-white/70'>sveta</span>", "stat-worldwide-desc": "Posvećenost kompanije Pioneer Metal industrijskoj izvrsnosti seže u svaki kutak sveta, pružajući precizno inženjerstvo u velikom obimu.",
        "stat-capacity-tag": "Globalni kapacitet", "stat-tons": "Tona godišnje", "stat-tons-d": "Ogroman globalni kapacitet snabdevanja osigurava nula zastoja za partnerske projekte.",
        "stat-customers-t": "Kupci", "stat-customers-d": "Pioneer Metal opslužuje preko 280 kupaca širom sveta sa beskompromisnim kvalitetom.",
        "stat-countries-t": "Države", "stat-countries-d": "Putovali u preko 30 zemalja, uspešno izvozimo u preko 24 nacije širom sveta.",
        "prod-core": "Glavni profili", "prod-square": "Kvadratni čelik", "prod-flat": "Pljosnate šipke", "btn-all-products": "Pogledaj sve<br>proizvode",
        "about-tag": "O kompaniji Pioneer Metal", "about-header": "Naša priča",
        "about-subheader": "Kovanje budućnosti gradnje uz nepokolebljivu snagu i preciznost.",
        "about-intro": "Fabrika metalnih proizvoda Pioneer je vodeći dobavljač visokokvalitetnih metalnih profila, koji opslužuje širok spektar industrija širom Kine. Sa dugogodišnjim iskustvom, specijalizovani smo za proizvodnju čelika za ojačanje uPvc prozora i vrata, nudeći čelične profile za suvu gradnju i još mnogo toga.",
        "bg-promise": "OBEĆANJE",
        "about-quote": "\"Preciznost nije samo standard,<br><span class='font-bold text-red-500'>to je naše obećanje.</span>\"",
        "about-core-value": "Osnovna vrednost kompanije Pioneer Metal",
        "story-t": "Snaga<br><span class='text-neutral-900 dark:text-white/70'>proizvodnje</span>", "story-d1": "Naša fabrika je opremljena naprednim automatizovanim proizvodnim linijama. Integrišemo precizno inženjerstvo sa brzom proizvodnjom kako bismo pružili hladno valjana čelična rešenja koja definišu industrijske standarde.",
        "stat-history-tag": "Istorija", "stat-exp": "Godina iskustva", "stat-capacity-tag": "Kapacitet", "stat-tons-short": "Tona godišnje",
        "prod-tag": "Naši proizvodi", "prod-header": "Precizna rešenja", "prod-intro": "Visoko efikasni hladno valjani čelični profili dizajnirani za izdržljivost i tačne specifikacije.",
        "p1-tag": "Pocinkovani čelik", "p1-name": "Čelično ojačanje", "p1-desc": "Visokočvrsti pocinkovani čelični profili za UPVC/aluminijumske sisteme prozora i vrata.",
        "p2-tag": "Sistem konstrukcije", "p2-name": "Suva gradnja i plafon", "p2-desc": "Laki čelični sistemi konstrukcije za pregradne zidove i arhitektonske spuštene plafone.",
        "p3-tag": "Dizajn po meri", "p3-name": "Prilagođena izrada", "p3-desc": "Specijalizovane usluge toplog valjanja, probijanja i CNC obrade prilagođene vašim specifičnim tehničkim crtežima.",
        "btn-catalog": "PREUZMI E-KATALOG", "btn-coming-soon": "USKORO", "btn-inquiry": "PITAJ SADA",
        "news-tag": "Naše novosti", "news-header": "Najnoviji uvidi", "news-subheader": "Budite u toku sa industrijskim napretkom kompanije Pioneer Metal i najzanimljivijim detaljima sa globalnih izložbi.",
        "tag-event": "Globalni događaj", "btn-schedule": "Zakažite sastanak", "btn-visit": "Posetite naš štand",
        "news1-date": "24-27. MART 2026.", "news1-t": "FENSTERBAU<br>FRONTALE", "news1-d": "Pridružite se kompaniji Pioneer Metal na sajmu FENSTERBAU FRONTALE u Nirnbergu, Nemačka. Istražite naša vrhunska rešenja čeličnih profila za moderne sisteme prozora i fasada.",
        "news2-date": "9-12. SEPTEMBAR 2026.", "news2-t": "FESQUA<br>BRAZIL 2026", "news2-d": "Proširujemo svoj domet u Južnoj Americi! Pioneer Metal će predstaviti tehnologije hladno valjanog čelika visokih performansi na sajmu FESQUA u Sao Paulu.",
        "contact-tag": "Kontaktirajte nas", "contact-header": "Povežimo se", "contact-subheader": "Spremni za razgovor o vašem sledećem projektu? Kontaktirajte naš globalni prodajni tim već danas.",
        "form-title": "Pošaljite upit", "form-name": "Vaše ime", "form-email": "E-mail adresa", "form-msg": "Poruka", "form-btn": "POŠALJITE UPIT",
        "contact-phone": "Telefonska podrška", "contact-email": "Upiti putem e-maila",
        "btn-copied": "KOPIRANO!", "btn-copy-failed": "Kopiranje nije uspelo", "form-redirecting": "PREUSMERAVANJE...",
        "feedback-name": "✔️ Zdravo, ", "feedback-email": "✔️ Hvala na interesovanju", "feedback-msg": "✔️ Ozbiljno ćemo to pregledati",
    }
};

const flags = { en: 'us', es: 'es', pt: 'pt', ru: 'ru', ja: 'jp', ko: 'kr', ar: 'sa', fr: 'fr', sq: 'al', sr: 'rs' };
const langLabels = { en: 'English', es: 'Español', pt: 'Português', ru: 'Русский', ja: '日本語', ko: '한국어', ar: 'العربية', fr: 'Français', sq: 'Shqip', sr: 'Srpski' };

// --- 2. Shared Functions ---
/**
 * Gets a translation string for a given key in the current language
 * @param {string} key - The translation key
 * @returns {string} - The translated string
 */
function getTranslation(key) {
    const lang = document.documentElement.lang || 'en';
    if (i18nData[lang] && i18nData[lang][key]) {
        return i18nData[lang][key];
    }
    return i18nData['en'][key] || key;
}

/**
 * Changes the website language and direction (RTL/LTR)
 * @param {string} lang - The language code (e.g., 'en', 'ar')
 */
function changeLanguage(lang) {
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update Shared Dropdown UI (Navbar)
    const currentFlag = document.getElementById('currentFlag');
    const label = document.getElementById('currentLangLabel');

    if (currentFlag) {
        currentFlag.innerHTML = `<span class="fi fi-${flags[lang]} rounded-sm shadow-sm transition-opacity duration-300"></span>`;
    }
    if (label) {
        label.innerText = langLabels[lang];
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            element.innerHTML = i18nData[lang][key];
        } else {
            // Fallback to English if translation missing
            if (i18nData['en'] && i18nData['en'][key]) {
                element.innerHTML = i18nData['en'][key];
            }
        }
    });

    // Update Select Dropdown (legacy or mobile if any)
    const select = document.querySelector('.lang-select');
    if (select) select.value = lang;

    // Save Preference
    localStorage.setItem('preferred-lang', lang);

    // Close dropdown if open
    closeLangDropdown();
}

/**
 * Toggles the dropdown menu visibility (Shared Navbar)
 */
function toggleLangDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    const chevron = document.getElementById('langChevron');
    if (dropdown) {
        dropdown.classList.toggle('active');
        if (chevron) {
            chevron.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

/**
 * Closes the dropdown menu (Shared Navbar)
 */
function closeLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const chevron = document.getElementById('langChevron');
    if (dropdown) dropdown.classList.remove('active');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
}

/**
 * Toggles the mobile menu visibility
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
}

// --- 3. Initialization ---

// 1. Instant Translation via Observer (Prevents Text Flash before DOMContentLoaded)
const savedLang = localStorage.getItem('preferred-lang') || 'en';
if (savedLang !== 'en') {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element Node
                    if (node.hasAttribute('data-i18n')) {
                        const key = node.getAttribute('data-i18n');
                        if (i18nData[savedLang] && i18nData[savedLang][key]) {
                            node.innerHTML = i18nData[savedLang][key];
                        }
                    }
                    if (node.querySelectorAll) {
                        node.querySelectorAll('[data-i18n]').forEach(child => {
                            const key = child.getAttribute('data-i18n');
                            if (i18nData[savedLang] && i18nData[savedLang][key]) {
                                child.innerHTML = i18nData[savedLang][key];
                            }
                        });
                    }
                }
            });
        });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
    // 2. Load Language (Fallback sweep)
    changeLanguage(savedLang);


    // 3. Bind Global Click to close dropdowns
    document.body.addEventListener('click', closeLangDropdown);
});

// Initialization of modern design effects
document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Fade-Ins using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-section, .fade-in-group');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // Carousel Implementation
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    window.goToSlide = function (index) {
        if (slides.length === 0) return;
        currentSlide = index;
        slides.forEach((s, i) => {
            if (i === index) {
                s.classList.add('opacity-100');
                s.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                s.classList.remove('opacity-100');
                s.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('bg-white', i === index));
        dots.forEach((d, i) => d.classList.toggle('bg-white/50', i !== index));
    };

    if (slides.length > 0) {
        window.goToSlide(0);
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            window.goToSlide(currentSlide);
        }, 5000);
    }

    // 2. Count Up implementation
    const counterElements = document.querySelectorAll('.count-up');
    let hasCounted = new Set();

    const easeOutQuad = t => t * (2 - t);

    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted.has(entry.target)) {
                hasCounted.add(entry.target);
                const targetStr = entry.target.getAttribute('data-target');
                if (!targetStr) return;
                const target = parseInt(targetStr.replace(/,/g, ''), 10);
                const duration = 2000;
                let startTime = null;

                const step = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const currentVal = Math.floor(easeOutQuad(progress) * target);
                    entry.target.innerHTML = currentVal.toLocaleString();

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        entry.target.innerHTML = target.toLocaleString();
                    }
                };
                window.requestAnimationFrame(step);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => countUpObserver.observe(el));
});

/**
 * Toggles the website theme between light and dark
 */
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
