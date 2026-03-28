import React, { useEffect, useState } from 'react';
import { getAdminRegistrations } from '@/api/adminApi';

interface Registration {
  _id: string;
  name: string;
  email: string;
  phone: string;
  courseName: string;
  message: string;
  status: string;
  createdAt: string;
}

const ManageRegistrations: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const data = await getAdminRegistrations();
      setRegistrations(data);
    } catch (err: any) {
      setError('Failed to fetch academy registrations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Academy Registrations</h2>
        <button className="btn btn-outline-secondary" onClick={fetchRegistrations}>
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
                <th>Student Details</th>
                <th>Course Interest</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} className="text-center py-4">Loading registrations...</td></tr>
              ) : registrations.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-4">No registrations yet.</td></tr>
              ) : (
                registrations.map(reg => (
                  <tr key={reg._id}>
                    <td className="align-middle" style={{ whiteSpace: 'nowrap' }}>
                      {new Date(reg.createdAt).toLocaleString()}
                    </td>
                    <td className="align-middle">
                      <strong>{reg.name}</strong><br/>
                      <small className="text-muted"><a href={`mailto:${reg.email}`} className="text-decoration-none">{reg.email}</a></small><br/>
                      <small className="text-muted">{reg.phone}</small>
                    </td>
                    <td className="align-middle">
                      {reg.courseName ? (
                        <>
                          <span className="fw-bold fs-6 text-primary">{reg.courseName}</span>
                        </>
                      ) : (
                        <span className="text-danger">Course Unknown</span>
                      )}
                      {reg.message && <p className="mt-2 mb-0 small text-muted border-start border-3 border-secondary ps-2">"{reg.message}"</p>}
                    </td>
                    <td className="align-middle">
                      <span className={`badge ${reg.status === 'pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                        {reg.status.toUpperCase()}
                      </span>
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

export default ManageRegistrations;
