import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import restaurantsData from '../src/FetchData';

jest.mock('axios');
let data = restaurantsData();
it('Fetch Data From RestauratsData Function Using Axios Get Request', async () => {
  //   var mock = MockAdapter(axios);
  //Mock Data
  //   const data = {
  //     businesses: [
  //       {
  //         id: 0,
  //         name: 'Hello',
  //         price: '$$',
  //       },
  //     ],
  //   };
  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(restaurantsData()).resolves.not.toBeNull();
});
it('fetches erroneously data from an API', async () => {
  const errorMessage = 'Network Error';

  axios.get.mockImplementationOnce(() =>
    Promise.reject(new Error(errorMessage)),
  );
  await expect(restaurantsData()).rejects.toThrow(errorMessage);
});

it('Make Sure The Data Is Fetched Correctly', async () => {
  expect(restaurantsData()).toEqual(data);
});
// it('Fetch Data From RestauratsData Function Using Axios Get Request', async () => {
//   mockAxios.get.mockImplementationForOnce(() =>
//     Promise.resolve({data: {businesses: [{}]}}),
//   );
//   expect(mockAxios.get).toHaveBeenCalledWith(
//     'https://api.yelp.com/v3/businesses/search?location=san jose&limit=50',
//     {
//       headers: {
//         Authorization:
//           'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
//       },
//     },
//   );
// });
