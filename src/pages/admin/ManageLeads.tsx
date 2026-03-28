import React, { useEffect, useState } from 'react';
import { getAdminLeads } from '@/api/adminApi';

interface Lead {
  _id: string;
  name: string;
  email: string;
  message: string;
  sourcePage: string;
  createdAt: string;
}

const ManageLeads: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const data = await getAdminLeads();
      setLeads(data);
    } catch (err: any) {
      setError('Failed to fetch leads data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Leads</h2>
        <button className="btn btn-outline-secondary" onClick={fetchLeads}>
          <i className="fa-solid fa-rotate-right me-2"></i> Refresh
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Source Page</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="text-center py-4">Loading leads...</td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-4">No leads found. Waiting for prospects!</td></tr>
              ) : (
                leads.map(lead => (
                  <tr key={lead._id}>
                    <td className="align-middle" style={{ whiteSpace: 'nowrap' }}>
                      {new Date(lead.createdAt).toLocaleString()}
                    </td>
                    <td className="align-middle fw-bold">{lead.name}</td>
                    <td className="align-middle">
                      <a href={`mailto:${lead.email}`} className="text-decoration-none">{lead.email}</a>
                    </td>
                    <td className="align-middle">
                      <span className="badge bg-secondary">{lead.sourcePage}</span>
                    </td>
                    <td className="align-middle" style={{ maxWidth: '300px', whiteSpace: 'pre-wrap' }}>
                      {lead.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageLeads;
