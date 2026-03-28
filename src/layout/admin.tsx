import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="mb-4 text-center">Admin Panel</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin/dashboard" className={`nav-link text-white ${isActive('/admin/dashboard')}`}>
               Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/services" className={`nav-link text-white ${isActive('/admin/services')}`}>
               Manage Services
            </Link>
          </li>
          <li>
            <Link to="/admin/academy" className={`nav-link text-white ${isActive('/admin/academy')}`}>
               Manage Academy
            </Link>
          </li>
          <li>
            <Link to="/admin/leads" className={`nav-link text-white ${isActive('/admin/leads')}`}>
               Manage Leads
            </Link>
          </li>
          <li>
            <Link to="/admin/registrations" className={`nav-link text-white ${isActive('/admin/registrations')}`}>
               Manage Registrations
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4 py-3">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Aspire Cleantech Hub</span>
            <div className="d-flex">
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
