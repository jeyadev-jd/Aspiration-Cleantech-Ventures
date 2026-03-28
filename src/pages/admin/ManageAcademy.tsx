import React, { useEffect, useState } from 'react';
import { getAdminAcademy, createAcademy, updateAcademy, deleteAcademy } from '@/api/adminApi';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isPublished: boolean;
  createdAt: string;
}

const ManageAcademy: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Form State
  const [currentId, setCurrentId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState('');
  const [isPublished, setIsPublished] = useState<boolean>(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getAdminAcademy();
      setCourses(data);
    } catch (err: any) {
      setError('Failed to fetch academy courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openAddModal = () => {
    setIsEditing(false);
    setCurrentId('');
    setTitle('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setIsPublished(true);
    setImageFile(null);
    setShowModal(true);
  };

  const openEditModal = (course: Course) => {
    setIsEditing(true);
    setCurrentId(course._id);
    setTitle(course.title);
    setDescription(course.description);
    setPrice(course.price);
    setCategory(course.category);
    setIsPublished(course.isPublished);
    setImageFile(null); // Clear file, keep existing unless user adds new
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price.toString());
      formData.append('category', category);
      formData.append('isPublished', isPublished.toString());
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (isEditing) {
        await updateAcademy(currentId, formData);
      } else {
        await createAcademy(formData);
      }
      
      setShowModal(false);
      fetchCourses();
    } catch (err: any) {
      alert(err.response?.data?.error || err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteAcademy(id);
        fetchCourses();
      } catch (err: any) {
        alert('Failed to delete course');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Academy</h2>
        <button className="btn btn-primary" onClick={openAddModal}>+ Add Course</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Image</th>
                <th>Course Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="text-center py-4">Loading...</td></tr>
              ) : courses.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-4">No courses found.</td></tr>
              ) : (
                courses.map(course => (
                  <tr key={course._id}>
                    <td>
                      {course.imageUrl ? (
                        <img src={course.imageUrl} alt={course.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                      ) : (
                        <div style={{ width: '50px', height: '50px', background: '#eee', borderRadius: '4px' }}></div>
                      )}
                    </td>
                    <td className="align-middle fw-bold">{course.title}</td>
                    <td className="align-middle">{course.category}</td>
                    <td className="align-middle">${course.price}</td>
                    <td className="align-middle">
                      <span className={`badge ${course.isPublished ? 'bg-success' : 'bg-warning'}`}>
                        {course.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="align-middle text-end">
                      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openEditModal(course)}>Edit</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(course._id)}>Delete</button>
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
          <div className="card w-100 shadow-lg" style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{isEditing ? 'Edit Course' : 'Add New Course'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Course Title</label>
                    <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" required value={category} placeholder="e.g. HVAC, Solar" onChange={(e) => setCategory(e.target.value)} />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows={4} required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price ($)</label>
                    <input type="number" className="form-control" required value={price} min="0" step="0.01" onChange={(e) => setPrice(parseFloat(e.target.value))} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" value={isPublished ? 'true' : 'false'} onChange={(e) => setIsPublished(e.target.value === 'true')}>
                      <option value="true">Published (Visible)</option>
                      <option value="false">Draft (Hidden)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Cover Image</label>
                  <input type="file" className="form-control" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} required={!isEditing} />
                  {isEditing && <small className="text-muted text-warning">Leave blank to keep existing image</small>}
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Course'}
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

export default ManageAcademy;
