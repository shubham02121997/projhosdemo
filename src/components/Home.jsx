import React from 'react';
import { hospitalInfo, departments, facilities, testimonials } from '../mockData';

function Home({ onNavigate }) {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Compassionate Healthcare for Lucknow & Beyond</h1>
          <p>
            With the timeless conviction "We Treat - God Heals", {hospitalInfo.name} delivers
            comprehensive multi-specialty care across {hospitalInfo.specialties_count} departments
            with {hospitalInfo.bed_count} beds, modern ICU, modular operation theatres, and
            round-the-clock emergency support.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onNavigate('book-appointment')}>
              Book Online Appointment
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('reports')}>
              View Patient Reports
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('doctors')}>
              Find a Doctor
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{hospitalInfo.bed_count}+</h3>
              <p>Total Beds</p>
            </div>
            <div className="stat-card">
              <h3>{hospitalInfo.specialties_count}</h3>
              <p>Specialties</p>
            </div>
            <div className="stat-card">
              <h3>{hospitalInfo.doctors_count}+</h3>
              <p>Doctors</p>
            </div>
            <div className="stat-card">
              <h3>{hospitalInfo.patients_treated_annual}</h3>
              <p>Patients Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Medical Specialties</h2>
          <p className="section-subtitle">
            Comprehensive care across {departments.length} medical departments
          </p>
          <div className="grid grid-3">
            {departments.slice(0, 6).map((dept) => (
              <div key={dept.id} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{dept.icon}</div>
                <h3>{dept.name}</h3>
                <p>{dept.short_desc}</p>
                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem', width: '100%' }}
                  onClick={() => onNavigate('departments')}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('departments')}>
              View All Departments
            </button>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">State-of-the-art medical infrastructure</p>
          <div className="grid grid-4">
            {facilities.map((facility) => (
              <div key={facility.id} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{facility.icon}</div>
                <h3>{facility.name}</h3>
                <p style={{ fontSize: '0.875rem' }}>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Patient Stories</h2>
          <p className="section-subtitle">What our patients say about us</p>
          <div className="grid grid-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>⭐</div>
                  <span style={{ fontWeight: '600' }}>{testimonial.rating}/5</span>
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{testimonial.review}"</p>
                <div>
                  <strong>{testimonial.patient_name}</strong>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {testimonial.treatment} • {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Need Emergency Care?</h2>
            <p className="section-subtitle">
              24/7 Emergency Services Available
            </p>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#dc2626', marginBottom: '1rem' }}>
              {hospitalInfo.emergency_number}
            </div>
            <p style={{ marginBottom: '1rem' }}>
              {hospitalInfo.address}
            </p>
            <p>
              <strong>OPD Hours:</strong> {hospitalInfo.opd_hours}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;