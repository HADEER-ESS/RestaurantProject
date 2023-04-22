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
} from 'react-native';
import Search from '../Components/Search';
import RestaurantItem from '../Components/RestaurantItem';
import RenderSearch from '../Components/RenderSearch';

const HomeScreen = () => {
  const [changeFlow, setChangeFlow] = useState(true);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.screenStyle}>
      <Header />
      <Search text={searchText} fun={setSearchText} />
      <ScrollView>
        <SafeAreaView>
          {searchText === '' ? (
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
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenStyle: {
    padding: 21,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  headerText: {
    color: '#000000',
    fontSize: 23,
    fontWeight: '700',
  },
});
