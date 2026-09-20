import React from 'react';
import { facilities } from '../mockData';

function Facilities({ onNavigate }) {
  return (
    <div className="facilities">
      <div className="container">
        <h1 className="section-title">Hospital Facilities</h1>
        <p className="section-subtitle">
          State-of-the-art medical infrastructure and equipment
        </p>

        <div className="grid grid-2">
          {facilities.map((facility) => (
            <div key={facility.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '3rem', marginRight: '1rem' }}>{facility.icon}</div>
                <div>
                  <h3>{facility.name}</h3>
                  <span className={`badge ${facility.available ? 'badge-success' : 'badge-warning'}`}>
                    {facility.available ? 'Available' : 'Maintenance'}
                  </span>
                </div>
              </div>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3>Infrastructure Highlights</h3>
          <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '2rem' }}>
            <li>180 Bed Capacity with General, Private & Deluxe Rooms</li>
            <li>18-bed ICU (Medical & Surgical) with Ventilators & Central O2</li>
            <li>5 Advanced Modular Operation Theatres</li>
            <li>Haemodialysis Unit with 4 latest machines</li>
            <li>Department of Pathology & Blood Bank with Component Separation</li>
            <li>2D Echo, Digital X-Ray, Ultrasound, Colour Doppler, EEG, EMG, NCV</li>
            <li>Physiotherapy & Neurodevelopment Rehabilitation Unit</li>
            <li>24-Hour Emergency, Pathology, Pharmacy & Billing Services</li>
            <li>Pastoral Care, Counselling & Social Work Outreach</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Facilities;