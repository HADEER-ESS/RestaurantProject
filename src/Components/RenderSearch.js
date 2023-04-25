import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RenderSearch = ({ id , name , image, rating, reviews}) => {
  const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {restaurantID: id});
              }}
              key={id}
              style={{
                width: '90%',
                margin: 7,
                padding: 3,
              }}>
              <ImageBackground
                source={{uri: image}}
                style={styles.ImageStyle}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: '#ffffff', fontWeight: '700', marginVertical: 13},
                  ]}>
                  {name}
                </Text>
                <View style={[styles.ratingRes]}>
                  <Text style={styles.textStyle}>{rating} Stars,</Text>
                  <Text style={styles.textStyle}>{reviews} Reviews</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
    </View>
     
  );
};

export default RenderSearch;

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

 {/* {/* {data.map(({name, id, image_url, rating, review_count}) => {
        if (name.includes(searchContent.toUpperCase())) {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {restaurantID: id});
              }}
              key={id}
              style={{
                width: '90%',
                margin: 7,
                padding: 3,
              }}>
              <ImageBackground
                source={{uri: image_url}}
                style={styles.ImageStyle}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: '#ffffff', fontWeight: '700', marginVertical: 13},
                  ]}>
                  {name}
                </Text>
                <View style={[styles.ratingRes]}>
                  <Text style={styles.textStyle}>{rating} Stars,</Text>
                  <Text style={styles.textStyle}>{review_count} Reviews</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        } */}
        {
          /* name.includes(searchContent.toUpperCase()) && (
          <Text style={{backgroundColor: 'red'}}>{name}</Text>
        ); */
        }
        {
          /* (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Details', {restaurantID:id});
            }}
            key={id}
            style={{
              width: '90%',
              margin: 7,
              padding: 3,
            }}>
            <ImageBackground
              source={{uri: image_url}}
              style={styles.ImageStyle}>
              <Text
                style={[
                  styles.textStyle,
                  {color: '#ffffff', fontWeight: '700', marginVertical: 13},
                ]}>
                {name}
              </Text>
              <View style={[styles.ratingRes]}>
                <Text style={styles.textStyle}>{rating} Stars,</Text>
                <Text style={styles.textStyle}>{review_count} Reviews</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ); */
        }
     // })} */}
    