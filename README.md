# diStreaming

**diStreaming** adalah front-end web aplikasi layanan streaming modern dan responsif yang dibangun menggunakan React dan Vite. Aplikasi ini meniru UI/UX platform streaming populer seperti Netflix, menampilkan baris konten dinamis, detail interaktif, dan estetika premium.

## 🚀 Fitur

- **Desain Responsif**: Layout yang dioptimalkan sepenuhnya untuk perangkat Seluler, Tablet, dan Desktop menggunakan custom hooks (`useWindowSize`).
- **Tampilan Konten Dinamis**:
  - **Featured Rows**: Menampilkan peringkat gaya "Top 10" dengan penomoran besar khusus.
  - **Content Rows**: Daftar berkategori (Action, Drama, Sci-Fi) dan fungsionalitas "Daftar Saya".
- **UI Interaktif**:
  - **Efek Hover Cerdas**: Kartu membesar (zoom) saat di-hover. Kartu standar menampilkan overlay info detail (Skor Kecocokan, Rating Usia, Genre) saat di-hover, sedangkan kartu Featured tetap mempertahankan tampilan bersih.
  - **Performa Teroptimasi**: State hover diisolasi ke masing-masing komponen `MovieCard` untuk mencegah render ulang yang tidak perlu pada seluruh baris.
- **Tampilan Detail**: Sistem modal untuk menampilkan detail film/serial yang diperluas termasuk sinopsis, daftar episode, dan aksi "Putar/Daftar Saya".
- **Bagian Informatif**:
  - **Tabel Harga**: Perbandingan paket yang responsif.
  - **FAQ**: Pertanyaan Umum interaktif bergaya accordion.
- **Navigasi**:
  - Navbar responsif dengan efek scroll transparan-ke-hitam.
  - Menu Hamburger yang ramah seluler.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS & React Inline Styles (untuk logika responsif dinamis).

## 📂 Struktur Project

Project ini berbasis komponen untuk modularitas dan penggunaan kembali:

- **`App.jsx`**: Titik masuk utama, menangani sumber data dan komposisi layout.
- **`components/`**:
  - **`Movies.jsx`**: Komponen baris reusable yang menangani scrolling horizontal dan layout. Menggantikan _FeaturedRow_ dan _ContentRow_ yang lama.
  - **`MovieCard.jsx`**: Mengenkapsulasi UI kartu, styling, dan logika hover.
  - **`DetailModal.jsx`**: Overlay untuk melihat detail konten tertentu.
  - **`HeroSection.jsx`**, **`Navbar.jsx`**, **`Pricing.jsx`**, **`FAQ.jsx`**, **`Footer.jsx`**.

## 📦 Instalasi & Setup

1.  **Clone repository**

    ```bash
    git clone https://github.com/your-username/react-streaming-app.git
    cd react-streaming-app
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Jalankan server development**

    ```bash
    npm run dev
    ```

4.  **Build untuk production**
    ```bash
    npm run build
    ```

## 🎨 Kustomisasi

Anda dapat menyesuaikan konten dengan memodifikasi array `DUMMY_CONTENT` di `src/App.jsx`. Aplikasi ini dibangun untuk merender konten secara dinamis berdasarkan struktur data ini.
