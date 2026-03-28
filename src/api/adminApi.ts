import API from './index';

// =======================
// ANALYTICS
// =======================
export const getAdminAnalytics = async () => {
  const { data } = await API.get('/analytics/summary');
  return data;
};

// =======================
// SERVICES
// =======================
export const getAdminServices = async () => {
  const { data } = await API.get('/services/all');
  return data;
};

export const createService = async (formData: FormData) => {
  const { data } = await API.post('/services', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const updateService = async (id: string, formData: FormData) => {
  const { data } = await API.put(`/services/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const deleteService = async (id: string) => {
  const { data } = await API.delete(`/services/${id}`);
  return data;
};

// =======================
// ACADEMY
// =======================
export const getAdminAcademy = async () => {
  const { data } = await API.get('/academy/all');
  return data;
};

export const createAcademy = async (formData: FormData) => {
  const { data } = await API.post('/academy', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const updateAcademy = async (id: string, formData: FormData) => {
  const { data } = await API.put(`/academy/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const deleteAcademy = async (id: string) => {
  const { data } = await API.delete(`/academy/${id}`);
  return data;
};

// =======================
// LEADS
// =======================
export const getAdminLeads = async () => {
  const { data } = await API.get('/contact');
  return data;
};

// =======================
// REGISTRATIONS
// =======================
export const getAdminRegistrations = async () => {
  const { data } = await API.get('/academy/register');
  return data;
};
