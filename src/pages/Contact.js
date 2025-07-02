import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Gagal mengirim pesan');
      }
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">Hubungi Saya</h1>
          <p>Punya pertanyaan atau ingin bekerja sama? Kirim pesan kepada saya!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informasi Kontak</h2>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>wulan.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Banyumas, Indonesia</span>
              </div>
              
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Terima kasih atas pesan Anda!</h3>
                  <p>Saya akan segera menghubungi Anda kembali.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Kirim Pesan</h2>
                  {error && <div className="error-message">{error}</div>}
                  <div className="form-group">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn">Kirim Pesan</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
