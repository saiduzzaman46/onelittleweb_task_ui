# OneLittleWeb Task UI

This project is a modern UI implementation for a web task, built using **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## 🚀 Features
- **Modern UI Components**: Built with React 19 for high performance.
- **Tailwind CSS 4**: Uses the latest Tailwind for sleek design and utility-first styling.
- **Section-based Architecture**: Clear separation of components by their functional sections.
- **Responsive Layout**: Optimized for various screen sizes.

## 📁 Project Structure
The project follows a clean and modular structure:

```text
onelittleweb_task_ui/
├── public/                # Static assets (images, icons, etc.)
├── src/
│   ├── app/               # Next.js App Router (pages & layouts)
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Main landing page
│   │   └── globals.css    # Global Tailwind styles
│   ├── core/              # Core utilities and settings
│   ├── data/              # Mock data or constant values
│   ├── interfaces/        # TypeScript interfaces and types
│   ├── sections/          # Feature-specific components
│   │   ├── faq/           # FAQ section components
│   │   ├── hero/          # Hero section components
│   │   ├── pricing/       # Pricing table and cards
│   │   ├── review/        # User reviews and testimonials
│   │   ├── service/       # Services overview section
│   │   └── tools/         # Integrated tools display
│   └── shared/            # Reusable UI components
│       └── components/    # Common UI elements and layouts
│           ├── layout/    # Navbar, Footer, etc.
│           └── ui/        # Reusable buttons, cards, inputs.
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Tech Stack
- **Framework**: Next.js 16
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## 🏁 Getting Started

### Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/saiduzzaman46/onelittleweb_task_ui.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build & Deploy
To build for production:
```bash
npm run build
```
The application will be optimized for best performance and ready for deployment.
