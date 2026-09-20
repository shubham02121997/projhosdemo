import React from 'react';
import { departments } from '../mockData';

function Departments({ onNavigate, onSelectDepartment }) {
  return (
    <div className="departments">
      <div className="container">
        <h1 className="section-title">Medical Departments</h1>
        <p className="section-subtitle">
          Comprehensive care across {departments.length} medical specialties
        </p>

        <div className="grid grid-2">
          {departments.map((dept) => (
            <div key={dept.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>{dept.icon}</div>
                <div>
                  <h3>{dept.name}</h3>
                  <span className="badge badge-info">{dept.badge}</span>
                </div>
              </div>
              <p style={{ marginBottom: '1rem' }}>{dept.tagline}</p>
              <p style={{ marginBottom: '1rem', color: '#64748b' }}>{dept.short_desc}</p>
              <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>{dept.long_desc}</p>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Key Treatments:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  {dept.key_treatments.map((treatment, index) => (
                    <li key={index} style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                <strong>Head of Department:</strong> {dept.head_of_dept}
              </div>
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                <strong>OPD Schedule:</strong> {dept.opd_schedule_summary}
              </div>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => onSelectDepartment(dept)}
              >
                View Doctors
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;