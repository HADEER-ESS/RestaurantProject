import axios from 'axios';
import {BaseURL} from '../constant';

const restaurantsData = async () => {
  const {data} = await axios.get(
    BaseURL,
    {
      Location: 'san jose',
      Limit: 50,
    },
    {
      headers: {
        Authorization:
          'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
      },
    },
  );
  console.log('DATAAA ', data);
  return data;
};

export default restaurantsData;
