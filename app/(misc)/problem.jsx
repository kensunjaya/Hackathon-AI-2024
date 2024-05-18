import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const data1 = [
  { label: 'Masalah dengan kartu ATM', value: 'ATM'},
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const subdata1 = {
  ATM : [
    { label: 'Kartu ATM hilang', value: 'ATM1' },
    { label: 'Kartu ATM rusak', value: 'ATM2' },
    { label: 'Kartu ATM terblokir', value: 'ATM3' },
    { label: 'Kartu ATM tertelan mesin ATM', value: 'ATM4' },
  ],

};

const subdata2 = {
  ATM1 : [
    { label: 'a', value: '5' },
    { label: 'b', value: '6' },
    { label: 'c', value: '7' },
    { label: 'd', value: '8' },
  ],

};

const DropdownComponent = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);

  return (
    <SafeAreaView className="h-full bg-primary flex-1 pt-5">
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data1}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Pilih permasalahan"
      searchPlaceholder="Search..."
      value={selectedValue1}
      onChange={item => {
        setSelectedValue1(item.value);
        setSelectedValue2(null); // Reset the second dropdown
        setSelectedValue3(null); // Reset the third dropdown
      }}
    />
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={subdata1[selectedValue1] || []}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Pilih permasalahan"
      searchPlaceholder="Search..."
      value={selectedValue2}
      onChange={item => {
        setSelectedValue2(item.value);
        setSelectedValue3(null); // Reset the third dropdown
      }}
    />
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={subdata2[selectedValue2] || []}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Pilih permasalahan"
      searchPlaceholder="Search..."
      value={selectedValue3}
      onChange={item => {
        setSelectedValue3(item.value);
      }}
    />
    </SafeAreaView>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({ 
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});