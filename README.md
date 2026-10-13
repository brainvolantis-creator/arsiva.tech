# Arsiva.tech — Website Arsiva Technology

Situs resmi **Arsiva Technology** (https://arsiva.tech) — ekosistem legal-tech & kepatuhan Indonesia: 6 pilar, 3 lapisan.

**Deploy:** GitHub Pages, repo `brainvolantis-creator/arsiva.tech`, branch `main`, source folder `/root`, custom domain `arsiva.tech` (via `CNAME`).

## Halaman

| File | Halaman |
|---|---|
| `index.html` | Home — one-liner, 6 pilar/3 lapisan, alur 5 tahap, konteks regulasi, highlight Certiva + internal benchmark, prinsip, kontak |
| `enterprise.html` | Arsiva Enterprise (Pilar 02) — penstrukturan RWA lintas batas (TSPV PT PMA + HoldCo Singapore VCC) |
| `certiva.html` | Certiva (Pilar 03) — mesin kepatuhan ekspor UMKM |
| `dubai.html` | Studi kasus Certiva Dubai (noindex, bahasa Inggris) |
| `privacy.html` | Privacy Policy & Terms + kanal hak subjek data (UU PDP) |

## Struktur

- `styles.css` — output build Tailwind (minified) — **jangan edit manual**
- `CNAME` — `arsiva.tech` (wajib berada di root folder GitHub Pages)
- `assets/logo/` — logo brand resmi 1024×1024 (PNG), `favicon-32.png`, `favicon-64.png`
- `assets/og/` — `og-home`, `og-enterprise`, `og-certiva` (1200×627)
- `assets/dubai/` — video/gif demo query + `og-dubai.png`
- `Certiva-Benchmark-Summary.pdf` / `Certiva-Benchmark-Summary-EN.pdf` — laporan metodologi benchmark internal

## Build CSS

`styles.css` dihasilkan pipeline Tailwind dari folder `build/` arsip proyek (sumber: `input.css` + `tailwind.config.js` — tidak termasuk repo publik ini). Saat menambah class Tailwind baru di `*.html`:

```bat
cd build
npm install
npx tailwindcss -i input.css -o ..\web\styles.css --config tailwind.config.js --minify
```

`content` di `tailwind.config.js` mencakup kelima halaman — jangan dikurangi (bug lama: hanya `index.html` yang dipindai → class halaman lain hilang saat rebuild).

## Deploy

1. Push isi folder ini ke root branch `main` repo (folder ini = source GitHub Pages: source `main`, folder `/root`).
2. `CNAME` harus tetap berada di root folder Pages.
3. Verifikasi pasca-deploy: `https://arsiva.tech` · `/enterprise.html` · `/certiva.html` · `/dubai.html` · `/privacy.html` — cek header logo, toggle bahasa ID/EN, dan disclaimer footer.

## Aturan brand (ringkas)

- Nama resmi: **Arsiva Technology** · wordmark: **Arsiva.tech** (".tech" huruf kecil) · dilarang: "Arsiva Tech".
- Palet: navy `#162441` (gradasi `#111B34→#162441→#1C2F55`), emas `#C4992B`, lapisan: legal `#1f5fbf`, trust `#17714a`, tech `#b4490f`.
- Font: **Plus Jakarta Sans** 400/600/800 · mono: Fira Code.
- Klaim: Certiva = **pilot** (bukan production); angka benchmark selalu berlabel *internal benchmark* + tanggal + reproducible; "UU PFII disahkan DPR" (bukan "diundangkan"); disclaimer hukum di setiap footer.

## Catatan privasi

Situs bebas tracker/analytics (kepatuhan UU PDP). Jangan menambah analytics, form, atau pelacak apa pun tanpa approval pemilik.
