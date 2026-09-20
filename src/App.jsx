import React, { useState } from 'react';
import { hospitalInfo } from './mockData';
import Home from './components/Home';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import BookAppointment from './components/BookAppointment';
import PatientDashboard from './components/PatientDashboard';
import Reports from './components/Reports';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'departments':
        return <Departments onNavigate={setCurrentScreen} onSelectDepartment={(dept) => { setSelectedDepartment(dept); setCurrentScreen('doctors'); }} />;
      case 'doctors':
        return <Doctors onNavigate={setCurrentScreen} selectedDepartment={selectedDepartment} onSelectDoctor={(doc) => { setSelectedDoctor(doc); setCurrentScreen('book-appointment'); }} />;
      case 'facilities':
        return <Facilities onNavigate={setCurrentScreen} />;
      case 'book-appointment':
        return <BookAppointment onNavigate={setCurrentScreen} selectedDoctor={selectedDoctor} selectedDepartment={selectedDepartment} onAppointmentBooked={(apt) => { setAppointments([...appointments, apt]); setCurrentScreen('patient-dashboard'); }} />;
      case 'patient-dashboard':
        return <PatientDashboard onNavigate={setCurrentScreen} appointments={appointments} />;
      case 'reports':
        return <Reports onNavigate={setCurrentScreen} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="app">
      <Header hospitalInfo={hospitalInfo} currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      <main className="main-content">
        {renderScreen()}
      </main>
      <Footer hospitalInfo={hospitalInfo} onNavigate={setCurrentScreen} />
    </div>
  );
}

function Header({ hospitalInfo, currentScreen, onNavigate }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-brand">
          <h1 className="header-title">{hospitalInfo.name}</h1>
          <p className="header-tagline">{hospitalInfo.tagline}</p>
        </div>
        <nav className="header-nav">
          <button
            className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button
            className={`nav-button ${currentScreen === 'departments' ? 'active' : ''}`}
            onClick={() => onNavigate('departments')}
          >
            Departments
          </button>
          <button
            className={`nav-button ${currentScreen === 'doctors' ? 'active' : ''}`}
            onClick={() => onNavigate('doctors')}
          >
            Doctors
          </button>
          <button
            className={`nav-button ${currentScreen === 'facilities' ? 'active' : ''}`}
            onClick={() => onNavigate('facilities')}
          >
            Facilities
          </button>
          <button
            className={`nav-button ${currentScreen === 'book-appointment' ? 'active' : ''}`}
            onClick={() => onNavigate('book-appointment')}
          >
            Book Appointment
          </button>
          <button
            className={`nav-button ${currentScreen === 'reports' ? 'active' : ''}`}
            onClick={() => onNavigate('reports')}
          >
            Reports
          </button>
          <button
            className={`nav-button ${currentScreen === 'patient-dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('patient-dashboard')}
          >
            Patient Portal
          </button>
          <button
            className={`nav-button ${currentScreen === 'admin-dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('admin-dashboard')}
          >
            Admin
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ hospitalInfo, onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>{hospitalInfo.name}</h3>
          <p>{hospitalInfo.tagline}</p>
          <p>{hospitalInfo.address}</p>
          <p>Emergency: {hospitalInfo.emergency_number}</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('departments')}>Departments</button>
          <button onClick={() => onNavigate('doctors')}>Doctors</button>
          <button onClick={() => onNavigate('book-appointment')}>Book Appointment</button>
        </div>
        <div className="footer-section">
          <h4>Patient Services</h4>
          <button onClick={() => onNavigate('reports')}>View Reports</button>
          <button onClick={() => onNavigate('patient-dashboard')}>Patient Portal</button>
          <button onClick={() => onNavigate('facilities')}>Facilities</button>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>{hospitalInfo.email}</p>
          <p>{hospitalInfo.website}</p>
          <p>OPD Hours: {hospitalInfo.opd_hours}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved.</p>
        <p>Frontend Demo Prototype - For Demonstration Purposes Only</p>
      </div>
    </footer>
  );
}

export default App;