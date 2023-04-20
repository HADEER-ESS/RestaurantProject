import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {detailsURL} from '../constant';
import axios from 'axios';

const DetailsScreen = ({route}) => {
  const {restaurantID} = route.params;
  const restaurantDataURL = `${detailsURL}{restaurantID}`;
  useEffect(() => {
    (async () => {
      const data = await axios.get(restaurantDataURL, {
        headers: {
          Authorization:
            'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
        },
      });
      console.log('AxiosData ', data);
    })();
  }, []);

  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>{restaurantID}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screenStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
  },
});
