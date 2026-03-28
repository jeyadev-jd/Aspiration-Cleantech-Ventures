import React, { useEffect, useState } from 'react';
import { getAdminServices, createService, updateService, deleteService } from '@/api/adminApi';

interface Service {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'active' | 'draft';
  createdAt: string;
}

const ManageServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Form State
  const [currentId, setCurrentId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'active' | 'draft'>('active');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getAdminServices();
      setServices(data);
    } catch (err: any) {
      setError('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const openAddModal = () => {
    setIsEditing(false);
    setCurrentId('');
    setTitle('');
    setDescription('');
    setStatus('active');
    setImageFile(null);
    setShowModal(true);
  };

  const openEditModal = (svc: Service) => {
    setIsEditing(true);
    setCurrentId(svc._id);
    setTitle(svc.title);
    setDescription(svc.description);
    setStatus(svc.status);
    setImageFile(null); // File input starts empty, will only update if they pick a new one
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('status', status);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (isEditing) {
        await updateService(currentId, formData);
      } else {
        await createService(formData);
      }
      
      setShowModal(false);
      fetchServices();
    } catch (err: any) {
      alert(err.response?.data?.error || err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id);
        fetchServices();
      } catch (err: any) {
        alert('Failed to delete service');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>
        <button className="btn btn-primary" onClick={openAddModal}>+ Add Service</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Status</th>
                <th>Date Added</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="text-center py-4">Loading...</td></tr>
              ) : services.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-4">No services found.</td></tr>
              ) : (
                services.map(svc => (
                  <tr key={svc._id}>
                    <td>
                      {svc.imageUrl ? (
                        <img src={svc.imageUrl} alt={svc.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                      ) : (
                        <div style={{ width: '50px', height: '50px', background: '#eee', borderRadius: '4px' }}></div>
                      )}
                    </td>
                    <td className="align-middle fw-bold">{svc.title}</td>
                    <td className="align-middle">
                      <span className={`badge ${svc.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                        {svc.status}
                      </span>
                    </td>
                    <td className="align-middle">{new Date(svc.createdAt).toLocaleDateString()}</td>
                    <td className="align-middle text-end">
                      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openEditModal(svc)}>Edit</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(svc._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Custom Modal overlay */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card w-100 shadow-lg" style={{ maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{isEditing ? 'Edit Service' : 'Add New Service'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Service Title</label>
                  <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows={4} required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value as 'active' | 'draft')}>
                    <option value="active">Active (Visible to public)</option>
                    <option value="draft">Draft (Hidden)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Cover Image</label>
                  <input type="file" className="form-control" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} required={!isEditing} />
                  {isEditing && <small className="text-muted text-warning">Leave blank to keep existing image</small>}
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Service'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
