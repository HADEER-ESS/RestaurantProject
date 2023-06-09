import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Search = ({fun, text}) => {
  return (
    <View style={styles.searchStyle}>
      <MaterialIcons name="search" color="#000000" size={19} />
      <TextInput
        style={{width: '80%', paddingVertical: 7}}
        value={text}
        onChangeText={txt => fun(txt)}
      />
      <MaterialIcons name="close" color="#000000" size={19} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 11,
    justifyContent: 'space-between',
    marginVertical: 22,
    height: 37,
  },
});
