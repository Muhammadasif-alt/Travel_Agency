# Nusrat Travel & Tours — Next.js

A modern Next.js 15 (App Router) site for Nusrat Travel & Tours built with:

- **Next.js 15** + React 19 + TypeScript
- **Tailwind CSS** (with custom brand tokens)
- **shadcn/ui** primitives (Button, Input, Textarea, Select, Label, Card)
- **React Hook Form** + **Zod** for form validation
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Folder structure

```
travel_agency/
├── app/
│   ├── globals.css         # Tailwind layers + CSS variables
│   ├── layout.tsx          # Root layout with Poppins + Amiri fonts
│   └── page.tsx            # Home page composition
├── components/
│   ├── layout/             # TopBar, Navbar, Footer, WhatsAppFloat
│   ├── sections/           # Hero, SearchBox, Services, Packages,
│   │                       # About, Testimonials, FAQ, Contact, ContactForm
│   └── ui/                 # shadcn primitives
├── lib/
│   ├── utils.ts            # cn() helper
│   └── site-data.ts        # All static content (nav, services, packages, FAQs)
├── components.json         # shadcn/ui config
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint
