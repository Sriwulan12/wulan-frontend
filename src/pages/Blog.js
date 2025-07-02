import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Memulai dengan React Hooks',
      excerpt: 'Pelajari cara menggunakan React Hooks untuk menyederhanakan komponen fungsional Anda.',
      date: '15 Mei 2025',
      category: 'React',
      readTime: '5 menit baca'
    },
    {
      id: 2,
      title: 'Membangun API RESTful dengan Express.js',
      excerpt: 'Panduan lengkap untuk membuat API yang kuat menggunakan framework Express.js.',
      date: '28 April 2025',
      category: 'Node.js',
      readTime: '8 menit baca'
    },
    {
      id: 3,
      title: 'Manajemen State di Tahun 2025',
      excerpt: 'Menjelajahi tren terbaru dalam manajemen state untuk aplikasi JavaScript.',
      date: '10 Maret 2025',
      category: 'JavaScript',
      readTime: '6 menit baca'
    }
  ];

  return (
    <div className="blog">
      <section className="blog-hero">
        <div className="container">
          <h1 className="section-title">Blog Saya</h1>
          <p>Pemikiran, tutorial, dan pengalaman dalam pengembangan web</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-posts">
            {blogPosts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="read-time">{post.readTime}</span>
                  <button className="btn-read">Baca Selengkapnya</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
