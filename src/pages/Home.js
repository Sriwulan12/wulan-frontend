// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Halo, saya SRI WULAN</h1>
            <h2>Mahasiswa STMIK WIDYA UTAMA</h2>
            <p>Saya membuat aplikasi web yang modern, responsif, dan ramah pengguna.</p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn">Lihat Karya Saya</Link>
              <Link to="/contact" className="btn btn-outline">Hubungi Saya</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="section-title">Keahlian Saya</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-react"></i>
              </div>
              <h3>React.js</h3>
              <p>Membangun antarmuka pengguna interaktif dengan React dan ekosistemnya.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-node-js"></i>
              </div>
              <h3>Node.js</h3>
              <p>Mengembangkan aplikasi sisi server menggunakan Express dan framework lainnya.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Basis Data</h3>
              <p>Menggunakan basis data SQL dan NoSQL seperti MongoDB dan PostgreSQL.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Proyek Unggulan</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://via.placeholder.com/400x225?text=Proyek+1" alt="Proyek 1" />
              </div>
              <div className="project-info">
                <h3>Website E-commerce</h3>
                <p>Sebuah toko online lengkap dengan fitur keranjang belanja dan integrasi pembayaran.</p>
                <Link to="/portfolio" className="btn">Lihat Detail</Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://via.placeholder.com/400x225?text=Proyek+2" alt="Proyek 2" />
              </div>
              <div className="project-info">
                <h3>Aplikasi Manajemen Tugas</h3>
                <p>Aplikasi produktivitas untuk mengatur tugas harian dengan antarmuka drag-and-drop.</p>
                <Link to="/portfolio" className="btn">Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="btn btn-outline">Lihat Semua Proyek</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
