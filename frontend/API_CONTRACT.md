# 🏥 TIBER API CONTRACT
> Dokumentasi standar pertukaran data antara Frontend & Backend.

---

## 🔐 1. AUTHENTICATION

### 📥 REGISTER & PERSONALIZATION
`POST` `/api/register`
> Mendaftarkan user baru sekaligus inisialisasi jadwal pengobatan.

**Request Body**
```json
{
  "first_name": "Sauki",
  "last_name": "Pratama",
  "email": "sauki@example.com",
  "password": "password123",
  "personalization": {
    "start_date": "2026-01-26",
    "duration_months": 6,
    "reminder_time": "07:00:00",
    "last_checkup_date": null, 
    "control_frequency": 1
  }
}

```

**Response Success (201)**

```json
{
  "message": "User and personalization data created successfully",
  "token": "1|abcde12345",
  "user": {
    "id": 1,
    "first_name": "Sauki",
    "email": "sauki@example.com"
  }
}

```

---

### 🔑 LOGIN

`POST` `/api/login`

> Autentikasi user untuk mendapatkan token akses.

**Request Body**

```json
{
  "email": "sauki@example.com",
  "password": "password123"
}

```

**Response Success (200)**

```json
{
  "message": "Login successful",
  "token": "1|abcde12345",
  "user": { 
    "id": 1, 
    "first_name": "Sauki" 
  }
}

```

---

## 📊 2. DASHBOARD & PROGRESS

### 🏠 GET DAILY DASHBOARD

`GET` `/api/dashboard`

> Mengambil ringkasan statistik harian user.

**Response Success (200)**

```json
{
  "user_info": { "full_name": "Sauki Pratama" },
  "stats": {
    "current_streak": 5,
    "progress_percentage": 25.56,
    "next_checkup_days": 5,
    "current_day": 40,
    "total_days": 150 
  },
  "today_task": {
    "time": "07:00",
    "is_taken": false,
    "status": "active"
  }
}

```

---

### 📈 GET MILESTONES

`GET` `/api/progress`

> Mengambil riwayat perjalanan pengobatan panjang.

**Response Success (200)**

```json
{
  "current_status": {
    "current_day": 46,
    "total_days": 180,
    "percentage": 25.56,
    "days_remaining": 134,
    "months_remaining": 5
  },
  "milestones": [
    { "label": "Memulai Perjalanan", "day": 1, "is_completed": true },
    { "label": "Fase Awal", "day": 45, "is_completed": true },
    { "label": "Tengah Perjalanan", "day": 90, "is_completed": false },
    { "label": "Mendekati Akhir", "day": 135, "is_completed": false },
    { "label": "Selesai", "day": 180, "is_completed": false }
  ]
}

```

---

## 💊 3. MEDICATION LOGS

### 📝 CONFIRM MEDICATION

`POST` `/api/logs`

> Mencatat waktu user meminum obat hari ini.

**Request Body**

```json
{	
  "logged_time": "18:05"
}

```

**Response Success (200)**

```json
{
  "message": "Log recorded",
  "new_streak": 6
}

```

---

### 🏥 CONFIRM CHECKUP

`POST` `/api/personalization/checkup`

> Mengonfirmasi jadwal kontrol ke dokter telah dilakukan.

**Request Body**

```json
{
  "checkup_date": "2026-01-26"
}

```

**Response Success (200)**

```json
{
  "message": "Jadwal kontrol berikutnya telah diperbarui",
  "next_checkup_date": "2026-02-26"
}

```

---

## ⚙️ 4. PROFILE & ACCOUNT

### 👤 GET PROFILE

`GET` `/api/profile`

**Response Success (200)**

```json
{
  "user": {
    "full_name": "Sauki Well",
    "status": "Pengguna aktif"
  },
  "settings": {
    "reminder_time": "08:00:00",
    "start_date": "2026-01-26",
    "duration_months": 6,
    "control_frequency": 1
  }
}

```

---

### 🚪 LOGOUT

`POST` `/api/logout`

**Response Success (200)**

```json
{
  "message": "Berhasil keluar"
}

```

---

## ⚠️ 5. ERROR HANDLING STANDARDS

| Status | Deskripsi |
| --- | --- |
| `422` | **Validation Error** - Input tidak valid / Email sudah ada. |
| `401` | **Unauthenticated** - Token salah atau expired. |
| `404` | **Not Found** - Data yang dicari tidak ada. |
| `500` | **Server Error** - Kesalahan internal server Laravel. |

```
u agar dia tahu tipe data tiap kolom database-nya? (Contoh: `reminder_time` itu tipe `TIME`, `duration` itu `INT`, dll).

```
