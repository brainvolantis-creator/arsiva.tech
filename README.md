# Arsiva / Certiva ImpEx — arsiva.tech (GitHub Pages ready)

## Struktur brand di situs ini
- **Arsiva** — nama induk perusahaan. Dipakai untuk: logo utama, header, footer, lini "Arsiva Enterprise RWA" (GraphRAG on-premise, RWA tokenization), dan arsitektur inti (Legal Moat).
- **Certiva** — nama produk khusus untuk lini "ImpEx" (kepatuhan ekspor UMKM via Accio Work), dipakai khusus untuk program CoCreate Pitch 2026 bersama Alibaba.com.

## Struktur file
- `index.html` — halaman utama (sudah tanpa dependensi CDN Tailwind)
- `css/styles.css` — CSS hasil build produksi (minified)
- `tailwind.config.js`, `input.css`, `package.json` — sumber build, untuk rebuild CSS kapan pun diperlukan

## Cara rebuild CSS (kalau ada penambahan class Tailwind baru)
```
npm install
npx tailwindcss -i ./input.css -o ./css/styles.css --minify
```

## Cara deploy ke GitHub Pages
1. Push seluruh isi folder ini ke root branch `main` di repo GitHub.
2. Repo Settings → Pages → Source → pilih branch tersebut, folder `/root`.
3. Custom domain: isi `arsiva.tech`, GitHub akan otomatis buat file `CNAME`.
4. DNS domain arsiva.tech:
   - A record ke: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - atau CNAME ke: <username>.github.io

## Update konten selanjutnya
Untuk perubahan teks/link/kontak yang memakai class yang sudah ada — cukup timpa `index.html`, tidak perlu rebuild CSS. Rebuild CSS hanya diperlukan kalau menambah class Tailwind yang belum pernah dipakai di halaman manapun sebelumnya.
