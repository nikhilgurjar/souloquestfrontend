import axios from 'axios';
const apiRequest = async ({ url, method = 'GET', data, headers = {} }) => {
    const axiosConfig = {
        url: '/api/'+url,
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
        url: 'resetPassword',
        method: 'POST',
        data: { email },
      });
}

export const updatePassword = async ({oldPassword, password}) =>{
  return await apiRequest({
      url: 'changePassword',
      method: 'POST',
      data: { oldPassword, password },
    });
}
export const updateProfile = async ({name, email, profilePic, phoneNumber, country, state, city, about}) =>{
  return await apiRequest({
    url: 'updateProfile',
    method: 'POST',
    data: { name, email, profilePic, phoneNumber, country, state, city, about },
  })
}

export const updateSocialLinks = async ({facebook, instagram, linkedin, twitter}) =>{
  return await apiRequest({
      url: 'updateSocialLinks',
      method: 'POST',
      data: { facebook, instagram, linkedin, twitter },
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