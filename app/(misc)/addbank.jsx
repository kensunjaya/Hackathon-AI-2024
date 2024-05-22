import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useUser, useUserUpdate } from "../hooks/Context";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../config/dropdownstyle";

const AddBank = () => {
  const { userData, bankData } = useUser();
  const { updateUserData } = useUserUpdate();
  // console.log('Bank Data: ', bankData);
  const dataRekening = userData.rekening;
  
  const [bankOpen, setBankOpen] = useState(false);
  const [bankValue, setBankValue] = useState(null);

  const [norek, setNorek] = useState("");

  const [bankFormData, setBankFormData] = useState(bankData);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (norek === "" || !bankValue) {
      Alert.alert("Error", "Mohon isi semua field yang tersedia");
    }
    else if (norek.length < 9) {
      Alert.alert("Error", "Nomor rekening tidak valid")
    }
    else {
      try {
        setIsSubmitting(true);
        dataRekening.push({namabank: bankValue.name, norek: norek, logo: bankValue.logo});
        const docRef = await updateDoc(doc(db, "users", userData.email), {
          rekening: dataRekening,
        });
      }
      catch(e){
        console.error("Error adding document: ", e);
      }
      finally{
        setIsSubmitting(false);
        updateUserData();
        Alert.alert("Sukses", "Berhasil menambahkan rekening");
        router.push("/home");
      }
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
        <View className="bg-primary h-full rounded-t-[40px] w-full flex-1">
        <Dropdown
          className="m-4 mt-10"
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={bankFormData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Pilih bank"
          searchPlaceholder="Search..."
          value={bankData}
          onChange={item => {
            setBankValue({name: item.value.name, logo: item.value.logo});
          }}
        />
          {/* <DropDownPicker
            open={bankOpen}
            value={bankValue}
            items={bankFormData}
            setOpen={setBankOpen}
            setValue={setBankValue}
            setItems={setBankFormData}
            placeholder="  Pilih Bank"
            style={{borderWidth: 0, borderRadius: 25, height: 62, backgroundColor: 'white', marginTop: 25}}
            textStyle={{
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              color: (bankValue ? 'black' : '#D1D1D1'),
            }}
            zIndex={9999}
            dropDownContainerStyle={{borderWidth: 0, borderRadius: 20, backgroundColor: 'white'}}
          /> */}
          <FormField
            title="Nomor Rekening"
            value={norek}
            handleChangeText={(e) => setNorek(e)}
            otherStyles="mt-4 mx-4"
            placeholder="Nomor Rekening"
          />
          <CustomButton
            title="Tambah Bank"
            handlePress={submit}
            containerStyles="mt-10 bg-btn_primary mx-4"
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
