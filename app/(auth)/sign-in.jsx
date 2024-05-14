import { View, Text, Image, ScrollView, ImageBackground, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    try {
      const succeed = await signInWithEmailAndPassword(auth, form.email, form.password);
      if (succeed) {
        router.push('/home');
      }
      else {
        Alert.alert("Error", "Invalid credential");
      }
    }
    catch (err) {
      Alert.alert("Error", err.message);
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
