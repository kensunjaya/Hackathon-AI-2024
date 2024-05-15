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

const AddBank = () => {
  const userData = useUser();
  const updateUserDataContext = useUserUpdate();
  const dataRekening = userData.rekening;
  
  const [bankOpen, setBankOpen] = useState(false);
  const [bankValue, setBankValue] = useState(null);

  const [norek, setNorek] = useState("");

  const [bankData, setBankData] = useState([
    { label: '  Seidel Bank', value: { name: 'Seidel', logo: "https://imgur.com/gt1wbcv.png" } },
    { label: '  Fuze Bank', value: { name: 'Fuze', logo: "https://imgur.com/xq94KtM.png" } },
    { label: '  Bean Bank', value: { name: 'Bean', logo: "https://imgur.com/Qyb3EVr.png" } },
    { label: '  Andro Bank', value: { name : 'Andro', logo: "https://imgur.com/bPZFRKh.png" } },
  ]);
  
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
        updateUserDataContext();
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
        <View className="bg-primary h-full rounded-t-[40px] w-full px-4 flex-1">
          <DropDownPicker
            open={bankOpen}
            value={bankValue}
            items={bankData}
            setOpen={setBankOpen}
            setValue={setBankValue}
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
          <FormField
            title="Nomor Rekening"
            value={norek}
            handleChangeText={(e) => setNorek(e)}
            otherStyles="mt-7"
            placeholder="Nomor Rekening"
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
