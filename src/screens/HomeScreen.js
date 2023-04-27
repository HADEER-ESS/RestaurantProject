import React, {useState} from 'react';
import Header from '../Components/Header';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Search from '../Components/Search';
import RestaurantItem from '../Components/RestaurantItem';
import RenderSearch from '../Components/RenderSearch';
import {useQuery} from 'react-query';
import restaurantsData from '../FetchData';

const HomeScreen = () => {
  const [changeFlow, setChangeFlow] = useState(true);
  const [searchText, setSearchText] = useState('');
  const oneDollar = [];
  const twoDollar = [];
  const threeDollar = [];
  const {data, isLoading, isError} = useQuery(
    ['RestaurantData'],
    restaurantsData,
  );
  if (isLoading) {
    return <ActivityIndicator color={'#000'} size={'large'} />;
  } else if (isError) {
    return <Text>Something Went Wrong</Text>;
  }
  data?.map(item => {
    switch (item.price) {
      case '$':
        oneDollar.push(item);
      case '$$':
        twoDollar.push(item);
      case '$$$':
        threeDollar.push(item);
    }
  });

  return (
    <View style={styles.screenStyle}>
      <Header />
      <Search text={searchText} fun={setSearchText} />
      <TouchableOpacity
        style={{alignItems: 'flex-end', paddingRight: 17}}
        onPress={() => setChangeFlow(!changeFlow)}>
        <MaterialIcons name="menu" size={29} color="#000000" />
      </TouchableOpacity>
      <ScrollView>
        <SafeAreaView style={{paddingHorizontal: 7}}>
          {data?.map(item => {
            if (searchText !== '' && item.name.includes(searchText)) {
              return (
                <RenderSearch
                  id={item.id}
                  image={item.image_url}
                  name={item.name}
                  rating={item.rating}
                  reviews={item.review_count}
                />
              );
            }
          })}
          <Text style={styles.headerText}>Cost Effective</Text>
          <RestaurantItem dataOne={oneDollar} flow={changeFlow} />
          <Text style={styles.headerText}>Bit Price</Text>
          <RestaurantItem dataTwo={twoDollar} flow={changeFlow} />
          <Text style={styles.headerText}>Bi Spender</Text>
          <RestaurantItem dataThree={threeDollar} flow={changeFlow} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  headerText: {
    color: '#000000',
    fontSize: 23,
    fontWeight: '700',
  },
});
