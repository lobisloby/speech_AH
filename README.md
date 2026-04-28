Here is the updated `README.md` file with the name **NeuralVoice** and your professional handle, **AyoubCoder**, integrated throughout.

---

```markdown
<div align="center">

<img src="https://33uee5uclf.ufs.sh/f/fa600f97-6cf2-4759-8641-3093d13591bf-6rrk6b.png" alt="NeuralVoice" width="720" />

<br />
<br />

<h1>NeuralVoice</h1>

<p>The open-source ElevenLabs alternative.</p>

<p>AI-powered text-to-speech and voice cloning built by <strong>AyoubCoder</strong> using Next.js 16, React 19, and Chatterbox TTS.</p>

<br />

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/SioRb1?referralCode=ANTONIO&utm_medium=integration&utm_source=template&utm_campaign=generic)

<br />

<p>
  <a href="https://cwa.run/clerk"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" /></a>&nbsp;
  <a href="https://cwa.run/polar"><img src="https://img.shields.io/badge/Polar-000000?style=for-the-badge&logo=polar&logoColor=white" alt="Polar" /></a>&nbsp;
  <a href="https://cwa.run/railway"><img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway" /></a>&nbsp;
  <a href="https://cwa.run/sentry"><img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" /></a>&nbsp;
  <a href="https://cwa.run/coderabbit"><img src="https://img.shields.io/badge/CodeRabbit-FF6C37?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="CodeRabbit" /></a>&nbsp;
  <a href="https://cwa.run/prisma"><img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" /></a>
</p>

</div>

<br />

## Features

- **Text-to-Speech** - Generate speech from text with adjustable creativity, variety, expression, and flow parameters.
- **Zero-Shot Voice Cloning** - Upload or record a voice sample (10s minimum) and clone it instantly - no fine-tuning required.
- **20 Built-in Voices** - Pre-seeded system voices across 12 categories and 5 locales.
- **Waveform Audio Player** - WaveSurfer.js visualization with seek, play/pause, and download.
- **Multi-Tenant** - Team-based access via Clerk Organizations with full data isolation.
- **Usage-Based Billing** - Pay-as-you-go character metering with configurable pricing via Polar products and meters.
- **Generation History** - Browse and replay past generations with preserved voice metadata.
- **Fully Responsive** - Mobile-first with bottom drawers, compact controls, and adaptive layouts.

## Getting Started

### Prerequisites

- Node.js **20.9** or later
- [Prisma Postgres](https://cwa.run/prisma) database
- [Clerk](https://cwa.run/clerk) account (with Organizations enabled)
- [Cloudflare R2](https://cwa.run/cloudflare-r2) bucket
- [Modal](https://cwa.run/modal) account (for GPU-hosted TTS)
- [Polar](https://cwa.run/polar) account (for billing)

### 1. Clone and install

```bash
git clone [https://github.com/AyoubCoder/neuralvoice.git](https://github.com/AyoubCoder/neuralvoice.git)
cd neuralvoice
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Fill in the blank values in `.env`. Sensible defaults (Clerk routes, Polar meter names, `APP_URL`, etc.) are pre-filled.

### 3. Set up Polar billing

In your [Polar](https://cwa.run/polar) dashboard, create two **meters** under **Meters**:

1. **Voice Creation** meter
   - Filter: Name equals `voice_creation`
   - Aggregation: **Count**

2. **Text-to-Speech Characters** meter
   - Filter: Name equals `tts_generation`
   - Aggregation: **Sum** over `characters`

Ensure **Allow multiple subscriptions** is turned **off** under **Settings > Billing**. Copy the product ID into `POLAR_PRODUCT_ID`.

### 4. Set up the database

```bash
npx prisma migrate deploy
```

### 5. Deploy the TTS engine

Before deploying, update `chatterbox_tts.py` with your R2 credentials:

```python
R2_BUCKET_NAME = "<your-r2-bucket-name-here>"
R2_ACCOUNT_ID = "<your-r2-account-id-here>"
```

Deploy to Modal:

```bash
modal deploy chatterbox_tts.py
```

Once deployed, generate the type-safe Chatterbox client:

```bash
npm run sync-api
```

### 6. Seed voices

```bash
npx prisma db seed
```

### 7. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Self-Hosting

**NeuralVoice** is designed to be self-hosted. You'll need:

1. **A PostgreSQL database** - Prisma Postgres or any managed Postgres.
2. **Cloudflare R2** - For audio storage.
3. **Modal** - For serverless GPU inference.
4. **Clerk** - For authentication.
5. **Polar** - For metered billing.

## Project Structure

```
src/
├── app/                        # Next.js App Router
├── components/                 # Shared UI components
├── features/
│   ├── dashboard/              # Home page
│   ├── text-to-speech/         # TTS form & audio player
│   ├── voices/                 # Voice library & cloning
│   └── billing/                # Usage & checkout
├── lib/                        # Core: db, r2, polar, chatterbox client
├── trpc/                       # tRPC routers & client
└── types/                      # Generated API types
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run sync-api` | Regenerate Chatterbox API types |

## Acknowledgements

- Built by **AyoubCoder**.
- [Chatterbox TTS](https://github.com/resemble-ai/chatterbox) by Resemble AI.
- [Modal](https://cwa.run/modal-tts) for serverless GPU deployment.
```
