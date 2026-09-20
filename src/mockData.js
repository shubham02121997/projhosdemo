// Mock data for frontend demo prototype

export const hospitalInfo = {
  name: "St. Joseph's Hospital",
  city: "Lucknow",
  tagline: "WE TREAT - GOD HEALS",
  established_year: 1994,
  bed_count: 180,
  specialties_count: 22,
  doctors_count: 42,
  operation_theatres: 5,
  icu_beds: 18,
  dialysis_units: 4,
  patients_treated_annual: "75,000+",
  address: "Vishal Khand-5, Gomti Nagar, Lucknow - 226010, Uttar Pradesh, India",
  emergency_number: "+91 522 4054200",
  phone_numbers: ["+91 522 4054200", "+91 522 4054228", "+91 522 4054236"],
  email: "stjoseph2004@yahoo.com",
  website: "www.stjosephslucknow.org",
  opd_hours: "Monday to Saturday: 08:30 AM – 08:00 PM (Emergency 24 Hours)",
  emergency_availability: "24 Hours / 365 Days Open",
  vision: "A society where the kingdom of God is experienced through our compassionate service to the sick and suffering.",
  mission: "Our mission is to contribute the best with generosity and joy, as angels of consolation, mystic activists, and change agents to facilitate healing and wholeness to humanity especially to the poor and marginalized.",
  about_text: "Established in 1994 with the clear vision to render wholehearted healthcare service to the poor, sick, and suffering humanity. Owned and managed by the Medical Sisters of St. Joseph, the hospital houses 180 beds, 18-bed Medical & Surgical ICU, 5 Operation Theatres, Dialysis unit, and specialty-specific OPD block with a firm conviction: 'We Treat, God Heals'.",
  core_values: [
    "Compassionate service",
    "Respect for life at all levels",
    "Justice to the oppressed",
    "Reconciliation with one another",
    "Bring harmony in society",
    "Excellence in the art and science of healing"
  ],
  infrastructure_highlights: [
    "180 Bed Capacity with General, Private & Deluxe Rooms",
    "18-bed ICU (Medical & Surgical) with Ventilators & Central O2",
    "5 Advanced Modular Operation Theatres",
    "Haemodialysis Unit with 4 latest machines",
    "Department of Pathology & Blood Bank with Component Separation",
    "2D Echo, Digital X-Ray, Ultrasound, Colour Doppler, EEG, EMG, NCV",
    "Physiotherapy & Neurodevelopment Rehabilitation Unit",
    "24-Hour Emergency, Pathology, Pharmacy & Billing Services",
    "Pastoral Care, Counselling & Social Work Outreach"
  ],
  insurance_partners: [
    "Ayushman Bharat (PMJAY)",
    "Star Health Insurance",
    "HDFC ERGO Health",
    "ICICI Lombard",
    "Max Bupa / Niva Bupa",
    "Care Health Insurance",
    "Medi Assist TPA",
    "MDIndia Healthcare TPA",
    "Paramount TPA",
    "Vidal Health TPA"
  ]
};

export const departments = [
  {
    id: "gen-med",
    name: "General Medicine",
    icon: "🩺",
    tagline: "Comprehensive Internal Medicine & Chronic Illness Care",
    short_desc: "Primary and tertiary medical care for infectious diseases, diabetes, hypertension, and multi-system disorders.",
    long_desc: "Led by senior physicians offering round-the-clock inpatient management, diabetic clinic, respiratory treatment, and metabolic disease management.",
    key_treatments: ["Diabetes & Thyroid Clinics", "Hypertension & Cardiac Risk Care", "Infectious & Tropical Fevers", "Chest & Respiratory Medicine"],
    head_of_dept: "Dr. R.K. Saxena (MD)",
    opd_schedule_summary: "Mon - Sat: 9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM",
    badge: "Core Specialty"
  },
  {
    id: "surgery",
    name: "General & Laparoscopic Surgery",
    icon: "🔪",
    tagline: "Advanced Minimally Invasive & Open Surgical Care",
    short_desc: "Equipped with high-definition laparoscopic suites and 5 modular operation theatres for abdominal and trauma surgeries.",
    long_desc: "Comprehensive surgical solutions for gallbladder stones, hernias, appendix, intestinal conditions, trauma, and abdominal oncological cases.",
    key_treatments: ["Laparoscopic Cholecystectomy", "Hernia Repair & Appendectomy", "Gastrointestinal Surgeries", "Trauma & Wound Debridement"],
    head_of_dept: "Dr. Nikhil Singh (MS)",
    opd_schedule_summary: "Mon - Sat: 10:00 AM – 2:00 PM & 5:00 PM – 7:30 PM",
    badge: "5 Modern OTs"
  },
  {
    id: "gynae",
    name: "Gynaecology & Obstetrics",
    icon: "❤️",
    tagline: "Maternal Health, High-Risk Deliveries & Women's Wellness",
    short_desc: "Dedicated labor rooms, neonatal support, painless deliveries, infertility counseling, and gynaecological surgeries.",
    long_desc: "Comprehensive women's health services including antenatal care, high-risk pregnancy management, infertility treatment, and gynaecological surgeries.",
    key_treatments: ["Normal & Painless Deliveries", "C-Section & High-Risk Pregnancy", "Infertility Treatment", "Gynaecological Surgeries"],
    head_of_dept: "Dr. Priya Sharma (MD)",
    opd_schedule_summary: "Mon - Sat: 9:00 AM – 2:00 PM & 4:00 PM – 7:00 PM",
    badge: "Women's Health"
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "💓",
    tagline: "Heart Care, Cardiac Interventions & Preventive Cardiology",
    short_desc: "2D Echo, stress testing, cardiac monitoring, and interventional cardiology procedures.",
    long_desc: "Advanced cardiac care including echocardiography, stress testing, Holter monitoring, and interventional procedures for heart conditions.",
    key_treatments: ["2D Echo & Stress Test", "Cardiac Catheterization", "Angiography & Angioplasty", "Heart Failure Management"],
    head_of_dept: "Dr. Amit Verma (DM)",
    opd_schedule_summary: "Mon - Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM",
    badge: "Heart Care"
  },
  {
    id: "ortho",
    name: "Orthopaedics",
    icon: "🦴",
    tagline: "Joint Replacement, Trauma Care & Sports Medicine",
    short_desc: "Joint replacement surgeries, fracture management, arthroscopy, and rehabilitation.",
    long_desc: "Comprehensive orthopedic care including joint replacements, trauma management, sports injuries, and rehabilitation services.",
    key_treatments: ["Joint Replacement Surgery", "Fracture Management", "Arthroscopy", "Sports Injury Treatment"],
    head_of_dept: "Dr. Rajesh Gupta (MS)",
    opd_schedule_summary: "Mon - Sat: 9:00 AM – 1:00 PM & 5:00 PM – 7:30 PM",
    badge: "Bone & Joint"
  },
  {
    id: "pediatrics",
    name: "Paediatrics",
    icon: "👶",
    tagline: "Child Health, Neonatal Care & Developmental Pediatrics",
    short_desc: "Neonatal ICU, vaccination, growth monitoring, and pediatric emergency care.",
    long_desc: "Specialized care for infants and children including neonatal intensive care, vaccination programs, growth monitoring, and pediatric emergencies.",
    key_treatments: ["Neonatal Intensive Care", "Vaccination & Immunization", "Growth Monitoring", "Pediatric Emergencies"],
    head_of_dept: "Dr. Neha Kapoor (MD)",
    opd_schedule_summary: "Mon - Sat: 9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM",
    badge: "Child Care"
  }
];

export const doctors = [
  {
    id: "doc-rk-saxena",
    name: "Dr. R.K. Saxena",
    qualification: "MD (General Medicine)",
    specialization: "Internal Medicine, Diabetes, Hypertension",
    department_id: "gen-med",
    department_name: "General Medicine",
    experience: "25+ years",
    consultation_fee: 600,
    room_no: "OPD-101",
    available_today: true,
    opd_timings: "Mon - Sat: 9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM",
    image: null
  },
  {
    id: "doc-nikhil-singh",
    name: "Dr. Nikhil Singh",
    qualification: "MS (General Surgery)",
    specialization: "Laparoscopic Surgery, General Surgery",
    department_id: "surgery",
    department_name: "General & Laparoscopic Surgery",
    experience: "18+ years",
    consultation_fee: 700,
    room_no: "OPD-201",
    available_today: true,
    opd_timings: "Mon - Sat: 10:00 AM – 2:00 PM & 5:00 PM – 7:30 PM",
    image: null
  },
  {
    id: "doc-priya-sharma",
    name: "Dr. Priya Sharma",
    qualification: "MD (Obstetrics & Gynaecology)",
    specialization: "High-Risk Pregnancy, Infertility, Gynaecological Surgery",
    department_id: "gynae",
    department_name: "Gynaecology & Obstetrics",
    experience: "15+ years",
    consultation_fee: 650,
    room_no: "OPD-301",
    available_today: false,
    opd_timings: "Mon - Sat: 9:00 AM – 2:00 PM & 4:00 PM – 7:00 PM",
    image: null
  },
  {
    id: "doc-amit-verma",
    name: "Dr. Amit Verma",
    qualification: "DM (Cardiology)",
    specialization: "Interventional Cardiology, Heart Failure",
    department_id: "cardiology",
    department_name: "Cardiology",
    experience: "20+ years",
    consultation_fee: 800,
    room_no: "OPD-401",
    available_today: true,
    opd_timings: "Mon - Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM",
    image: null
  },
  {
    id: "doc-rajesh-gupta",
    name: "Dr. Rajesh Gupta",
    qualification: "MS (Orthopaedics)",
    specialization: "Joint Replacement, Trauma Surgery",
    department_id: "ortho",
    department_name: "Orthopaedics",
    experience: "22+ years",
    consultation_fee: 750,
    room_no: "OPD-501",
    available_today: true,
    opd_timings: "Mon - Sat: 9:00 AM – 1:00 PM & 5:00 PM – 7:30 PM",
    image: null
  },
  {
    id: "doc-neha-kapoor",
    name: "Dr. Neha Kapoor",
    qualification: "MD (Paediatrics)",
    specialization: "Neonatal Care, Developmental Pediatrics",
    department_id: "pediatrics",
    department_name: "Paediatrics",
    experience: "12+ years",
    consultation_fee: 550,
    room_no: "OPD-601",
    available_today: false,
    opd_timings: "Mon - Sat: 9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM",
    image: null
  }
];

export const facilities = [
  {
    id: "icu",
    name: "18-Bed Medical & Surgical ICU",
    icon: "🏥",
    description: "State-of-the-art intensive care unit with ventilators, central oxygen supply, and 24/7 critical care monitoring.",
    available: true
  },
  {
    id: "ot",
    name: "5 Modular Operation Theatres",
    icon: "🔬",
    description: "Advanced operation theatres with HEPA filters, laminar airflow, and cutting-edge surgical equipment.",
    available: true
  },
  {
    id: "dialysis",
    name: "Haemodialysis Unit",
    icon: "💧",
    description: "4 latest dialysis machines providing renal replacement therapy with trained nephrology support.",
    available: true
  },
  {
    id: "pathology",
    name: "Pathology & Blood Bank",
    icon: "🧪",
    description: "Comprehensive laboratory services with blood bank and component separation facilities.",
    available: true
  },
  {
    id: "imaging",
    name: "Advanced Imaging Services",
    icon: "📷",
    description: "2D Echo, Digital X-Ray, Ultrasound, Colour Doppler, EEG, EMG, NCV for accurate diagnostics.",
    available: true
  },
  {
    id: "emergency",
    name: "24-Hour Emergency Services",
    icon: "🚨",
    description: "Round-the-clock emergency care with fully equipped ambulances and trauma team.",
    available: true
  },
  {
    id: "pharmacy",
    name: "24-Hour Pharmacy",
    icon: "💊",
    description: "In-house pharmacy with stocked medications and pharmaceutical counseling services.",
    available: true
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehabilitation",
    icon: "🏃",
    description: "Comprehensive physiotherapy and neurodevelopmental rehabilitation unit for patient recovery.",
    available: true
  }
];

export const testimonials = [
  {
    id: 1,
    patient_name: "Aditi Sharma",
    treatment: "General Medicine Consultation",
    rating: 5,
    date: "September 2026",
    review: "The doctors at St. Joseph's Hospital are extremely caring and professional. Dr. Saxena took time to explain my condition and treatment options clearly. The hospital environment is clean and the staff is very helpful.",
    location: "Gomti Nagar, Lucknow"
  },
  {
    id: 2,
    patient_name: "Rajesh Kumar",
    treatment: "Laparoscopic Surgery",
    rating: 5,
    date: "August 2026",
    review: "I underwent gallbladder surgery here. The operation theatre facilities are modern and Dr. Singh is an excellent surgeon. Post-operative care was exceptional. Highly recommend for surgical procedures.",
    location: "Alambagh, Lucknow"
  },
  {
    id: 3,
    patient_name: "Sunita Verma",
    treatment: "Normal Delivery",
    rating: 5,
    date: "July 2026",
    review: "Delivered my baby here safely. The maternity ward staff was very supportive throughout my pregnancy and delivery. Dr. Sharma is very experienced and compassionate. Thank you St. Joseph's!",
    location: "Indira Nagar, Lucknow"
  },
  {
    id: 4,
    patient_name: "Vikram Singh",
    treatment: "Cardiac Consultation",
    rating: 4,
    date: "June 2026",
    review: "Visited for cardiac evaluation. The cardiology department is well-equipped with modern diagnostic equipment. Dr. Verma is thorough in his examination. Wait times can be long during peak hours.",
    location: "Hazratganj, Lucknow"
  },
  {
    id: 5,
    patient_name: "Meera Devi",
    treatment: "Joint Replacement",
    rating: 5,
    date: "May 2026",
    review: "My mother had knee replacement surgery here. The orthopedic team provided excellent care. Rehabilitation services helped her recover well. The hospital's mission of 'We Treat, God Heals' truly reflects in their service.",
    location: "Charbagh, Lucknow"
  }
];

export const timeSlots = [
  "09:00 AM – 10:00 AM (Morning Slot)",
  "10:00 AM – 11:00 AM (Morning Slot)",
  "11:00 AM – 12:00 PM (Morning Slot)",
  "12:00 PM – 01:00 PM (Afternoon Slot)",
  "02:00 PM – 03:00 PM (Afternoon Slot)",
  "03:00 PM – 04:00 PM (Afternoon Slot)",
  "04:00 PM – 05:00 PM (Evening Slot)",
  "05:00 PM – 06:00 PM (Evening Slot)",
  "06:00 PM – 07:00 PM (Evening Slot)",
  "07:00 PM – 08:00 PM (Evening Slot)"
];

export const mockAppointments = [
  {
    id: "STJ-2026-12345",
    booking_time: "15 Sep 2026, 10:30 AM",
    department_id: "gen-med",
    department_name: "General Medicine",
    doctor_id: "doc-rk-saxena",
    doctor_name: "Dr. R.K. Saxena",
    room_no: "OPD-101",
    appointment_date: "2026-09-20",
    time_slot: "10:00 AM – 11:00 AM (Morning Slot)",
    patient_name: "Aditi Sharma",
    patient_phone: "+91 98390 12345",
    patient_age: 34,
    patient_gender: "female",
    patient_email: "aditi.sharma@example.com",
    problem_description: "Routine hypertension check and CBC report follow-up",
    fee_amount: 600,
    payment_mode: "counter",
    payment_status: "Pay at Hospital Counter",
    status: "confirmed"
  },
  {
    id: "STJ-2026-12346",
    booking_time: "15 Sep 2026, 11:15 AM",
    department_id: "surgery",
    department_name: "General & Laparoscopic Surgery",
    doctor_id: "doc-nikhil-singh",
    doctor_name: "Dr. Nikhil Singh",
    room_no: "OPD-201",
    appointment_date: "2026-09-21",
    time_slot: "11:00 AM – 12:00 PM (Morning Slot)",
    patient_name: "Sunil Chaudhary",
    patient_phone: "+91 94150 99887",
    patient_age: 48,
    patient_gender: "male",
    patient_email: "sunil.c@example.com",
    problem_description: "Post-surgery abdominal scan consultation",
    fee_amount: 700,
    payment_mode: "upi",
    payment_status: "Paid (Online)",
    status: "confirmed"
  }
];

export const mockPatients = [
  {
    patient_id: "P-1001",
    name: "Aditi Sharma",
    phone: "+91 98390 12345",
    email: "aditi.sharma@example.com",
    age: 34,
    gender: "female",
    address: "Gomti Nagar, Lucknow",
    blood_group: "O+",
    registration_date: "2024-01-15"
  },
  {
    patient_id: "P-1002",
    name: "Sunil Chaudhary",
    phone: "+91 94150 99887",
    email: "sunil.c@example.com",
    age: 48,
    gender: "male",
    address: "Alambagh, Lucknow",
    blood_group: "B+",
    registration_date: "2024-02-20"
  },
  {
    patient_id: "P-1003",
    name: "Meera Devi",
    phone: "+91 88550 44556",
    email: "meera.dev@example.com",
    age: 62,
    gender: "female",
    address: "Charbagh, Lucknow",
    blood_group: "A+",
    registration_date: "2024-03-10"
  }
];

export const mockReports = [
  {
    report_id: "RPT-2026-001",
    patient_id: "P-1001",
    patient_name: "Aditi Sharma",
    report_type: "Complete Blood Count (CBC)",
    report_date: "2026-09-10",
    test_name: "CBC with Differential",
    summary: "Hemoglobin slightly below normal range. Other parameters within normal limits.",
    status: "completed",
    ai_insights: {
      overview: "Your CBC report shows mild anemia with hemoglobin levels slightly below the normal range. Other blood parameters are within healthy limits.",
      key_findings: [
        { title: "Hemoglobin", description: "Mildly decreased - indicates mild anemia", type: "attention" },
        { title: "White Blood Cells", description: "Within normal range - no infection detected", type: "positive" },
        { title: "Platelet Count", description: "Normal - adequate clotting ability", type: "positive" }
      ],
      detailed_parameters: [
        { name: "Hemoglobin", user_value: "10.8 g/dL", normal_range: "12.0-15.5 g/dL", meaning: "Oxygen-carrying protein in red blood cells", status: "decreased" },
        { name: "WBC Count", user_value: "7.2 × 10³/μL", normal_range: "4.0-11.0 × 10³/μL", meaning: "White blood cells fighting infection", status: "normal" },
        { name: "Platelet Count", user_value: "250 × 10³/μL", normal_range: "150-450 × 10³/μL", meaning: "Blood clotting cells", status: "normal" }
      ],
      dietary_recommendations: [
        "Increase iron-rich foods: spinach, lentils, red meat",
        "Take vitamin C to improve iron absorption",
        "Consider iron supplements as advised by doctor"
      ],
      follow_up: "Follow up with your physician in 2 weeks to review iron supplementation"
    }
  },
  {
    report_id: "RPT-2026-002",
    patient_id: "P-1001",
    patient_name: "Aditi Sharma",
    report_type: "Lipid Profile",
    report_date: "2026-09-08",
    test_name: "Lipid Panel",
    summary: "Total cholesterol slightly elevated. LDL cholesterol borderline high.",
    status: "completed",
    ai_insights: {
      overview: "Your lipid profile shows borderline high cholesterol levels. Lifestyle modifications may help improve cardiovascular health.",
      key_findings: [
        { title: "Total Cholesterol", description: "Slightly elevated - monitor diet", type: "attention" },
        { title: "LDL Cholesterol", description: "Borderline high - cardiovascular risk factor", type: "attention" },
        { title: "HDL Cholesterol", description: "Good cholesterol within healthy range", type: "positive" }
      ],
      detailed_parameters: [
        { name: "Total Cholesterol", user_value: "218 mg/dL", normal_range: "<200 mg/dL", meaning: "Total blood cholesterol", status: "elevated" },
        { name: "LDL Cholesterol", user_value: "142 mg/dL", normal_range: "<130 mg/dL", meaning: "Bad cholesterol", status: "elevated" },
        { name: "HDL Cholesterol", user_value: "55 mg/dL", normal_range: ">40 mg/dL", meaning: "Good cholesterol", status: "normal" }
      ],
      dietary_recommendations: [
        "Reduce saturated fats and trans fats",
        "Increase omega-3 fatty acids: fish, flaxseeds",
        "Regular exercise and weight management"
      ],
      follow_up: "Cardiology consultation recommended within 4 weeks"
    }
  },
  {
    report_id: "RPT-2026-003",
    patient_id: "P-1002",
    patient_name: "Sunil Chaudhary",
    report_type: "Kidney Function Test (KFT)",
    report_date: "2026-09-12",
    test_name: "Renal Function Panel",
    summary: "All kidney function parameters within normal limits.",
    status: "completed",
    ai_insights: {
      overview: "Your kidney function test results are excellent. All parameters are within normal ranges indicating healthy renal function.",
      key_findings: [
        { title: "Serum Creatinine", description: "Normal - healthy kidney filtration", type: "positive" },
        { title: "Blood Urea", description: "Normal - proper protein metabolism", type: "positive" },
        { title: "eGFR", description: "Normal - good kidney function", type: "positive" }
      ],
      detailed_parameters: [
        { name: "Serum Creatinine", user_value: "0.9 mg/dL", normal_range: "0.6-1.2 mg/dL", meaning: "Kidney filtration marker", status: "normal" },
        { name: "Blood Urea", user_value: "28 mg/dL", normal_range: "10-50 mg/dL", meaning: "Protein metabolism waste", status: "normal" },
        { name: "eGFR", user_value: "85 mL/min", normal_range: ">60 mL/min", meaning: "Estimated glomerular filtration rate", status: "normal" }
      ],
      dietary_recommendations: [
        "Maintain adequate hydration (2-3 liters water daily)",
        "Continue balanced diet with moderate protein",
        "Regular monitoring of kidney function"
      ],
      follow_up: "Routine follow-up in 6 months recommended"
    }
  }
];

export const adminDashboardData = {
  today_stats: {
    total_appointments: 24,
    confirmed_appointments: 18,
    pending_appointments: 4,
    cancelled_appointments: 2,
    emergency_cases: 3,
    available_doctors: 8,
    occupied_icu_beds: 12,
    available_icu_beds: 6
  },
  recent_appointments: mockAppointments,
  department_stats: [
    { department: "General Medicine", appointments: 8, doctors_available: 3 },
    { department: "Surgery", appointments: 5, doctors_available: 2 },
    { department: "Gynaecology", appointments: 4, doctors_available: 2 },
    { department: "Cardiology", appointments: 3, doctors_available: 1 },
    { department: "Orthopaedics", appointments: 2, doctors_available: 2 },
    { department: "Paediatrics", appointments: 2, doctors_available: 1 }
  ],
  bed_occupancy: {
    general_wards: { total: 120, occupied: 95 },
    private_rooms: { total: 40, occupied: 32 },
    icu: { total: 18, occupied: 12 },
    emergency: { total: 10, occupied: 7 }
  },
  revenue_summary: {
    today: 125000,
    this_week: 875000,
    this_month: 3500000
  }
};