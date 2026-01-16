# JV Martins - Portfolio Website

Portfolio profissional para João Vitor Martins - Data Architect & Data Engineer.

## Estrutura do Projeto

```
jvsite/
├── index.html      # Página principal (HTML estrutural)
├── styles.css      # Estilos (dark theme, responsivo)
├── script.js       # JavaScript (i18n, animações, interações)
├── data.js         # DADOS DO SITE - Edite aqui para atualizar conteúdo
├── assets/         # Imagens e recursos
│   └── profile.jpg # Sua foto de perfil
└── README.md       # Esta documentação
```

## Como Editar o Conteúdo

### Arquivo Principal: `data.js`

Todo o conteúdo do site está centralizado no arquivo `data.js`. Para editar:

1. Abra o arquivo `data.js`
2. Encontre a seção que deseja editar
3. Edite os textos em `en` (inglês) e `pt` (português)
4. Salve e recarregue a página

### Seções Disponíveis:

| Seção | O que editar |
|-------|-------------|
| `config` | WhatsApp, Email, LinkedIn, GitHub |
| `hero` | Título, subtítulo, descrição, stats |
| `about` | Sobre você, idiomas, skills |
| `experience` | Timeline de experiências profissionais |
| `projects` | Projetos e resultados |
| `workTogether` | Modelos de trabalho, diferenciais |
| `footer` | Tagline e copyright |

### Exemplo de Edição:

```javascript
// Em data.js, para mudar seu WhatsApp:
config: {
    whatsapp: '5511999999999', // Seu número com código do país
    email: 'seu@email.com',
    // ...
}

// Para adicionar uma nova experiência:
experience: {
    en: {
        timeline: [
            {
                company: 'Nova Empresa',
                role: 'Seu Cargo',
                period: '2024 - Present',
                description: 'Descrição do que você faz.',
                impacts: [
                    'Impacto 1',
                    'Impacto 2'
                ]
            },
            // ... outras experiências
        ]
    },
    pt: {
        // Mesma estrutura em português
    }
}
```

## Funcionalidades

- **Bilíngue (EN/PT)**: Toggle no topo para trocar idioma instantaneamente
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Dark Theme**: Design profissional escuro
- **Animações**: Scroll animations e counters
- **WhatsApp Float**: Botão flutuante para contato rápido
- **SEO Ready**: Meta tags configuradas

## Como Adicionar Sua Foto

1. Coloque sua foto na pasta `assets/`
2. Renomeie para `profile.jpg`
3. No `index.html`, substitua o placeholder:

```html
<!-- De: -->
<div class="profile-placeholder">
    <span>JV</span>
</div>

<!-- Para: -->
<img src="assets/profile.jpg" alt="João Vitor Martins" class="profile-photo">
```

## Hospedagem

### GitHub Pages (Gratuito)

1. Vá em Settings > Pages no repositório
2. Source: Deploy from branch
3. Branch: main / root
4. Acesse: `https://mrtinsjoao.github.io/jvsite`

### Domínio Personalizado

Para usar um domínio próprio (ex: jvmartins.com):

1. Compre o domínio (Registro.br ~R$40/ano, Cloudflare ~$10/ano)
2. No GitHub Pages, adicione o domínio em Custom Domain
3. Configure o DNS do domínio para apontar ao GitHub

### Outras Opções Gratuitas

- **Vercel**: Conecte o repo e deploy automático
- **Netlify**: Drag & drop ou conecte o repo
- **Cloudflare Pages**: Deploy via GitHub

## Testar Localmente

```bash
# Opção 1: Abra diretamente
open index.html  # macOS
start index.html # Windows

# Opção 2: Server local
npx serve .
# ou
python -m http.server 8000
```

## Próximos Passos / Roadmap

### Concluído
- [x] Adicionar foto de perfil real (otimizada de 9.6MB para 70KB)
- [x] Atualizar experiências com dados reais do LinkedIn/CV
- [x] Adicionar mais projetos com resultados específicos
- [x] Criar seção de clientes (logos)
- [x] Implementar formulário de contato (Formspree - notificações por email ativas)
- [x] Adicionar botão Calendly (configurado)
- [x] Anos de experiência dinâmicos (desde 2016)
- [x] Adicionar Shoulder na timeline

### Próxima Tarefa
- [ ] **[0] Configurar domínio personalizado**

### Pendente
- [ ] Adicionar analytics (Google Analytics ou Plausible)
- [ ] Adicionar blog/artigos (opcional)
- [ ] Adicionar seção de certificações/badges
- [ ] Adicionar depoimentos de clientes (testimonials)
- [ ] Adicionar botão de download do CV em PDF
- [ ] Implementar dark/light mode toggle
- [ ] Adicionar animação de typing no hero (typewriter effect)
- [ ] Adicionar seção de artigos/publicações técnicas
- [ ] Integrar com GitHub API para mostrar repos/contribuições
- [ ] Adicionar mapa de calor de visitantes (analytics avançado)
- [ ] PWA - permitir instalação como app no celular
- [ ] Adicionar chat ao vivo (Crisp, Tawk.to, etc.)
- [ ] Multi-idioma adicional (Espanhol)
- [ ] Seção de FAQ sobre serviços

## Tecnologias

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+, Intersection Observer)
- Google Fonts (Inter)

## Contato

- **LinkedIn**: [linkedin.com/in/mrtinsjoao](https://www.linkedin.com/in/mrtinsjoao/)
- **GitHub**: [github.com/mrtinsjoao](https://github.com/mrtinsjoao)
- **Email**: mrtins.joao@gmail.com

---

Desenvolvido com Claude Code
