# Tile Gallery App

A responsive tile gallery web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, **HeroUI**, and **Better Auth**. The project showcases tile products, supports search and filtering, and includes authentication with profile management.

## Features

- Responsive homepage with banner slider and featured tiles
- Tile gallery with searchable product listings
- Dynamic tile cards with product information
- User authentication with Better Auth
- Social login support (Google OAuth)
- User profile view and profile update flow
- Responsive footer with contact form
- Loading and error pages

## Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **HeroUI**
- **Better Auth**
- **Framer Motion**
- **Swiper**

## Project Structure

```text
src/
 ├─ app/
 ├─ components/
 ├─ context/
 ├─ helper/
 ├─ lib/
 ├─ types/
 └─ data/
```

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Production (Vercel)

```env
NEXT_PUBLIC_APP_URL=https://b13-a08-saddam.vercel.app
BETTER_AUTH_URL=https://b13-a08-saddam.vercel.app
```

## Google OAuth Redirect URIs

Add these in **Google Cloud Console → OAuth Client → Authorized redirect URIs**:

```text
http://localhost:3000/api/auth/callback/google
https://b13-a08-saddam.vercel.app/api/auth/callback/google
```

## Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Data Source

Tile data is loaded from a local JSON source and passed into client components for rendering.

## Deployment

The project is deployed on **Vercel**.

Production URL:

```text
https://b13-a08-saddam.vercel.app
```

## Notes

- Use `next/image` with `unoptimized` for user-provided external image URLs.
- Avoid hardcoding `localhost` in production auth or fetch configuration.
- For server-rendered pages, prefer importing local JSON instead of fetching relative URLs during build.

## License

For educational and portfolio use.
