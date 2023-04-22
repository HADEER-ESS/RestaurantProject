import axios from 'axios';
import {BaseURL} from '../constant';

const restaurantsData = async () => {
  const data = await axios.get(`${BaseURL}?location=san jose&limit=50`, {
    headers: {
      Authorization:
        'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
    },
  });
  return data.data.businesses;
};

export default restaurantsData;
