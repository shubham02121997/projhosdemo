import React, { useState } from 'react';
import { mockAppointments, mockPatients, mockReports } from '../mockData';

function PatientDashboard({ onNavigate, appointments }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [activeTab, setActiveTab] = useState('appointments');

  const handlePatientSearch = (e) => {
    e.preventDefault();
    const patient = mockPatients.find(p =>
      p.patient_id === searchId || p.phone === searchId
    );
    setSelectedPatient(patient || null);
  };

  const patientAppointments = selectedPatient
    ? [...mockAppointments, ...appointments].filter(apt => apt.patient_phone === selectedPatient.phone)
    : [...mockAppointments, ...appointments];

  const patientReports = selectedPatient
    ? mockReports.filter(r => r.patient_id === selectedPatient.patient_id)
    : mockReports;

  return (
    <div className="patient-dashboard">
      <div className="container">
        <h1 className="section-title">Patient Portal</h1>
        <p className="section-subtitle">
          Access your appointments, reports, and medical records
        </p>

        {/* Patient Search */}
        {!selectedPatient && (
          <div className="card" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Patient Login</h3>
            <form onSubmit={handlePatientSearch}>
              <div className="form-group">
                <label className="form-label">Patient ID or Phone Number</label>
                <input
                  type="text"
                  className="form-input"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Enter P-1001 or phone number"
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Access Records
              </button>
            </form>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
              Demo: Use "P-1001" or "+91 98390 12345"
            </p>
          </div>
        )}

        {selectedPatient && (
          <>
            {/* Patient Info Card */}
            <div className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3>{selectedPatient.name}</h3>
                  <p style={{ color: '#64748b' }}>Patient ID: {selectedPatient.patient_id}</p>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => { setSelectedPatient(null); setSearchId(''); }}
                >
                  Logout
                </button>
              </div>
              <div className="grid grid-4" style={{ marginTop: '1rem' }}>
                <div>
                  <strong>Age:</strong> {selectedPatient.age}
                </div>
                <div>
                  <strong>Gender:</strong> {selectedPatient.gender}
                </div>
                <div>
                  <strong>Blood Group:</strong> {selectedPatient.blood_group}
                </div>
                <div>
                  <strong>Phone:</strong> {selectedPatient.phone}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                className={`btn ${activeTab === 'appointments' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('appointments')}
              >
                Appointments ({patientAppointments.length})
              </button>
              <button
                className={`btn ${activeTab === 'reports' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('reports')}
              >
                Lab Reports ({patientReports.length})
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => onNavigate('book-appointment')}
              >
                Book New Appointment
              </button>
            </div>

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Your Appointments</h3>
                {patientAppointments.length > 0 ? (
                  <div className="grid">
                    {patientAppointments.map((apt) => (
                      <div key={apt.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                          <div>
                            <h4>{apt.doctor_name}</h4>
                            <p style={{ color: '#64748b' }}>{apt.department_name}</p>
                          </div>
                          <span className={`badge ${apt.status === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className="grid grid-2" style={{ fontSize: '0.875rem' }}>
                          <div><strong>Date:</strong> {apt.appointment_date}</div>
                          <div><strong>Time:</strong> {apt.time_slot}</div>
                          <div><strong>Room:</strong> {apt.room_no}</div>
                          <div><strong>Fee:</strong> ₹{apt.fee_amount}</div>
                        </div>
                        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
                          <strong>Booking ID:</strong> {apt.id}
                        </div>
                        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                          <strong>Payment:</strong> {apt.payment_status}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                    <p>No appointments found. Book your first appointment!</p>
                  </div>
                )}
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Your Lab Reports</h3>
                {patientReports.length > 0 ? (
                  <div className="grid">
                    {patientReports.map((report) => (
                      <div key={report.report_id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                          <div>
                            <h4>{report.report_type}</h4>
                            <p style={{ color: '#64748b' }}>{report.test_name}</p>
                          </div>
                          <span className="badge badge-success">
                            {report.status}
                          </span>
                        </div>
                        <div style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                          <strong>Date:</strong> {report.report_date}
                        </div>
                        <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>{report.summary}</p>
                        {report.ai_insights && (
                          <button
                            className="btn btn-secondary"
                            style={{ width: '100%' }}
                            onClick={() => onNavigate('reports')}
                          >
                            View AI Analysis
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                    <p>No lab reports found.</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {!selectedPatient && (
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Please login with your Patient ID or phone number to access your records.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;