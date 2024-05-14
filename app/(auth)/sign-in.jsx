import { View, Text, Image, ScrollView, ImageBackground, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { get } from "firebase/database";

const SignIn = () => {
  const getTest = async () => {
    try {
      const docRef = doc(db, "users", form.email)
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        Alert.alert("Welcome", docSnap.data().namaLengkap);
        router.push('/home');
      } else {
        console.log("No such document!");
      }
    }
    catch (e) {
      console.error("Error getting document:", e);
    }  
  }

  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      getTest();
    }
    catch (err) {
      Alert.alert("Error", "Invalid Credential");
      console.log(err.message);
    }
  };

  return (
    <View>
      <StatusBar />
      <Image
        source={images.loginImage}
        className="w-full h-[31vh] justify-end flex flex-end align-top bg-beige"
        resizeMode="covern"
      />
      <View className="h-full bg-beige">
        <SafeAreaView className="bg-primary h-full rounded-t-[40px]">
          <ScrollView>
            <View className="w-full justify-center px-4">
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardTypes="email-address"
                placeholder="email"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                placeholder="password"
                otherStyles="mt-7"
              />
              <CustomButton
                title="Login"
                handlePress={submit}
                containerStyles="w-full mt-7 bg-btn_primary"
                textStyles="text-white"
                isLoading={isSubmitting}
              />
              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-black font-pregular text-[14px]">
                  Don't have account?
                </Text>
                <Link
                  href="/sign-up"
                  className="font-psemibold text-btn_primary text-[14px]"
                >
                  Register here
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <StatusBar />
    </View>
  );
};

export default SignIn;
