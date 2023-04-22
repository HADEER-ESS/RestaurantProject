import restaurantsData from '../src/FetchData/index';

let data = restaurantsData();

it('Make Sure The Data Is Fetched Correctly', async () => {
  expect(restaurantsData()).toEqual(data);
});
