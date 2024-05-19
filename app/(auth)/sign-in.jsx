import { View, Text, Image, ScrollView, Alert, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { get } from "firebase/database";
import { getUser, getBank } from "../../utility/backend";
import { useUserUpdate } from "../hooks/Context";


const SignIn = () => {
  const { updateUserData, updateProblemData } = useUserUpdate();

  const [form, setForm] = useState({ email: "", password: "" });

  const forgotPassword = async () => {
    sendPasswordResetEmail(auth, form.email, null)
      .then(() => {Alert.alert("Email terkirim", "Silakan cek email Anda untuk reset password")})
      .catch((err) => {console.error(err); Alert.alert("Error", err.message)});
  }

  const submit = async () => {
    if (form.email === "teller@cisuga.baits.id" && form.password === "teller123") {
      updateProblemData();
      router.push("/tellerpage");
    }
    else {
      try {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        const currentUser = await getUser(form.email);
        
        if (currentUser) {
          updateUserData(); // panggil update function di context.js
          router.push("/home");
        }
        else {
          Alert.alert("User not registered", "We're redirecting you to registration page");
          router.push("/sign-up")
        }
      }
      catch (err) {
        Alert.alert("Error", "Invalid Credential");
        console.log(err);
      }
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
                placeholder="Email"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                placeholder="Password"
                otherStyles="mt-7"
              />
              <View className="flex-row justify-end pt-5">
                  <Text className="text-black font-pregular text-[14px]">
                    Lupa Password?
                  </Text>
                  <TouchableWithoutFeedback onPress={forgotPassword}>
                    <Text className="pl-2 font-psemibold text-btn_primary text-[14px]">Reset Password</Text>
                  </TouchableWithoutFeedback>
                </View>
              <CustomButton
                title="Masuk"
                handlePress={submit}
                containerStyles="w-full mt-5 bg-btn_primary"
                textStyles="text-white"
              />
              <View className="justify-center items-center pt-5">
                <View className="flex-row gap-2">
                  <Text className="text-black font-pregular text-[14px]">
                    Belum punya akun?
                  </Text>
                  <Link
                    href="/sign-up"
                    className="font-psemibold text-btn_primary text-[14px]"
                  >
                    Registrasi di sini
                  </Link>
                </View>
                
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
