import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const renderComponent = (item, flow, navigation) => {
  return (
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
          style={[styles.ratingRes, {flexDirection: flow ? 'row' : 'column'}]}>
          <Text style={styles.textStyle}>{item.rating} Stars,</Text>
          <Text style={styles.textStyle}>{item.review_count} Reviews</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const RestaurantItem = ({flow, dataOne, dataTwo, dataThree}) => {
  const navigation = useNavigation();
  return (
    <View>
      {flow ? (
        <>
          <FlatList
            data={dataOne}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={0}
            key={'#'}
          />
          <FlatList
            data={dataTwo}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={0}
            key={'##'}
          />
          <FlatList
            data={dataThree}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={0}
            key={'###'}
          />
        </>
      ) : (
        <>
          <FlatList
            data={dataOne}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={2}
            key={'_'}
          />
          <FlatList
            data={dataTwo}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={2}
            key={'__'}
          />
          <FlatList
            data={dataThree}
            renderItem={({item}) => renderComponent(item, flow, navigation)}
            keyExtractor={item => item.id}
            numColumns={2}
            key={'___'}
          />
        </>
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
