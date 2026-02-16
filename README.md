<div align="center">

# AdForge AI

### AI-Powered Ad Creation Platform

**Generate scroll-stopping video ads, scripts, and creatives in minutes — not days.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](#) &bull; [Report Bug](https://github.com/SyedBahjat/AdForge-AI/issues) &bull; [Request Feature](https://github.com/SyedBahjat/AdForge-AI/issues)

---

<img src="public/images/ai-engine.png" alt="AdForge AI - AI Ad Generator Platform" width="600"/>

</div>

## The Problem

Creating high-converting ads is **expensive** and **time-consuming**. Businesses spend thousands on agencies, wait weeks for deliverables, and still end up with ads that don't perform. Small creators and startups are left behind because they can't afford professional ad production.

## The Solution

**AdForge AI** is an open-source AI-powered platform that lets anyone create professional video ads, scripts, and creatives through a simple chat interface. Tell the AI what you need, and it generates ready-to-publish content for TikTok, YouTube, Instagram, Facebook, and LinkedIn.

## Key Features

<table>
<tr>
<td width="50%">

### AI Script Generator
Generate compelling ad scripts tailored to your brand voice, target audience, and platform. Choose from awareness, sales, emotional, funny, luxury, or educational ad styles.

</td>
<td width="50%">

### Auto-Video Builder
Transform scripts into polished video ads with AI. Set duration (5–60s), resolution (landscape/portrait), and style (story/promo) — the AI handles the rest.

</td>
</tr>
<tr>
<td width="50%">

### Multi-Platform Targeting
Optimized output for every major platform. Content is automatically formatted for TikTok, YouTube Shorts, Instagram Reels, Facebook Ads, and LinkedIn campaigns.

</td>
<td width="50%">

### Creative Studio Chat
An intuitive chat workspace where you collaborate with AI. Upload images, attach PDFs, record audio — refine your ads through natural conversation.

</td>
</tr>
</table>

## How It Works

```
Step 1: Set Up Your Brand     →  Name, logo, slogan, and brand identity
Step 2: Define Your Strategy  →  Ad goal, brand tone, style & mood
Step 3: Add Product Details   →  Product name, description, key selling points
Step 4: Configure Video       →  Style, duration, resolution, target platform
         ↓
     Chat & Create            →  Generate ads through AI-powered conversation
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) with App Router |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |

## Getting Started

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/SyedBahjat/AdForge-AI.git

# Navigate to the project
cd AdForge-AI

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
AdForge-AI/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Landing page
│   ├── layout.tsx             # Root layout with fonts & theme
│   ├── signup/                # Authentication page
│   ├── wizard/                # 4-step onboarding wizard
│   └── workspace/             # AI chat workspace
│
├── components/
│   ├── ui/                    # 50+ shadcn/ui components
│   ├── wizard/                # Onboarding step components
│   │   ├── step1.tsx          # Brand information
│   │   ├── step2.tsx          # Ad strategy selection
│   │   ├── step3.tsx          # Product details
│   │   ├── step4.tsx          # Video preferences
│   │   └── confirmation.tsx   # Success screen
│   └── workspace/             # Chat interface components
│       ├── chat-panel.tsx     # Main chat area
│       ├── sidebar.tsx        # Conversation history
│       ├── chat-navbar.tsx    # Top navigation bar
│       └── settings-modal.tsx # Video settings
│
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets & images
└── styles/                    # Global CSS & theme variables
```

## Screenshots

<div align="center">

| Landing Page | Onboarding Wizard |
|:---:|:---:|
| Modern hero section with feature showcase | 4-step guided brand setup |

| AI Chat Workspace | Video Settings |
|:---:|:---:|
| Conversational AI interface for ad creation | Configure duration, style & platform |

</div>

> **Want to add screenshots?** Run the app locally, capture your screens, add them to `public/screenshots/`, and update the table above with `<img>` tags.

## Roadmap

- [x] Landing page with feature showcase
- [x] User signup with form validation
- [x] 4-step onboarding wizard
- [x] AI chat workspace interface
- [x] Dark / Light mode support
- [x] Responsive design (mobile-first)
- [x] Multi-model selector (GPT-4, Gemini 2.0, Claude)
- [ ] Backend API integration
- [ ] AI-powered script generation
- [ ] Video generation pipeline
- [ ] User authentication with database
- [ ] Conversation persistence
- [ ] Payment & subscription system
- [ ] Asset library & media storage
- [ ] Analytics dashboard
- [ ] Team collaboration features

## Contributing

Contributions make the open-source community amazing. Any contribution you make is **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## Connect with Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-SyedBahjat-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SyedBahjat)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad_Bahjat-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammadbahjat/)

**Built by [Muhammad Bahjat](https://www.linkedin.com/in/muhammadbahjat/)**

If this project helped you, please give it a star!

</div>

---

<div align="center">

**[AdForge AI](https://github.com/SyedBahjat/AdForge-AI)** — Stop paying agencies. Start creating ads with AI.

</div>
