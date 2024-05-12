import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';

const AddBank = () => {
  const [bankOpen, setBankOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [cabangOpen, setCabangOpen] = useState(false);

  const [bankValue, setValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [cabangValue, setCabangValue] = useState(null);

  const [form, setForm] = useState({
    kodepos: "",
    nomorkartu: "",
  });

  const [bankData, setBankData] = useState([
    { label: '  Seidel Bank', value: 'seidel' },
    { label: '  Fuze Bank', value: 'fuze' },
    { label: '  Bean Bank', value: 'bean' },
  ]);
  const [cityData, setCityData] = useState([
    { label: '  Kota Bandung', value: 'bandung' },
    { label: '  Kota Jakarta', value: 'jakarta' },
    { label: '  Kota Semarang', value: 'semarang' },
    { label: '  Kota Surabaya', value: 'surabaya' },
    { label: '  Kota Padang', value: 'padang' },
    { label: '  Kota Palembang', value: 'palembang' },
    { label: '  Kota Pekanbaru', value: 'pekanbaru' },
    { label: '  Kota Medan', value: 'medan' },
  ]);
  const [cabangData, setCabangData] = useState([
    { label: '  Kantor Pusat', value: 'pusat' },
    { label: '  KCP Buahbatu', value: 'buahbatu' },
    { label: '  KCP Sudirman', value: 'sudirman' },
    { label: '  KCP Merdeka', value: 'merdeka' },
  ]);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    if (
      form.nomorkartu === "" ||
      form.kodepos === "" ||
      !bankValue ||
      !cabangValue ||
      !cityValue 
    ) {
      Alert.alert("Error", "Please fill in all the fields");
    } else {
      router.push("/home");
    }
  };
  return (
    <View className="flex-1">
      <Image
        source={images.addbankbg}
        className="w-full h-[24vh] justify-end flex flex-end align-top bg-thirdary"
        resizeMode="covern"
      />
      <View className="h-full bg-beige flex-1">
        <View className="bg-primary h-full rounded-t-[40px] w-full px-4 flex-1">
          <DropDownPicker
            open={bankOpen}
            value={bankValue}
            items={bankData}
            setOpen={setBankOpen}
            setValue={setValue}
            setItems={setBankData}
            placeholder="  Pilih Bank"
            style={{borderWidth: 0, borderRadius: 25, height: 62, backgroundColor: 'white', marginTop: 25}}
            textStyle={{
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              color: (bankValue ? 'black' : '#D1D1D1'),
            }}
            zIndex={9999}
            dropDownContainerStyle={{borderWidth: 0, borderRadius: 20, backgroundColor: 'white'}}
          />
          <DropDownPicker
            open={cityOpen}
            value={cityValue}
            items={cityData}
            setOpen={setCityOpen}
            setValue={setCityValue}
            setItems={setCityData}
            placeholder="  Pilih Kota"
            style={{borderWidth: 0, borderRadius: 25, height: 62, backgroundColor: 'white', marginTop: 25}}
            textStyle={{
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              color: (cityValue ? 'black' : '#D1D1D1'),
            }}
            zIndex={9995}
            dropDownContainerStyle={{borderWidth: 0, borderRadius: 20, backgroundColor: 'white'}}
          />
          <FormField
            title="Postal Code"
            value={form.kodepos}
            handleChangeText={(e) => setForm({ ...form, namaLengkap: e })}
            otherStyles="mt-7"
            placeholder="Kode Pos"
          />
          <DropDownPicker
            open={cabangOpen}
            value={cabangValue}
            items={cabangData}
            setOpen={setCabangOpen}
            setValue={setCabangValue}
            setItems={setCabangData}
            placeholder="  Pilih Cabang"
            style={{borderWidth: 0, borderRadius: 25, height: 62, backgroundColor: 'white', marginTop: 25}}
            textStyle={{
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              color: (cabangValue ? 'black' : '#D1D1D1'),
            }}
            zIndex={9990}
            dropDownContainerStyle={{borderWidth: 0, borderRadius: 20, backgroundColor: 'white'}}
          />
          <FormField
            title="Card Number"
            value={form.nomorkartu}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder="Nomor Kartu"
          />
          <CustomButton
            title="Tambah Bank"
            handlePress={submit}
            containerStyles="w-full mt-7 bg-btn_primary"
            textStyles="text-white"
            isLoading={isSubmitting}
          />
        </View>
      </View>
      <StatusBar hidden={false} />
    </View>
  );
};

export default AddBank;
