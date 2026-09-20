import React, { useState } from 'react';
import { mockReports } from '../mockData';

function Reports({ onNavigate }) {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showAIInsights, setShowAIInsights] = useState(false);

  const handleReportClick = (report) => {
    setSelectedReport(report);
    setShowAIInsights(false);
  };

  const handleAnalyzeWithAI = () => {
    setShowAIInsights(true);
  };

  return (
    <div className="reports">
      <div className="container">
        <h1 className="section-title">Lab Reports & AI Analysis</h1>
        <p className="section-subtitle">
          View your laboratory reports and get AI-powered medical insights
        </p>

        {!selectedReport ? (
          <>
            {/* Reports List */}
            <div className="grid">
              {mockReports.map((report) => (
                <div
                  key={report.report_id}
                  className="card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleReportClick(report)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                      <h3>{report.report_type}</h3>
                      <p style={{ color: '#64748b' }}>{report.test_name}</p>
                    </div>
                    <span className="badge badge-success">
                      {report.status}
                    </span>
                  </div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    <strong>Patient:</strong> {report.patient_name}
                  </div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    <strong>Date:</strong> {report.report_date}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{report.summary}</p>
                  <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <span style={{ color: '#0d9488', fontSize: '0.875rem' }}>Click to view details →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Upload New Report Section */}
            <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <h3>Upload New Report for AI Analysis</h3>
              <p style={{ marginBottom: '1rem', color: '#64748b' }}>
                Upload your lab report and get instant AI-powered medical insights
              </p>
              <div style={{ border: '2px dashed #cbd5e1', padding: '2rem', borderRadius: '0.5rem' }}>
                <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>📄 Drag and drop your report here</p>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>or</p>
                <button className="btn btn-primary">Browse Files</button>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                  Supported formats: PDF, JPG, PNG
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Report Detail View */}
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedReport(null)}
              style={{ marginBottom: '1rem' }}
            >
              ← Back to Reports
            </button>

            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h2>{selectedReport.report_type}</h2>
                  <p style={{ color: '#64748b' }}>{selectedReport.test_name}</p>
                </div>
                <span className="badge badge-success">
                  {selectedReport.status}
                </span>
              </div>

              <div className="grid grid-2" style={{ marginBottom: '1rem' }}>
                <div>Patient: {selectedReport.patient_name}</div>
                <div>Report ID: {selectedReport.report_id}</div>
                <div>Date: {selectedReport.report_date}</div>
                <div>Status: {selectedReport.status}</div>
              </div>

              <p style={{ marginBottom: '1rem' }}>{selectedReport.summary}</p>

              <button
                className="btn btn-primary"
                onClick={handleAnalyzeWithAI}
                disabled={showAIInsights}
                style={{ width: '100%' }}
              >
                {showAIInsights ? 'AI Analysis Complete' : '🤖 Analyze with AI'}
              </button>
            </div>

            {/* AI Insights Section */}
            {showAIInsights && selectedReport.ai_insights && (
              <div className="card" style={{ marginTop: '2rem', background: '#f0fdfa', border: '2px solid #0d9488' }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>🤖 AI Medical Analysis</h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Overview</h4>
                  <p>{selectedReport.ai_insights.overview}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Key Findings</h4>
                  <div className="grid">
                    {selectedReport.ai_insights.key_findings.map((finding, index) => (
                      <div key={index} className="card" style={{ marginBottom: '0.5rem', padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span className={`badge ${finding.type === 'positive' ? 'badge-success' : finding.type === 'attention' ? 'badge-warning' : 'badge-info'}`}>
                            {finding.type}
                          </span>
                          <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{finding.title}</span>
                        </div>
                        <p style={{ fontSize: '0.875rem' }}>{finding.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Detailed Parameters</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Your Value</th>
                        <th>Normal Range</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedReport.ai_insights.detailed_parameters.map((param, index) => (
                        <tr key={index}>
                          <td>
                            <strong>{param.name}</strong>
                            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{param.meaning}</p>
                          </td>
                          <td>{param.user_value}</td>
                          <td>{param.normal_range}</td>
                          <td>
                            <span className={`badge ${param.status === 'normal' ? 'badge-success' : param.status === 'elevated' ? 'badge-warning' : 'badge-danger'}`}>
                              {param.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Dietary Recommendations</h4>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {selectedReport.ai_insights.dietary_recommendations.map((rec, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>{rec}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>Follow-up Recommendation</h4>
                  <p>{selectedReport.ai_insights.follow_up}</p>
                </div>

                <div className="card" style={{ background: '#fef3c7', border: '1px solid #f59e0b' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                    ⚠️ Disclaimer: This AI analysis provides educational interpretation only and does NOT constitute formal diagnosis or medical advice. Always consult your attending doctor for clinical interpretation and treatment.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Reports;