import React, { useState } from 'react';
import { 
  testLogin, 
  fetchPublicServices, 
  createServiceWithImage, 
  submitContactForm, 
  fetchAnalyticsSummary 
} from '../../api/api-test-layer';

export const ApiTester: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()} - ${message}`]);
  };

  const handleSetupAdmin = async () => {
    try {
      addLog('Setting up initial admin...');
      const { data } = await import('../../api/index').then(m => m.default.post('/auth/setup', {
        email: 'admin@example.com',
        password: 'password123'
      }));
      localStorage.setItem('token', data.token);
      addLog(`Setup Success! Created & logged in as ${data.email}`);
    } catch (err: any) {
      addLog(`Setup Failed: ${err.response?.data?.error || err.response?.data?.errors?.[0]?.msg || err.message}`);
    }
  };

  const handleTestAuth = async () => {
    try {
      addLog('Testing Login...');
      // IMPORTANT: replace with your actual initial admin credentials
      const res = await testLogin('admin@example.com', 'password123');
      localStorage.setItem('token', res.token);
      addLog(`Login Success: Token received for ${res.email}`);
    } catch (err: any) {
      addLog(`Login Failed: ${err.message}`);
    }
  };

  const handleTestGetServices = async () => {
    try {
      addLog('Fetching public services...');
      const services = await fetchPublicServices();
      addLog(`Services Fetched: ${services.length} items found`);
    } catch (err: any) {
      addLog(`Fetch Services Failed: ${err.message}`);
    }
  };

  const handleTestImageUpload = async () => {
    if (!file) {
      addLog("Upload Failed: No file selected");
      return;
    }
    
    try {
      addLog('Testing protected route + Image Upload...');
      const service = await createServiceWithImage(
        "Test Service",
        "Testing upload pipeline",
        "draft",
        file
      );
      addLog(`Upload Success! Cloudinary URL: ${service.imageUrl}`);
    } catch (err: any) {
      addLog(`Upload Failed: ${err.message} (Are you logged in?)`);
    }
  };

  const handleTestContact = async () => {
    try {
      addLog('Submitting test lead...');
      const res = await submitContactForm({
        name: 'Test Setup User',
        email: 'test@example.com',
        message: 'Testing public API constraints.',
        sourcePage: 'ApiTestUI'
      });
      addLog(`Contact Success: ${res.message}`);
    } catch (err: any) {
      addLog(`Contact Failed: ${err.message}`);
    }
  };

  const handleTestAnalytics = async () => {
    try {
      addLog('Fetching protected analytics...');
      const res = await fetchAnalyticsSummary();
      addLog(`Analytics Success: Total Leads -> ${res.summary.totalLeads}`);
    } catch (err: any) {
      addLog(`Analytics Failed: ${err.message} (Requires Auth)`);
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#1a1a1a', color: '#fff', borderRadius: '8px', maxWidth: '800px', margin: '2rem auto' }}>
      <h2>API Production Test Layer</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>
        Click the buttons sequentially to test the backend connectivity, JWT generation, protected routes, and Cloudinary uploads.
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button onClick={handleSetupAdmin} style={{...btnStyle, border: '1px solid orange'}}>0. Setup Admin (Run Once!)</button>
        <button onClick={handleTestAuth} style={btnStyle}>1. Test Auth (Login)</button>
        <button onClick={handleTestGetServices} style={btnStyle}>2. Read Public Services</button>
        
        <div style={{ padding: '10px', border: '1px solid #444', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ color: '#fff' }} />
          <button onClick={handleTestImageUpload} style={{...btnStyle, background: '#4CAF50'}}>3. Test Image Upload</button>
        </div>

        <button onClick={handleTestContact} style={btnStyle}>4. Submit Public Lead</button>
        <button onClick={handleTestAnalytics} style={btnStyle}>5. Read Protected Analytics</button>
      </div>

      <div style={{ background: '#000', padding: '1rem', borderRadius: '4px', minHeight: '200px', fontFamily: 'monospace' }}>
        <h4 style={{ marginTop: 0, color: '#00ff00' }}>Terminal Output:</h4>
        {logs.map((log, idx) => (
          <div key={idx} style={{ marginBottom: '4px' }}>{log}</div>
        ))}
      </div>
    </div>
  );
};

const btnStyle = {
  padding: '10px 15px',
  background: '#333',
  color: 'white',
  border: '1px solid #555',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default ApiTester;
