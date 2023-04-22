import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {detailsURL} from '../constant';
import axios from 'axios';
import openMap from 'react-native-open-maps';
// import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';

const DetailsScreen = ({route}) => {
  const {restaurantID} = route.params;
  const [detailsData, setDetailsData] = useState([]);
  const restaurantDataURL = `${detailsURL}${restaurantID}`;
  const OpenMapInGoogle = () => {
    openMap({
      latitude: detailsData?.coordinates?.latitude,
      longitude: detailsData?.coordinates?.longitude,
    });
  };
  useEffect(() => {
    (async () => {
      const data = await axios.get(restaurantDataURL, {
        headers: {
          Authorization:
            'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
        },
      });
      setDetailsData(data.data);
    })();
  }, []);

  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>{detailsData.name}</Text>
      <TouchableOpacity onPress={OpenMapInGoogle}>
        <Image source={require('../../assets/ImageMap.png')} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{detailsData?.location?.address1}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textStyle: {
    fontSize: 25,
    marginVertical: 23,
    color: '#000000',
    textAlign: 'center',
  },
});
