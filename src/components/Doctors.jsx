import React, { useState } from 'react';
import { doctors, departments } from '../mockData';

function Doctors({ onNavigate, selectedDepartment, onSelectDoctor }) {
  const [filterDept, setFilterDept] = useState(selectedDepartment?.id || 'all');

  const filteredDoctors = filterDept === 'all'
    ? doctors
    : doctors.filter(doc => doc.department_id === filterDept);

  return (
    <div className="doctors">
      <div className="container">
        <h1 className="section-title">Our Doctors</h1>
        <p className="section-subtitle">
          Expert medical professionals dedicated to your health
        </p>

        {/* Department Filter */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <select
            className="form-select"
            style={{ maxWidth: '300px', margin: '0 auto' }}
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-2">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <h3>{doctor.name}</h3>
                  <p style={{ color: '#0d9488', fontWeight: '600' }}>{doctor.qualification}</p>
                </div>
                <span className={`badge ${doctor.available_today ? 'badge-success' : 'badge-warning'}`}>
                  {doctor.available_today ? 'Available Today' : 'Not Available'}
                </span>
              </div>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Department:</strong> {doctor.department_name}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Experience:</strong> {doctor.experience}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Consultation Fee:</strong> ₹{doctor.consultation_fee}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Room:</strong> {doctor.room_no}
              </p>
              <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                <strong>OPD Timings:</strong> {doctor.opd_timings}
              </p>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => onSelectDoctor(doctor)}
                disabled={!doctor.available_today}
              >
                {doctor.available_today ? 'Book Appointment' : 'Not Available Today'}
              </button>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <p>No doctors found for the selected department.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;