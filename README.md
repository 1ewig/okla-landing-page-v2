# OKLA Pakistan — Next-Gen Electric Mobility Redesign

> **Ride the Future.** A premium, high-performance, and beautifully engineered responsive landing page redesign for **OKLA Pakistan** — pioneering next-generation electric scooters built for the unique demands of Pakistani roads.

---

## ⚡ Project Overview

This project is a high-fidelity, professional-grade redesign of the OKLA Pakistan landing page. It showcases OKLA's lineup of advanced electric scooters (E-scooters) with an emphasis on technical precision, sustainability, and substantial cost-of-ownership savings compared to traditional petrol motorcycles. 

The application is styled with a sleek, premium dark-charcoal and vibrant lime-green color palette, utilizing smooth scroll-triggered animations and rich interactive widgets to deliver an elite digital experience.

---

## ✨ Key Features

### 1. 🚲 Dynamic Product Showroom
An interactive, filterable catalog showcasing the complete OKLA Pakistan lineup:
* **Orbit** (Commuter)
* **OKT Lithium** (Commuter)
* **OMO** (Style)
* **OMIGO** (Women-Friendly)
* **OKG** (Performance)
* **OVA** (Premium)
* Displays real-time specs (speed, range, motor capacity, pricing, and specialized category tags) with smooth filtering transitions.

### 2. 🧮 Interactive Fuel Savings Calculator
A highly personalized, real-time economic calculator allowing prospective buyers to compare their current petrol motorcycle expenses against an OKLA E-scooter:
* Input variables for daily commute distance, current fuel mileage (km/l), petrol price, and electricity rates.
* Instant calculations of daily/monthly/annual savings.
* Visual payback period gauge and projected 1-year, 3-year, and 5-year cumulative savings graphs.
* Tailored financial advice detailing how quickly an OKLA scooter pays for itself (usually under 12 months!).

### 3. 🎯 Why Choose OKLA Section
A curated highlight of OKLA's pioneering technology, detailing:
* **Long-Lasting LFP & Lithium Batteries** (60–130 km range, 0-80% fast charging in under 3 hours)
* **Integrated Hill Assist** (confidence on steep inclines up to 17°)
* **Smart TFT Dashboards** (real-time IoT connectivity, speed, and trip statistics)
* **Advanced Safety** (dual hydraulic disk brakes with CBS and robust framing)
* **Hub Motor Design** (low moving parts, zero-maintenance drivetrain)

### 4. 🗺️ Interactive Experience Center & Dealer Locator
An organized directory mapping OKLA's infrastructure across Pakistan:
* Showcases official Experience Centers, Assembly Plants, and licensed dealers.
* Major locations covered: **Lahore** (DHA Ph 8 Commercial & Sundar Industrial Estate Assembly Plant), **Karachi** (Shahrah-e-Faisal), **Islamabad** (DHA Ph II), **Multan**, **Sialkot**, **Faisalabad**, and **Gujranwala**.

### 5. 💳 Financing & Installment Estimator
Flexible, transparent payment breakdowns allowing customers to visualize structured monthly installment terms (12, 18, or 24-month terms) with instant down-payment adjustments.

---

## 🛠️ Tech Stack

* **Core**: React 18 + TypeScript + Vite (for lightning-fast compilation and HMR)
* **Styling**: Tailwind CSS v3 (using fluid utility values, precise layout grid layouts, and custom animations)
* **Interactions**: Framer Motion (for smooth scroll-triggered transitions, list filtering animations, and absolute layout shifts)
* **Icons**: Lucide React (for a clean, consistent modern icon system)

---

## 📁 Repository Structure

```bash
okla-pakistan-ui-specification/
├── src/
│   ├── components/
│   │   ├── layout/            # Sticky Navbar, Multi-column Footer
│   │   ├── sections/          # Hero, Features, Showroom, Calculator, Locator, Financing
│   │   └── ui/                # Shared UI controls (SectionHeaders, FilterTabs, Cards)
│   ├── hooks/                 # Custom logic (useSavingsCalculator, useActiveSection)
│   ├── utils/
│   │   ├── constants.ts       # Central data store (scooter specifications, dealer locations)
│   │   └── animationVariants.ts # Shared framer-motion variants
│   ├── App.tsx                # Main container aggregating all layout blocks
│   ├── index.css              # Custom brand color definitions and utility variables
│   └── main.tsx               # Application entry point
├── public/                    # Image assets (high-res scooter renders, graphics)
├── tailwind.config.js         # Theme customization (brand colors, fonts, marquee animations)
└── package.json               # Package dependencies & build commands
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) and npm installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/1ewig/okla-landing-page-v2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd okla-pakistan-ui-specification
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build
To compile and build optimal, production-ready static assets in the `dist/` directory:
```bash
npm run build
```

---

## 🌟 Professional Redesign Highlights
* **Vibrant Aesthetics**: Swapped traditional plain designs for a state-of-the-art dark-slate (`#1E1E1C`) and lime-green (`#C8F000`) color palette.
* **Flawless Navigation**: Re-engineered sticky navbar scrolling with active indicators, completely syncing with the actual page rendering sequence.
* **Dynamic Marquee Strip**: Designed a sleek, full-screen specifications marquee ribbon that slides elegantly at an optimal, readable pace.
* **Precision & Clean Code**: Refactored styling variables, modular components, and static layout data for high-level reuse and performance.
