# St. Joseph's Hospital - Frontend Demo Prototype

This is a frontend-only demonstration prototype of the St. Joseph's Hospital management system. It replicates the main workflows and screens of the full project using mock/static data for demonstration purposes to hospital management.

## 🚀 Features

The frontend demo includes all major screens and workflows:

### 1. **Hospital Home**
- Hero section with hospital information
- Statistics overview (beds, specialties, doctors, patients)
- Department previews
- Facilities showcase
- Patient testimonials
- Emergency contact information

### 2. **Departments**
- Complete list of 6 medical departments
- Detailed department information including:
  - Specializations and treatments
  - Head of department
  - OPD schedules
  - Key treatments offered

### 3. **Doctor Availability**
- Doctor directory with filtering by department
- Real-time availability status
- Doctor profiles with:
  - Qualifications and specializations
  - Experience
  - Consultation fees
  - OPD timings
  - Room numbers

### 4. **Appointment Booking**
- Complete appointment booking workflow
- Department and doctor selection
- Date and time slot selection
- Patient information form
- Payment mode selection
- Fee calculation and summary
- Booking confirmation

### 5. **Patient Dashboard**
- Patient login (Patient ID or phone number)
- Appointment history
- Lab reports access
- Personal health information
- Quick booking access

### 6. **Reports & AI Insights**
- Lab reports listing
- Detailed report view
- AI-powered medical analysis including:
  - Overview of findings
  - Key findings with status indicators
  - Detailed parameter analysis
  - Dietary recommendations
  - Follow-up suggestions
  - Medical disclaimer

### 7. **Hospital Admin Dashboard**
- Real-time statistics overview
- Department-wise appointment tracking
- Bed occupancy status
- Revenue summary
- Recent appointments list
- Doctor availability status
- System health monitoring
- Quick action buttons

## 🛠️ Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS** - Custom styling (no external frameworks)
- **Mock Data** - Static JSON data for demonstration

## 📦 Installation

1. Navigate to the frontend-demo directory:
```bash
cd frontend-demo
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://127.0.0.1:8080`

## 📦 Building for Production

Build the application for deployment:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎯 Demo Credentials

For the Patient Dashboard, use these demo credentials:
- **Patient ID:** P-1001
- **Phone:** +91 98390 12345

## 📋 Key Features Demonstration

### Navigation
- Use the top navigation bar to switch between screens
- All screens are accessible from the header
- Footer provides additional quick links

### Data Flow
- The prototype uses mock data stored in `src/mockData.js`
- All interactions are client-side only
- No backend connection required
- Perfect for demonstration and visualization

### Responsive Design
- Mobile-friendly interface
- Responsive grid layouts
- Touch-friendly buttons and forms

## 🎨 Design Characteristics

- **Clean & Modern:** Professional healthcare interface
- **Color Scheme:** Teal/green primary colors (medical theme)
- **Typography:** Clear, readable fonts
- **Accessibility:** High contrast, clear labels
- **User Experience:** Intuitive navigation and workflows

## 📝 Important Notes

- This is a **frontend prototype only** - no backend connectivity
- All data is **mock/static** for demonstration purposes
- No actual appointments are created or stored
- No real patient data is used
- AI analysis is simulated with pre-defined responses
- Perfect for **hospital management demonstrations**

## 🔧 Customization

To customize the prototype:

1. **Modify Data:** Edit `src/mockData.js` to change hospital information, doctors, departments, etc.
2. **Styling:** Modify `src/index.css` to change colors, layouts, and design
3. **Components:** Edit components in `src/components/` to modify functionality
4. **Configuration:** Update `vite.config.js` to change port or base path (currently configured for GitHub Pages at `/st-joseph-hospital-demo/`)

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick setup:
1. Update `YOUR_USERNAME` in `package.json` homepage field
2. Create GitHub repository named `st-joseph-hospital-demo`
3. Enable GitHub Pages with GitHub Actions source
4. Push to main branch for automatic deployment

### Manual Deployment

Build the project: `npm run build`

Deploy manually to GitHub Pages: `npm run deploy`

Upload the `dist` folder to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any web server

## 📞 Support

For questions about the full hospital management system or this prototype, please contact the development team.

---

**Note:** This prototype is for demonstration purposes only and does not connect to any real hospital systems or patient data.