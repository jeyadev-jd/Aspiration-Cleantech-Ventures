import API from './index';

// =======================
// AUTH TESTING
// =======================
export const testLogin = async (email: string, password: string) => {
  const { data } = await API.post('/auth/login', { email, password });
  return data;
};

// =======================
// SERVICES TESTING
// =======================
export const fetchPublicServices = async () => {
  const { data } = await API.get('/services');
  return data;
};

// Uploads require FormData since we are sending an image
export const createServiceWithImage = async (
  title: string,
  description: string,
  status: string,
  imageFile: File
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('status', status);
  formData.append('image', imageFile);

  const { data } = await API.post('/services', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

// =======================
// CONTACT TESTING
// =======================
export const submitContactForm = async (contactData: { name: string; email: string; message: string; sourcePage: string }) => {
  const { data } = await API.post('/contact', contactData);
  return data;
};

// =======================
// ANALYTICS TESTING
// =======================
export const fetchAnalyticsSummary = async () => {
  const { data } = await API.get('/analytics/summary');
  return data;
};
