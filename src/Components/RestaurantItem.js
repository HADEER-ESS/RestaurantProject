import React from 'react';
import {
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

const RestaurantItem = ({ResPrice, flow}) => {
  const {data, isLoading, isError} = useQuery(
    ['RestaurantData'],
    restaurantsData,
  );
  const navigation = useNavigation();
  const restauratsName = [
    {name: 'Rest A', price: '$'},
    {name: 'Rest B', price: '$$'},
    {name: 'Rest C', price: '$$$'},
    {name: 'Rest D', price: '$'},
    {name: 'Rest E', price: '$$'},
    {name: 'Rest F', price: '$$$'},
    {name: 'Rest G', price: '$'},
    {name: 'Rest H', price: '$$'},
    {name: 'Rest I', price: '$$$'},
  ];
  return (
    <View
      style={{
        flexDirection: flow ? 'column' : 'row',
        flexWrap: flow ? 'nowrap' : 'wrap',
        justifyContent: 'space-between',
      }}>
      {restauratsName.map(
        (item, index) =>
          item.price == ResPrice && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {restaurantID: item.name});
              }}
              key={index}
              style={{
                width: flow ? '90%' : 160,
                borderColor: '#000000',
                borderWidth: 2,
                borderRadius: 3,
                margin: 7,
                padding: 3,
              }}>
              <ImageBackground
                source={require('../../assets/image.png')}
                style={styles.ImageStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
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
    height: 75,
  },
  textStyle: {
    fontSize: 23,
    color: '#000000',
  },
});
