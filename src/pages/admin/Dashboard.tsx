import React, { useEffect, useState } from 'react';
import { getAdminAnalytics } from '@/api/adminApi';

interface AnalyticsData {
  summary: {
    totalServices: number;
    activeServices: number;
    totalCourses: number;
    publishedCourses: number;
  };
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await getAdminAnalytics();
        setData(res);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch analytics');
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      
      <div className="row mb-5">
        {/* Page Views via Google Analytics Placeholder */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-start border-primary border-4">
            <div className="card-body">
              <h6 className="text-muted text-uppercase mb-2">Total Page Views</h6>
              <h2 className="mb-0 text-primary">--</h2>
              <small className="text-muted">Managed via Google Analytics</small>
            </div>
          </div>
        </div>

        {/* Services Stats */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-start border-success border-4">
            <div className="card-body">
              <h6 className="text-muted text-uppercase mb-2">Total Services</h6>
              <h2 className="mb-0 text-success">{data?.summary?.totalServices || 0}</h2>
              <small className="text-muted">{data?.summary?.activeServices || 0} currently active</small>
            </div>
          </div>
        </div>

        {/* Academy Stats */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-start border-info border-4">
            <div className="card-body">
              <h6 className="text-muted text-uppercase mb-2">Total Courses</h6>
              <h2 className="mb-0 text-info">{data?.summary?.totalCourses || 0}</h2>
              <small className="text-muted">{data?.summary?.publishedCourses || 0} currently published</small>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-light rounded border">
        <h5>🚀 To view detailed website traffic:</h5>
        <p className="text-muted mb-0">
          As per your configuration, raw leads are available in the <strong>Manage Leads</strong> tab, 
          but deep traffic insights (bounce rate, specific page visits) should be observed directly through your 
          <strong> Google Analytics</strong> dashboard for the most accurate metrics.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;
