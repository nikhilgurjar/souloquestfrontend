import axios from '@/utils/axios';
const apiRequest = async ({ url, method = 'GET', data, headers = {} }) => {
    const axiosConfig = {
        url: '/api/user/'+url,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        data,
      };

    return new Promise((resolve, reject) => {
      axios(axiosConfig)
          .then(response => {
              resolve(response.data);
          })
          .catch(error => {
              console.log(error);
              reject(error?.error || error?.message || 'Something went wrong');
          });
  });
  };

  export const sendResetPassword =async (email) =>{
    return await apiRequest({
        url: 'forgot-password',
        method: 'POST',
        data: { email },
      });
}

export const updatePassword = async (old_password, new_password) =>{
  return await apiRequest({
      url: 'update_password',
      method: 'POST',
      data: { old_password, new_password },
    });
}

export const getFriends = async (id) =>{
  return await apiRequest({
      url: 'friends',
      method: 'GET',
      data: { id },
    });
}

export const getReviewsPostedByUser = async (id) =>{
  return await apiRequest({
      url: 'reviews',
      method: 'GET',
      data: { id },
    });
}

export const getItenariesPostedByUser = async (id) =>{
  return await apiRequest({
      url: 'itenaries',
      method: 'GET',
      data: { id },
    });
}

export const login = async (data) =>{
  try {
      const resonse = await apiRequest({
        url: 'login',
        method: 'POST',
        data,
      });
      return resonse;
    }
    catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export const register = async (data) =>{
  return await apiRequest({
      url: 'register',
      method: 'POST',
      data,
    });
}

export const update_password = async (data) =>{
  return await apiRequest({
      url: 'update_password',
      method: 'POST',
      data,
    });
}