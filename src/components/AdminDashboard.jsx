import React from 'react';
import { adminDashboardData, doctors, departments } from '../mockData';

function AdminDashboard({ onNavigate }) {
  const stats = adminDashboardData.today_stats;

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1 className="section-title">Hospital Admin Dashboard</h1>
        <p className="section-subtitle">
          Real-time overview of hospital operations and metrics
        </p>

        {/* Today's Stats */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Today's Overview</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{stats.total_appointments}</h3>
              <p>Total Appointments</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#16a34a' }}>{stats.confirmed_appointments}</h3>
              <p>Confirmed</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#ca8a04' }}>{stats.pending_appointments}</h3>
              <p>Pending</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#dc2626' }}>{stats.cancelled_appointments}</h3>
              <p>Cancelled</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#dc2626' }}>{stats.emergency_cases}</h3>
              <p>Emergency Cases</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#16a34a' }}>{stats.available_doctors}</h3>
              <p>Doctors Available</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#dc2626' }}>{stats.occupied_icu_beds}/{stats.icu_beds}</h3>
              <p>ICU Occupancy</p>
            </div>
          </div>
        </div>

        {/* Department Stats */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Department-wise Appointments</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Today's Appointments</th>
                <th>Doctors Available</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {adminDashboardData.department_stats.map((deptStat, index) => (
                <tr key={index}>
                  <td>{deptStat.department}</td>
                  <td>{deptStat.appointments}</td>
                  <td>{deptStat.doctors_available}</td>
                  <td>
                    <span className={`badge ${deptStat.appointments > 5 ? 'badge-warning' : 'badge-success'}`}>
                      {deptStat.appointments > 5 ? 'High Load' : 'Normal'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bed Occupancy */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Bed Occupancy Status</h3>
          <div className="grid grid-2">
            {Object.entries(adminDashboardData.bed_occupancy).map(([type, data]) => (
              <div key={type} className="card" style={{ background: '#f8fafc' }}>
                <h4 style={{ textTransform: 'capitalize' }}>{type.replace('_', ' ')}</h4>
                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span>Occupied:</span>
                    <span>{data.occupied}/{data.total}</span>
                  </div>
                  <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '0.25rem', height: '8px' }}>
                    <div
                      style={{
                        width: `${(data.occupied / data.total) * 100}%`,
                        background: (data.occupied / data.total) > 0.8 ? '#dc2626' : (data.occupied / data.total) > 0.6 ? '#ca8a04' : '#16a34a',
                        height: '100%',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#64748b' }}>
                    {((data.occupied / data.total) * 100).toFixed(0)}% occupied
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Summary */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Revenue Summary</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 style={{ color: '#16a34a' }}>₹{adminDashboardData.revenue_summary.today.toLocaleString()}</h3>
              <p>Today</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#0d9488' }}>₹{adminDashboardData.revenue_summary.this_week.toLocaleString()}</h3>
              <p>This Week</p>
            </div>
            <div className="stat-card">
              <h3 style={{ color: '#0f766e' }}>₹{adminDashboardData.revenue_summary.this_month.toLocaleString()}</h3>
              <p>This Month</p>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Recent Appointments</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date & Time</th>
                <th>Department</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {adminDashboardData.recent_appointments.map((apt) => (
                <tr key={apt.id}>
                  <td>{apt.id}</td>
                  <td>{apt.patient_name}</td>
                  <td>{apt.doctor_name}</td>
                  <td>
                    <div>{apt.appointment_date}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{apt.time_slot}</div>
                  </td>
                  <td>{apt.department_name}</td>
                  <td>
                    <span className={`badge ${apt.status === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td>₹{apt.fee_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Doctor Availability */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Doctor Availability Status</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Department</th>
                <th>Qualification</th>
                <th>Room</th>
                <th>Status</th>
                <th>OPD Timings</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.department_name}</td>
                  <td>{doctor.qualification}</td>
                  <td>{doctor.room_no}</td>
                  <td>
                    <span className={`badge ${doctor.available_today ? 'badge-success' : 'badge-warning'}`}>
                      {doctor.available_today ? 'Available' : 'Not Available'}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.875rem' }}>{doctor.opd_timings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Quick Actions</h3>
          <div className="grid grid-4">
            <button className="btn btn-primary" onClick={() => onNavigate('book-appointment')}>
              New Appointment
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('doctors')}>
              Manage Doctors
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('departments')}>
              Department Settings
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('reports')}>
              View Reports
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>System Status</h3>
          <div className="grid grid-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.5rem' }}>●</span>
              <span>Database: Connected</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.5rem' }}>●</span>
              <span>API Server: Running</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.5rem' }}>●</span>
              <span>AI Services: Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#16a34a', fontSize: '1.5rem' }}>●</span>
              <span>Backup: Scheduled</span>
            </div>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;