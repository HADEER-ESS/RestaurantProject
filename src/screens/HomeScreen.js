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
  ActivityIndicator
} from 'react-native';
import Search from '../Components/Search';
import RestaurantItem from '../Components/RestaurantItem';
import RenderSearch from '../Components/RenderSearch';
import { useQuery } from 'react-query';
import restaurantsData from '../FetchData';

const HomeScreen = () => {
  const [changeFlow, setChangeFlow] = useState(true);
  const [searchText, setSearchText] = useState('');
  const {data, isLoading, isError} = useQuery(
    ['RestaurantData'],
    restaurantsData,
  );
  if (isLoading) {
    return <ActivityIndicator color={'#000'} size={'large'} />;
  } else if (isError) {
    return <Text>Something Went Wrong</Text>;
  }
  return (
    <View style={styles.screenStyle}>
      <Header />
      <Search text={searchText} fun={setSearchText} />
      <TouchableOpacity style={{alignItems : 'flex-end',paddingRight : 17}} onPress={() => setChangeFlow(!changeFlow)}>
                  <MaterialIcons name="menu" size={29} color="#000000" />
                </TouchableOpacity>
      <ScrollView>
        <SafeAreaView style={{paddingHorizontal: 7}}>
        {
          data?.map((item)=> {
            if(searchText!=='' && item.name.includes(searchText)){
              return <RenderSearch id={item.id} image={item.image_url} name={item.name} rating={item.rating} reviews={item.review_count}/>
            }else if(searchText == ''){
              switch(item.price){
              case "$":
              //return <Text>Cost Effective</Text>
                return (
                    <RestaurantItem price={"$"} 
                  title={'Cost Effective'} flow={changeFlow} 
                  id={item.id} image={item.image_url} 
                  name={item.name} rating={item.rating} 
                  reviews={item.review_count}/>
                )
              case  '$$':
              //return <Text>Bit Price</Text>
                return (
                    <RestaurantItem price={"$$"} 
                  title={"Bit Price"} flow={changeFlow} 
                  id={item.id} image={item.image_url} 
                  name={item.name} rating={item.rating} 
                  reviews={item.review_count}/>
                )
              case  '$$$':
                //return <Text>Bi Spender</Text>
                return <RestaurantItem price={"$$$"} 
                  title={'Bi Spender'} flow={changeFlow} 
                  id={item.id} image={item.image_url} 
                  name={item.name} rating={item.rating} 
                  reviews={item.review_count}/>
            } 
            }
          })
        }
          {/* {searchText === '' ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.headerText}>Cost Effective</Text>
                <TouchableOpacity onPress={() => setChangeFlow(!changeFlow)}>
                  <MaterialIcons name="menu" size={23} color="#000000" />
                </TouchableOpacity>
              </View>
              <RestaurantItem ResPrice={'$'} flow={changeFlow} />
              <Text style={styles.headerText}>Bit Price</Text>
              <RestaurantItem ResPrice={'$$'} flow={changeFlow} />
              <Text style={styles.headerText}>Bi Spender</Text>
              <RestaurantItem ResPrice={'$$$'} flow={changeFlow} />
            </>
          ) : (
            <RenderSearch searchContent={searchText} />
          )} */}
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
