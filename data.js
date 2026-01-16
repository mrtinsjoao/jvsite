/* ==========================================================================
   JV Martins - Site Data / Dados do Site

   COMO EDITAR:
   1. Encontre a seção que deseja editar (nav, hero, about, etc.)
   2. Edite o texto em 'en' (inglês) e 'pt' (português)
   3. Salve o arquivo e recarregue a página

   HOW TO EDIT:
   1. Find the section you want to edit (nav, hero, about, etc.)
   2. Edit the text in 'en' (English) and 'pt' (Portuguese)
   3. Save the file and refresh the page
   ========================================================================== */

const siteData = {
    // ==================== CONFIGURAÇÕES / SETTINGS ====================
    config: {
        defaultLanguage: 'en', // 'en' ou 'pt'
        whatsapp: '5511999999999', // Seu número com código do país (sem + ou espaços)
        email: 'mrtins.joao@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mrtinsjoao/',
        github: 'https://github.com/mrtinsjoao'
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
        }
    },

    // ==================== HERO / NOW ====================
    hero: {
        en: {
            greeting: "Hi, I'm",
            name: 'João Vitor Martins',
            subtitle: 'Data Architect & Data Engineer',
            description: 'I transform data into <strong>strategic decisions</strong>. I help companies build robust data infrastructures that generate <strong>real business impact</strong>.',
            ctaPrimary: "Let's Talk",
            ctaSecondary: 'View Projects',
            stats: {
                experience: { number: '+5', label: 'Years of Experience' },
                projects: { number: '+20', label: 'Projects Delivered' },
                languages: { number: '3', label: 'Languages' }
            }
        },
        pt: {
            greeting: 'Olá, eu sou',
            name: 'João Vitor Martins',
            subtitle: 'Arquiteto de Dados & Engenheiro de Dados',
            description: 'Transformo dados em <strong>decisões estratégicas</strong>. Ajudo empresas a construir infraestruturas de dados robustas que geram <strong>impacto real no negócio</strong>.',
            ctaPrimary: 'Vamos Conversar',
            ctaSecondary: 'Ver Projetos',
            stats: {
                experience: { number: '+5', label: 'Anos de Experiência' },
                projects: { number: '+20', label: 'Projetos Entregues' },
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
                "I'm a professional passionate about data and technology, with solid experience in <strong>Data Architecture</strong>, <strong>Data Engineering</strong>, and <strong>IT Projects</strong>. Currently, I'm pursuing a <strong>Master's in Business & Technology in Data Science and AI</strong>.",
                "My mission is to help companies transform their data into strategic assets, building efficient pipelines, scalable architectures, and solutions that truly impact the business.",
                "I work with companies of different sizes, from startups to multinationals like <strong>Medtronic</strong>, always focusing on delivering measurable value."
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
                    items: ['Python', 'SQL', 'Apache Spark', 'Airflow', 'ETL/ELT', 'Databricks', 'dbt']
                },
                dataArchitecture: {
                    title: 'Data Architecture',
                    items: ['Data Modeling', 'Data Warehouse', 'Data Lake', 'Lakehouse', 'Data Mesh', 'Data Governance']
                },
                cloudTools: {
                    title: 'Cloud & Tools',
                    items: ['AWS', 'Azure', 'GCP', 'Databricks', 'Snowflake', 'Terraform']
                },
                biAnalytics: {
                    title: 'BI & Analytics',
                    items: ['Power BI', 'Qlik', 'Tableau', 'Looker', 'Metabase']
                }
            }
        },
        pt: {
            title: 'Sobre',
            intro: "Prazer, pode me chamar de <strong>JV</strong>.",
            paragraphs: [
                "Sou um profissional apaixonado por dados e tecnologia, com experiência sólida em <strong>Arquitetura de Dados</strong>, <strong>Engenharia de Dados</strong> e <strong>Projetos de TI</strong>. Atualmente, estou cursando um <strong>Master em Business & Technology em Data Science e IA</strong>.",
                "Minha missão é ajudar empresas a transformar seus dados em ativos estratégicos, construindo pipelines eficientes, arquiteturas escaláveis e soluções que realmente impactam o negócio.",
                "Trabalho com empresas de diferentes portes, desde startups até multinacionais como a <strong>Medtronic</strong>, sempre focando em entregar valor mensurável."
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
                    items: ['Python', 'SQL', 'Apache Spark', 'Airflow', 'ETL/ELT', 'Databricks', 'dbt']
                },
                dataArchitecture: {
                    title: 'Data Architecture',
                    items: ['Data Modeling', 'Data Warehouse', 'Data Lake', 'Lakehouse', 'Data Mesh', 'Data Governance']
                },
                cloudTools: {
                    title: 'Cloud & Tools',
                    items: ['AWS', 'Azure', 'GCP', 'Databricks', 'Snowflake', 'Terraform']
                },
                biAnalytics: {
                    title: 'BI & Analytics',
                    items: ['Power BI', 'Qlik', 'Tableau', 'Looker', 'Metabase']
                }
            }
        }
    },

    // ==================== EXPERIENCE ====================
    experience: {
        en: {
            title: 'Experience',
            subtitle: 'Professional journey and impacts generated in each project',
            impactsLabel: 'Impacts:',
            timeline: [
                {
                    company: 'Medtronic',
                    role: 'Data Architect / Data Engineer',
                    period: 'Current',
                    description: 'Leading data architecture initiatives at one of the largest medical technology companies in the world.',
                    impacts: [
                        'Implementation of modern data architecture',
                        'Optimization of critical data pipelines',
                        'Standardization of data governance processes'
                    ]
                },
                {
                    company: 'Consulting Projects',
                    role: 'Data Consultant',
                    period: 'Ongoing',
                    description: 'Specialized consulting for companies seeking to transform their data into competitive advantage.',
                    impacts: [
                        'Operational cost reduction in data processing',
                        'Implementation of BI and Analytics solutions',
                        'Design of cloud-native architectures'
                    ]
                },
                {
                    company: 'Previous Experience',
                    role: 'Data Engineer / BI Developer',
                    period: '2019 - 2023',
                    description: 'Development of data solutions for companies in the São Paulo and São José dos Campos regions.',
                    impacts: [
                        'Building data warehouses from scratch',
                        'ETL process automation',
                        'Development of executive dashboards',
                        'Training and mentoring teams'
                    ]
                }
            ]
        },
        pt: {
            title: 'Experiência',
            subtitle: 'Trajetória profissional e impactos gerados em cada projeto',
            impactsLabel: 'Impactos:',
            timeline: [
                {
                    company: 'Medtronic',
                    role: 'Data Architect / Data Engineer',
                    period: 'Atual',
                    description: 'Liderando iniciativas de arquitetura de dados em uma das maiores empresas de tecnologia médica do mundo.',
                    impacts: [
                        'Implementação de arquitetura de dados moderna',
                        'Otimização de pipelines de dados críticos',
                        'Padronização de processos de governança de dados'
                    ]
                },
                {
                    company: 'Projetos de Consultoria',
                    role: 'Consultor de Dados',
                    period: 'Ongoing',
                    description: 'Consultoria especializada para empresas que buscam transformar seus dados em vantagem competitiva.',
                    impacts: [
                        'Redução de custos operacionais em processamento de dados',
                        'Implementação de soluções de BI e Analytics',
                        'Desenho de arquiteturas cloud-native'
                    ]
                },
                {
                    company: 'Experiências Anteriores',
                    role: 'Data Engineer / BI Developer',
                    period: '2019 - 2023',
                    description: 'Desenvolvimento de soluções de dados em empresas da região de São Paulo e São José dos Campos.',
                    impacts: [
                        'Construção de data warehouses do zero',
                        'Automação de processos de ETL',
                        'Desenvolvimento de dashboards executivos',
                        'Treinamento e mentoria de equipes'
                    ]
                }
            ]
        }
    },

    // ==================== PROJECTS ====================
    projects: {
        en: {
            title: 'Projects',
            subtitle: 'Some projects I developed and the results achieved',
            resultLabel: 'Result:',
            items: [
                {
                    icon: 'lakehouse',
                    title: 'Data Lakehouse Architecture',
                    description: 'Modern architecture combining Data Lake and Data Warehouse for real-time analytics.',
                    tags: ['Databricks', 'Delta Lake', 'Spark', 'AWS'],
                    result: '60% reduction in processing time'
                },
                {
                    icon: 'pipeline',
                    title: 'Cloud Data Pipeline',
                    description: 'Development of automated and scalable data pipelines in cloud environment.',
                    tags: ['AWS', 'Airflow', 'Python', 'Terraform'],
                    result: 'R$ 50k/month savings in infrastructure'
                },
                {
                    icon: 'bi',
                    title: 'BI & Analytics Platform',
                    description: 'Complete Business Intelligence platform for strategic decision making.',
                    tags: ['Qlik', 'Power BI', 'SQL', 'Data Modeling'],
                    result: '+30% operational efficiency'
                },
                {
                    icon: 'governance',
                    title: 'Data Governance Framework',
                    description: 'Implementation of data governance framework to ensure quality and compliance.',
                    tags: ['Data Quality', 'LGPD', 'Cataloging', 'Lineage'],
                    result: '100% regulatory compliance'
                }
            ]
        },
        pt: {
            title: 'Projetos',
            subtitle: 'Alguns projetos que desenvolvi e os resultados alcançados',
            resultLabel: 'Resultado:',
            items: [
                {
                    icon: 'lakehouse',
                    title: 'Arquitetura Data Lakehouse',
                    description: 'Arquitetura moderna combinando Data Lake e Data Warehouse para analytics em tempo real.',
                    tags: ['Databricks', 'Delta Lake', 'Spark', 'AWS'],
                    result: 'Redução de 60% no tempo de processamento'
                },
                {
                    icon: 'pipeline',
                    title: 'Pipeline de Dados em Cloud',
                    description: 'Desenvolvimento de pipelines de dados automatizados e escaláveis em ambiente cloud.',
                    tags: ['AWS', 'Airflow', 'Python', 'Terraform'],
                    result: 'Economia de R$ 50k/mês em infraestrutura'
                },
                {
                    icon: 'bi',
                    title: 'Plataforma de BI & Analytics',
                    description: 'Plataforma completa de Business Intelligence para tomada de decisão estratégica.',
                    tags: ['Qlik', 'Power BI', 'SQL', 'Data Modeling'],
                    result: '+30% em eficiência operacional'
                },
                {
                    icon: 'governance',
                    title: 'Framework de Data Governance',
                    description: 'Implementação de framework de governança de dados para garantir qualidade e compliance.',
                    tags: ['Data Quality', 'LGPD', 'Cataloging', 'Lineage'],
                    result: '100% de conformidade regulatória'
                }
            ]
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
                    title: 'Through My Company',
                    description: 'Hiring through my consulting company for structured projects.',
                    benefits: [
                        'Specialized team',
                        'Proven methodology',
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
                    title: 'Proven Experience',
                    description: 'Years of experience in data projects for companies of various sizes and segments.'
                },
                {
                    number: '02',
                    title: 'Results Focused',
                    description: 'Every project is guided by clear metrics and measurable business impact.'
                },
                {
                    number: '03',
                    title: 'End-to-End Vision',
                    description: 'From architecture to implementation, I deliver complete and functional solutions.'
                },
                {
                    number: '04',
                    title: 'Clear Communication',
                    description: 'I translate technical complexity into business language for stakeholders.'
                }
            ],
            ctaTitle: 'Ready to transform your data into results?',
            ctaDescription: "Let's talk about how I can help your business grow with data.",
            ctaWhatsapp: 'WhatsApp',
            ctaEmail: 'Email',
            ctaLinkedIn: 'LinkedIn'
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
                    title: 'Via Minha Empresa',
                    description: 'Contratação através da minha empresa de consultoria para projetos estruturados.',
                    benefits: [
                        'Equipe especializada',
                        'Metodologia comprovada',
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
                    title: 'Experiência Comprovada',
                    description: 'Anos de experiência em projetos de dados para empresas de diversos portes e segmentos.'
                },
                {
                    number: '02',
                    title: 'Foco em Resultados',
                    description: 'Cada projeto é orientado a métricas claras e impacto mensurável no negócio.'
                },
                {
                    number: '03',
                    title: 'Visão End-to-End',
                    description: 'Da arquitetura à implementação, entrego soluções completas e funcionais.'
                },
                {
                    number: '04',
                    title: 'Comunicação Clara',
                    description: 'Traduzo complexidade técnica em linguagem de negócio para stakeholders.'
                }
            ],
            ctaTitle: 'Pronto para transformar seus dados em resultados?',
            ctaDescription: 'Vamos conversar sobre como posso ajudar seu negócio a crescer com dados.',
            ctaWhatsapp: 'WhatsApp',
            ctaEmail: 'Email',
            ctaLinkedIn: 'LinkedIn'
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
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
