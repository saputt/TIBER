# 🏥 TIBER - Frontend (Tuberculosis Care App)

---

## 📝 Deskripsi Singkat
Aplikasi Front-End ini dibangun menggunakan **React.js** dengan pendekatan desain minimalis untuk memastikan kemudahan akses bagi pasien TBC. Fokus utama antarmuka ini adalah:
* **Dashboard Kepatuhan:** Visualisasi progres pengobatan secara real-time.
* **Interaksi Intuitif:** Sistem konfirmasi dosis harian dengan umpan balik pesan motivasi.
* **Daily Journaling UI:** Antarmuka pencatatan harian yang bersih untuk memantau kondisi fisik dan mental.

---

## 🛠️ Tech Stack

* **Framework:** [React.js](https://react.dev/) (Vite)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with Persist Middleware)
* **Routing:** [React Router DOM v6](https://reactrouter.com/) (Data Browser Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **API Client:** Native Fetch API (with custom wrapper)

---

## 📂 Project Structure

Struktur folder ini dirancang agar modular dan mudah dipahami oleh tim:

```text
src/
├── assets/             # Gambar, Icon (SVG), dan file statis
├── components/         # Atomic Design System
│   ├── atoms/          # Komponen dasar (Button.jsx, Input.jsx, Badge.jsx)
│   ├── molecules/      # Gabungan atoms (FormGroup.jsx, CardInfo.jsx)
│   ├── organisms/      # Komponen kompleks (Navbar.jsx, Sidebar.jsx, LogTable.jsx)
│   └── templates/      # Layout utama (MainLayout.jsx, AuthLayout.jsx)
├── hooks/              # Custom Hooks & TanStack Query Logic
├── pages/              # Halaman Utama (entry point router)
├── services/           # Konfigurasi Fetch & API Client
├── store/              # State Management (Zustand)
├── utils/              # Helper functions
├── routes/             # Konfigurasi React Router
├── styles/             # Global CSS (Tailwind directives)
├── App.jsx             # Root Component (QueryClientProvider & Router)
└── main.jsx            # Entry point


```

---

## 🚀 Getting Started

Ikuti langkah-langkah berikut untuk menjalankan projek di lokal:

1. **Clone Repository:**
```bash
git clone https://github.com/saputt/TIBER-FE.git
cd TIBER-FE

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Setup Environment:**
Buat file `.env` di root folder dan masukkan Base URL API:
```env
VITE_API_URL=http://localhost:8000/api

```


4. **Run Development Server:**
```bash
npm run dev

```



---

## 🛤️ Workflow Kolaborasi (Git)

Untuk menjaga kualitas kode, harap ikuti aturan branch berikut:

1. **Main:** Hanya untuk kode yang sudah siap produksi (Stable).
2. **Dev:** Branch pusat pengembangan fitur.
3. **Feature Branch:** Buat branch baru dari `dev` untuk tiap tugas.
* Format: `feat/nama-fitur` atau `fix/nama-bug`
* Lakukan **Pull Request (PR)** ke `dev` setelah selesai.



---

## 📝 API Contract Reference

Dokumentasi endpoint dapat diakses di file [DOKUMENTASI_API.md] atau di ClickUp tim.

