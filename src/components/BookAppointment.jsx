import React, { useState } from 'react';
import { departments, doctors, timeSlots } from '../mockData';

function BookAppointment({ onNavigate, selectedDoctor, selectedDepartment, onAppointmentBooked }) {
  const [formData, setFormData] = useState({
    department_id: selectedDepartment?.id || '',
    doctor_id: selectedDoctor?.id || '',
    appointment_date: '',
    time_slot: '',
    patient_name: '',
    patient_phone: '',
    patient_age: '',
    patient_gender: 'male',
    patient_email: '',
    problem_description: '',
    payment_mode: 'counter'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredDoctors = formData.department_id
    ? doctors.filter(doc => doc.department_id === formData.department_id)
    : doctors;

  const selectedDoctorData = doctors.find(doc => doc.id === formData.doctor_id);
  const consultationFee = selectedDoctorData?.consultation_fee || 600;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.department_id) newErrors.department_id = 'Please select a department';
    if (!formData.doctor_id) newErrors.doctor_id = 'Please select a doctor';
    if (!formData.appointment_date) newErrors.appointment_date = 'Please select appointment date';
    if (!formData.time_slot) newErrors.time_slot = 'Please select a time slot';
    if (!formData.patient_name.trim()) newErrors.patient_name = 'Please enter patient name';
    if (!formData.patient_phone.trim()) newErrors.patient_phone = 'Please enter phone number';
    if (!formData.patient_age) newErrors.patient_age = 'Please enter patient age';
    if (formData.patient_age < 0 || formData.patient_age > 120) newErrors.patient_age = 'Please enter valid age';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const bookingId = `STJ-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000) + 10000}`;
      const newAppointment = {
        id: bookingId,
        booking_time: new Date().toLocaleString(),
        department_id: formData.department_id,
        department_name: departments.find(d => d.id === formData.department_id)?.name || 'General OPD',
        doctor_id: formData.doctor_id,
        doctor_name: selectedDoctorData?.name || 'Consultant',
        room_no: selectedDoctorData?.room_no || 'OPD-101',
        appointment_date: formData.appointment_date,
        time_slot: formData.time_slot,
        patient_name: formData.patient_name,
        patient_phone: formData.patient_phone,
        patient_age: parseInt(formData.patient_age),
        patient_gender: formData.patient_gender,
        patient_email: formData.patient_email,
        problem_description: formData.problem_description,
        fee_amount: consultationFee,
        payment_mode: formData.payment_mode,
        payment_status: formData.payment_mode === 'counter' ? 'Pay at Hospital Counter' : 'Paid (Online)',
        status: 'confirmed'
      };

      onAppointmentBooked(newAppointment);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="book-appointment">
      <div className="container">
        <h1 className="section-title">Book an Appointment</h1>
        <p className="section-subtitle">
          Schedule your consultation with our expert doctors
        </p>

        <div className="card">
          <form className="form" onSubmit={handleSubmit}>
            {/* Department Selection */}
            <div className="form-group">
              <label className="form-label">Department *</label>
              <select
                className="form-select"
                name="department_id"
                value={formData.department_id}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
              {errors.department_id && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.department_id}</p>}
            </div>

            {/* Doctor Selection */}
            <div className="form-group">
              <label className="form-label">Doctor *</label>
              <select
                className="form-select"
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                disabled={!formData.department_id}
              >
                <option value="">Select Doctor</option>
                {filteredDoctors.map(doc => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} - {doc.qualification} (₹{doc.consultation_fee})
                  </option>
                ))}
              </select>
              {errors.doctor_id && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.doctor_id}</p>}
            </div>

            {/* Appointment Date */}
            <div className="form-group">
              <label className="form-label">Appointment Date *</label>
              <input
                type="date"
                className="form-input"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.appointment_date && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.appointment_date}</p>}
            </div>

            {/* Time Slot */}
            <div className="form-group">
              <label className="form-label">Preferred Time Slot *</label>
              <select
                className="form-select"
                name="time_slot"
                value={formData.time_slot}
                onChange={handleChange}
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.time_slot && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.time_slot}</p>}
            </div>

            {/* Patient Details */}
            <div className="form-group">
              <label className="form-label">Patient Name *</label>
              <input
                type="text"
                className="form-input"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.patient_name && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.patient_name}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                className="form-input"
                name="patient_phone"
                value={formData.patient_phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
              {errors.patient_phone && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.patient_phone}</p>}
            </div>

            <div className="grid grid-2" style={{ gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Age *</label>
                <input
                  type="number"
                  className="form-input"
                  name="patient_age"
                  value={formData.patient_age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  min="0"
                  max="120"
                />
                {errors.patient_age && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.patient_age}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Gender *</label>
                <select
                  className="form-select"
                  name="patient_gender"
                  value={formData.patient_gender}
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email (Optional)</label>
              <input
                type="email"
                className="form-input"
                name="patient_email"
                value={formData.patient_email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Problem Description (Optional)</label>
              <textarea
                className="form-textarea"
                name="problem_description"
                value={formData.problem_description}
                onChange={handleChange}
                placeholder="Briefly describe your health concern"
              />
            </div>

            {/* Payment Mode */}
            <div className="form-group">
              <label className="form-label">Payment Mode</label>
              <select
                className="form-select"
                name="payment_mode"
                value={formData.payment_mode}
                onChange={handleChange}
              >
                <option value="counter">Pay at Hospital Counter</option>
                <option value="upi">UPI Payment</option>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            {/* Fee Summary */}
            {selectedDoctorData && (
              <div className="card" style={{ marginBottom: '1.5rem', background: '#f0fdfa', border: '1px solid #0d9488' }}>
                <h4>Consultation Fee Summary</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span>Doctor Fee:</span>
                  <span>₹{selectedDoctorData.consultation_fee}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span>Hospital Charges:</span>
                  <span>₹50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontWeight: '700', fontSize: '1.125rem' }}>
                  <span>Total:</span>
                  <span>₹{consultationFee}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;