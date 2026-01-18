/* ==========================================================================
   JV Martins - Site Data / Dados do Site

   COMO EDITAR:
   1. Encontre a seção que deseja editar (nav, hero, about, etc.)
   2. Edite o texto em 'en' (inglês) e 'pt' (português)
   3. Salve o arquivo e recarregue a página
   ========================================================================== */

const siteData = {
    // ==================== CONFIGURAÇÕES / SETTINGS ====================
    config: {
        defaultLanguage: 'en',
        whatsapp: '5512981335073',
        email: 'mrtins.joao@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mrtinsjoao/',
        github: 'https://github.com/mrtinsjoao',
        calendly: 'https://calendly.com/mrtins-joao/30min' // Update with your Calendly link
    },

    // ==================== NAVEGAÇÃO / NAVIGATION ====================
    nav: {
        en: {
            now: 'Now',
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            workTogether: 'Work Together'
        },
        pt: {
            now: 'Início',
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
            workTogether: 'Trabalhe Comigo'
        },
        es: {
            now: 'Inicio',
            about: 'Sobre Mí',
            experience: 'Experiencia',
            projects: 'Proyectos',
            workTogether: 'Trabajemos Juntos'
        }
    },

    // ==================== HERO / NOW ====================
    hero: {
        en: {
            greeting: "Hi, I'm",
            name: 'João Vitor Martins',
            subtitle: 'Lead Data Engineer | Data Architect | Solutions Architect',
            description: 'I transform data into <strong>strategic decisions</strong>. With over 10 years of experience, I help companies build robust data infrastructures that generate <strong>real business impact</strong>.',
            ctaPrimary: "Let's Talk",
            ctaSecondary: 'View Projects',
            ctaDownloadCV: 'Download CV',
            typewriterWords: [
                'Lead Data Engineer',
                'Data Architect',
                'Solutions Architect',
                'Analytics Expert'
            ],
            stats: {
                experience: { number: 'dynamic', label: 'Years of Experience', startYear: 2016 },
                projects: { number: '+50', label: 'Projects Delivered' },
                languages: { number: '3', label: 'Languages' }
            }
        },
        pt: {
            greeting: 'Olá, eu sou',
            name: 'João Vitor Martins',
            subtitle: 'Lead Data Engineer | Data Architect | Solutions Architect',
            description: 'Transformo dados em <strong>decisões estratégicas</strong>. Com mais de 10 anos de experiência, ajudo empresas a construir infraestruturas de dados robustas que geram <strong>impacto real no negócio</strong>.',
            ctaPrimary: 'Vamos Conversar',
            ctaSecondary: 'Ver Projetos',
            ctaDownloadCV: 'Baixar CV',
            typewriterWords: [
                'Lead Data Engineer',
                'Arquiteto de Dados',
                'Arquiteto de Soluções',
                'Especialista em Analytics'
            ],
            stats: {
                experience: { number: 'dynamic', label: 'Anos de Experiência', startYear: 2016 },
                projects: { number: '+50', label: 'Projetos Entregues' },
                languages: { number: '3', label: 'Idiomas' }
            }
        },
        es: {
            greeting: 'Hola, soy',
            name: 'João Vitor Martins',
            subtitle: 'Lead Data Engineer | Arquitecto de Datos | Arquitecto de Soluciones',
            description: 'Transformo datos en <strong>decisiones estratégicas</strong>. Con más de 10 años de experiencia, ayudo a empresas a construir infraestructuras de datos robustas que generan <strong>impacto real en el negocio</strong>.',
            ctaPrimary: 'Hablemos',
            ctaSecondary: 'Ver Proyectos',
            ctaDownloadCV: 'Descargar CV',
            typewriterWords: [
                'Lead Data Engineer',
                'Arquitecto de Datos',
                'Arquitecto de Soluciones',
                'Especialista en Analytics'
            ],
            stats: {
                experience: { number: 'dynamic', label: 'Años de Experiencia', startYear: 2016 },
                projects: { number: '+50', label: 'Proyectos Entregados' },
                languages: { number: '3', label: 'Idiomas' }
            }
        }
    },

    // ==================== ABOUT ====================
    about: {
        en: {
            title: 'About',
            intro: "Nice to meet you! You can call me <strong>JV</strong>.",
            paragraphs: [
                "I've been working with data for over <strong>10 years</strong>, and if you take a closer look at my profile, you'll find a wide range of valuable experience across different industries - from healthcare and pharma to automotive and manufacturing.",
                "I'm passionate about solving problems and delivering practical solutions to various challenges. Currently, I work as <strong>Lead Data Engineer at Medtronic</strong> (USA) and also run my own consulting company, <strong>DadosNow</strong>, where I help companies transform their data into competitive advantage.",
                "My expertise spans <strong>Data Architecture</strong>, <strong>Data Engineering</strong>, <strong>BI & Analytics</strong>, and <strong>Cloud Solutions</strong>. I've worked with companies like Novartis, Hospital Sírio-Libanês, Shoulder, Embraer, Ford, and Fleury.",
                "I hold a <strong>Master in Data Science and AI</strong> from Sirius Educação (MBA)."
            ],
            languagesTitle: 'Languages',
            languages: [
                { name: 'Portuguese', level: 'Native' },
                { name: 'English', level: 'Fluent' },
                { name: 'Spanish', level: 'Fluent' }
            ],
            skillsTitle: 'Stack & Skills',
            skills: {
                dataEngineering: {
                    title: 'Data Engineering',
                    items: ['Python', 'SQL', 'Snowflake', 'Databricks', 'AWS Glue', 'Pentaho', 'ETL/ELT']
                },
                dataArchitecture: {
                    title: 'Data Architecture',
                    items: ['Data Lake', 'Data Warehouse', 'Data Modeling', 'Snowflake', 'AWS Redshift', 'SAP Integration']
                },
                biAnalytics: {
                    title: 'BI & Analytics',
                    items: ['Qlik Sense', 'QlikView', 'Power BI', 'Tableau', 'Qlik Cloud', 'NPrinting']
                },
                cloudTools: {
                    title: 'Cloud & Tools',
                    items: ['AWS', 'GCP', 'Snowflake', 'Alteryx', 'SAP BW/4HANA', 'Oracle']
                }
            }
        },
        pt: {
            title: 'Sobre',
            intro: "Prazer, pode me chamar de <strong>JV</strong>.",
            paragraphs: [
                "Trabalho com dados há mais de <strong>10 anos</strong>, e se você olhar meu perfil de perto, encontrará uma ampla experiência em diferentes indústrias - desde saúde e farmacêutica até automotiva e manufatura.",
                "Sou apaixonado por resolver problemas e entregar soluções práticas para diversos desafios. Atualmente, trabalho como <strong>Lead Data Engineer na Medtronic</strong> (EUA) e também dirijo minha própria empresa de consultoria, <strong>DadosNow</strong>, onde ajudo empresas a transformar seus dados em vantagem competitiva.",
                "Minha expertise abrange <strong>Arquitetura de Dados</strong>, <strong>Engenharia de Dados</strong>, <strong>BI & Analytics</strong> e <strong>Soluções Cloud</strong>. Já trabalhei com empresas como Novartis, Hospital Sírio-Libanês, Shoulder, Embraer, Ford e Fleury.",
                "Possuo <strong>Master in Data Science and AI</strong> pela Sirius Educação (MBA)."
            ],
            languagesTitle: 'Idiomas',
            languages: [
                { name: 'Português', level: 'Nativo' },
                { name: 'Inglês', level: 'Fluente' },
                { name: 'Espanhol', level: 'Fluente' }
            ],
            skillsTitle: 'Stack & Competências',
            skills: {
                dataEngineering: {
                    title: 'Data Engineering',
                    items: ['Python', 'SQL', 'Snowflake', 'Databricks', 'AWS Glue', 'Pentaho', 'ETL/ELT']
                },
                dataArchitecture: {
                    title: 'Data Architecture',
                    items: ['Data Lake', 'Data Warehouse', 'Data Modeling', 'Snowflake', 'AWS Redshift', 'SAP Integration']
                },
                biAnalytics: {
                    title: 'BI & Analytics',
                    items: ['Qlik Sense', 'QlikView', 'Power BI', 'Tableau', 'Qlik Cloud', 'NPrinting']
                },
                cloudTools: {
                    title: 'Cloud & Tools',
                    items: ['AWS', 'GCP', 'Snowflake', 'Alteryx', 'SAP BW/4HANA', 'Oracle']
                }
            }
        },
        es: {
            title: 'Sobre Mí',
            intro: "¡Mucho gusto! Puedes llamarme <strong>JV</strong>.",
            paragraphs: [
                "Llevo más de <strong>10 años</strong> trabajando con datos, y si miras mi perfil de cerca, encontrarás una amplia experiencia en diferentes industrias - desde salud y farmacéutica hasta automotriz y manufactura.",
                "Me apasiona resolver problemas y entregar soluciones prácticas. Actualmente trabajo como <strong>Lead Data Engineer en Medtronic</strong> (EE.UU.) y también dirijo mi propia empresa de consultoría, <strong>DadosNow</strong>, donde ayudo a empresas a transformar sus datos en ventaja competitiva.",
                "Mi experiencia abarca <strong>Arquitectura de Datos</strong>, <strong>Ingeniería de Datos</strong>, <strong>BI & Analytics</strong> y <strong>Soluciones Cloud</strong>. He trabajado con empresas como Novartis, Hospital Sírio-Libanês, Shoulder, Embraer, Ford y Fleury.",
                "Tengo un <strong>Master in Data Science and AI</strong> de Sirius Educação (MBA)."
            ],
            languagesTitle: 'Idiomas',
            languages: [
                { name: 'Portugués', level: 'Nativo' },
                { name: 'Inglés', level: 'Fluido' },
                { name: 'Español', level: 'Fluido' }
            ],
            skillsTitle: 'Stack & Habilidades',
            skills: {
                dataEngineering: {
                    title: 'Data Engineering',
                    items: ['Python', 'SQL', 'Snowflake', 'Databricks', 'AWS Glue', 'Pentaho', 'ETL/ELT']
                },
                dataArchitecture: {
                    title: 'Data Architecture',
                    items: ['Data Lake', 'Data Warehouse', 'Data Modeling', 'Snowflake', 'AWS Redshift', 'SAP Integration']
                },
                biAnalytics: {
                    title: 'BI & Analytics',
                    items: ['Qlik Sense', 'QlikView', 'Power BI', 'Tableau', 'Qlik Cloud', 'NPrinting']
                },
                cloudTools: {
                    title: 'Cloud & Tools',
                    items: ['AWS', 'GCP', 'Snowflake', 'Alteryx', 'SAP BW/4HANA', 'Oracle']
                }
            }
        }
    },

    // ==================== EXPERIENCE ====================
    experience: {
        en: {
            title: 'Experience',
            subtitle: 'Professional journey and impacts generated across industries',
            impactsLabel: 'Key Contributions:',
            timeline: [
                {
                    company: 'Medtronic',
                    role: 'Lead Data Engineer',
                    period: 'Jun 2025 - Present',
                    location: 'United States',
                    description: 'Leading data engineering initiatives at one of the largest medical technology companies in the world.',
                    impacts: [
                        'Creating and managing pipelines in Snowflake environment',
                        'Designing and structuring data engineering projects',
                        'Building dataflows in Power BI with Microsoft API integrations',
                        'Connecting SAP tables (SAP BW, SAC, Datasphere) - Creating FACT and DIM tables',
                        'Leading Data Engineering for Operations Innovation team'
                    ]
                },
                {
                    company: 'DadosNow',
                    role: 'IT Director / Solutions Architect',
                    period: 'Nov 2021 - Present',
                    location: 'São Paulo, Brazil',
                    description: 'Founder and director of my own consulting company, delivering data solutions to enterprise clients.',
                    impacts: [
                        '<strong>Prime Energy (Shell Company) - Data Architect:</strong> Designed complete Data Lake architecture using Medallion model (Bronze/Silver/Gold). Led implementation project and coordinated developer team. CI/CD and Kanban/Scrum methodologies. Built foundation for future AI, Machine Learning, and API integrations',
                        '<strong>Shoulder (Fashion Retail):</strong> Data architecture and analytics solutions for one of Brazil\'s largest fashion retailers',
                        '<strong>Solidaridad:</strong> Designed and implemented new Data Lake architecture with AWS Glue and Athena',
                        '<strong>Fleury:</strong> Led restructuring and unification of Pardini and Fleury environments after merger',
                        '<strong>Ford LATAM:</strong> Delivered analytics solutions for global teams, built unified KPI dashboard for Brazil and Argentina',
                        '<strong>Vipal:</strong> Managed QlikView environments, restructured license usage reducing contract costs'
                    ]
                },
                {
                    company: 'Novartis Brasil',
                    role: 'Data Architect',
                    period: 'Jul 2023 - Jun 2025',
                    location: 'São Paulo, Brazil',
                    description: 'Solution Architect leading global data projects and managing BI environments.',
                    impacts: [
                        'Led implementation of global data project using Snowflake',
                        'Collaborated with global team to make new data available across systems',
                        'Managed Qlik Sense and Power BI environments',
                        'Developed market distribution monitoring applications with Business Insights team',
                        'Processed and optimized IQVIA data with local business rules and dashboards'
                    ]
                },
                {
                    company: 'Hospital Sírio-Libanês',
                    role: 'Data Specialist',
                    period: 'Oct 2021 - Jul 2023',
                    location: 'São Paulo, Brazil',
                    description: 'Led innovative BI projects and cloud migrations at one of Latin Americas top hospitals.',
                    impacts: [
                        'Led development of BI projects using Power BI and Qlik Sense',
                        'Planned and executed QlikView/Qlik Sense server migrations',
                        'Oversaw complete migration from QlikView/Qlik Sense to Power BI',
                        'Designed new table structures in AWS Redshift as Data Engineer',
                        'Led intercloud migration from AWS to Oracle Cloud Infrastructure (OCI)'
                    ]
                },
                {
                    company: 'Shoulder',
                    role: 'Business Analyst',
                    period: 'Jul 2021 - Apr 2023',
                    location: 'São Paulo, Brazil',
                    description: 'Led strategic development of BI applications at one of Brazil\'s largest fashion retailers, concurrent with Hospital Sírio-Libanês.',
                    impacts: [
                        'Led strategic development of QlikView and Qlik Sense applications with SQL Server integration',
                        'Managed full project lifecycle from concept to delivery, creating data-driven dashboards',
                        'Administered Qlik servers ensuring performance, stability, and reliability',
                        'Designed and implemented automation processes in SQL and Qlik, optimizing data flows',
                        '<strong>Key Project:</strong> Built CRM structure for targeting potential clients and running tailored marketing campaigns'
                    ]
                },
                {
                    company: 'SONDA',
                    role: 'Analytics Senior',
                    period: 'Sep 2019 - Jul 2021',
                    location: 'São José dos Campos, Brazil',
                    description: 'Tech Lead at consulting firm specialized in Qlik, responsible for project prioritization and delivery.',
                    impacts: [
                        '<strong>Embraer/Boeing Carveout:</strong> Led Qlik environment split and data cleaning',
                        '<strong>MFA Server Consolidation:</strong> Unified 48 AD MFA servers in 5 days (planned for 3 months)',
                        'Designed ETL processes using Pentaho for complex Data Warehouse environments',
                        'Delivered data integration projects using SAP ECC/4HANA tables',
                        'Built Power BI dashboards with real-time SQL integrations'
                    ]
                },
                {
                    company: 'Uniodonto São José dos Campos',
                    role: 'Business Data Analyst',
                    period: 'Dec 2018 - Sep 2019',
                    location: 'São José dos Campos, Brazil',
                    description: 'Led BI initiatives and process optimization at one of the largest dental cooperatives in the region.',
                    impacts: [
                        'Developed applications and KPIs using QlikView and Qlik Sense',
                        'Administered QlikView and Qlik Sense servers',
                        'Led process optimization initiatives using QlikView',
                        '<strong>Key Achievement:</strong> Delivered a high-impact project generating R$ 250,000 in immediate business value'
                    ]
                },
                {
                    company: 'Embraer',
                    role: 'IT Intern (Data Analyst)',
                    period: 'Oct 2017 - Dec 2018',
                    location: 'São José dos Campos, Brazil',
                    description: 'Started my data career at one of the worlds largest aircraft manufacturers.',
                    impacts: [
                        'Developed BI applications using QlikView',
                        'Managed and supported Oracle Databases',
                        'Created automation robots in VBS and C#',
                        'Supported PHP and JavaScript portal development'
                    ]
                }
            ]
        },
        pt: {
            title: 'Experiência',
            subtitle: 'Trajetória profissional e impactos gerados em diferentes indústrias',
            impactsLabel: 'Principais Contribuições:',
            timeline: [
                {
                    company: 'Medtronic',
                    role: 'Lead Data Engineer',
                    period: 'Jun 2025 - Presente',
                    location: 'Estados Unidos',
                    description: 'Liderando iniciativas de engenharia de dados em uma das maiores empresas de tecnologia médica do mundo.',
                    impacts: [
                        'Criação e gestão de pipelines em ambiente Snowflake',
                        'Design e estruturação de projetos de engenharia de dados',
                        'Construção de dataflows no Power BI com integrações de API Microsoft',
                        'Conexão com tabelas SAP (SAP BW, SAC, Datasphere) - Criação de tabelas FACT e DIM',
                        'Liderança de Data Engineering para time de Operations Innovation'
                    ]
                },
                {
                    company: 'DadosNow',
                    role: 'Diretor de TI / Arquiteto de Soluções',
                    period: 'Nov 2021 - Presente',
                    location: 'São Paulo, Brasil',
                    description: 'Fundador e diretor da minha própria empresa de consultoria, entregando soluções de dados para clientes enterprise.',
                    impacts: [
                        '<strong>Prime Energy (Shell Company) - Data Architect:</strong> Desenhei arquitetura completa de Data Lake utilizando modelo Medallion (Bronze/Silver/Gold). Liderei projeto de implantação e coordenei equipe de desenvolvedores. CI/CD e utilização Kanban e Scrum. Construí fundação para futuras integrações de IA, Machine Learning e APIs',
                        '<strong>Shoulder (Fashion Retail):</strong> Arquitetura de dados e soluções analytics para uma das maiores varejistas de moda do Brasil',
                        '<strong>Solidaridad:</strong> Projetei e implementei nova arquitetura de Data Lake com AWS Glue e Athena',
                        '<strong>Fleury:</strong> Liderei reestruturação e unificação dos ambientes Pardini e Fleury após fusão',
                        '<strong>Ford LATAM:</strong> Entreguei soluções analytics para times globais, construí dashboard KPI unificado Brasil/Argentina',
                        '<strong>Vipal:</strong> Gerenciei ambientes QlikView, reestruturei uso de licenças reduzindo custos'
                    ]
                },
                {
                    company: 'Novartis Brasil',
                    role: 'Data Architect',
                    period: 'Jul 2023 - Jun 2025',
                    location: 'São Paulo, Brasil',
                    description: 'Arquiteto de Soluções liderando projetos globais de dados e gerenciando ambientes de BI.',
                    impacts: [
                        'Liderei implementação de projeto global de dados usando Snowflake',
                        'Colaborei com time global para disponibilizar novos dados entre sistemas',
                        'Gerenciei ambientes Qlik Sense e Power BI',
                        'Desenvolvi aplicações de monitoramento de distribuição de mercado com time de Business Insights',
                        'Processei e otimizei dados IQVIA com regras de negócio locais e dashboards'
                    ]
                },
                {
                    company: 'Hospital Sírio-Libanês',
                    role: 'Data Specialist',
                    period: 'Out 2021 - Jul 2023',
                    location: 'São Paulo, Brasil',
                    description: 'Liderei projetos inovadores de BI e migrações cloud em um dos maiores hospitais da América Latina.',
                    impacts: [
                        'Liderei desenvolvimento de projetos de BI usando Power BI e Qlik Sense',
                        'Planejei e executei migrações de servidores QlikView/Qlik Sense',
                        'Supervisionei migração completa de QlikView/Qlik Sense para Power BI',
                        'Projetei novas estruturas de tabelas no AWS Redshift como Data Engineer',
                        'Liderei migração intercloud de AWS para Oracle Cloud Infrastructure (OCI)'
                    ]
                },
                {
                    company: 'Shoulder',
                    role: 'Business Analyst',
                    period: 'Jul 2021 - Abr 2023',
                    location: 'São Paulo, Brasil',
                    description: 'Liderei desenvolvimento estratégico de aplicações de BI em uma das maiores varejistas de moda do Brasil, concomitante com o Hospital Sírio-Libanês.',
                    impacts: [
                        'Liderei desenvolvimento estratégico de aplicações QlikView e Qlik Sense com integração SQL Server',
                        'Gerenciei ciclo completo de projetos do conceito à entrega, criando dashboards data-driven',
                        'Administrei servidores Qlik garantindo performance, estabilidade e confiabilidade',
                        'Projetei e implementei processos de automação em SQL e Qlik, otimizando fluxos de dados',
                        '<strong>Projeto Chave:</strong> Construí estrutura de CRM para targeting de clientes potenciais e campanhas de marketing personalizadas'
                    ]
                },
                {
                    company: 'SONDA',
                    role: 'Analytics Senior',
                    period: 'Set 2019 - Jul 2021',
                    location: 'São José dos Campos, Brasil',
                    description: 'Tech Lead em consultoria especializada em Qlik, responsável por priorização e entrega de projetos.',
                    impacts: [
                        '<strong>Embraer/Boeing Carveout:</strong> Liderei separação de ambiente Qlik e limpeza de dados',
                        '<strong>Consolidação Servidores MFA:</strong> Unifiquei 48 servidores AD MFA em 5 dias (planejado para 3 meses)',
                        'Projetei processos ETL usando Pentaho para ambientes complexos de Data Warehouse',
                        'Entreguei projetos de integração de dados usando tabelas SAP ECC/4HANA',
                        'Construí dashboards Power BI com integrações SQL em tempo real'
                    ]
                },
                {
                    company: 'Uniodonto São José dos Campos',
                    role: 'Business Data Analyst',
                    period: 'Dez 2018 - Set 2019',
                    location: 'São José dos Campos, Brasil',
                    description: 'Liderei iniciativas de BI e otimização de processos em uma das maiores cooperativas odontológicas da região.',
                    impacts: [
                        'Desenvolvi aplicações e KPIs usando QlikView e Qlik Sense',
                        'Administrei servidores QlikView e Qlik Sense',
                        'Liderei iniciativas de otimização de processos usando QlikView',
                        '<strong>Destaque:</strong> Entreguei projeto de alto impacto gerando R$ 250.000 em valor imediato ao negócio'
                    ]
                },
                {
                    company: 'Embraer',
                    role: 'Estagiário de TI (Data Analyst)',
                    period: 'Out 2017 - Dez 2018',
                    location: 'São José dos Campos, Brasil',
                    description: 'Iniciei minha carreira em dados em uma das maiores fabricantes de aeronaves do mundo.',
                    impacts: [
                        'Desenvolvi aplicações de BI usando QlikView',
                        'Gerenciei e dei suporte a Bancos de Dados Oracle',
                        'Criei robôs de automação em VBS e C#',
                        'Suportei desenvolvimento de portal PHP e JavaScript'
                    ]
                }
            ]
        }
    },

    // ==================== PROJECTS ====================
    projects: {
        en: {
            title: 'Projects',
            subtitle: 'Key projects delivered and measurable results achieved',
            resultLabel: 'Result:',
            items: [
                {
                    icon: 'lakehouse',
                    title: 'Global Data Platform - Snowflake',
                    description: 'Led implementation of enterprise data platform at Novartis, integrating global data sources and enabling cross-system analytics.',
                    tags: ['Snowflake', 'SAP', 'Power BI', 'Global'],
                    result: 'Unified data access for global teams'
                },
                {
                    icon: 'pipeline',
                    title: 'Data Lake Architecture - AWS',
                    description: 'Designed the complete technical solution and led the implementation of a new Data Lake architecture for Solidaridad, including Python automation, AWS Glue ETL pipelines, and Athena queries.',
                    tags: ['AWS Glue', 'Athena', 'Python', 'S3'],
                    result: 'End-to-end technical design and implementation'
                },
                {
                    icon: 'bi',
                    title: 'Fleury + Pardini Merger',
                    description: 'Led the restructuring and unification of Qlik Sense and Qlik Cloud environments after the merger of two major healthcare companies.',
                    tags: ['Qlik Sense', 'Qlik Cloud', 'Migration', 'Healthcare'],
                    result: 'Unified analytics environment post-merger'
                },
                {
                    icon: 'governance',
                    title: 'MFA Server Consolidation',
                    description: 'Successfully unified 48 Active Directory MFA servers into a single environment at SONDA/Embraer.',
                    tags: ['Infrastructure', 'Active Directory', 'Security'],
                    result: 'Delivered in 5 days (planned for 3 months)'
                },
                {
                    icon: 'bi',
                    title: 'Ford LATAM Analytics',
                    description: 'Developed unified KPI dashboard for dealerships across Brazil and Argentina with credential-based access portal.',
                    tags: ['Qlik Sense', 'Qlik Cloud', 'KPIs', 'LATAM'],
                    result: 'Analytics for global teams BR/AR'
                },
                {
                    icon: 'pipeline',
                    title: 'Cloud Migration AWS to OCI',
                    description: 'Led intercloud server migration from AWS to Oracle Cloud Infrastructure at Hospital Sírio-Libanês with zero downtime.',
                    tags: ['AWS', 'OCI', 'Migration', 'Healthcare'],
                    result: 'Seamless migration with high availability'
                }
            ]
        },
        pt: {
            title: 'Projetos',
            subtitle: 'Principais projetos entregues e resultados mensuráveis alcançados',
            resultLabel: 'Resultado:',
            items: [
                {
                    icon: 'lakehouse',
                    title: 'Plataforma Global de Dados - Snowflake',
                    description: 'Liderei implementação de plataforma de dados enterprise na Novartis, integrando fontes de dados globais e habilitando analytics cross-system.',
                    tags: ['Snowflake', 'SAP', 'Power BI', 'Global'],
                    result: 'Acesso unificado de dados para times globais'
                },
                {
                    icon: 'pipeline',
                    title: 'Arquitetura Data Lake - AWS',
                    description: 'Desenhei toda a solução técnica e liderei a implementação de uma nova arquitetura de Data Lake para Solidaridad, incluindo automação Python, pipelines ETL AWS Glue e queries Athena.',
                    tags: ['AWS Glue', 'Athena', 'Python', 'S3'],
                    result: 'Design técnico e implementação end-to-end'
                },
                {
                    icon: 'bi',
                    title: 'Fusão Fleury + Pardini',
                    description: 'Liderei reestruturação e unificação dos ambientes Qlik Sense e Qlik Cloud após fusão de duas grandes empresas de saúde.',
                    tags: ['Qlik Sense', 'Qlik Cloud', 'Migração', 'Saúde'],
                    result: 'Ambiente analytics unificado pós-fusão'
                },
                {
                    icon: 'governance',
                    title: 'Consolidação Servidores MFA',
                    description: 'Unifiquei com sucesso 48 servidores Active Directory MFA em um único ambiente na SONDA/Embraer.',
                    tags: ['Infraestrutura', 'Active Directory', 'Segurança'],
                    result: 'Entregue em 5 dias (planejado para 3 meses)'
                },
                {
                    icon: 'bi',
                    title: 'Ford LATAM Analytics',
                    description: 'Desenvolvi dashboard KPI unificado para concessionárias no Brasil e Argentina com portal de acesso baseado em credenciais.',
                    tags: ['Qlik Sense', 'Qlik Cloud', 'KPIs', 'LATAM'],
                    result: 'Analytics para times globais BR/AR'
                },
                {
                    icon: 'pipeline',
                    title: 'Migração Cloud AWS para OCI',
                    description: 'Liderei migração intercloud de servidores de AWS para Oracle Cloud Infrastructure no Hospital Sírio-Libanês com zero downtime.',
                    tags: ['AWS', 'OCI', 'Migração', 'Saúde'],
                    result: 'Migração seamless com alta disponibilidade'
                }
            ]
        }
    },

    // ==================== CLIENTS ====================
    clients: {
        en: {
            title: 'Trusted By',
            subtitle: 'Companies I\'ve worked with'
        },
        pt: {
            title: 'Empresas que Confiam',
            subtitle: 'Empresas com as quais trabalhei'
        }
    },

    // ==================== WORK TOGETHER ====================
    workTogether: {
        en: {
            title: 'How We Can Work Together',
            subtitle: 'Flexible partnership models to meet your needs',
            models: [
                {
                    icon: 'person',
                    title: 'Hiring Me',
                    description: 'Direct hire as a dedicated professional for your project or team.',
                    benefits: [
                        'Exclusive dedication to the project',
                        'Integration with your team',
                        'Knowledge transfer',
                        'Continuous support'
                    ],
                    ideal: 'Ideal for: Long-term projects',
                    featured: false
                },
                {
                    icon: 'company',
                    title: 'Via DadosNow',
                    description: 'Hiring through my consulting company for structured data projects.',
                    benefits: [
                        'Proven methodology',
                        'Enterprise experience',
                        'Delivery with defined SLA',
                        'Contractual flexibility'
                    ],
                    ideal: 'Ideal for: Projects with defined scope',
                    featured: true,
                    badge: 'Most Popular'
                },
                {
                    icon: 'partnership',
                    title: 'Results Partnership',
                    description: 'I develop the project and receive part of the return generated by the solution.',
                    benefits: [
                        'Low initial investment',
                        'Alignment of interests',
                        'Commitment to results',
                        'Long-term partnership'
                    ],
                    ideal: 'Ideal for: Startups and innovative projects',
                    featured: false
                }
            ],
            differentialsTitle: 'Why work with me?',
            differentials: [
                {
                    number: '01',
                    title: '+10 Years Experience',
                    description: 'Extensive experience across healthcare, pharma, automotive, and manufacturing industries.'
                },
                {
                    number: '02',
                    title: 'Enterprise Track Record',
                    description: 'Delivered projects for Medtronic, Novartis, Embraer, Ford, Fleury, and Hospital Sírio-Libanês.'
                },
                {
                    number: '03',
                    title: 'End-to-End Solutions',
                    description: 'From Data Architecture to BI & Analytics - complete data solutions that drive business value.'
                },
                {
                    number: '04',
                    title: 'Global Experience',
                    description: 'Working with global teams, multilingual (PT/EN/ES), and understanding of international business.'
                }
            ],
            ctaTitle: 'Ready to transform your data into results?',
            ctaDescription: "Let's talk about how I can help your business grow with data.",
            ctaWhatsapp: 'WhatsApp',
            ctaSchedule: 'Schedule a Call',
            ctaEmail: 'Email',
            ctaLinkedIn: 'LinkedIn',
            formTitle: 'Or send me a message',
            formName: 'Your Name',
            formEmail: 'Your Email',
            formCompany: 'Company (optional)',
            formMessage: 'How can I help you?',
            formSubmit: 'Send Message'
        },
        pt: {
            title: 'Como Podemos Trabalhar Juntos',
            subtitle: 'Modelos flexíveis de parceria para atender às suas necessidades',
            models: [
                {
                    icon: 'person',
                    title: 'Me Contratando',
                    description: 'Contratação direta como profissional dedicado ao seu projeto ou equipe.',
                    benefits: [
                        'Dedicação exclusiva ao projeto',
                        'Integração com sua equipe',
                        'Transferência de conhecimento',
                        'Suporte contínuo'
                    ],
                    ideal: 'Ideal para: Projetos de longo prazo',
                    featured: false
                },
                {
                    icon: 'company',
                    title: 'Via DadosNow',
                    description: 'Contratação através da minha empresa de consultoria para projetos estruturados de dados.',
                    benefits: [
                        'Metodologia comprovada',
                        'Experiência enterprise',
                        'Entrega com SLA definido',
                        'Flexibilidade contratual'
                    ],
                    ideal: 'Ideal para: Projetos com escopo definido',
                    featured: true,
                    badge: 'Mais Popular'
                },
                {
                    icon: 'partnership',
                    title: 'Parceria nos Resultados',
                    description: 'Desenvolvo o projeto e recebo parte do retorno gerado pela solução.',
                    benefits: [
                        'Baixo investimento inicial',
                        'Alinhamento de interesses',
                        'Compromisso com resultados',
                        'Parceria de longo prazo'
                    ],
                    ideal: 'Ideal para: Startups e projetos inovadores',
                    featured: false
                }
            ],
            differentialsTitle: 'Por que trabalhar comigo?',
            differentials: [
                {
                    number: '01',
                    title: '+10 Anos de Experiência',
                    description: 'Ampla experiência em indústrias de saúde, farmacêutica, automotiva e manufatura.'
                },
                {
                    number: '02',
                    title: 'Track Record Enterprise',
                    description: 'Projetos entregues para Medtronic, Novartis, Embraer, Ford, Fleury e Hospital Sírio-Libanês.'
                },
                {
                    number: '03',
                    title: 'Soluções End-to-End',
                    description: 'De Arquitetura de Dados a BI & Analytics - soluções completas que geram valor ao negócio.'
                },
                {
                    number: '04',
                    title: 'Experiência Global',
                    description: 'Trabalho com times globais, multilíngue (PT/EN/ES) e entendimento de negócios internacionais.'
                }
            ],
            ctaTitle: 'Pronto para transformar seus dados em resultados?',
            ctaDescription: 'Vamos conversar sobre como posso ajudar seu negócio a crescer com dados.',
            ctaWhatsapp: 'WhatsApp',
            ctaSchedule: 'Agendar Conversa',
            ctaEmail: 'Email',
            ctaLinkedIn: 'LinkedIn',
            formTitle: 'Ou me envie uma mensagem',
            formName: 'Seu Nome',
            formEmail: 'Seu Email',
            formCompany: 'Empresa (opcional)',
            formMessage: 'Como posso ajudar?',
            formSubmit: 'Enviar Mensagem'
        }
    },

    // ==================== BLOG ====================
    blog: {
        en: {
            title: 'Blog & Articles',
            subtitle: 'Sharing knowledge about data, architecture, and engineering',
            comingSoon: 'More articles coming soon!',
            readTime: 'min read',
            articles: [
                {
                    title: 'Building a Modern Data Lake with Medallion Architecture',
                    excerpt: 'Learn how to structure your Data Lake using the Bronze, Silver, and Gold layers for better data quality and governance.',
                    date: 'Jan 2025',
                    readTime: 8,
                    tags: ['Data Lake', 'AWS', 'Architecture'],
                    url: '#',
                    icon: 'lakehouse'
                },
                {
                    title: 'From QlikView to Power BI: A Migration Guide',
                    excerpt: 'Best practices and lessons learned from migrating enterprise BI environments between platforms.',
                    date: 'Dec 2024',
                    readTime: 6,
                    tags: ['BI', 'Migration', 'Power BI'],
                    url: '#',
                    icon: 'bi'
                },
                {
                    title: 'Snowflake vs Databricks: Choosing Your Data Platform',
                    excerpt: 'A practical comparison based on real project experience to help you choose the right platform for your needs.',
                    date: 'Nov 2024',
                    readTime: 10,
                    tags: ['Snowflake', 'Databricks', 'Cloud'],
                    url: '#',
                    icon: 'pipeline'
                }
            ]
        },
        pt: {
            title: 'Blog & Artigos',
            subtitle: 'Compartilhando conhecimento sobre dados, arquitetura e engenharia',
            comingSoon: 'Mais artigos em breve!',
            readTime: 'min de leitura',
            articles: [
                {
                    title: 'Construindo um Data Lake Moderno com Arquitetura Medallion',
                    excerpt: 'Aprenda como estruturar seu Data Lake usando as camadas Bronze, Silver e Gold para melhor qualidade e governança de dados.',
                    date: 'Jan 2025',
                    readTime: 8,
                    tags: ['Data Lake', 'AWS', 'Arquitetura'],
                    url: '#',
                    icon: 'lakehouse'
                },
                {
                    title: 'De QlikView para Power BI: Um Guia de Migração',
                    excerpt: 'Melhores práticas e lições aprendidas na migração de ambientes de BI enterprise entre plataformas.',
                    date: 'Dez 2024',
                    readTime: 6,
                    tags: ['BI', 'Migração', 'Power BI'],
                    url: '#',
                    icon: 'bi'
                },
                {
                    title: 'Snowflake vs Databricks: Escolhendo sua Plataforma de Dados',
                    excerpt: 'Uma comparação prática baseada em experiência real de projetos para ajudá-lo a escolher a plataforma certa.',
                    date: 'Nov 2024',
                    readTime: 10,
                    tags: ['Snowflake', 'Databricks', 'Cloud'],
                    url: '#',
                    icon: 'pipeline'
                }
            ]
        },
        es: {
            title: 'Blog y Artículos',
            subtitle: 'Compartiendo conocimiento sobre datos, arquitectura e ingeniería',
            comingSoon: '¡Más artículos próximamente!',
            readTime: 'min de lectura',
            articles: [
                {
                    title: 'Construyendo un Data Lake Moderno con Arquitectura Medallion',
                    excerpt: 'Aprende cómo estructurar tu Data Lake usando las capas Bronze, Silver y Gold para mejor calidad y gobernanza de datos.',
                    date: 'Ene 2025',
                    readTime: 8,
                    tags: ['Data Lake', 'AWS', 'Arquitectura'],
                    url: '#',
                    icon: 'lakehouse'
                },
                {
                    title: 'De QlikView a Power BI: Una Guía de Migración',
                    excerpt: 'Mejores prácticas y lecciones aprendidas en la migración de ambientes de BI enterprise entre plataformas.',
                    date: 'Dic 2024',
                    readTime: 6,
                    tags: ['BI', 'Migración', 'Power BI'],
                    url: '#',
                    icon: 'bi'
                },
                {
                    title: 'Snowflake vs Databricks: Eligiendo tu Plataforma de Datos',
                    excerpt: 'Una comparación práctica basada en experiencia real de proyectos para ayudarte a elegir la plataforma correcta.',
                    date: 'Nov 2024',
                    readTime: 10,
                    tags: ['Snowflake', 'Databricks', 'Cloud'],
                    url: '#',
                    icon: 'pipeline'
                }
            ]
        }
    },

    // ==================== GITHUB ====================
    github: {
        en: {
            title: 'Open Source',
            subtitle: 'My contributions and projects on GitHub',
            repos: 'Repositories',
            stars: 'Stars',
            followers: 'Followers',
            viewProfile: 'View GitHub Profile'
        },
        pt: {
            title: 'Open Source',
            subtitle: 'Minhas contribuições e projetos no GitHub',
            repos: 'Repositórios',
            stars: 'Estrelas',
            followers: 'Seguidores',
            viewProfile: 'Ver Perfil no GitHub'
        },
        es: {
            title: 'Código Abierto',
            subtitle: 'Mis contribuciones y proyectos en GitHub',
            repos: 'Repositorios',
            stars: 'Estrellas',
            followers: 'Seguidores',
            viewProfile: 'Ver Perfil en GitHub'
        }
    },

    // ==================== CLIENTS ====================
    clients: {
        en: {
            title: 'Trusted By',
            subtitle: 'Companies I\'ve worked with'
        },
        pt: {
            title: 'Clientes',
            subtitle: 'Empresas com as quais trabalhei'
        },
        es: {
            title: 'Clientes',
            subtitle: 'Empresas con las que he trabajado'
        }
    },

    // ==================== FOOTER ====================
    footer: {
        en: {
            tagline: 'Transforming data into strategic decisions.',
            rights: '© 2025 João Vitor Martins. All rights reserved.'
        },
        pt: {
            tagline: 'Transformando dados em decisões estratégicas.',
            rights: '© 2025 João Vitor Martins. Todos os direitos reservados.'
        },
        es: {
            tagline: 'Transformando datos en decisiones estratégicas.',
            rights: '© 2025 João Vitor Martins. Todos los derechos reservados.'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
