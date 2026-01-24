/**
 * PIONEER METAL - Centralized Logic
 * Handles: Internationalization (i18n), Mobile Navigation, and Shared UI state.
 */

// --- 1. Centralized Translation Data ---
const i18nData = {
    en: {
        // Navigation
        "nav-home": "Home", "nav-about": "About Us", "nav-products": "Products", "nav-news": "News", "nav-contact": "Contact",
        "footer-rights": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY. | All Rights Reserved",

        // Home Page
        "hero-tag": "Industrial Excellence Since 2006", "hero-title": "Precision Steel Profiles", "hero-desc": "Global leader in manufacturing cold-rolled steel solutions for window systems and industrial infrastructure.", "btn-view": "VIEW PRODUCTS",
        "coop-subtitle": "Partnership & Growth", "coop-title": "Strategic Business Cooperation",
        "pillar-1-title": "Lijialong Sealing Strip", "pillar-1-desc": "Specialized manufacturer of high-resilience weather strips for advanced sealing solutions.",
        "pillar-2-title": "OEM & Custom", "pillar-2-desc": "OEM customers assist us in achieving success, improving product quality, and achieving a win-win situation.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Professional import & export services ensuring efficient global logistics and commerce.",

        // About Page
        "about-tag": "About Pioneer Metal", "about-header": "Our Team & Passion",
        "about-intro": "Pioneer Metal Product Factory is a leading supplier of high-quality metal sections, serving a wide range of industries across the China. With years of expertise, we specialize in manufacturing reinforcement steel of uPvc window and door, offering Drywall Steel Sections and others.",
        "about-quote": "\"Precision is not just a standard, it's our promise. Since 2006, we have been dedicated to providing the most reliable steel profile solutions to partners worldwide.\"",
        "story-t": "Manufacturing <span class='text-red-600'>Power</span>",
        "story-d1": "Our factory is equipped with advanced automated production lines. Each process, from raw material selection to cold rolling and finishing, is monitored by experienced engineers.",
        "stat-exp": "Years Experience", "stat-tons": "Annual Tons",

        // Products Page
        "products-title": "Industrial Steel Solutions",
        "products-desc": "Pioneer Metal provides premium hot-rolled steel profiles with high precision and durability for global construction standards.",
        "p1-tag": "Galvanized Steel", "p1-name": "Steel Reinforcement", "p1-desc": "High-strength galvanized steel profiles for UPVC/Aluminum window and door systems. Ensuring structural integrity.",
        "p2-tag": "Framing System", "p2-name": "Drywall & Ceiling", "p2-desc": "Lightweight steel framing systems for partition walls and architectural suspended ceilings. Fast installation.",
        "p3-tag": "Bespoke Design", "p3-name": "Custom Fabrication", "p3-desc": "Specialized hot-rolling, punching, and CNC services tailored to your specific technical drawings.",
        "btn-catalog": "DOWNLOAD E-CATALOG", "btn-inquiry": "INQUIRY NOW",

        // News Page
        "news-header": "Latest <span class='text-red-600'>Insights</span>",
        "news-subheader": "Stay updated with Pioneer Metal's industrial advancements and global exhibition highlights.",
        "tag-event": "Global Event", "btn-schedule": "Schedule a Meeting", "btn-visit": "Visit Our Booth",
        "news1-date": "MAR 24-27, 2026", "news1-t": "FENSTERBAU FRONTALE GERMANY",
        "news1-d": "Join Pioneer Metal at FENSTERBAU FRONTALE in Nuremberg, Germany. Explore our cutting-edge steel profile solutions for modern window and facade systems.",
        "news2-date": "SEP 9-12, 2026", "news2-t": "FESQUA BRAZIL 2026",
        "news2-d": "Expanding our reach in South America! Pioneer Metal will showcase high-performance cold-rolled steel technologies at FESQUA, São Paulo.",

        // Contact Page
        "contact-tag": "Direct Communication", "contact-h": "Get In <br>Touch Directly",
        "contact-p": "Ready to elevate your project with precision hot-rolled steel? Skip the forms and reach out to our technical team directly via WhatsApp or Email for an instant quote.",
        "card-wa-tag": "Instant Chat", "card-wa-desc": "Direct line for technical support & pricing",
        "card-mail-tag": "Email Inquiry", "card-mail-desc": "Official quotes and documentation",
        "card-loc-tag": "Factory Location", "card-loc-addr": "Dongjie, National Highway 106,<br>Xinzhen, Wen'an County, Langfang,<br>Hebei Province, China",
        "stat-countries-t": "Countries", "stat-countries-d": "Pioneer Metal, travelled 30+ countries",
        "stat-nations-t": "Nations", "stat-nations-d": "Pioneer Metal, export to 24+ nations",
        "stat-customers-t": "Customer", "stat-customers-d": "Pioneer Metal, 280+ customer all over the world.",
        "stat-tons-d": "Pioneer Metal, global supply capacity.",
        "form-title": "Send a Message", "form-name": "Full Name", "form-email": "Email Address", "form-msg": "Message", "form-btn": "SEND INQUIRY",
        "contact-phone": "Phone Support", "contact-email": "Email Inquiries"
    },
    es: {
        "nav-home": "Inicio", "nav-about": "Sobre Nosotros", "nav-products": "Productos", "nav-news": "Noticias", "nav-contact": "Contacto",
        "footer-rights": "&copy; 2025 FÁBRICA DE PRODUCTOS METÁLICOS PIONEER. | Todos los derechos reservados",
        "hero-tag": "Excelencia Industrial desde 2006", "hero-title": "Perfiles de Acero de Precisión", "hero-desc": "Líder mundial en fabricación de soluciones de acero para ventanas e industria.", "btn-view": "VER PRODUCTOS",
        "coop-subtitle": "Alianzas y Crecimiento", "coop-title": "Cooperación Comercial Estratégica",
        "pillar-1-title": "Tira de Sellado Lijialong", "pillar-1-desc": "Fabricante especializado en burletes de alta resiliencia para sellado avanzado.",
        "pillar-2-title": "OEM y Personalizado", "pillar-2-desc": "Los clientes OEM nos ayudan a lograr el éxito, mejorar la calidad del producto y lograr una situación de beneficio mutuo.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Servicios profesionales de importación y exportación para una logística eficiente.",
        "about-tag": "Sobre Pioneer Metal", "about-header": "Nuestro Equipo y Pasión",
        "about-intro": "Pioneer Metal es un proveedor líder de secciones metálicas de alta calidad en China.",
        "about-quote": "\"La precisión no es solo un estándar, es nuestra promesa. Desde 2006, ofrecemos las soluciones de acero más confiables.\"",
        "story-t": "Poder de <span class='text-red-600'>Fabricación</span>",
        "story-d1": "Nuestra fábrica cuenta con líneas de producción automatizadas y supervisadas por ingenieros expertos.",
        "stat-exp": "Años de Experiencia", "stat-tons": "Toneladas Anuales",
        "products-title": "Soluciones de Acero Industrial", "products-desc": "Pioneer Metal ofrece perfiles de acero laminados en caliente con alta precisión y durabilidad para estándares globales.",
        "p1-tag": "Acero Galvanizado", "p1-name": "Refuerzo de Acero", "p1-desc": "Perfiles de acero galvanizado de alta resistencia para sistemas de ventanas y puertas de UPVC/Aluminio.",
        "p2-tag": "Sistema de Estructura", "p2-name": "Pared Seca y Techo", "p2-desc": "Sistemas de estructuras de acero ligero para tabiques y techos suspendidos arquitectónicos.",
        "p3-tag": "Diseño a Medida", "p3-name": "Fabricación Personalizada", "p3-desc": "Servicios especializados de laminación, punzonado y CNC adaptados a sus planos técnicos.",
        "btn-catalog": "DESCARGAR CATÁLOGO", "btn-inquiry": "CONSULTAR AHORA",
        "news-header": "Últimas <span class='text-red-600'>Noticias</span>", "news-subheader": "Manténgase al día con los avances industriales y los eventos globales de Pioneer Metal.",
        "tag-event": "Evento Global", "btn-schedule": "Programar Reunión", "btn-visit": "Visitar Stand",
        "news1-date": "24-27 MAR, 2026", "news1-t": "FENSTERBAU FRONTALE ALEMANIA", "news1-d": "Únase a Pioneer Metal en FENSTERBAU FRONTALE en Nuremberg, Alemania. Explore nuestras soluciones de perfiles de acero.",
        "news2-date": "9-12 SEP, 2026", "news2-t": "FESQUA BRASIL 2026", "news2-d": "¡Expandiendo nuestro alcance en América del Sur! Pioneer Metal exhibirá tecnologías en FESQUA, São Paulo.",
        "contact-tag": "Comunicación Directa", "contact-h": "Contáctenos <br>Directamente", "contact-p": "¿Listo para elevar su proyecto con acero laminado en caliente de precisión? Evite formularios y contacte directamente vía WhatsApp o Email.",
        "card-wa-tag": "Chat Instantáneo", "card-wa-desc": "Línea directa para soporte técnico y precios",
        "card-mail-tag": "Consulta por Correo", "card-mail-desc": "Cotizaciones oficiales y documentación",
        "card-loc-tag": "Ubicación de Fábrica", "card-loc-addr": "Dongjie, Carretera Nacional 106,<br>Xinzhen, Condado de Wen'an, Langfang,<br>Provincia de Hebei, China",
        "stat-countries-t": "Países", "stat-countries-d": "Pioneer Metal, presente en más de 30 países",
        "stat-nations-t": "Naciones", "stat-nations-d": "Pioneer Metal, exporta a más de 24 naciones",
        "stat-customers-t": "Clientes", "stat-customers-d": "Pioneer Metal, más de 280 clientes en todo el mundo",
        "stat-tons-d": "Pioneer Metal, capacidad de suministro global",
        "form-title": "Enviar un Mensaje", "form-name": "Nombre Completo", "form-email": "Correo Electrónico", "form-msg": "Mensaje", "form-btn": "ENVIAR CONSULTA",
        "contact-phone": "Soporte Telefónico", "contact-email": "Consultas por Email"
    },
    pt: {
        "nav-home": "Início", "nav-about": "Sobre Nós", "nav-products": "Produtos", "nav-news": "Notícias", "nav-contact": "Contato",
        "footer-rights": "&copy; 2025 FÁBRICA DE PRODUTOS METÁLICOS PIONEER. | Todos os direitos reservados",
        "hero-tag": "Excelência Industrial desde 2006", "hero-title": "Perfis de Aço de Precisão", "hero-desc": "Líder mundial na fabricação de soluções em aço para janelas e infraestrutura.", "btn-view": "VER PRODUTOS",
        "coop-subtitle": "Parceria e Crescimento", "coop-title": "Cooperação Empresarial Estratégica",
        "pillar-1-title": "Lijialong Sealing Strip", "pillar-1-desc": "Fabricante especializado de tiras de vedação de alta resiliência.",
        "pillar-2-title": "OEM e Customizado", "pillar-2-desc": "Os clientes OEM ajudam-nos a alcançar o sucesso, melhorar a qualidade dos produtos e alcançar uma situação de ganho mútuo.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Serviços profissionais de exportação garantindo logística global eficiente.",
        "about-tag": "Sobre a Pioneer Metal", "about-header": "Nossa Equipe e Paixão", "about-intro": "A Pioneer Metal é uma fornecedora líder de seções metálicas de alta qualidade na China.",
        "about-quote": "\"Precisão não é apenas um padrão, é nossa promessa. Desde 2006, fornecemos as soluções de aço mais confiáveis.\"",
        "story-t": "Poder de <span class='text-red-600'>Fabricação</span>", "story-d1": "Nossa fábrica é equipada com linhas de produção automatizadas monitoradas por engenheiros experientes.",
        "stat-exp": "Anos de Experiência", "stat-tons": "Toneladas Anuais",
        "products-title": "Soluções de Aço Industrial", "products-desc": "A Pioneer Metal fornece perfis de aço laminados a quente de alta precisão e durabilidade para construção civil.",
        "p1-tag": "Aço Galvanizado", "p1-name": "Reforço de Aço", "p1-desc": "Perfis de aço galvanizado para sistemas de esquadrias de PVC/Alumínio, garantindo integridade estrutural.",
        "p2-tag": "Sistema de Estrutura", "p2-name": "Drywall e Forro", "p2-desc": "Sistemas de estruturas leves em aço para paredes divisórias e forros suspensos arquitetônicos.",
        "p3-tag": "Design Sob Medida", "p3-name": "Fabricação Customizada", "p3-desc": "Serviços de laminação e usinagem CNC adaptados aos seus desenhos técnicos e necessidades.",
        "btn-catalog": "BAIXAR CATÁLOGO", "btn-inquiry": "SOLICITAR COTAÇÃO",
        "news-header": "Últimas <span class='text-red-600'>Notícias</span>", "news-subheader": "Fique atualizado com os avanços industriais e destaques de feiras globais.",
        "tag-event": "Evento Global", "btn-schedule": "Agendar Reunião", "btn-visit": "Visitar Estande",
        "news1-date": "24-27 MAR, 2026", "news1-t": "FENSTERBAU FRONTALE ALEMANHA", "news1-d": "Junte-se à Pioneer Metal na FENSTERBAU FRONTALE em Nuremberg, Alemanha. Conheça nossos perfis de aço.",
        "news2-date": "9-12 SET, 2026", "news2-t": "FESQUA BRASIL 2026", "news2-d": "Expandindo nossa presença na América do Sul! Pioneer Metal apresentará tecnologias em FESQUA, São Paulo.",
        "contact-tag": "Comunicação Direta", "contact-h": "Entre em <br>Contato", "contact-p": "Pronto para elevar seu projeto com aço laminado a quente de precisão? Fale diretamente com nossa equipe técnica via WhatsApp ou E-mail.",
        "card-wa-tag": "Chat Instantâneo", "card-wa-desc": "Linha direta para suporte técnico e preços",
        "card-mail-tag": "Consulta por E-mail", "card-mail-desc": "Cotações oficiais e documentação",
        "card-loc-tag": "Localização da Fábrica", "card-loc-addr": "Dongjie, Rodovia Nacional 106,<br>Xinzhen, Condado de Wen'an, Langfang,<br>Província de Hebei, China"
    },
    ru: {
        "nav-home": "Главная", "nav-about": "О нас", "nav-products": "Изделия", "nav-news": "Новости", "nav-contact": "Контакт",
        "footer-rights": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY. | Все права защищены",
        "hero-tag": "Промышленное превосходство с 2006 года", "hero-title": "Стальные Профили Высокой Точности", "hero-desc": "Мировой лидер в производстве стальных решений для оконных систем.", "btn-view": "ПРОДУКЦИЯ",
        "coop-subtitle": "Партнерство и Рост", "coop-title": "Стратегическое Деловое Сотрудничество",
        "pillar-1-title": "Уплотнительная лента Lijialong", "pillar-1-desc": "Специализированный производитель уплотнителей для передовых решений герметизации.",
        "pillar-2-title": "OEM и Заказ", "pillar-2-desc": "OEM-клиенты помогают нам добиваться успеха, повышать качество продукции и достигать взаимовыгодной ситуации.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Профессиональные импортно-экспортные услуги для глобальной логистики.",
        "about-tag": "О Pioneer Metal", "about-header": "Наша Команда и Страсть", "about-intro": "Pioneer Metal — ведущий поставщик высококачественных металлических профилей в Китае.",
        "about-quote": "\"Точность — это не просто стандарт, это наше обещание. С 2006 года мы предлагаем надежные решения из стали.\"",
        "story-t": "Мощность <span class='text-red-600'>Производства</span>", "story-d1": "Наш завод оснащен современными автоматизированными линиями под контролем опытных инженеров.",
        "stat-exp": "Лет Опыта", "stat-tons": "Тонн в Год",
        "products-title": "Промышленные Стальные Решения", "products-desc": "Pioneer Metal производит высокоточные стальные профили для глобальных строительных стандартов.",
        "p1-tag": "Оцинкованная Сталь", "p1-name": "Стальное Армирование", "p1-desc": "Оцинкованные профили для оконных и дверных систем из ПВХ и алюминия.",
        "p2-tag": "Каркасная Система", "p2-name": "Гипсокартон и Потолки", "p2-desc": "Легкие стальные каркасные системы для перегородок и подвесных потолков.",
        "p3-tag": "Индивидуальный Дизайн", "p3-name": "Индивидуальный Заказ", "p3-desc": "Специализированная горячая прокатка и ЧПУ-обработка по вашим чертежам.",
        "btn-catalog": "СКАЧАТЬ КАТАЛОГ", "btn-inquiry": "УЗНАТЬ ЦЕНУ",
        "news-header": "Новости и <span class='text-red-600'>Обзоры</span>", "news-subheader": "Следите за промышленными достижениями и мировыми выставками Pioneer Metal.",
        "tag-event": "Мировое событие", "btn-schedule": "Назначить встречу", "btn-visit": "Посетить стенд",
        "news1-date": "24-27 МАР, 2026", "news1-t": "FENSTERBAU FRONTALE ГЕРМАНИЯ", "news1-d": "Присоединяйтесь к нам в Нюрнберге, Германия, чтобы увидеть лучшие стальные профили для оконных систем.",
        "news2-date": "9-12 СЕН, 2026", "news2-t": "FESQUA БРАЗИЛИЯ 2026", "news2-d": "Расширяем присутствие в Южной Америке! Технологии холоднокатаной стали на выставке FESQUA.",
        "contact-tag": "Прямая связь", "contact-h": "Свяжитесь <br>с нами", "contact-p": "Готовы улучшить свой проект с помощью прецизионной стали? Свяжитесь с нашей командой напрямую через WhatsApp или Email.",
        "card-wa-tag": "Быстрый чат", "card-wa-desc": "Прямая линия для техподдержки и цен",
        "card-mail-tag": "Email запрос", "card-mail-desc": "Официальные предложения и документы",
        "card-loc-tag": "Адрес фабрики", "card-loc-addr": "Дунцзе, Национальное шоссе 106,<br>Синьчжэнь, уезд Вэньань, Ланфан,<br>провинция Хэбэй, Китай",
        "stat-countries-t": "Стран", "stat-countries-d": "Pioneer Metal, поставки в 30+ стран",
        "stat-nations-t": "Наций", "stat-nations-d": "Pioneer Metal, экспорт в 24+ нации",
        "stat-customers-t": "Клиентов", "stat-customers-d": "Pioneer Metal, 280+ клиентов по всему миру",
        "stat-tons-d": "Pioneer Metal, глобальные мощности поставок"
    },
    ja: {
        "nav-home": "ホーム", "nav-about": "会社概要", "nav-products": "製品", "nav-news": "ニュース", "nav-contact": "お問い合わせ",
        "footer-rights": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY. | 無断転載を禁じます",
        "hero-tag": "2006年創業的信頼", "hero-title": "精密スチールプロファイル", "hero-desc": "窓システムおよび産業インフラ向けの冷間圧延鋼ソリューションのリーダー。", "btn-view": "製品一覧",
        "coop-subtitle": "パートナーシップと成長", "coop-title": "戦略的ビジネス提携",
        "pillar-1-title": "Lijialong シーリングストリップ", "pillar-1-desc": "高度なシーリングソリューション向けの高品質ウェザーストリップ製造。",
        "pillar-2-title": "OEM・カスタム", "pillar-2-desc": "OEMのお客様は、私たちが成功を収め、製品の品質を向上させ、ウィンウィンの状況を実現するのを支援してくださいます。",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "効率的なグローバル物流と貿易を保証する専門的な輸出入サービス。",
        "about-tag": "パイオニアメタルについて", "about-header": "チームと情熱", "about-intro": "パイオニアメタルは、中国全土の幅広い産業に高品質の金属セクションを提供するリーディングサプライヤーです。",
        "about-quote": "「精度は単なる基準ではなく、私たちの約束です。2006年以来、世界中のパートナーに信頼性の高い鋼材ソリューションを提供してきました。」",
        "story-t": "製造の <span class='text-red-600'>力</span>", "story-d1": "当社の工場は高度な自動生产ラインを備えており、熟練したエンジニアが各工程を監視しています。",
        "stat-exp": "年間の経験", "stat-tons": "年間生产量",
        "products-title": "産業用鋼材ソリューション", "products-desc": "パイオニアメタルは、世界の建設基準に合わせた高精度で耐久性のある熱延鋼製プロファイルを提供します。",
        "p1-tag": "亜鉛メッキ鋼", "p1-name": "窓・ドア用補强材", "p1-desc": "UPVC/アルミニウム窓システム用の高强度亜鉛メッキ鋼プロファイル。构造の安定性を确保します。",
        "p2-tag": "下地システム", "p2-name": "内装用軽天材", "p2-desc": "间仕切り壁や建筑用吊り天井用の軽量鉄骨下地システム。迅速な施工が可能です。",
        "p3-tag": "オーダーメイド", "p3-name": "カスタム制造", "p3-desc": "お客様の设计図に基づいた特殊热延加工、パンチング、CNC加工サービスを提供します。",
        "btn-catalog": "カタログをダウンロード", "btn-inquiry": "今すぐお問い合わせ",
        "news-header": "最新の <span class='text-red-600'>動向</span>", "news-subheader": "パイオニアメタルの産業進歩とグローバルな展示会のハイライトをご覧ください。",
        "tag-event": "グローバルイベント", "btn-schedule": "会議を予約する", "btn-visit": "ブースを訪問する",
        "news1-date": "2026年3月24-27日", "news1-t": "FENSTERBAU FRONTALE ドイツ", "news1-d": "ドイツ・ニュルンベルクで開催される展示会に参加。最新の鋼製プロファイルソリューションを展示します。",
        "news2-date": "2026年9月9-12日", "news2-t": "FESQUA ブラジル 2026", "news2-d": "南米市場への拡大。サンパウロのFESQUAで高性能冷延鋼板技術を披露します。",
        "contact-tag": "直接コミュニケーション", "contact-h": "直接お問い<br>合わせください", "contact-p": "精密熱延鋼板でお客様のプロジェクトを向上させませんか？フォームを省略し、WhatsAppまたはメールで直接お問い合わせください。",
        "card-wa-tag": "即時チャット", "card-wa-desc": "テクニカルサポートと価格の直通ライン",
        "card-mail-tag": "メールでのお問い合わせ", "card-mail-desc": "公式見積書および書類",
        "card-loc-tag": "工場所在地", "card-loc-addr": "中国河北省廊坊市文安県<br>新鎮国道106号線東街",
        "stat-countries-t": "国", "stat-countries-d": "パイオニアメタルは30カ国以上で実績があります",
        "stat-nations-t": "国家", "stat-nations-d": "パイオニアメタルは24カ国以上に輸出しています",
        "stat-customers-t": "顧客", "stat-customers-d": "世界中に280社以上の顧客がいます",
        "stat-tons-d": "パイオニアメタルのグローバル供給能力"
    },
    ko: {
        "nav-home": "홈", "nav-about": "회사 소개", "nav-products": "제품", "nav-news": "소식", "nav-contact": "문의",
        "footer-rights": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY. | 판권 소유",
        "hero-tag": "2006년부터 시작된 기술력", "hero-title": "정밀 스틸 프로파일", "hero-desc": "창호 시스템 및 산업 인프라를 위한 냉간 압연 강철 솔루션의 글로벌 리더.", "btn-view": "제품 보기",
        "coop-subtitle": "파트너십과 성장", "coop-title": "전략적 비즈니스 협력",
        "pillar-1-title": "Lijialong 실링 스트립", "pillar-1-desc": "고급 실링 솔루션을 위한 고탄성 웨더스트립 전문 제조업체.",
        "pillar-2-title": "OEM 및 맞춤 제작", "pillar-2-desc": "OEM 고객은 우리가 성공을 거두고 제품 품질을 개선하며 윈윈 상황을 달성할 수 있도록 지원합니다.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "효율적인 글로벌 물류 및 무역을 보장하는 전문 수출입 서비스.",
        "about-tag": "파이오니아 메탈 소개", "about-header": "팀과 열정", "about-intro": "파이오니아 메탈은 중국 전역의 다양한 산업 분야에 고품질 금속 섹션을 공급하는 선도적인 기업입니다.",
        "about-quote": "「정밀함은 단순한 기준이 아니라 우리의 약속입니다. 2006년부터 전 세계 파트너에게 가장 신뢰할 수 있는 철강 솔루션을 제공해 왔습니다.」",
        "story-t": "제조 <span class='text-red-600'>능력</span>", "story-d1": "당사 공장은 첨단 자동화 생산 라인을 갖추고 있으며 모든 공정은 숙련된 엔지니어가 모니터링합니다.",
        "stat-exp": "년의 경험", "stat-tons": "연간 생산량",
        "products-title": "산업용 철강 솔루션", "products-desc": "파이오니아 메탈은 글로벌 건설 표준에 부합하는 고정밀 및 고내구성 열연 강철 프로파일을 제공합니다.",
        "p1-tag": "아연 도금 강판", "p1-name": "강철 보강재", "p1-desc": "UPVC 및 알루미늄 창호 시스템을 위한 고강도 아연 도금 강철 프로파일입니다.",
        "p2-tag": "프레이밍 시스템", "p2-name": "건축용 경량 철골", "p2-desc": "칸막이벽 및 천장용 경량 스틸 프레이밍 시스템으로 빠른 설치를 지원합니다.",
        "p3-tag": "맞춤형 디자인", "p3-name": "맞춤형 제작", "p3-desc": "특정 기술 도면 및 엔지니어링 요구 사항에 맞춘 특수 압연 및 CNC 가공 서비스입니다.",
        "btn-catalog": "카탈로그 다운로드", "btn-inquiry": "지금 문의하기",
        "news-header": "최신 <span class='text-red-600'>인사이트</span>", "news-subheader": "파이오니아 메탈의 산업 발전과 글로벌 전시회 소식을 확인하세요.",
        "tag-event": "글로벌 이벤트", "btn-schedule": "상담 예약하기", "btn-visit": "부스 방문하기",
        "news1-date": "2026년 3월 24-27일", "news1-t": "FENSTERBAU FRONTALE 독일", "news1-d": "독일 뉘른베르크 전시회에 참여하십시오. 현대적인 윈도우 시스템을 위한 솔루션을 만나보세요.",
        "news2-date": "2026년 9월 9-12일", "news2-t": "FESQUA 브라질 2026", "news2-d": "남미 시장 공략! 상파울루 FESQUA에서 고성능 냉연 강판 기술을 선보입니다.",
        "contact-tag": "직접 소통", "contact-h": "직접 <br>문의하기", "contact-p": "정밀 열연강판으로 프로젝트의 품질을 높이십시오. 복잡한 절차 없이 WhatsApp 또는 이메일로 직접 문의해 주시기 바랍니다.",
        "card-wa-tag": "실시간 채팅", "card-wa-desc": "기술 지원 및 견적 직통 번호",
        "card-mail-tag": "이메일 문의", "card-mail-desc": "공식 견적 및 문서 지원",
        "card-loc-tag": "공장 위치", "card-loc-addr": "중국 허베이성 랑방시 원안현<br>신전 국도 106호선 동지에",
        "stat-countries-t": "국가", "stat-countries-d": "파이오니아 메탈, 30개국 이상 진출",
        "stat-nations-t": "나라", "stat-nations-d": "파이오니아 메탈, 24개국 이상 수출",
        "stat-customers-t": "고객", "stat-customers-d": "전 세계 280개 이상의 고객사",
        "stat-tons-d": "파이오니아 메탈, 글로벌 공급 능력"
    },
    ar: {
        "nav-home": "الرئيسية", "nav-about": "من نحن", "nav-products": "المنتجات", "nav-news": "الأخبار", "nav-contact": "اتصل بنا",
        "footer-rights": "&copy; 2025 مصنع بايونير للمنتجات المعدنية. | كل الحقوق محفوظة",
        "hero-tag": "التميز الصناعي منذ 2006", "hero-title": "مقاطع فولاذية عالية الدقة", "hero-desc": "الرائد العالمي في تصنيع حلول الصلب المدرفل على البارد لأنظمة النوافذ.", "btn-view": "عرض المنتجات",
        "coop-subtitle": "الشراكة والنمو", "coop-title": "التعاون التجاري الاستراتيجي",
        "pillar-1-title": "Lijialong شريط إحكام", "pillar-1-desc": "مصنع متخصص لشرائط منع التسرب عالية المرونة للحلول المتقدمة.",
        "pillar-2-title": "OEM والتخصيص", "pillar-2-desc": "يساعدنا عملاء OEM على تحقيق النجاح وتحسين جودة المنتج وتحقيق وضع مربح للجانبين.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "خدمات استيراد وتصدير احترافية لضمان الخدمات اللوجستية العالمية.",
        "about-tag": "حول بايونير ميتال", "about-header": "فريقنا وشغفنا", "about-intro": "مصنع بايونير ميتال هو مورد رائد للمقاطع المعدنية عالية الجودة، يخدم مجموعة واسعة من الصناعات في الصين.",
        "about-quote": "\"الدقة ليست مجرد معيار، بل هي وعدنا. منذ عام 2006، كرسنا أنفسنا لتقديم حلول قطاعات الصلب الأكثر موثوقية.\"",
        "story-t": "قوة <span class='text-red-600'>التصنيع</span>", "story-d1": "مصنعنا مجهز بخطوط إنتاج آلية متطورة. تتم مراقبة كل عملية من قبل مهندسين ذوي خبرة.",
        "stat-exp": "عاماً من الخبرة", "stat-tons": "طن سنوياً",
        "products-title": "حلول الصلب الصناعية", "products-desc": "توفر شركة بايونير ميتال قطاعات فولاذية مدرفلة على الساخن بدقة عالية ومتانة فائقة للمعايير العالمية.",
        "p1-tag": "فولاذ مجلفن", "p1-name": "تدعيم الصلب", "p1-desc": "قطاعات فولاذية مجلفنة عالية القوة لأنظمة نوافذ وأبواب الألومنيوم والـ PVC.",
        "p2-tag": "نظام التأطير", "p2-name": "الأسقف والقواطع", "p2-desc": "أنظمة تأطير فولاذية خفيفة الوزن للجدران الفاصلة والأسقف المعلقة المعمارية.",
        "p3-tag": "تصميم مخصص", "p3-name": "التصنيع المخصص", "p3-desc": "خدمات الدرفلة والتثقيب وCNC المتخصصة المصممة وفقاً للرسومات الفنية الخاصة بك.",
        "btn-catalog": "تحميل الكتالوج", "btn-inquiry": "استفسر الآن",
        "news-header": "أحدث <span class='text-red-600'>الأخبار</span>", "news-subheader": "ابق على اطلاع بآخر التطورات الصناعية وأبرز المعارض العالمية لشركة بايونير ميتال.",
        "tag-event": "حدث عالمي", "btn-schedule": "حدد موعداً", "btn-visit": "زوروا جناحنا",
        "news1-date": "24-27 مارس 2026", "news1-t": "معرض فينشترباو - ألمانيا", "news1-d": "انضم إلينا في نورمبرغ، ألمانيا. استكشف حلول قطاعات الصلب المتطورة لأنظمة النوافذ الحديثة.",
        "news2-date": "9-12 سبتمبر 2026", "news2-t": "معرض فيسكوا - البرازيل", "news2-d": "نوسع انتشارنا في أمريكا الجنوبية! عرض تقنيات الصلب المدلفن على البارد في ساو باولو.",
        "contact-tag": "تواصل مباشر", "contact-h": "تواصل معنا <br>مباشرة", "contact-p": "هل أنت جاهز للارتقاء بمشروعك؟ تواصل مع فريقنا الفني مباشرة عبر واتساب أو البريد الإلكتروني للحصول على عرض سعر فوري.",
        "card-wa-tag": "دردشة فورية", "card-wa-desc": "خط مباشر للدعم الفني والأسعار",
        "card-mail-tag": "استفسار بريدي", "card-mail-desc": "عروض الأسعار والوثائق الرسمية",
        "card-loc-tag": "موقع المصنع", "card-loc-addr": "دونغجيه، الطريق الوطني 106،<br>شينتشن، مقاطعة وينان، لانغفانغ،<br>مقاطعة خبي، الصين",
        "stat-countries-t": "دولة", "stat-countries-d": "بايونير ميتال، سافرت إلى أكثر من 30 دولة",
        "stat-nations-t": "أمة", "stat-nations-d": "بايونير ميتال، تصدر إلى أكثر من 24 دولة",
        "stat-customers-t": "عميل", "stat-customers-d": "بايونير ميتال، أكثر من 280 عميل حول العالم",
        "stat-tons-d": "بايونير ميتال، قدرة توريد عالمية"
    },
    fr: {
        "nav-home": "Accueil", "nav-about": "À Propos", "nav-products": "Produits", "nav-news": "Actualités", "nav-contact": "Contact",
        "footer-rights": "&copy; 2025 USINE DE PRODUITS MÉTALLIQUES PIONEER. | Tous droits réservés",
        "hero-tag": "Excellence Industrielle depuis 2006", "hero-title": "Profilés Acier de Précision", "hero-desc": "Leader mondial dans la fabrication de solutions en acier laminé à froid pour systèmes de fenêtres et infrastructures.", "btn-view": "VOIR PRODUITS",
        "coop-subtitle": "Partenariat & Croissance", "coop-title": "Coopération Stratégique",
        "pillar-1-title": "Joint d'Étanchéité Lijialong", "pillar-1-desc": "Fabricant spécialisé de joints d'étanchéité haute résilience.",
        "pillar-2-title": "OEM & Sur Mesure", "pillar-2-desc": "Les clients OEM nous aident à réussir, à améliorer la qualité des produits et à atteindre une situation gagnant-gagnant.",
        "pillar-3-title": "Commerce Melan", "pillar-3-desc": "Services professionnels d'import-export assurant une logistique mondiale efficace.",
        "about-tag": "À Propos de Pioneer Metal", "about-header": "Notre Équipe & Passion",
        "about-intro": "Pioneer Metal est un fournisseur leader de profilés métalliques de haute qualité en Chine.",
        "about-quote": "\"La précision n'est pas juste une norme, c'est notre promesse. Depuis 2006, nous offrons les solutions les plus fiables.\"",
        "story-t": "Puissance de <span class='text-red-600'>Fabrication</span>",
        "story-d1": "Notre usine est équipée de lignes de production automatisées surveillées par des ingénieurs expérimentés.",
        "stat-exp": "Ans d'Expérience", "stat-tons": "Tonnes Annuelles",
        "products-title": "Solutions Acier Industrielles",
        "products-desc": "Pioneer Metal fournit des profilés en acier laminés à chaud de haute précision et durabilité pour les normes mondiales.",
        "p1-tag": "Acier Galvanisé", "p1-name": "Renfort Acier", "p1-desc": "Profilés en acier galvanisé haute résistance pour fenêtres et portes UPVC/Aluminium.",
        "p2-tag": "Système de Cadre", "p2-name": "Cloison & Plafond", "p2-desc": "Systèmes de cadres légers en acier pour cloisons et plafonds suspendus.",
        "p3-tag": "Design Sur Mesure", "p3-name": "Fabrication Personnalisée", "p3-desc": "Services spécialisés de laminage, poinçonnage et CNC adaptés à vos plans.",
        "btn-catalog": "TÉLÉCHARGER CATALOGUE", "btn-inquiry": "DEMANDER PRIX",
        "news-header": "Dernières <span class='text-red-600'>Infos</span>", "news-subheader": "Restez informé des avancées industrielles et des expositions mondiales de Pioneer Metal.",
        "tag-event": "Événement Mondial", "btn-schedule": "Planifier Réunion", "btn-visit": "Visiter Stand",
        "news1-date": "24-27 MARS 2026", "news1-t": "FENSTERBAU FRONTALE ALLEMAGNE",
        "news1-d": "Rejoignez Pioneer Metal à Nuremberg. Découvrez nos solutions de profilés en acier pour systèmes de fenêtres modernes.",
        "news2-date": "9-12 SEP 2026", "news2-t": "FESQUA BRÉSIL 2026",
        "news2-d": "Expansion en Amérique du Sud ! Pioneer Metal présentera ses technologies à FESQUA, São Paulo.",
        "contact-tag": "Communication Directe", "contact-h": "Contactez-nous <br>Directement",
        "contact-p": "Prêt à élever votre projet ? Contactez notre équipe technique directement via WhatsApp ou Email.",
        "card-wa-tag": "Chat Instantané", "card-wa-desc": "Ligne directe pour support et prix",
        "card-mail-tag": "Demande par Email", "card-mail-desc": "Devis officiels et documentation",
        "card-loc-tag": "Localisation Usine", "card-loc-addr": "Dongjie, Route Nationale 106,<br>Xinzhen, Comté de Wen'an, Langfang,<br>Hebei, Chine",
        "stat-countries-t": "Pays", "stat-countries-d": "Pioneer Metal, présent dans plus de 30 pays",
        "stat-nations-t": "Nations", "stat-nations-d": "Pioneer Metal, exporte vers plus de 24 nations",
        "stat-customers-t": "Clients", "stat-customers-d": "Pioneer Metal, plus de 280 clients dans le monde",
        "stat-tons-d": "Pioneer Metal, capacité d'approvisionnement mondiale",
        "form-title": "Envoyer un Message", "form-name": "Nom Complet", "form-email": "Adresse Email", "form-msg": "Message", "form-btn": "ENVOYER DEMANDE",
        "contact-phone": "Support Téléphonique", "contact-email": "Demandes par Email"
    },
    sq: {
        "nav-home": "Ballina", "nav-about": "Rreth Nesh", "nav-products": "Produktet", "nav-news": "Lajme", "nav-contact": "Kontakt",
        "footer-rights": "&copy; 2025 FABRIKA E PRODUKTEVE METALTIKE PIONEER. | Të gjitha të drejtat e rezervuara",
        "hero-tag": "Përsosmëri Industriale që nga 2006", "hero-title": "Profile Çeliku me Precizion", "hero-desc": "Lider global në prodhimin e zgjidhjeve të çelikut të mbështjellë në të ftohtë për dritare dhe infrastrukturë.", "btn-view": "SHIKO PRODUKTET",
        "coop-subtitle": "Partneritet & Rritje", "coop-title": "Bashkëpunim Strategjik Biznesi",
        "pillar-1-title": "Shirit Izolues Lijialong", "pillar-1-desc": "Prodhues i specializuar i shiritave të motit me rezistencë të lartë.",
        "pillar-2-title": "OEM & Me Porosi", "pillar-2-desc": "Klientët OEM na ndihmojnë të arrijmë sukses, të përmirësojmë cilësinë dhe të arrijmë një situatë të favorshme.",
        "pillar-3-title": "Tregtia Melan", "pillar-3-desc": "Shërbime profesionale import-eksport për logjistikë efikase globale.",
        "about-tag": "Rreth Pioneer Metal", "about-header": "Ekipi & Pasioni Ynë",
        "about-intro": "Pioneer Metal është furnizues kryesor i seksioneve metalike cilësore në Kinë.",
        "about-quote": "\"Precizioni nuk është thjesht standard, është premtimi ynë. Që nga 2006, ofrojmë zgjidhjet më të besueshme.\"",
        "story-t": "Fuqia e <span class='text-red-600'>Prodhimit</span>",
        "story-d1": "Fabrika jonë është e pajisur me linja prodhimi të automatizuara të mbikëqyrura nga inxhinierë me përvojë.",
        "stat-exp": "Vite Përvojë", "stat-tons": "Ton në Vit",
        "products-title": "Zgjidhje Industriale Çeliku",
        "products-desc": "Pioneer Metal ofron profile çeliku të mbështjellë në të nxehtë me precizion të lartë.",
        "p1-tag": "Çelik i Galvanizuar", "p1-name": "Përforcim Çeliku", "p1-desc": "Profile çeliku të galvanizuar me forcë të lartë për sisteme dritaresh UPVC/Alumin.",
        "p2-tag": "Sistemi i Kornizës", "p2-name": "Mur i Thatë & Tavan", "p2-desc": "Sisteme kornizash çeliku të lehtë për mure ndarëse dhe tavane të varura.",
        "p3-tag": "Dizajn i Posaçëm", "p3-name": "Prodhim me Porosi", "p3-desc": "Shërbime të specializuara të mbështjelljes, shpimit dhe CNC sipas vizatimeve tuaja.",
        "btn-catalog": "SHKARKO KATALOGUN", "btn-inquiry": "PYET TANI",
        "news-header": "Të Fundit <span class='text-red-600'>Lajme</span>", "news-subheader": "Qëndroni të informuar me përparimet industriale të Pioneer Metal.",
        "tag-event": "Ngjarje Globale", "btn-schedule": "Cakto Takim", "btn-visit": "Vizito Stendën",
        "news1-date": "24-27 MAR, 2026", "news1-t": "FENSTERBAU FRONTALE GJERMANI",
        "news1-d": "Bëhuni pjesë me Pioneer Metal në Cyrih. Eksploroni zgjidhjet tona të profileve të çelikut.",
        "news2-date": "9-12 SHT, 2026", "news2-t": "FESQUA BRAZIL 2026",
        "news2-d": "Po zgjerohemi në Amerikën e Jugut! Pioneer Metal do të prezantojë teknologji të reja në São Paulo.",
        "contact-tag": "Komunikim i Drejtpërdrejtë", "contact-h": "Na Kontaktoni <br>Direkt",
        "contact-p": "Gati për të përmirësuar projektin tuaj? Kontaktoni ekipin tonë teknik direkt përmes WhatsApp ose Email.",
        "card-wa-tag": "Bisedë e Shpejtë", "card-wa-desc": "Linjë direkte për mbështetje teknike",
        "card-mail-tag": "Kërkesë me Email", "card-mail-desc": "Oferta zyrtare dhe dokumentacion",
        "card-loc-tag": "Vendndodhja e Fabrikës", "card-loc-addr": "Dongjie, Rruga Nacionale 106,<br>Xinzhen, Wen'an, Langfang,<br>Hebei, Kinë",
        "stat-countries-t": "Shtete", "stat-countries-d": "Pioneer Metal, prezent në mbi 30 shtete",
        "stat-nations-t": "Kombe", "stat-nations-d": "Pioneer Metal, eksporton në mbi 24 kombe",
        "stat-customers-t": "Klientë", "stat-customers-d": "Pioneer Metal, mbi 280 klientë në mbarë botën",
        "stat-tons-d": "Pioneer Metal, kapacitet global furnizimi",
        "form-title": "Dërgo një Mesazh", "form-name": "Emri i Plotë", "form-email": "Adresa Email", "form-msg": "Mesazhi", "form-btn": "DËRGO KËRKESËN",
        "contact-phone": "Mbështetje Telefonike", "contact-email": "Kërkesa me Email"
    },
    sr: {
        "nav-home": "Početna", "nav-about": "O Nama", "nav-products": "Proizvodi", "nav-news": "Vesti", "nav-contact": "Kontakt",
        "footer-rights": "&copy; 2025 PIONEER METAL PRODUCTS FACTORY. | Sva prava zadržana",
        "hero-tag": "Industrijska Izvrsnost od 2006", "hero-title": "Precizni Čelični Profili", "hero-desc": "Globalni lider u proizvodnji hladno valjanih čeličnih rešenja za sisteme prozora i infrastrukturu.", "btn-view": "POGLEDAJ PROIZVODE",
        "coop-subtitle": "Partnerstvo i Rast", "coop-title": "Strateška Poslovna Saradnja",
        "pillar-1-title": "Lijialong Zaptivna Traka", "pillar-1-desc": "Specijalizovani proizvođač gumenih traka visoke otpornosti.",
        "pillar-2-title": "OEM i Po Meri", "pillar-2-desc": "OEM kupci nam pomažu da postignemo uspeh, poboljšamo kvalitet proizvoda i postignemo obostranu korist.",
        "pillar-3-title": "Melan Trade", "pillar-3-desc": "Profesionalne usluge uvoza i izvoza za efikasnu globalnu logistiku.",
        "about-tag": "O Pioneer Metal-u", "about-header": "Naš Tim i Strast",
        "about-intro": "Pioneer Metal je vodeći dobavljač visokokvalitetnih metalnih profila u Kini.",
        "about-quote": "\"Preciznost nije samo standard, to je naše obećanje. Od 2006. pružamo najpouzdanija rešenja.\"",
        "story-t": "Moć <span class='text-red-600'>Proizvodnje</span>",
        "story-d1": "Naša fabrika je opremljena naprednim automatizovanim proizvodnim linijama koje nadgledaju iskusni inženjeri.",
        "stat-exp": "Godina Iskustva", "stat-tons": "Tona Godišnje",
        "products-title": "Industrijska Čelična Rešenja",
        "products-desc": "Pioneer Metal pruža vrhunske toplo valjane čelične profile visoke preciznosti.",
        "p1-tag": "Pocinkovani Čelik", "p1-name": "Čelično Ojačanje", "p1-desc": "Visokočvrsti pocinkovani čelični profili za UPVC/Aluminijumske sisteme prozora.",
        "p2-tag": "Sistem Okvira", "p2-name": "Gipsani Zidovi & Plafoni", "p2-desc": "Laki čelični sistemi okvira za pregradne zidove i spuštene plafone.",
        "p3-tag": "Dizajn po Meri", "p3-name": "Proizvodnja po Meri", "p3-desc": "Specijalizovane usluge valjanja, probijanja i CNC obrade prilagođene vašim crtežima.",
        "btn-catalog": "PREUZMI KATALOG", "btn-inquiry": "UPIT SADA",
        "news-header": "Najnovije <span class='text-red-600'>Vesti</span>", "news-subheader": "Budite u toku sa industrijskim napretkom kompanije Pioneer Metal.",
        "tag-event": "Globalni Događaj", "btn-schedule": "Zakaži Sastanak", "btn-visit": "Poseti Štand",
        "news1-date": "24-27 MAR, 2026", "news1-t": "FENSTERBAU FRONTALE NEMAČKA",
        "news1-d": "Pridružite se Pioneer Metal-u u Nirnbergu. Istražite naša rešenja čeličnih profila.",
        "news2-date": "9-12 SEP, 2026", "news2-t": "FESQUA BRAZIL 2026",
        "news2-d": "Širimo se u Južnu Ameriku! Pioneer Metal će predstaviti tehnologije u Sao Paulu.",
        "contact-tag": "Direktna Komunikacija", "contact-h": "Kontaktirajte nas <br>Direktno",
        "contact-p": "Spremni da unapredite svoj projekat? Kontaktirajte naš tim direktno putem WhatsApp-a ili Email-a.",
        "card-wa-tag": "Brzi Chat", "card-wa-desc": "Direktna linija za tehničku podršku",
        "card-mail-tag": "Email Upit", "card-mail-desc": "Zvanične ponude i dokumentacija",
        "card-loc-tag": "Lokacija Fabrike", "card-loc-addr": "Dongjie, Nacionalni put 106,<br>Xinzhen, Okrug Wen'an, Langfang,<br>Hebei, Kina",
        "stat-countries-t": "Zemalja", "stat-countries-d": "Pioneer Metal, prisutan u više od 30 zemalja",
        "stat-nations-t": "Nacija", "stat-nations-d": "Pioneer Metal, izvozi u više od 24 nacije",
        "stat-customers-t": "Klijenata", "stat-customers-d": "Pioneer Metal, više od 280 klijenata širom sveta",
        "stat-tons-d": "Pioneer Metal, globalni kapacitet snabdevanja",
        "form-title": "Pošaljite Poruku", "form-name": "Ime i Prezime", "form-email": "Email Adresa", "form-msg": "Poruka", "form-btn": "POŠALJITE UPIT",
        "contact-phone": "Telefonska Podrška", "contact-email": "Upiti putem Email-a"
    }
};

const flags = { en: 'us', es: 'es', pt: 'pt', ru: 'ru', ja: 'jp', ko: 'kr', ar: 'sa', fr: 'fr', sq: 'al', sr: 'rs' };
const langLabels = { en: 'English', es: 'Español', pt: 'Português', ru: 'Русский', ja: '日本語', ko: '한국어', ar: 'العربية', fr: 'Français', sq: 'Shqip', sr: 'Srpski' };

// --- 2. Shared Functions ---

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

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Language
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    changeLanguage(savedLang);

    // 2. Bind Mobile Menu Button (if not already bound inline)
    const mobileBtn = document.querySelector('button.md\\:hidden');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }

    // 3. Bind Global Click to close dropdowns
    document.body.addEventListener('click', closeLangDropdown);
});