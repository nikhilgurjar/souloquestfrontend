import axios from 'axios';

export const getPlaceDetails = async (placeId) =>{
    try {
        console.log(placeId);
        const response = await axios.get(`https://api.geoapify.com/v2/place-details?id=${placeId}&features=details,details.description,detailts.opening_hours,drive_15.tourism&apiKey=42ae62a239d348d69856ccd884e4d0fc`);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
  
}