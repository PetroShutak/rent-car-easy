import axios from 'axios';

const BASE_URL='https://65205e8e906e276284c463cc.mockapi.io/adverts'

export const getAdverts = async () => {    
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const getAdvert = async (advertId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${advertId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


