# **kuproy**
## Bahasa
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README.md)
[![id](https://img.shields.io/badge/lang-id-yellow.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README-ID.md)

## Fitur
---
### **Pilihan Teknologi/Framework**
Terdapat beberapa pilihan yang bisa Anda pilih berdasarkan kebutuhan Anda:
* Framework Backend
    * Express
    * Fastify
* Database Engine
    * MongoDB (Mongoose)
    * MySQL (Prisma)
    * PostgreSQL (Prisma)
* Framework Frontend
    * Vue.js
    * React
* Framework CSS
    * Bootstrap
    * Tailwind

Anda bisa memilih untuk membuat hanya project backend atau frontend saja, atau Anda bisa membuat project fullstack jika ingin keduanya.
### **Contoh Project**
Kami menyediakan project contoh yang di dalamnya sudah berisi file dan script yang bisa dijalankan. Project contoh hanya tersedia untuk project fullstack, maka dari itu project contoh terdiri dari project backend dan frontend. Tujuan kami menyediakan project contoh ini untuk membantu pemula agar bisa mempelajari web programming dasar yang terdiri dari tampilan (Frontend), API dan database (Backend), dan CRUD (Create, Read, Update, Delete) dasar.\
Anda bisa mengikuti langkah-langkah cara menjalankan contoh project pada bagian [Project Contoh](#project-contoh).

## Getting Started
---
### **Prerequisites**
Git client harus sudah terinstall di perangkat Anda untuk melakukan clone repository. Anda bisa menginstall dari link ini http://git-scm.com/.

Selain itu, Node.js dan npm (Node.js package manager) juga harus sudah terinstall di perangkat Anda. Anda bisa menginstall dari link ini http://nodejs.org/.

### **Cara Menggunakan**
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Jalankan Perintah**

Untuk menggunakan CLI ini, jalankan perintah di bawah menggunakan terminal dan pada direktori yang Anda inginkan:
```
$ npx create-kuproy@latest
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Tentukan Nama Project**

Di langkah selanjutnya, Anda bisa menentukan nama project yang akan dibuat. Anda bisa membiarkan nama project-nya kosong, dan project akan memiliki nama default kami, yaitu my-project.
```
? Project name (my-project) [project-name]
```
Anda juga bisa menentukan nama project pada langkah pertama, dengan menjalankan perintah seperti di bawah:
```
$ npx create-kuproy@latest [nama-project]
```
> Catatan: Nama project hanya boleh menggunakan huruf besar maupun kecil, angka, tanda strip, dan garis bawah (Contoh: My-Project_123)

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Pilih Jenis Project**

Selanjutnya, Anda diminta untuk memilih jenis project. Jenis project fullstack akan mencakup project backend dan frontend.
```
? Project type (use arrow keys)
> Fullstack
  Backend
  Frontend
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Pilih Framework Backend**

Pilih framework backend yang ingin Anda gunakan di project backend Anda.
> Langkah ini hanya akan muncul jika memilih jenis project fullstack atau backend.
```
Configure backend
? Backend framework (Use arrow keys)
> Express
  Fastify
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Pilih Database Engine**

Pilih database untuk project backend, semua database menggunakan ORM yang menyederhanakan pengembangannya (Anda tidak perlu menyambungkan ke database secara manual).
> Langkah ini hanya akan muncul jika memilih jenis project fullstack atau backend.
```
Configure backend
? Backend Framework [Express/Fastify]
? Database Engine (use arrow keys)
> MongoDB (Mongoose)
  PostgreSQL (Prisma)
  MySQL (Prisma)
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Pilih Framework Frontend**

Pilih framework frontend yang ingin Anda gunakan di project frontend Anda.
> Langkah ini hanya akan muncul jika memilih jenis project fullstack atau frontend.
```
Configure frontend
? Frontend framework (Use arrow keys)
> Vue
  React
```
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Pilih Framework CSS**

Pilih framework CSS yang ingin Anda gunakan di project frontend Anda.
> Langkah ini hanya akan muncul jika memilih jenis project fullstack atau frontend.
```
Configure frontend
? Frontend framework [Bootstrap/Tailwind]
? CSS/UI framework (Use arrow keys)
> Bootstrap
  Tailwind
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Project Contoh**

Pada langkah terakhir Anda bisa memilih untuk membuat kerangka project (skeleton) atau project contoh.
> Langkah ini hanya akan muncul jika memilih jenis project fullstack.
```
Example project 
? Do you want to generate example project? (Use arrow keys)
> yes
  no
```
Jika memilih yes, Anda perlu menunggu beberapa saat karena proses install dependency dilakukan secara otomatis.

## Project Contoh
---
### **Prerequisites**
Agar database bisa berjalan, Anda harus sudah menginstall MongoDB/PostgreSQL/MySQL sesuai database engine yang Anda pilih. Instruksi instalasi bisa Anda temukan disini:
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [PostgreSQL](https://www.postgresql.org/download/)
* [MySQL](https://www.mysql.com/downloads/)

### **Cara Menjalankan**
#### **&nbsp;&nbsp;&nbsp;A. Project Backend**
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Konfigurasi Variabel Environment Backend**

Anda perlu mengkonfigurasi variabel environment pada file `.env`. Pada file tersebut, terdapat url untuk database, sesuaikan url pada file tersebut dengan url yang Anda pakai.\
Untuk database PostgreSQL dan MySQL:
```
DATABASE_URL=postgresql://admin:admin@localhost:5432/kuproy
```
Untuk database MongoDB:
```
MONGO_URI=mongodb://localhost:27017/kuproy-example?authSource=admin
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Pindah Direktori Terminal**

Sebelum menjalankan project backend, Anda harus memindahkan direktori terminal Anda ke project backend. Jalankan perintah ini.
```
cd backend
```
Pastikan posisi direktori terminal sudah berada di posisi yang tepat, seperti di bawah ini.
```
~\[nama project anda]\backend>
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. PostgreSQL & MySQL**

>Langkah ini hanya diperlikan ketika Anda memilih database engine dengan ORM Prisma (PostgreSQL dan MySQL)

Jika project contoh Anda menggunakan database engine PostgreSQL atau MySQL, Anda harus menjalankan dua perintah ini sebelum menjalankan aplikasi.
```
npm run prisma:migrate:dev
npm run primsa:generate
```
Kedua perintah tersebut bermaksud untuk melakukan migrasi dan membuat abstraksi model.

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Jalankan Project Backend**

Jalankan perintah ini untuk mulai menjalankan project backend.
```
npm run dev
```
Aplikasi backend dijalankan pada url `http:\\localhost:8080`.

#### **&nbsp;&nbsp;&nbsp;B. Project Frontend**

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Pindah Direktori Terminal**

Sebelum menjalankan project frontend, pastikan untuk menggunakan terminal yang terpisah dari terminal yang digunakan untuk menjalankan project frontend, lalu Anda harus memindahkan direktori terminal Anda ke project frontend. Jalankan perintah ini.
```
cd frontend
```
Pastikan posisi direktori terminal sudah berada di posisi yang tepat, seperti di bawah ini.
```
~\[nama project anda]\frontend>
```

**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Jalankan Project Frontend**

Setelah direktori terminal berada di project frontend, jalankan perintah ini untuk mulai menjalankan project frontend.
```
npm run dev
```
Aplikasi backend dijalankan pada url `http:\\localhost:3000`.

#### **&nbsp;&nbsp;&nbsp;C. Hasil Menjalankan Project**
Anda bisa melihat hasil menjalankan project backend dan frontend dengan mengakses url `http:\\localhost:3000`.

## Struktur Folder
---
*Backend*:
* `src/config` — Menyimpan file konfigurasi yang digunakan untuk menyiapkan konfigurasi aplikasi seperti koneksi database.
* `src/controllers` — Mencakup logika bisnis dari aplikasi termasuk handler untuk HTTP request.
* `src/middlewares` — Mencakup fungsi middleware untuk proses awal sebelum masuk ke controller, seperti autentikasi, data parsing, dan lainnya.
* `src/models` — Mencakup model data aplikasi dan menyediakan abstraksi untuk proses yang berurusan dengan data.
* `src/routes` — Menyimpan kumpulan route endpoint untuk menangani HTTP request.
* `src/utils` — Menyimpan fungsi yang bisa dipakai berulang kali.
* `test/e2e` — File pengujian e2e (end to end). 
* `test/unit` — File pengujian unit.

*Frontend*:
* `public` — Menyimpan aset statis yang dapat diakses secara publik oleh pengguna aplikasi. Aset statis adalah file yang digunakan oleh halaman aplikasi.
* `src/assets` — Menyimpan aset statis seperti gambar, font, dan icon yang digunakan oleh halaman dan komponen aplikasi.
* `src/components` — Menyimpan komponen UI yang dapat digunakan berulang kali di dalam aplikasi. Komponen UI adalah bagian UI terpisah yang bisa dikombinasikan untuk membuat elemen UI yang lebih kompleks.
* `src/router` — Menyimpan file dan modul yang menangani proses routing dan navigasi di dalam aplikasi.
* `src/views` — Menyimpan file yang merepresentasikan tampilan atau halaman lain dari aplikasi. Tampilan adalah halaman atau screen tersendiri yang digunakan untuk interaksi dengan pengguna.






