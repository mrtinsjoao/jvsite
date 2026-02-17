# JV Martins - Portfolio Website

Portfolio profissional para João Vitor Martins - Lead Data Engineer & Data Architect.

**URL em produção:** https://mrtinsjoao.com

---

## Estrutura do Projeto

```
jvsite/
├── index.html       # Página principal (HTML estrutural)
├── styles.css       # Estilos (dark/light theme, responsivo, animações)
├── script.js        # JavaScript (i18n, animações, interações, PWA)
├── data.js          # DADOS DO SITE - Edite aqui para atualizar conteúdo
├── sw.js            # Service Worker (PWA / cache offline)
├── manifest.json    # Configuração PWA
├── robots.txt       # Configuração para crawlers de busca
├── sitemap.xml      # Sitemap para SEO
├── CNAME            # Domínio personalizado (mrtinsjoao.com)
├── assets/
│   ├── jv-optimized.jpg   # Foto de perfil (70KB, otimizada)
│   └── icons/             # Ícones PWA (72px ~ 512px)
└── docs/
    └── cv.pdf       # Currículo para download
```

---

## Como Editar o Conteúdo

### Arquivo Principal: `data.js`

Todo o conteúdo do site está centralizado em `data.js`. Para editar:

1. Abra `data.js`
2. Encontre a seção desejada
3. Edite os textos nos idiomas `en`, `pt` e `es`
4. Salve e recarregue a página

### Seções Disponíveis:

| Seção | O que editar |
|-------|-------------|
| `config` | WhatsApp, Email, LinkedIn, GitHub, Calendly |
| `nav` | Labels da navegação (EN/PT/ES) |
| `hero` | Título, subtítulo, descrição, stats, typewriter words |
| `about` | Sobre você, idiomas, skills |
| `experience` | Timeline de experiências profissionais (EN/PT/ES) |
| `projects` | Projetos e resultados (EN/PT/ES) |
| `blog` | Artigos do blog (EN/PT/ES) |
| `github` | Labels da seção GitHub |
| `clients` | Labels da seção de clientes |
| `workTogether` | Modelos de trabalho, diferenciais, formulário |
| `footer` | Tagline e copyright |

> **Atenção:** Ao adicionar novas entradas na `experience`, inclua sempre as três versões de idioma: `en`, `pt` **e** `es`.

### Exemplo de Edição:

```javascript
// Em data.js, para mudar seu WhatsApp:
config: {
    whatsapp: '5511999999999', // Número com código do país (sem + ou espaços)
    email: 'seu@email.com',
    // ...
}

// Para adicionar uma nova experiência (incluir EN, PT e ES):
experience: {
    en: {
        timeline: [
            {
                company: 'New Company',
                role: 'Your Role',
                period: '2025 - Present',
                location: 'City, Country',
                description: 'What you do here.',
                impacts: ['Impact 1', 'Impact 2']
            },
            // ...
        ]
    },
    pt: { /* mesma estrutura em português */ },
    es: { /* mesma estrutura em espanhol */ }
}
```

---

## Funcionalidades

- **Trilíngue (EN/PT/ES)**: Toggle no topo para trocar idioma instantaneamente
- **Dark/Light Theme**: Alternância de tema com persistência via localStorage
- **PWA**: Site instalável como app com suporte offline via Service Worker
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Animações**: Scroll animations com IntersectionObserver e counters animados
- **Typewriter**: Animação de digitação no hero com palavras rotativas
- **SEO Completo**: Open Graph, Twitter Cards, JSON-LD (Schema.org), canonical URL, sitemap e robots.txt
- **WhatsApp Float**: Botão flutuante aparece após 400px de scroll
- **GitHub API**: Carrega repositórios e estatísticas em tempo real (cache de 30min)
- **Blog**: Artigos com links para LinkedIn
- **Analytics GA4**: Rastreamento de eventos customizados (download CV, contato, idioma, tema, etc.)
- **Formulário de Contato**: Integrado com Formspree (notificações por email ativas)
- **Calendly**: Agendamento de reuniões integrado
- **Skeleton Loading**: Placeholders animados enquanto dados do GitHub carregam

---

## SEO

O site possui configuração completa de SEO:

- **Meta description** otimizada para palavras-chave relevantes
- **Open Graph** (Facebook, LinkedIn) para compartilhamento rico
- **Twitter Cards** para pré-visualização no Twitter/X
- **JSON-LD (Schema.org Person)** para rich results no Google
- **Canonical URL**: `https://mrtinsjoao.com/`
- **sitemap.xml**: Indexação multi-idioma com `hreflang`
- **robots.txt**: Permissão total para crawlers
- **lang attribute**: Atualizado dinamicamente conforme idioma selecionado

---

## Performance

- Imagem de perfil otimizada (9.6MB → 70KB)
- `<link rel="preload">` na imagem principal (melhora LCP)
- `loading="lazy"` na imagem de perfil
- `data.js` carregado com `defer` (não bloqueia parsing do HTML)
- Service Worker com cache-first strategy para assets
- Google Fonts com `preconnect`

---

## Acessibilidade

- HTML semântico (nav, section, article, footer)
- `aria-label` em todos os botões de ação (idioma, WhatsApp, tema)
- `aria-pressed` nos cards de modelo de trabalho (seleção)
- `aria-hidden` em ícones decorativos
- Work model cards são elementos `<button>` nativos (navegação por teclado automática)
- `rel="noopener noreferrer"` em todos os links externos com `target="_blank"`

---

## Como Adicionar Artigos ao Blog

No `data.js`, seção `blog`, adicione um item ao array `articles` em cada idioma:

```javascript
{
    title: 'Título do Artigo',
    excerpt: 'Resumo do artigo em 1-2 linhas.',
    date: 'Feb 2026',
    readTime: 5,
    tags: ['Tag1', 'Tag2'],
    url: 'https://www.linkedin.com/posts/...',
    icon: 'pipeline' // lakehouse | pipeline | bi | article
}
```

---

## Hospedagem e Deploy

### GitHub Pages (atual)

O site está hospedado no GitHub Pages com domínio personalizado via `CNAME`.

```bash
# Deploy é automático ao fazer push para main
git add .
git commit -m "Update content"
git push origin main
```

### Domínio Personalizado

Configurado em `CNAME`: `mrtinsjoao.com`

### Outras Opções

- **Vercel**: Conecte o repo — deploy automático
- **Netlify**: Drag & drop ou via GitHub
- **Cloudflare Pages**: Deploy via GitHub com CDN global

---

## Testar Localmente

```bash
# Opção 1: Server local com Node
npx serve .

# Opção 2: Python
python -m http.server 8000

# Acesse: http://localhost:8000
```

> Não abra `index.html` diretamente no browser — o Service Worker precisa de um servidor HTTP.

---

## Tecnologias

- HTML5 (semântico, acessível)
- CSS3 (Custom Properties, Grid, Flexbox, animações nativas)
- JavaScript ES6+ (sem frameworks — vanilla)
- Google Fonts (Inter)
- Formspree (formulário de contato)
- Google Analytics 4
- GitHub API (repositórios e stats)
- Calendly (agendamento)

---

## Changelog

### Fev 2026 — Auditoria e melhorias técnicas completas

- **Bug fix:** Adicionada tradução em espanhol (`es`) para a seção `experience` — estava ausente, causando fallback para inglês
- **Bug fix:** Removida chave `clients` duplicada no `data.js`
- **Bug fix:** Copyright atualizado para 2026 nos três idiomas
- **SEO:** Adicionadas tags Open Graph e Twitter Cards
- **SEO:** Adicionado JSON-LD `Schema.org/Person` para rich results no Google
- **SEO:** Adicionada canonical URL
- **SEO:** Criados `robots.txt` e `sitemap.xml` com suporte multi-idioma (`hreflang`)
- **Performance:** `data.js` carregado com `defer` — não bloqueia mais o rendering
- **Performance:** Adicionado `<link rel="preload">` para a imagem principal (LCP)
- **Performance:** Adicionado `loading="lazy"` e dimensões explícitas na imagem de perfil
- **Performance:** CSS de animações movido do JavaScript para `styles.css`
- **Acessibilidade:** `aria-label` descritivos adicionados nos botões de idioma (EN/PT/ES)
- **Acessibilidade:** Work model cards convertidos de `<div>` para `<button>` — navegação por teclado nativa
- **Acessibilidade:** `aria-pressed` adicionado nos cards de seleção de modelo de trabalho
- **Acessibilidade:** `rel="noopener noreferrer"` adicionado em todos os links com `target="_blank"`
- **UX:** WhatsApp float button agora aparece somente após 400px de scroll (não compete com o hero)
- **UX:** GitHub section exibe skeleton loading animado enquanto a API carrega
- **UX:** Blog "More articles coming soon" oculto automaticamente quando há artigos
- **UX:** Mensagem de status do formulário de contato traduzida para espanhol
- **Código:** Removidos `console.log` de produção no Service Worker
- **Código:** `startYear` de cálculo de anos de experiência agora lido do `data.js` (era hardcoded em dois lugares)

---

## Contato

- **LinkedIn**: [linkedin.com/in/mrtinsjoao](https://www.linkedin.com/in/mrtinsjoao/)
- **GitHub**: [github.com/mrtinsjoao](https://github.com/mrtinsjoao)
- **Email**: mrtins.joao@gmail.com
- **Site**: [mrtinsjoao.com](https://mrtinsjoao.com)

---

Desenvolvido com Claude Code
