import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ce1545712f674a10fec6975043839248333e708e05aae5892794d5f8e84aa1c6'
    }
});