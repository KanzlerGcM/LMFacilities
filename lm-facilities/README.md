# LM Facilities — Site institucional

Site em **Next.js 15 (App Router) + TypeScript**, totalmente estático (SSG), responsivo e otimizado para SEO.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório → **Deploy** (nenhuma configuração extra).
3. Quando tiver o domínio definitivo, crie a variável de ambiente
   `NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br` na Vercel e faça um novo deploy.
   Ela atualiza canonical, sitemap, robots e dados estruturados de uma vez.

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, e-mail, textos de todos os serviços, FAQ, depoimento | `lib/site.ts` |
| Cores e layout | `app/globals.css` (variáveis no topo) |
| Título e descrição do Google (home) | `app/layout.tsx` |
| Imagens | `public/images/` |

## Páginas

- `/` — Home (serviços, quem somos, diferenciais, benefícios, depoimento, FAQ)
- `/servicos` e uma página para cada serviço:
  `/servicos/portaria-controlador-de-acesso`, `/servicos/auxiliar-de-limpeza`,
  `/servicos/recepcionista`, `/servicos/ronda`, `/servicos/manutencao-predial`
- `/sobre`, `/contato` (formulário que abre o WhatsApp com a mensagem pronta)

## SEO incluído

- Título e meta description únicos por página, com palavras-chave locais (SP)
- Open Graph (prévia no WhatsApp/LinkedIn), canonical, `sitemap.xml`, `robots.txt`, manifest
- Dados estruturados (Schema.org): ProfessionalService, Service, FAQPage, BreadcrumbList
- Um H1 por página, hierarquia de títulos, textos alternativos nas imagens
- Imagens servidas em AVIF/WebP no tamanho certo para cada tela (`next/image`), fontes auto-hospedadas

## Depois do deploy (importante para aparecer no Google)

1. Cadastrar o site no **Google Search Console** e enviar `/sitemap.xml`.
2. Criar o **Perfil da Empresa no Google** (Google Meu Negócio) com o link do site.
   Para buscas locais, isso pesa tanto quanto o próprio site.
