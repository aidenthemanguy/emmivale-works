# Emmivale Works

Emmivale Works is a client-facing studio website for a small commercial technology studio offering websites, custom software, business systems, and ongoing care.

Production domain: `emmivaleworks.com`

## Current Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint

## Current Site

The studio site includes the experimental homepage, work overview, two complete Velora case studies, and the Start a Project inquiry flow.

## Development

Run the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Route Structure

- `/`
- `/work`
- `/work/velora-auto-detail`
- `/work/velora-manager`
- `/start-a-project`

There is intentionally no `/services` route. Services, process, and about content live on the homepage.

## Project Inquiry Architecture

The Start a Project form uses a small client component for form state and posts to a same-origin Next.js Route Handler:

```text
Browser
  -> POST /api/project-inquiries
  -> server validation and honeypot check
  -> Resend email delivery
```

Inquiry credentials remain server-only. Configure these environment variables in the deployment environment:

```text
RESEND_API_KEY=
PROJECT_INQUIRY_FROM_EMAIL=
PROJECT_INQUIRY_TO_EMAIL=
```

`PROJECT_INQUIRY_FROM_EMAIL` must be an Emmivale-controlled sender verified with the email provider. The submitter's email is used as `Reply-To`, never as the sender. Inquiries are delivered by email and are not stored in a database.

## Brand Direction

The visual direction is Quiet Craft: human, warm, thoughtful, precise, calm, inventive, and trustworthy. The visual foundation uses typography, generous spacing, thin rules, restrained color, and careful composition rather than heavy decoration or generic SaaS patterns.

Emmivale Works should not structurally resemble the Velora Auto Detail website. Emmivale is a studio portfolio and should feel editorial, exploratory, and work-led, with selected work as the primary visual evidence.

Palette:

- Deep Ink: `#171A18`
- Warm Ivory: `#F4F0E8`
- Muted Moss: `#64715D`
- Copper / Clay: `#B86F52`
- Soft Stone: `#D8D2C7`

## Portfolio Honesty

Velora Auto Detail and Velora Manager are fictional portfolio concepts built to demonstrate Emmivale Works' design and development capabilities. They are not client projects or operating businesses.
