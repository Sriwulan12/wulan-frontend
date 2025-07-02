// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tentang Saya</h3>
            <p>Seorang pengembang fullstack yang bersemangat dalam membuat aplikasi web modern dengan teknologi JavaScript.</p>
          </div>
          <div className="footer-section">
            <h3>Tautan Cepat</h3>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/portfolio">Portofolio</a></li>
              <li><a href="/contact">Kontak</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Hubungi Saya</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sri Wulan. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
