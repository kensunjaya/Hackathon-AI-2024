import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { db, collection, addDoc } from '../config/firebase';
import { getDoc, getFirestore } from "firebase/firestore";
import {doc, setDoc} from "firebase/firestore";
import DropDownPicker from "react-native-dropdown-picker";

const SignUp = () => {
  const [bankOpen, setBankOpen] = useState(false);
  const [bankValue, setBankValue] = useState(null);
  const [bankData, setBankData] = useState([
    { label: '  Seidel Bank', value: { name: 'Seidel', logo: "https://imgur.com/gt1wbcv.png" } },
    { label: '  Fuze Bank', value: { name: 'Fuze', logo: "https://imgur.com/xq94KtM.png" } },
    { label: '  Bean Bank', value: { name: 'Bean', logo: "https://imgur.com/Qyb3EVr.png" } },
    { label: '  Andro Bank', value: { name : 'Andro', logo: "https://imgur.com/bPZFRKh.png" } },
  ]);
  
  const [form, setForm] = useState({
    nik: "",
    namaLengkap: "",
    noTelp: "",
    email: "",
    namabank: "",
    noRekening: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (
      form.nik === "" ||
      form.namaLengkap === "" ||
      form.noTelp === "" ||
      form.email === "" ||
      form.password === "" ||
      !bankValue ||
      form.noRekening === "" ||
      confirmPassword === ""
    ) {
      Alert.alert("Error", "Please fill in all the fields");
    } else if (form.password !== confirmPassword) {
      Alert.alert("Error", "Password does not match");
    } else {
      try {
          setIsSubmitting(true);
          const docRef = await setDoc(doc(db, "users", form.email),{
            nik: form.nik,
            namaLengkap: form.namaLengkap,
            noTelp: form.noTelp,
            email: form.email,
            password: form.password,
            rekening: [{namabank : bankValue.name, norek: form.noRekening, logo: bankValue.logo }], // at least 1 rekening didaftarkan saat registrasi
            riwayat: [],
          });
      }
      catch(e){
        console.error("Error adding document: ", e);
      }
      finally{
        setIsSubmitting(false);
        router.push("/sign-in");
      }
    }
  };
  const handleSubmit = async () => {
    if (form.email !== "" && form.password !== "") {
      try {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        submit();
      } catch (err) {
        Alert.alert("Error", err.message);
        console.log(err.message);
      }
    }
  }
  return (
    <View className="flex-1">
      <StatusBar />
      <Image
        source={images.registerImage}
        className="w-full h-[25vh] justify-end flex flex-end align-top bg-thirdary"
        resizeMode="contain"
      />
      <View className="h-full bg-beige flex-1">
        <ScrollView className="bg-primary h-full rounded-t-[40px] pt-3 w-full px-4 flex-1">
          <FormField
            title="NIK"
            value={form.nik}
            handleChangeText={(e) => setForm({ ...form, nik: e })}
            otherStyles="mt-7"
            placeholder="NIK"
          />
          <FormField
            title="Nama Lengkap"
            value={form.namaLengkap}
            handleChangeText={(e) => setForm({ ...form, namaLengkap: e })}
            otherStyles="mt-7"
            placeholder="Nama Lengkap"
          />
          <FormField
            title="Nomer Telepon"
            value={form.noTelp}
            handleChangeText={(e) => setForm({ ...form, noTelp: e })}
            otherStyles="mt-7"
            placeholder="Nomer Telepon"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder="Email"
          />
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
            listMode="SCROLLVIEW"
            dropDownContainerStyle={{borderWidth: 0, borderRadius: 20, backgroundColor: 'white'}}
          />
          <FormField
            title="No Rekening"
            value={form.noRekening}
            handleChangeText={(e) => setForm({ ...form, noRekening: e })}
            otherStyles="mt-7"
            placeholder="No Rekening"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Password"
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            value={confirmPassword}
            handleChangeText={(e) => setConfirmPassword(e)}
            placeholder="Konfirmasi Password"
            otherStyles="mt-7"
          />
          <CustomButton
            title="Register"
            handlePress={handleSubmit}
            containerStyles="w-full mt-7 bg-btn_primary"
            textStyles="text-white"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2 mb-10">
            <Text className="text-[14px] text-black font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-[14px] font-psemibold text-btn_primary"
            >
              Login here
            </Link>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;
