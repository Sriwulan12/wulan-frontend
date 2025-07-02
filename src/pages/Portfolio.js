// src/pages/Portfolio.js
import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    githubUrl: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

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
      let response;
      if (editingId) {
        // Update existing project
        response = await fetch(`http://localhost:5000/api/projects/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            technologies: formData.technologies.split(',').map(tech => tech.trim())
          }),
        });
      } else {
        // Create new project
        response = await fetch('http://localhost:5000/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            technologies: formData.technologies.split(',').map(tech => tech.trim())
          }),
        });
      }
      
      if (!response.ok) {
        throw new Error('Failed to save project');
      }
      
      const data = await response.json();
      
      if (editingId) {
        setProjects(projects.map(project => 
          project.id === editingId ? data : project
        ));
      } else {
        setProjects([...projects, data]);
      }
      
      resetForm();
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      imageUrl: project.imageUrl,
      githubUrl: project.githubUrl
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      setProjects(projects.filter(project => project.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      technologies: '',
      imageUrl: '',
      githubUrl: ''
    });
    setEditingId(null);
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="portfolio">
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="section-title">My Portfolio</h1>
          <p>A collection of my recent projects and work</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-actions">
            <button 
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }} 
              className="btn"
            >
              {showForm ? 'Cancel' : 'Add New Project'}
            </button>
          </div>

          {showForm && (
            <div className="project-form">
              <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Technologies (comma separated)</label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>GitHub URL</label>
                  <input
                    type="url"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn">
                  {editingId ? 'Update Project' : 'Add Project'}
                </button>
              </form>
            </div>
          )}

          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Code
                    </a>
                    <div className="project-actions">
                      <button 
                        onClick={() => handleEdit(project)}
                        className="btn-edit"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this project?')) {
                            handleDelete(project.id);
                          }
                        }}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;