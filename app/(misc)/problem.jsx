import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const data1 = [
  { label: 'Masalah dengan kartu ATM', value: 'ATM' },
  { label: 'Masalah dengan transaksi', value: 'TRANSACTION' },
  { label: 'Masalah dengan rekening', value: 'ACCOUNT' },
  { label: 'Masalah dengan aplikasi', value: 'APPLICATION'},
  { label: 'Masalah dengan mobile banking', value: 'MOBILE_BANKING' },
  { label: 'Masalah dengan layanan nasabah', value: 'CUSTOMER_SERVICE' },
  { label: 'Masalah lainnya', value: 'OTHER' },
];

const subdata1 = {
  ATM: [
    { label: 'Kartu ATM hilang', value: 'ATM1' },
    { label: 'Kartu ATM rusak', value: 'ATM2' },
    { label: 'Kartu ATM terblokir', value: 'ATM3' },
    { label: 'Kartu ATM tertelan mesin ATM', value: 'ATM4' },
  ],
  TRANSACTION: [
    { label: 'Transaksi gagal', value: 'TRANSACTION1' },
    { label: 'Transaksi tertunda', value: 'TRANSACTION2' },
    { label: 'Kesalahan jumlah transaksi', value: 'TRANSACTION3' },
  ],
  ACCOUNT: [
    { label: 'Saldo tidak sesuai', value: 'ACCOUNT1' },
    { label: 'Rekening terblokir', value: 'ACCOUNT2' },
    { label: 'Kesalahan data rekening', value: 'ACCOUNT3' },
  ],
};

const subdata2 = {
  ATM1: [
    { label: 'Laporkan kehilangan', value: 'ATM1A' },
    { label: 'Blokir kartu', value: 'ATM1B' },
  ],
  ATM2: [
    { label: 'Ganti kartu', value: 'ATM2A' },
    { label: 'Perbaiki kartu', value: 'ATM2B' },
  ],
  ATM3: [
    { label: 'Buka blokir kartu', value: 'ATM3A' },
    { label: 'Permintaan kartu baru', value: 'ATM3B' },
  ],
  ATM4: [
    { label: 'Ambil kartu di bank', value: 'ATM4A' },
    { label: 'Ajukan kartu baru', value: 'ATM4B' },
  ],
  TRANSACTION1: [
    { label: 'Cek status transaksi', value: 'TRANSACTION1A' },
    { label: 'Ajukan komplain', value: 'TRANSACTION1B' },
  ],
  TRANSACTION2: [
    { label: 'Hubungi bank', value: 'TRANSACTION2A' },
    { label: 'Pantau status', value: 'TRANSACTION2B' },
  ],
  TRANSACTION3: [
    { label: 'Koreksi transaksi', value: 'TRANSACTION3A' },
    { label: 'Ajukan komplain', value: 'TRANSACTION3B' },
  ],
  ACCOUNT1: [
    { label: 'Cek mutasi', value: 'ACCOUNT1A' },
    { label: 'Hubungi customer service', value: 'ACCOUNT1B' },
  ],
  ACCOUNT2: [
    { label: 'Aktivasi ulang rekening', value: 'ACCOUNT2A' },
    { label: 'Verifikasi identitas', value: 'ACCOUNT2B' },
  ],
  ACCOUNT3: [
    { label: 'Perbaiki data', value: 'ACCOUNT3A' },
    { label: 'Hubungi customer service', value: 'ACCOUNT3B' },
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
    {selectedValue1 && (
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
      )}
      {selectedValue2 && (
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
      )}
      <CustomButton
        title="Submit"
        handlePress={() => {
          router.push("/home");
        }}
        containerStyles="bg-btn_primary mx-3 my-5"
        textStyles="text-white font-pregular"
        isLoading={false}
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