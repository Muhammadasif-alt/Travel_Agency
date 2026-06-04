# Deploying Nusarat Madina to Hostinger (VPS)

This is a full-stack **Next.js + MySQL** app, so it needs a **Node.js-capable** plan —
a Hostinger **KVM VPS** (or Cloud). Shared hosting (PHP-only) will **not** run it.

> One-time setup is below. After it's live, **content changes are done from the
> admin panel** (`/admin`) — you only redeploy when the *code* changes.

---

## 0. What you need
- A Hostinger **VPS** (Ubuntu 22.04+ recommended) with root/SSH access.
- A domain pointed to the VPS IP (A record).
- The GitHub repo: `https://github.com/Muhammadasif-alt/Travel_Agency.git`

---

## 1. Install the basics on the VPS
SSH in, then:
```bash
# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git

# MySQL server
sudo apt-get install -y mysql-server
sudo mysql_secure_installation

# PM2 (keeps the app running) + build tools
sudo npm install -g pm2
```

---

## 2. Create the database
```bash
sudo mysql
```
```sql
CREATE DATABASE nusrat_madina CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'nusrat'@'localhost' IDENTIFIED BY 'STRONG_PASSWORD_HERE';
GRANT ALL PRIVILEGES ON nusrat_madina.* TO 'nusrat'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```
> On a Hostinger **managed MySQL** plan instead, create the DB + user from hPanel
> and use the host/credentials it gives you in `DATABASE_URL` below.

---

## 3. Get the code & configure
```bash
cd /var/www
git clone https://github.com/Muhammadasif-alt/Travel_Agency.git nusrat
cd nusrat

# create the production .env
nano .env
```
Put this in `.env` (use your real values):
```env
DATABASE_URL="mysql://nusrat:STRONG_PASSWORD_HERE@localhost:3306/nusrat_madina"
JWT_SECRET="PASTE_A_LONG_RANDOM_STRING"     # generate: openssl rand -hex 32
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NODE_ENV="production"
```

---

## 4. Install, migrate, seed, build
```bash
npm install                 # also runs `prisma generate`
npm run db:deploy           # creates all tables (prisma migrate deploy)
npm run db:seed             # first time only — loads starting content + admin user
npm run build
```
The seed creates the first admin login:
```
admin@nusaratmadina.com  /  Admin@123
```
**Change this password immediately** after first login (Admin → Users → Edit).

> Re-running `npm run db:seed` **resets content** to the defaults — only run it once.

---

## 5. Start with PM2
```bash
pm2 start "npm run start" --name nusrat
pm2 save
pm2 startup        # run the command it prints, so it auto-starts on reboot
```
App now runs on `http://127.0.0.1:3000`.

---

## 6. Nginx reverse proxy + HTTPS
```bash
sudo apt-get install -y nginx
sudo nano /etc/nginx/sites-available/nusrat
```
```nginx
server {
    server_name your-domain.com www.your-domain.com;
    client_max_body_size 12M;          # allow image uploads

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```
```bash
sudo ln -s /etc/nginx/sites-available/nusrat /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# free SSL certificate
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Done — the site is live on `https://your-domain.com` and the admin on
`https://your-domain.com/admin`.

---

## 7. Updating the site later

**Content** (packages, prices, images, blogs, stories, Hajj toggle, contact info):
→ just use the **admin panel**. No redeploy needed.

**Code changes** (new features / fixes):
```bash
cd /var/www/nusrat
git pull
npm install
npm run db:deploy     # only if the schema changed (new migration)
npm run build
pm2 restart nusrat
```

---

## Notes
- **Uploaded images** are saved to `public/uploads/` on the server disk and persist
  across restarts. They are **not** in git. Back up this folder with your DB.
- **Backups:** `mysqldump nusrat_madina > backup.sql` (cron daily) + copy `public/uploads/`.
- **Image domains:** uploads are served locally; `next.config` already sets
  `images.unoptimized: true`, so no extra image config is needed.
- **Editor vs Admin roles:** Editors can manage content; only Admins see **Settings**
  and **Users**.
