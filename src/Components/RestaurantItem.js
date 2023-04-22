import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import restaurantsData from '../FetchData/index';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

const RestaurantItem = ({ResPrice, flow, searchContent}) => {
  const {data, isLoading, isError} = useQuery(
    ['RestaurantData'],
    restaurantsData,
  );
  const navigation = useNavigation();
  if (isLoading) {
    return <ActivityIndicator color={'#000'} size={'large'} />;
  } else if (isError) {
    return <Text>Something Went Wrong</Text>;
  }
  return (
    <View
      style={{
        flexDirection: flow ? 'column' : 'row',
        flexWrap: flow ? 'nowrap' : 'wrap',
      }}>
      {data.map(
        item =>
          item.price == ResPrice && (
            <TouchableOpacity
              testID="RestaurantComponent"
              onPress={() => {
                navigation.navigate('Details', {restaurantID: item.id});
              }}
              key={item.id}
              style={{
                width: flow ? '90%' : '46%',
                margin: 7,
                padding: 3,
              }}>
              <ImageBackground
                source={{uri: item.image_url}}
                style={styles.ImageStyle}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: '#ffffff', fontWeight: '700', marginVertical: 13},
                  ]}>
                  {item.name}
                </Text>
                <View
                  style={[
                    styles.ratingRes,
                    {flexDirection: flow ? 'row' : 'column'},
                  ]}>
                  <Text style={styles.textStyle}>{item.rating} Stars,</Text>
                  <Text style={styles.textStyle}>
                    {item.review_count} Reviews
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ),
      )}
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  ImageStyle: {
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: 23,
    color: '#000000',
    paddingHorizontal: 7,
  },
  ratingRes: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 5,
    marginHorizontal: 11,
    marginBottom: 23,
  },
});
