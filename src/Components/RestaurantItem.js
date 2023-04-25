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

const RestaurantItem = ({flow,id , name , image , reviews , rating , title , price}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: flow ? 'column' : 'row',
        flex : 1,
        flexWrap: flow ? 'nowrap' : 'wrap',
      }}>
      <TouchableOpacity
              testID="RestaurantComponent"
              onPress={() => {
                navigation.navigate('Details', {restaurantID: id});
              }}
              key={id}
              style={{
                width: flow ? '100%' : '45%',
                margin: flow ? 0 : 7,
                padding: flow ? 0 : 3,
                paddingVertical: flow ? 13 : 0,
              }}>
              <ImageBackground
                source={{uri: image}}
                style={[styles.ImageStyle, {height: flow ? 135 : 280}]}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: '#ffffff', fontWeight: '700', marginVertical: 13},
                  ]}>
                  {name}
                </Text>
                <View
                  style={[
                    styles.ratingRes,
                    {flexDirection: flow ? 'row' : 'column'},
                  ]}>
                  <Text style={styles.textStyle}>{rating} Stars,</Text>
                  <Text style={styles.textStyle}>
                    {reviews} Reviews
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  ImageStyle: {
    resizeMode: 'contain',
    // height: !flow && 280,
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



{/* {data.map(
        item =>
          item.price == ResPrice && (
            <TouchableOpacity
              testID="RestaurantComponent"
              onPress={() => {
                navigation.navigate('Details', {restaurantID: item.id});
              }}
              key={item.id}
              style={{
                width: flow ? '100%' : '45%',
                margin: flow ? 0 : 7,
                padding: flow ? 0 : 3,
                paddingVertical: flow ? 13 : 0,
              }}>
              <ImageBackground
                source={{uri: item.image_url}}
                style={[styles.ImageStyle, {height: flow ? 135 : 280}]}>
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
      )} */}