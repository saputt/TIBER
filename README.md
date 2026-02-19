```markdown
# TIBER - Navigating Your 180-Day Path to Recovery 🏥

> **By Your Side, Every Breath of the Way.**

## 📝 Deskripsi Singkat Proyek
**TIBER** adalah aplikasi pendamping kesehatan digital yang dirancang khusus untuk membantu pasien Tuberkulosis (TBC) menjalani masa pengobatan 180 hari dengan disiplin. Melalui pendekatan psikologis dan teknologi, TIBER mengatasi masalah utama ketidakpatuhan minum obat (mencapai 19,2% kasus) dengan menyediakan sistem monitoring yang intuitif, jurnal harian, dan pesan motivasi tepat waktu.

Aplikasi ini terdiri dari **Frontend (React.js)** yang minimalis dan **Backend (Laravel)** yang robust untuk memastikan pengalaman pengguna yang mulus dan aman.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Data Fetching:** TanStack Query & Native Fetch

### Backend
- **Framework:** Laravel 11
- **Language:** PHP
- **Database:** MySQL

---

## ⚙️ Petunjuk Setup Environment

Pastikan Anda telah menginstal **Node.js**, **PHP**, **Composer**, dan server database (**MySQL/XAMPP**) di perangkat Anda.

### 1. Persiapan Database
1. Buka MySQL (via XAMPP/Laragon).
2. Buat database baru dengan nama: `tiber`

### 2. Konfigurasi Environment (.env)

**Backend:**
Salin berkas `.env.example` di folder `/backend` menjadi `.env`, lalu sesuaikan konfigurasi database:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tiber
DB_USERNAME=root
DB_PASSWORD=

```

**Frontend:**
Salin berkas `.env.example` di folder `/frontend` menjadi `.env`, lalu atur URL API:

```env
VITE_API_URL=http://localhost:8000/api

```

---

## 🚀 Cara Menjalankan Aplikasi

Ikuti urutan langkah di bawah ini untuk menjalankan seluruh ekosistem TIBER:

### Langkah 1: Menjalankan Backend (Server)

1. Masuk ke direktori backend:
```bash
cd backend

```


2. Instal dependensi PHP:
```bash
composer install

```


3. Generate App Key:
```bash
php artisan key:generate

```


4. Jalankan migrasi database:
```bash
php artisan migrate

```


5. Jalankan server Laravel:
```bash
php artisan serve

```


*Server akan berjalan di `http://127.0.0.1:8000*`

### Langkah 2: Menjalankan Frontend (Client)

1. Buka terminal baru dan masuk ke direktori frontend:
```bash
cd frontend

```


2. Instal dependensi Node.js:
```bash
npm install

```


3. Jalankan server development:
```bash
npm run dev

```


*Aplikasi dapat diakses melalui URL yang muncul di terminal (biasanya `http://localhost:5173`)*

---

## 📂 Project Structure

```text
/
├── frontend/             # React.js Source Code
│   ├── src/
│   │   ├── components/   # Atomic Design System (Atoms, Molecules, etc.)
│   │   ├── hooks/        # Custom Hooks & Logic
│   │   └── store/        # Zustand State Management
├── backend/              # Laravel Source Code
│   ├── app/              # Logic & Controllers
│   ├── database/         # Migrations & Seeders
│   └── routes/           # API Endpoints
└── README.md

```

---

**Created with ❤️ by Team TIBER**
