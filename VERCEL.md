# Deploying Nusarat Madina to Vercel

Vercel runs the Next.js app, but it's **serverless** — so it needs a **cloud MySQL**
(not your local XAMPP) and **Vercel Blob** for image uploads. Both are set up below.
The code already supports both automatically.

---

## 1. Create a cloud MySQL database
Pick any MySQL host (the app uses plain MySQL, no special features). Easy options:
- **Railway** (railway.app) → New → Database → MySQL. Copy the connection URL.
- **Aiven** (aiven.io) → free MySQL plan.
- **TiDB Cloud Serverless** (tidbcloud.com) → free, MySQL-compatible.
- Or any MySQL you already have (e.g. Hostinger remote MySQL).

Copy its connection string. It looks like:
```
mysql://USER:PASSWORD@HOST:PORT/DBNAME
```
> If the provider gives a separate **pooled** host/URL, use that one for Vercel
> (serverless opens many short connections). Often add `?connection_limit=5`.

---

## 2. Add environment variables in Vercel
Vercel project → **Settings → Environment Variables** (Production + Preview):

| Name | Value |
|------|-------|
| `DATABASE_URL` | your cloud MySQL URL from step 1 |
| `JWT_SECRET` | a long random string (`openssl rand -hex 32`) |
| `NEXT_PUBLIC_SITE_URL` | `https://your-vercel-domain.vercel.app` (or custom domain) |

---

## 3. Enable Vercel Blob (for image uploads)
Vercel project → **Storage → Create → Blob** → connect it to this project.
This auto-adds the `BLOB_READ_WRITE_TOKEN` env var. The app detects it and stores
uploaded images in Blob automatically (locally it still uses disk — no config needed).

---

## 4. Deploy
Push to `main` (or click **Redeploy**). Vercel runs `vercel-build`, which:
`prisma generate → prisma migrate deploy (creates all tables) → next build`.
So the database schema is created automatically on first deploy.

---

## 5. Seed the database once (first time only)
Migrations create empty tables — you still need the starting content + admin login.
Run this **once** from your computer, pointing at the **cloud** DB:

```bash
# temporarily use the cloud DB
# (Windows PowerShell)
$env:DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DBNAME"
npm run db:seed
```
This creates the admin user:
```
admin@nusaratmadina.com  /  Admin@123
```
Login at `https://your-domain/admin/login` and **change the password** (Admin → Users).

> Don't run `db:seed` again later — it resets content to defaults.

---

## 6. Updating later
- **Content** (packages, prices, images, blogs, etc.) → from `/admin`. No redeploy.
- **Code changes** → `git push`; Vercel auto-builds & runs any new migrations.

---

## Notes
- **Connections:** if you see "too many connections" errors under load, use your DB
  provider's pooled connection URL (and `?connection_limit=5`).
- **Images:** served from Vercel Blob URLs; `next.config` has `images.unoptimized: true`
  so no image-domain config is needed.
- Prefer a VPS instead? See `DEPLOYMENT.md` (everything works on disk + local MySQL there).
