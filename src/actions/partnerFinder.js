import axios from '@/utils/axios';

const apiRequest = async ({ url, method = 'GET', data, headers = {} }) => {
    const axiosConfig = {
        url: '/api/partnerfinder'+url,
        method,
        // headers: {
        //   'Content-Type': 'application/json',
        //   ...headers,
        // },
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

export const fetchPartnerRequests = async ({departureDate, location}) =>{
  try {
        const data = await apiRequest({
            url: `?departureDate=${departureDate}&location=${location}`,
            method: 'GET',
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
  }

export const postPartnerRequest = async ({departureDate, location, description, title}) =>{
  console.log(departureDate, location, description, title);
  try {
    const data = await apiRequest({
        url: '',
        method: 'POST',
        data: { departureDate, location, description, title },
    });
    return data;
} catch (error) {
    console.error('Error:', error);
    throw error;
}
  }

export const joinaRoom = async ({ room_id }) =>{
  try {
    const data = await apiRequest({
        url: `/joinroom?room_id=${room_id}`,
        method: 'POST',
    });
    return data;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const getRooms = async () =>{
  try {
    const data = await apiRequest({
        url: `/getrooms`,
        method: 'GET',
    });
    return data;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}