# **kuproy**
## Bahasa
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README.md)
[![id](https://img.shields.io/badge/lang-id-yellow.svg)](https://github.com/luthfimaajid/create-kuproy/blob/main/README-ID.md)

## **Fitur**
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
Kami menyediakan project contoh yang di dalamnya sudah berisi file dan script yang bisa dijalankan. Project contoh hanya tersedia untuk project fullstack, maka dari itu project contoh terdiri dari project backend dan frontend. Tujuan kami menyediakan project contoh ini untuk membantu pemula agar bisa mempelajari web programming dasar yang terdiri dari tampilan (Frontend), API dan database (Backend), dan CRUD (Create, Read, Update, Delete) dasar.

## Getting Started
---
### **Prerequisites**
Git client harus sudah terinstall di perangkat Anda untuk melakukan clone repository. Anda bisa menginstall dari link ini http://git-scm.com/.

Selain itu, Node.js dan npm (Node.js package manager) juga harus sudah terinstall di perangkat Anda. Anda bisa menginstall dari link ini http://nodejs.org/.

Jika Anda ingin membuat project contoh, agar database bisa berjalan, Anda harus sudah menginstall MongoDB/PostgreSQL/MySQL sesuai database engine yang Anda pilih. Instruksi instalasi bisa Anda temukan disini:
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [PostgreSQL](https://www.postgresql.org/download/)

### **How To Run**
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



