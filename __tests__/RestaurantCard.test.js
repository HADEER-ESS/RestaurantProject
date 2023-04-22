const {create, act} = require('react-test-renderer');
const {default: RestaurantItem} = require('../src/Components/RestaurantItem');
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

const tree = create(<RestaurantItem />);

describe('Make Sure The Restaurant Card Is Rendered', () => {
  it('The Card View Is Displayed', () => {
    const card = tree.root.findByProps({testID: 'RestaurantComponent'}).props;
    expect(act(() => card.onPress())).toBeVisible();
  });
});
