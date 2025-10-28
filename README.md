# Track Accounting Landing Page

A responsive Next.js landing page for Track Accounting, built with App Router and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Brand-Compliant**: Follows Track Accounting brand guidelines
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Interactive Components**: Forms, carousels, and accordions
- **API Integration**: Lead capture form with API endpoint

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Poppins (headings), Inter (body)
- **Icons**: Heroicons (SVG)

## Brand Colors

- **Navy**: #0D1B2A (Primary)
- **Teal**: #1B9AAA (Accent)
- **Light Blue**: #E0FBFC (Background)
- **White**: #FFFFFF
- **Gray**: #6C757D (Text)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/lead/route.ts    # Lead form API endpoint
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx             # Main landing page
└── components/
    ├── Header.tsx           # Navigation header
    ├── Hero.tsx             # Hero section with inline form
    ├── Services.tsx         # Services grid
    ├── Testimonials.tsx     # Client testimonials
    ├── Process.tsx          # How it works section
    ├── Pricing.tsx          # Pricing plans
    ├── LeadForm.tsx         # Comprehensive lead form
    ├── FAQs.tsx             # FAQ accordion
    └── Footer.tsx           # Site footer
```

## Sections

1. **Header**: Logo, navigation, CTA button
2. **Hero**: Main headline, subheadline, inline form
3. **Services**: 4 service cards with icons
4. **Testimonials**: Client quotes with carousel
5. **Process**: 4-step process with icons
6. **Pricing**: 3 pricing tiers
7. **Lead Form**: Comprehensive contact form
8. **FAQs**: Accordion-style FAQ section
9. **Footer**: Links, contact info, social media

## API Endpoints

### POST /api/lead

Handles lead form submissions with validation.

**Request Body:**
```json
{
  "name": "string",
  "business": "string", 
  "email": "string",
  "phone": "string",
  "services": ["string"],
  "message": "string"
}
```

**Response:**
```json
{
  "message": "Lead submitted successfully",
  "leadId": "LEAD-1234567890"
}
```

## Deployment

The app is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

## Customization

- Update brand colors in `tailwind.config.ts`
- Modify content in component files
- Add new sections by creating components and importing them in `page.tsx`
- Update API endpoint in `/api/lead/route.ts` to integrate with your backend

## License

Private - Track Accounting







