// src/pages/About.js
import React from 'react';
import './About.css';
import profilImage from '../assets/wulan.jpg'; // import gambar lokal

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <h1 className="section-title">Tentang Saya</h1>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src={profilImage} alt="Profil" />
                        </div>
                        <div className="about-text">
                            <h2>Siapa Saya</h2>
                            <p>
                                Saya adalah seorang Fullstack JavaScript Developer yang bersemangat dengan pengalaman 3 tahun dalam membangun aplikasi web modern.
                                Saya menguasai React untuk pengembangan frontend dan Node.js dengan Express untuk layanan backend.
                            </p>
                            <p>
                                Perjalanan saya dalam pengembangan web dimulai saat kuliah, dan sejak itu saya jatuh cinta pada dunia pemrograman.
                                Saya senang memecahkan masalah kompleks dan menciptakan solusi yang elegan serta efisien.
                            </p>
                            <p>
                                Di luar dunia coding, saya senang mendaki, membaca blog teknologi, atau mencoba teknologi-teknologi baru.
                            </p>

                            <h3>Pendidikan</h3>
                            <ul>
                                <li>Sarjana Teknik Informatika - STMIK Widya Utama (2020)</li>
                                <li>Sertifikasi JavaScript Lanjutan - Code Academy (2021)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline">
                <div className="container">
                    <h2 className="section-title">Perjalanan Saya</h2>
                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="timeline-date">2022 - Sekarang</div>
                            <div className="timeline-content">
                                <h3>Senior Developer di Tech Solutions Inc.</h3>
                                <p>
                                    Memimpin tim developer untuk membangun aplikasi web tingkat enterprise menggunakan stack MERN.
                                    Menerapkan pipeline CI/CD dan meningkatkan proses deployment.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2020 - 2022</div>
                            <div className="timeline-content">
                                <h3>Junior Developer di WebWorks Agency</h3>
                                <p>
                                    Mengembangkan dan memelihara website klien menggunakan React dan Node.js.
                                    Bekerja sama dengan desainer untuk mengimplementasikan komponen UI yang responsif.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2018 - 2020</div>
                            <div className="timeline-content">
                                <h3>Freelance Web Developer</h3>
                                <p>
                                    Bekerja sama dengan UMKM untuk membuat website dan aplikasi web kustom.
                                    Mendapatkan pengalaman dalam pengembangan fullstack dan komunikasi dengan klien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
