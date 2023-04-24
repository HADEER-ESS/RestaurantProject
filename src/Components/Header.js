import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.HeaderStyle}>
      <TouchableOpacity
        style={styles.IconBackground}
        onPress={() => BackHandler.exitApp()}>
        <MaterialIcons name="arrow-back-ios" color="#ffffff" size={19} />
      </TouchableOpacity>
      <Text style={styles.TextStyle}>Restaurants</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    // justifyContent: 'space-around',
  },
  IconBackground: {
    backgroundColor: '#000',
    padding: 9,
    borderRadius: 7,
  },
  TextStyle: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '700',
    paddingLeft: '25%',
  },
});
